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

    checkCollision(enemy){
        let shootPrecision = .3;
        let enemyPrecision = .9;

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
}