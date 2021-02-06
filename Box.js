class Box{
    constructor(x,y,w,h){
        var option={
            restitution :1,
            density :1,
            friction :0.3
        }
            this.body = Bodies.rectangle(x,y,w,h,option);
            this.w = w;
            this.h = h;
            World.add(world,this.body);



    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("brown");
        strokeWeight(4);
        stroke("white");
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h); 
        pop();

    }
}
























