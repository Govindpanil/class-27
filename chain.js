class Chain1{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:12,
            stiffness:0.04



        }
        this.body=Constraint.create(options)
        World.add(world,this.body)

        
    }
     
    display(){
        var A=this.body.bodyA.position
        var B=this.body.bodyB.position
        push()
        strokeWeight(5)
        stroke("green")
        line(A.x,A.y,B.x,B.y)
        pop()

    }
}

