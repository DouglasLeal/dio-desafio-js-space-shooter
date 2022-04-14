class Background{
    constructor(sprite, speed){
        this.sprite = sprite;
        this.speed = speed;
        this.y1 = 0;
        this.y2 = -innerHeight;
    }

    show(){
        image(this.sprite, 0, this.y1, width, height);
        image(this.sprite, 0, this.y2, width, height);

        this.move();
    }

    move(){
        this.y1 += this.speed;
        this.y2 += this.speed;

        if(this.y1 >= height){
            this.y1 = -height;
        }
        if(this.y2 >= height){
            this.y2 = -height;
        }
    }
}