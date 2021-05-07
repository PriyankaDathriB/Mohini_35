//Create variables here
var dog, dogHappy, database, foodS, foodStock;
var dog1,dog2;
function preload()
{
	//load images here
  dog1 = loadImage("Dog.png");
  dogHappy = loadImage("happy Dog.png");
}

function setup() {
	createCanvas(500, 500);
  //database = firebase.database;
  database = firebase.database();
  dog = createSprite(250,250,50,50);
  dog.addImage(dog1);
  //dog.sacle = 0.1
  dog.scale = 0.1;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  textSize(20);
  fill("black");
  stroke(18);
  text("Press UP_Arrow to add milk",200,20);
  text("Food remaining:" +  foodS,200,200);
}

function readStock(data){
   foodS = data.val();
}

function writeStock(x){
  if(x <= 0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref('/').update({
    Food: x
  })
}