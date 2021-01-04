class plinko {
    constructor(x,y,radius) {
        var options = {
            isStatic:false
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = radius;
        //World.add(world,this.body);
    }
    display() {
    var posX = this.body.position.x;
    var posY = this.body.position.y;
    push();
    strokeWeight(3);
    stroke("red");
    translate(posX , posY);
    ellipseMode(RADIUS);
    ellipse(this.posX,this.posY,10,10);
    pop();
    }
}