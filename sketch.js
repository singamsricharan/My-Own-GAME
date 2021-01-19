const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var canvas,firebase;
var gameState = 0;
var theifCount,policeCount;
var Game,form;
var allpolice,alltheifs;
var robber,cop,theifinstructon,policeinstruction;
var policestation,aftercought;
var player1,player2;
var players;
function preload(){
  policestation=loadImage("images/policestation.png");
  aftercought=loadImage("images/policestation.png");
}
function setup() {
  canvas=createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  database = firebase.database(); 
  Game=new game();
  Game.getState();
  Game.start();
}

function draw() {
  Engine.update(engine);
  background("lightblue");
}