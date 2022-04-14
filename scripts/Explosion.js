class Explosion{
    constructor(sprites, posX, posY, imgWidth, imgHeight){
        this.sprites = sprites;
        this.posX = posX;
        this.posY = posY;
        this.imgWidth = imgWidth;
        this.imgHeight = imgHeight;

        this.frame = 0;
        this.counter = 1;
    }

    show(){
        image(this.sprites[this.frame], this.posX, this.posY, this.imgWidth, this.imgHeight);
    }

    animate(){
        this.counter -= deltaTime / 125;

        if(this.counter <= 0){
            this.frame++;
            if(this.frame == this.sprites.length - 1){
                return true;
            }
            this.counter = 1;
        }
    }
}