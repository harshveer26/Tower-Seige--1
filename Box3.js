class Box3 {
    constructor(x, y, width, height){
        var options = {
            'friction' : 1.2,
            'density' : 0.8,
            //'isStatic' : true
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        fill("blue");
        stroke("black");
        strokeWeight(4);
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
