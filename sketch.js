var canvas,firebase;
var gameState = 0;
var playerCount;
var allPlayers;
var Game,form;
var player;
function preload(){
  policeimage=loadImage("images/policeman.jpg");
  theifimage=loadImage("images/robber.png");
  policestation=loadImage("images/policestation.png");
  coinimage=loadImage("images/coin.jpg");
  cashimage=loadImage("images/cash.jpeg");
  rarecash=loadImage("images/rare cash.jpeg");
  house1=loadImage("images/house1.jpg");
  house2=loadImage("images/house2.jpg");
  house3=loadImage("images/house3.jpg");
  house4=loadImage("images/house4.jpg");
  house5=loadImage("images/house5.jpg");
  house6=loadImage("images/house6.jpg");
  house7=loadImage("images/house7.jpg");
  house8=loadImage("images/house8.jpg");
}
function setup() {
  canvas=createCanvas(displayWidth,displayHeight);
  database = firebase.database(); 
  Game=new game();
  Game.getState();
  Game.start();
}

function draw() {
  background("lavender");
  drawSprites();
}