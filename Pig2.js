class Pig2 extends BaseClass 
{
    constructor(x, y)
    {
      super(x,y,100,100);
      this.image = loadImage("sprites/CHEF ENEMY.png");
      this.image2 = loadImage("sprites/ENEMY2.png");
      this.Visiblity = 255;
    }
  
   display(){
     if(this.body.speed < 5)
     {
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y,100,100);
       pop();
     }
    }
  
    score()
    {
      if (this.Visiblity < 0 && this.Visiblity > -1205)
      {
        score++;
      }
    }
  
  
  
  };