class Ball{
    constructor(x,y){
        var options={
            //isStatic:true,
            restitution:1,
            friction:0.3,
            density:0.8
        }
        this.body = Bodies.circle(x,y,25,options);
        World.add(myWorld,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("pink");
        ellipse(pos.x,pos.y,50,50);
    }
}