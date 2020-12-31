class Rope{
    constructor(body1,body2){
        var options={
            
            bodyA:body1,
            bodyB:body2
        }
        this.rope=Constraint.create(options);
        World.add(myWorld,this.rope);
    }
    display(){
        stroke("white");
        strokeWeight(3);
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}