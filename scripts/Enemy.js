class Enemy{
    constructor(sprite, imgWidth, imgHeight, speed){
        this.sprite = sprite;
        this.imgWidth = imgWidth;
        this.imgHeight = imgHeight;
        this.speed = speed;

        this.posX = random(0, width - this.imgWidth);
        this.posY = -this.imgHeight*2;
    }

    show(){
        image(this.sprite, this.posX, this.posY, this.imgWidth, this.imgHeight);
        this.move();
    }

    move(){
        this.posY += this.speed;
    }
}