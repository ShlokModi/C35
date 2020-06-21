var database;
var gameState;
var player, form, game, playerCount;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start()
}

function draw(){
  background("white");
  drawSprites();
}