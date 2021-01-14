var canvas,firebase;
var gameState = 0;
var playerCount;
var allPlayers;
var Game,form;
var player,logout,policeimage,theifimage;
var policestation,aftercought;
function preload(){
  policestation=loadImage("images/policestation.png");
  aftercought=loadImage("images/policestation.png");
}
function setup() {
  canvas=createCanvas(windowWidth-15,windowHeight-15);
  database = firebase.database(); 
  Game=new game();
  Game.getState();
  Game.start();
}

function draw() {
  background("lightblue");
  drawSprites();
}