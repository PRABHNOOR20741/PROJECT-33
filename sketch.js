const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() 
{
    getBackgroundImg();
}

function setup()
{
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1400,20);
    platform = new Ground(150,505, 300, 170);

    box1 = new Box(450,550,70,70);
    box2 = new Box(670,550,70,70);
    pig1 = new Pig(560,550);
    log1 = new Log(560,510,300,PI/2);

    box3 = new Box(450,460,70,70);
    box4 = new Box(670,460,70,70);
    pig2 = new Pig(560,450);

    log2 =  new Log(560,410,300,PI/2);

    box5 = new Box(560,390,70,70);
    log3 = new Log(510,350,150,PI/7);
    log4 = new Log(620,350,150,-PI/7);

    bird = new Bird(200,250);

    box6 = new Box2(900,550,70,70);
    box7 = new Box2(1000,550,70,70);
    box8 = new Box2(1100,550,70,70);
    box9 = new Box2(1200,550,70,70);
    log6 = new Log2(1050,500,400,PI/2);

    box10 = new Box2(950,450,70,70);
    box11 = new Box2(1050,450,70,70);
    box12 = new Box2(1150,450,70,70);
    log7 = new Log2(1050,400,300,PI/2);

    box13 = new Box2(1000,350,70,70);
    box14 = new Box2(1100,350,70,70);
    log8 = new Log2(1050,300,200,PI/2);

    pig3 = new Pig2(1050,250);

    slingshot = new SlingShot(bird.body,{x:200,y:250});

    barrier = new Barrier(800,300,20,600);
}

function draw()
{
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50);

        if(score > 950)
        {
          text("YOU WIN",600,300);
        }
 
 
    Engine.update(engine);
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();
    log1.score();

    box3.display();
    box3.score();
    box4.display();
    box4.score();
    pig2.display();
    pig2.score();
    log2.display();
    log2.score();

    box5.display();
    box5.score();
    log3.display();
    log3.score();
    log4.display();
    log4.score();

    box6.display();
    box7.display();
    box8.display();
    box9.display();
    log6.display();
 
    box10.display();
    box11.display();
    box12.display();
    log7.display();

    box13.display();
    box14.display();
    log8.display();

    pig3.display();
    pig3.score();

    bird.display();
    platform.display();

    slingshot.display();
    
    barrier.display();
}

function mouseDragged()
{      
    if(bird.body.position.x < 220)
    {
     Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased()
{
    slingshot.fly();
}

function keyPressed()
{
    if(keyCode === 32)
    {
        bird.trajectory =[]; 
       slingshot.attach(bird.body);
       Matter.Body.setPosition(bird.body,{x:200 , y: 275});
      
    }
}

async function getBackgroundImg()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour >=06 && hour<=19){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
}