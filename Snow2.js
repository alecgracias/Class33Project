class Snow2{

    constructor(){
        var options={
            restitution: 1,
            friction: 0,
            isStatic:false
        }
    
        this.r=10;

        this.image = loadImage("snow5.webp")
        this.body = Bodies.circle(random(0,1400),20,this.r,options)
     
        World.add(world,this.body);
    
    }
    
    display(){
        var pos = this.body.position;
        
        push()
        translate(pos.x , pos.y);
        image(this.image,0,0,100,100)
     
        pop()
    
    }
}
