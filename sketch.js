let backgroundSprite  = null;

let background = null;

function preload(){
    backgroundSprite = loadImage('./assets/background.png');
}

function setup(){
    createCanvas(windowWidth, windowHeight);

    background = new Background(backgroundSprite, 3);
}

function draw(){
    background.show();
}