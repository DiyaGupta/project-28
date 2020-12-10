class Mango{
    constructor(x, y, r) {
        var options = {
            'restitution':1,
            'friction':0.1,
            'density':0.2,
            isStatic:true
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r
        this.image=loadImage("images/mango.png")
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
    stroke("green")
    strokeWeight(4)
    
    
        fill("green")
      image(this.image,0, 0, this.r,this.r);
        pop();
      }
    };


    
    