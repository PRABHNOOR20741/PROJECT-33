class Bird extends BaseClass
 {
  constructor(x,y)
  {
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/BIRD2.png");
    this.image3 = loadImage("sprites/BIRD3.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display()
   {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);

      if(score < 200)
      {
      image(this.image2, 0, 0, this.width, this.height);
      }

      if(score >= 200)
      {
        image(this.image3,0,0, this.width, this.height);
      }

      if(score > 700)
      {
        image(this.image,0,0, this.width, this.height);
      }
      pop();
        
    if(this.body.velocity.x > 10 && this.body.position.x > 200)
    {
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++)
    {
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
