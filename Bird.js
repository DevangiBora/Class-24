class Bird{
    constructor(x,y){
        var option={
            restitution :1,
            density :1,
            friction :0.3
        }
            this.body = Bodies.rectangle(x,y,50,50,option);
            this.w = 50;
            this.h = 50;
            World.add(world,this.body);



    }

    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x,pos.y);
        fill("Red");
        strokeWeight(4);
        stroke("white");
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h); 
        pop();

    }

}
