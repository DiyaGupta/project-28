
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint

function preload()
{
   boyimage=loadImage("images/boy.png")	
   treeimage=loadImage("images/tree.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
   ground = new Ground(600,height,1300,20);
   
  mango1=new Mango(950,200,30)
  mango2=new Mango(820,340,30)
  mango3=new Mango(870,250,40) 
  mango4=new Mango(924,283,50)
  mango5=new Mango(804,322,40)
  mango6=new Mango(907,152,50) 
  mango7=new Mango(986,234,40)
  mango8=new Mango(1024,207,40)
  mango9=new Mango(1097,261,40)
  mango10=new Mango(1024,130,40)
  mango11=new Mango(984,303,40)
  

  stone=new Stone(130,500,30)

  slingshot= new Slingshot(stone.body,{x:130,y:390});
  
  Engine.run(engine);
  
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 stone.display();
  ground.display();
  image(boyimage,100,340,200,300)
  image(treeimage,750,100,500,500)
   slingshot.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
   mango8.display();
   mango9.display();
   mango10.display();
   mango11.display();

   detectCollision(stone,mango1)
    detectCollision(stone,mango2)
     detectCollision(stone,mango3)
      detectCollision(stone,mango4)
      detectCollision(stone,mango5)
        detectCollision(stone,mango6) 
        detectCollision(stone,mango7)
          detectCollision(stone,mango8) 
          detectCollision(stone,mango9)
          detectCollision(stone,mango10)
            detectCollision(stone,mango11)

   text(mouseX+","+mouseY,mouseX,mouseY)

  drawSprites();
 
}
function mouseDragged() {
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}
function mouseReleased() {
  slingshot.fly()

}
function detectCollision(stone,mango){
  mangoBodyPosition=mango.body.position; 
  stoneBodyPosition=stone.body.position; 
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
   if(distance<=mango.r+stone.r) { 
     Matter.Body.setStatic(mango.body,false);
     }

  
}



