function setup() {
  car=createsprite(50,200,50,50);
 wall=createSprite(1500,200,60,height/2);
  speed=random(55,90)
  weight=random(400,1500)
  
  
}


function draw() {
  background("black");  
  drawSprites();

   if(wall.x-car.x<(car.width+wall.width)/2)
  {
    carvelocityX=0;
    var deformation=0.5 * weight*speed*speed/22500;
    if(deformation>180)
  }
  
  if(deformation<180 && deformation>100)
  {
    car.shapeColor=color(230,230,0);
  }
  
  if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }
  }
  );

  
  
  

}
