class Log{
    constructor(x,y,w,angle){
        var option={
            restitution :1,
            density :1,
            friction :0.3
        }
            this.body = Bodies.rectangle(x,y,w,20,option);
            this.w = w;
            this.h = 20;
            Matter.Body.setAngle(this.body,angle);
            World.add(world,this.body);



    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("orange");
        strokeWeight(4);
        stroke("white");
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h); 
        pop();

    }
}






























