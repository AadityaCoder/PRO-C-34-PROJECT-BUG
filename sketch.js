const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var astroImg,astro;
var bgImg ; 
var button;

function preload(){
bgImg = loadImage('./assets/bg4.png');
astroImg = loadImage('./assets/astronaut.png')
}
function setup() {
  createCanvas(600,700);
  frameRate(80);
  
  engine = Engine.create();
  world = engine.world;
  
  astro = createSprite(200,300,100,100);
  astro.addImage(astroImg);
  astro.scale = 0.6;

}


function draw() 
{
  background(51);
  image(bgImg,0,0,width,height);
  Engine.update(engine);

  button = createImg('cut_button.png');
  button.position(100,90);
  button.size(50,50);
// button.mouseClicked(drop);

  drawSprites();
}

