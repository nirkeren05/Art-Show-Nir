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
  fill(250, 250, 250)
  text("I said STOP!!!", 210, 150);
  button();
}

function scene5() {
  sceneNum = 5
  background("green");
  textSize(30);
  fill(250, 250, 250)
  text("Don't press me again!!", 160, 150);
  button();
}

function scene6() {
  sceneNum = 6
  background("green");
  textSize(30);
  fill(250, 250, 250)
  text("Im will explode if I get too", 130, 150);
  text("MADDDDD!!!", 200, 180)
  button();
}

function scene7() {
  sceneNum = 7
  background("green");
  textSize(30);
  fill(250, 250, 250)
  text("STOP, STOP, PLEASEEEEE!!!", 110, 150);
  button();
}

function scene8() {
  sceneNum = 8
  background("green");
  textSize(30);
  fill(250, 250, 250)
  text("I'm going to die HELLPPPP", 115, 150);
  button();
}

function scene9() {
  sceneNum = 9
  background("green");
  textSize(30);
  fill(250, 250, 250)
  text("One more click and im gone", 115, 150);
  text("PLEASE STOP!!!!", 175, 180);
  button();
}

function scene10() {
  sceneNum = 10
  background("green");
  textSize(30);
  fill(250, 250, 250)
  text("Bye", 272, 150);
  button();
}

function scene11() {
  sceneNum = 11
  background("cImg")
  explosion();
  textSize(70)
  text("Boom", 200, 150)

}

function scene12() {
  sceneNum = 12
  background("Black");
  textSize(30);
  fill(250, 250, 250)
  text("Game Over", 220, 150);
  text("You DIED", 235, 180);
}

function mouseClicked() {
  if (mouseX >= 200 && mouseX <= 400 &&
    mouseY >= 250 && mouseY <= 350) {
    if (sceneNum === 0) {
      scene1();
    } else if (sceneNum === 1) {
      scene2();
    } else if (sceneNum === 2) {
      scene3();
    } else if (sceneNum === 3) {
      scene4();
    } else if (sceneNum === 4) {
      scene5();
    } else if (sceneNum === 5) {
      scene6();
    } else if (sceneNum === 6) {
      scene7();
    } else if (sceneNum === 7) {
      scene8();
    } else if (sceneNum === 8) {
      scene9();
    } else if (sceneNum === 9) {
      scene10();
    } else if (sceneNum === 10) {
      scene11();
    } else if (sceneNum === 11) {
      scene12();
    } else if (sceneNum === 12) {
      scene0();
    }

  }
}
