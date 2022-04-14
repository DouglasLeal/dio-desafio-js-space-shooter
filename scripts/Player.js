class Player{
    constructor(sprite, imgWidth, imgHeight, speed){
        this.sprite = sprite;
        this.imgWidth = imgWidth;
        this.imgHeight = imgHeight;
        this.speed = width >= 1920 ? speed * 2 : speed;
        

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

    shoot(){
        if(this.shoots <= 0) return false;

        this.shoots--;
        return true;
    }

    addShoots(){
        if(this.shoots < 3){
            this.shoots++;
        }
    }

    checkCollision(enemy){
        let shootPrecision = 1;
        let enemyPrecision = 1;

        let collision = collideRectRect(
            this.posX,
            this.posY,
            this.imgWidth * shootPrecision,
            this.imgHeight * shootPrecision,
            enemy.posX,
            enemy.posY,
            enemy.imgWidth * enemyPrecision,
            enemy.imgHeight * enemyPrecision
        );

        return collision;
    }

    reset(){
        this.shoots = 3;
        this.posX = this.initialX;
        this.posY = this.initialY;
    }
}