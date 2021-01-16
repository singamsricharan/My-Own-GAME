var canvas,firebase;
var gameState = 0;
var theifCount,policeCount;
var Game,form;
var robber,cop,player,theifinstructon,policeinstruction;
var policestation,aftercought;
function preload(){
  policestation=loadImage("images/policestation.png");
  aftercought=loadImage("images/policestation.png");
}
function setup() {
  canvas=createCanvas(windowWidth,windowHeight);
  database = firebase.database(); 
  Game=new game();
  Game.getState();
  Game.start();
}

function draw() {
  background("lightblue");
  if (gameState===1){
    clear();
    policeinstruction=new policeinstructions();
    policeinstruction.display();
  }
  if(gameState===2){
    clear();
    theifinstructon=new theifinstructons();
    theifinstructon.display();
  }
  drawSprites();
}