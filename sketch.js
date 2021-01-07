var sceneNum = 0;
let bImg;
let cImg;

function preload() {
  bImg = loadImage('Red Button.png')
  cImg = loadImage('Cartoon Explosion.png')
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (sceneNum === 0) {
    scene0();

  }

}

function button() {
  fill(250, 0, 0)
  image(bImg, 250, 300, 100, 66)
}

function explosion() {
  image(cImg, 0, 0, 600, 400)
}

function scene0() {
  sceneNum = 0
  background("White")
  textSize(30);
  fill(0, 0, 0)
  text("Press the button until the end", 115, 150)
  button();
}



function scene1() {
  sceneNum = 1;
  background("green");
  textSize(50);
  fill(250, 250, 250)
  text("ZZZ...", 250, 150);
  button();
}

function scene2() {
  sceneNum = 2;
  background("green");
  textSize(30);
  fill(250, 250, 250)
  text("heyyy why'd u wake me up!", 125, 150);
  button();
}

function scene3() {
  sceneNum = 3
  background("green");
  textSize(30);
  fill(250, 250, 250)
  text("Stop im gonna go back to sleep!", 100, 150);
  button();
}

function scene4() {
  sceneNum = 4
  background("green");
  textSize(30);
