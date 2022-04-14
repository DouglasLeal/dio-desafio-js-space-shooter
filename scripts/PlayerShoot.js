class PlayerShoot{
    constructor(sprite, posX, posY, imgWidth, imgHeight, speed){
        this.sprite = sprite;
        this.posX = posX;
        this.posY = posY;
        this.imgWidth = imgWidth;
        this.imgHeight = imgHeight;
        this.speed = speed;
    }

    show(){
        image(this.sprite, this.posX, this.posY, this.imgWidth, this.imgHeight);

        this.move();
    }

    move(){
        this.posY -= this.speed;
    }
}