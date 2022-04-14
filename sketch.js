let backgroundSprite = null;
let playerSprite = null;
let laserSprite = null;
let enemySprite = null;
let explosionSprites = [];

let background = null;
let player = null;
let enemyGenerator = null;

let shoots = [];
let enemies = [];
let explosions = [];

function preload() {
    backgroundSprite = loadImage('./assets/background.png');
    playerSprite = loadImage('./assets/player.png');
    laserSprite = loadImage('./assets/laser.png');
    enemySprite = loadImage('./assets/enemy.png');

    explosionSprites[0] = loadImage("./assets/explosion/01.png");
    explosionSprites[1] = loadImage("./assets/explosion/02.png");
    explosionSprites[2] = loadImage("./assets/explosion/03.png");
    explosionSprites[3] = loadImage("./assets/explosion/04.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    background = new Background(backgroundSprite, 3);
    player = new Player(playerSprite, 99, 75, 10);
    enemyGenerator = new EnemyGenerator(enemySprite);

}

function draw() {
    background.show();

    controlShoots();
    controlEnemies();
    movePlayer();
}

function keyPressed() {
    if (keyCode == 32) {
        if (player.shoot()) {
            shoots.push(new PlayerShoot(laserSprite, player.posX + 45, player.posY, 9, 54, 10));
        }
    }
}

//------------------------------
function movePlayer() {
    player.show();
    if (keyIsDown(RIGHT_ARROW)) {
        player.move(1);
    }

    if (keyIsDown(LEFT_ARROW)) {
        player.move(-1);
    }
}

function controlShoots() {
    shoots.forEach(s => {
        s.show();

        if (s.posY < -s.imgHeight) {
            shoots.splice(shoots.indexOf(s), 1);
            player.addShoots();
        }
    });
}

function controlEnemies() {
    enemies.push(enemyGenerator.generate());

    enemies.forEach(enemy => {
        if (enemy == null) {
            enemies.splice(enemies.indexOf(enemy), 1);
        } else {
            enemy.show();

            if (enemy.posY > height) {
                enemies.splice(enemies.indexOf(enemy), 1);
            }
        }
    });
}