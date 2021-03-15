class Zombie {
    constructor(x,y,width,height)
      {
          var options = { 
        isStatic:true
      }
          this.width=width;
          this.height=height;
          this.image=loadImage("zombie1.png");
          this.body=Bodies.rectangle(x,y,width,height,options);
          World.add(world, this.body);

  
      }
      display()
      {
              
              var santaPos=this.body.position;		
              push()
              translate(santaPos.x, santaPos.y-100);
              imageMode(CENTER);
              image(this.image, 0,0,this.width, this.height)
              pop()
              
      }
  }
  
