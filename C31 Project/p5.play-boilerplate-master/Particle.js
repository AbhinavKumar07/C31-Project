class particle {
    constructor(x,y,radius) {
        var options = {
            isStatic:true,
            "restitution":1.2
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = radius;
        this.color = color(random(0,255),random(0,255),random(0,255));
        //World.add(world,this.body);
    }
    display() {
    var posX = this.body.position.x;
    var posY = this.body.position.y;
    var color = this.color;
    push();
    strokeWeight(3);
    stroke("red");
    fill(color);
    translate(posX , posY);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop();
    }
}