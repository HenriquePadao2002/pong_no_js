// Tamanho da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro /2

//variaveis armazenam valores;

//tamanho raquete e colisao
let raqueteComprimento = 10;
let raqueteAltura = 90;
let colidiu = false

// velocidade da bolinha
let velocidadexBolinha = 5;
let velocidadeyBolinha = 5;

//Quadrado da tela
  function setup() {
    createCanvas(600, 400);
    trilha.loop()
}

//desenhar, colorir ou por em cena;
  function draw() {
    background(0);
        mostraBolinha();
        movimentaBolinha();
        verificaColisaoBorda();
        mostraRaquete(xRaquete, yRaquete);
        movimetaMinhaRaquete();
        verificaColisaoRaquete();
        verificaColisaoRaqueteBiblioteca(xRaquete, yRaquete);
        mostraRaquete(xRaqueteOponente, yRaqueteOponente);
        movimentaRaqueteOponente();
        verificaColisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
        incluiPlacar();
        marcaPonto()
}

  function mostraBolinha (){
   circle(xBolinha, yBolinha, diametro);
}

  function movimentaBolinha (){
    xBolinha += velocidadexBolinha;
    yBolinha += velocidadeyBolinha;
  }
  
  function verificaColisaoBorda (){
     if (xBolinha + raio > width || 
        xBolinha - raio < 0) {
        velocidadexBolinha *= -1;
  }
    if (yBolinha + raio > height || 
        yBolinha - raio < 0){
        velocidadeyBolinha *= -1;
  }
}

    function bolinhaNaoFicaPresa(){
        if (XBolinha - raio < 0){
        XBolinha = 23
      }
}

  //variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;

  //variaveis do oponente
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYoponente;

  //placar do jogo
let meusPontos = 0
let pontosOponente = 0

  //sons do jogo
let ponto;
let raquetada;
let trilha;

  function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}

  function mostraRaquete(x, y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}

  function movimetaMinhaRaquete(){
      if (keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
      if(keyIsDown(DOWN_ARROW)){
        yRaquete += 10;
    }
}

  function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento && 
        yBolinha - raio < yRaquete + raqueteAltura && 
        yBolinha + raio > yRaquete) {
        velocidadexBolinha *= -1;
    }
}

  function verificaColisaoRaqueteBiblioteca(x, y){
      colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, 
        xBolinha, yBolinha, raio);
    
     if (colidiu) {
         velocidadexBolinha *= -1;
         raquetada.play()
    }
    
  }

  function  movimentaRaqueteOponente() {
    if (keyIsDown(87)){
        yRaqueteOponente -= 10;
    }
      if(keyIsDown(83)){
        yRaqueteOponente += 10;
    }
  }

  function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20)
    fill(255)
    text(meusPontos, 170,26)
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255)
    text(pontosOponente, 470, 26)
  }

  function marcaPonto(){
    if (xBolinha > 590){
      meusPontos += 1
      ponto.play()
    }
    if (xBolinha < 10){
      pontosOponente += 1
      ponto.play()
    }
  }
 

















