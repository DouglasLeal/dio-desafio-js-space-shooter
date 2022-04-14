class Player{
    constructor(sprite, imgWidth, imgHeight, speed){
        this.sprite = sprite;
        this.imgWidth = imgWidth;
        this.imgHeight = imgHeight;
        this.speed = speed;

        this.initialX = width/2 - imgWidth/2;
        this.initialY = height - imgHeight - 10;
        this.posX = this.initialX;
        this.posY = this.initialY;
        this.shoots = 3;
    }

    show(){
        image(this.sprite, this.posX, this.posY, this.imgWidth, this.imgHeight);
    }

    move(direction){
        this.posX += this.speed * direction;

        if(this.posX <= 0){
            this.posX = 0;
        }

        if(this.posX >= width - this.imgWidth){
            this.posX = width - this.imgWidth;
        }
    }
}