class EnemyGenerator{
    constructor(sprite){
        this.sprite = sprite;

        this.counter = 1;
    }

    generate(){
        this.counter -= deltaTime / 1000;
        if(this.counter <= 0){            
            this.counter = random(1,3);
            let speed = random(3, 10);
            return new Enemy(this.sprite, 114, 75, speed);
        }
    }
}