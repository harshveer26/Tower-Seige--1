class Box5 {
    constructor(x, y, width, height){
        var options = {
            'friction' : 1.2,
            'density' : 0.8,
            'isStatic' : true
        }
        
        this.body = Bodies.polygon(x, y, radius, options);
    
        this.radius = radius;

        World.add(world, this.body);
    }

    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        var pos = this.body.position;
        push();
        fill("black");
        stroke("black");
        strokeWeight(4);
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0, 0, this.radius, this.height);
        pop();
    }
}
