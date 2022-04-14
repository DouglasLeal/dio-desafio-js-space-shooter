let backgroundSprite  = null;
let playerSprite = null;
let laserSprite = null;

let background = null;
let player = null;

let shoots = [];

function preload(){
    backgroundSprite = loadImage('./assets/background.png');
    playerSprite = loadImage('./assets/player.png');
    laserSprite = loadImage('./assets/laser.png');
}

function setup(){
    createCanvas(windowWidth, windowHeight);

    background = new Background(backgroundSprite, 3);
    player = new Player(playerSprite, 99, 75, 10);
}

function draw(){
    background.show();

    controlShoots();
    movePlayer();
}

function keyPressed(){
    if(keyCode == 32){
        if(player.shoot()){
            shoots.push(new PlayerShoot(laserSprite, player.posX + 45, player.posY, 9, 54, 10));
        }
    }
}

//------------------------------
function movePlayer(){
    player.show();
    if (keyIsDown(RIGHT_ARROW)) {
        player.move(1);
    }

    if (keyIsDown(LEFT_ARROW)) {
        player.move(-1);
    }
}

function controlShoots(){
    shoots.forEach(s => {
        s.show();

        if(s.posY < -s.imgHeight){
            shoots.splice(shoots.indexOf(s), 1);
            player.addShoots();
        }
    });
}