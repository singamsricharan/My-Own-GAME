var canvas,firebase;
var gameState = 0;
var playerCount;
var allPlayers;
var Game,form;
var player;
function preload(){
  policeimage=loadImage("images/policeman.jpg")
}
function setup() {
  canvas=createCanvas(windowWidth,windowHeight);
  database = firebase.database(); 
  Game=new game();
  Game.getState();
  Game.start();
}

function draw() {
  background("lavender");
  drawSprites();
}