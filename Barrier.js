class Barrier
{
    constructor(x,y,width,height)
     {
      var options = 
      {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }

    display()
    {
    if(score < 755)
     {
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
     }
     if(score >= 755)
    {
     World.remove(world, this.body);
     push();
    this.Visiblity = this.Visiblity - 10;
    tint(255,this.Visiblity);
    pop();
     }
    }
  };
