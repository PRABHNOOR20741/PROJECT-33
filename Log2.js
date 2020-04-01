class Log2 extends BaseClass
{
    constructor(x,y,height,angle)
    {
      super(x,y,20,height,angle);
      this.image = loadImage("sprites/wood2.png");
      Matter.Body.setAngle(this.body, angle);
      this.Visiblity = 255;
    }
  
    display(){
      if(score < 955)
      {
       super.display();
      }
      else
      {
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 10;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y,this.width,this.height);
        pop();
      }
     }
   
     score()
     {
       if (this.Visiblity < 0 && this.Visiblity > -255){
         score++;
       }
     }
  };