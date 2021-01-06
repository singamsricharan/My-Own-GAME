var canvas,firebase;
var gameState = 0;
var playerCount;
var allPlayers;
var Game,form,player;
function preload(){
  
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