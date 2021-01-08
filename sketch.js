var canvas,firebase;
var gameState = 0;
var playerCount;
var allPlayers;
var Game,form;
var player,logout,policeimage,theifimage;
function preload(){
  policeimage=loadImage("images/policeman.jpg");
  theifimage=loadImage("images/robber.jpg");
  policestation=loadImage("images/policestation.png");
  coinimage=loadImage("images/coin.png");
  cashimage=loadImage("images/cash.png");
  rarecash=loadImage("images/rare cash.png");
  house2=loadImage("images/house2.jpg");
  house3=loadImage("images/house3.jpg");
  house5=loadImage("images/house5.jpg");
  house7=loadImage("images/house7.jpg");
  house8=loadImage("images/house8.jpg");
}
function setup() {
  canvas=createCanvas(windowWidth-15,windowHeight-15);
  database = firebase.database(); 
  Game=new game();
  Game.getState();
  Game.start();
}

function draw() {
  background(255);
  drawSprites();
}