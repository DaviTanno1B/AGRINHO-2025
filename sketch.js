let img;
let xJogador = 0;
let yJogador = 200;
let jogador = "👨‍🌾";
let tecla = "d";
let jogoAtivo = false;
let snd;

function preload() {
  img = loadImage('imagem_2025-06-16_200438990.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (!jogoAtivo) {
    background(255);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(16);
    text("Agrinho 2025 \nVocê acabou de vender seus produtos na feira da cidade,\nvolte para o campo.\n(Para mover use o botão D)", 200, 160);
    fill(200);
    rect(150, 230, 100, 40, 10);
    fill(0);
    textSize(18);
    text("Começar", 200, 250);
  } else {
    background(img);
    textSize(40);
    text(jogador, xJogador, yJogador);
    if (xJogador > 350) {
      textSize(20);
      text(jogador + " chegou ao campo!", 150, 200);
      noLoop();
    }
  }
}

function mousePressed() {
  if (!jogoAtivo && mouseX > 150 && mouseX < 250 && mouseY > 230 && mouseY < 270) {
    jogoAtivo = true;
    loop();
  }
}

function keyReleased() {
  if (jogoAtivo && key.toLowerCase() == tecla) {
    xJogador += random(20);
  }
}
