let backgroundSprite  = null;
let playerSprite = null;

let background = null;
let player = null;

function preload(){
    backgroundSprite = loadImage('./assets/background.png');
    playerSprite = loadImage('./assets/player.png');
}

function setup(){
    createCanvas(windowWidth, windowHeight);

    background = new Background(backgroundSprite, 3);
    player = new Player(playerSprite, 99, 75, 10);
}

function draw(){
    background.show();

    movePlayer();
    
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