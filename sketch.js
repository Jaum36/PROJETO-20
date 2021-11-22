var cat, rato, cena;
var catImg, ratoImg, ratoImg2, ratoImg3, catImg2, catImg3, cenaImg;


function preload() {
    //load the images here
    catImg = loadAnimation("cat1.png");
    catImg2 = loadAnimation("cat2.png", "cat3.png")
    catImg3 = loadAnimation("cat4.png");
    ratoImg = loadAnimation("mouse1.png");
    ratoImg2 = loadAnimation("mouse2.png", "mouse3.png");
    ratoImg3 = loadAnimation("mouse4.png");
    cenaImg = loadImage("garden.png");

}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
    cena = createSprite(0,400);
    cena.addImage(cenaImg);
    cena.scale = 1.2

    cat = createSprite(450,720,50,50);
    cat.addAnimation("catDescanso", catImg);
    cat.scale = 0.15

    cat.debug = true;
   

    rato = createSprite(50, 720,50,50);
    rato.addAnimation("ratoVitoria", ratoImg);
    rato.scale = 0.2;
    rato.setCollider("rectangle", 0,0,30,30)

    rato.debug = true

}

function draw() {

    background(255);


    //Write condition here to evalute if tom and jerry collide
    if(cat.x - rato.x > rato.width/2 + cat.width/2 ){
        cat.velocityX = 0;


 

    }

    if(cat.collide(rato)){
        cat.addAnimation("catPARADO", catImg3);
        cat.changeAnimation("catPARADO");

        rato.addAnimation("ratoPARADO", ratoImg3);
        rato.changeAnimation("ratoPARADO");

    }
    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        rato.addAnimation("ratoCorrendo", ratoImg2);
        rato.changeAnimation("ratoCorrendo");

        cat.velocityX = -4;
        cat.addAnimation("catCorrendo", catImg2);
        cat.changeAnimation("catCorrendo");
    }


}
