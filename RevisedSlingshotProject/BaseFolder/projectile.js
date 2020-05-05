class Projectile{
    constructor(x,y) {
        var options ={
            restitution: 1.0,
            density:1.0,
            friction:1.0,
        }
        this.body = Matter.Bodies.rectangle(x,y,20,20);
        this.width = 20;
        this.height = 20;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle =this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        pop();
    }
}