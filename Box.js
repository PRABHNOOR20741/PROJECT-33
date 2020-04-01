class Box extends BaseClass 
{
  constructor(x, y, width, height)
  {
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    this.Visiblity = 255;
  }

  display()
  {
    if(score < 400)
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
     if (this.Visiblity < 0 && this.Visiblity > - 510)
     {
       score++;
     }
   }
};
