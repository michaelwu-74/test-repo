function preload() {
  
  song = loadImage('funny.gif');
  img = loadImage('funny.gif')
  map = loadImage('map.jpg')
  song2 = loadSound('song2.mp3');

  ottawaImg = loadImage('ottawabackdrop.jpg');

}
var scene = 0;
var item = 0;
var city = null;
var menuC = false;
function setup() {
  createCanvas(550, 550);
  song2.play();
  // 400, 400
}
var buildings = [];
var peoples = [];
var gBuilding = new ghost(0);
var stats = [new stat("Population", 5, 5, 1000, false), new stat("Funds", 5, 15, 10000, false), new stat("Economic", 5, 25, 100, true), new stat("Environmental", 5, 35, 100, true), new stat("Health", 5, 45, 100, true)];
var cities = ["Ottawa", "New York", "London"];
var buttonX = 15;
var buttonY = 90;
var menuButtonPressed = false, infaButtonPressed = false, utilityButtonPressed = false, housingButtonPressed = false, exitButtonPressed = false;


 var btn1 = new Button({
    x: buttonX,
    y: buttonY,
    colour: [11, 252, 3],
    label: cities[0],
    onClick: function() {
      print("ottawa");
      city = cities[0];

      scene = 1;

              scene = 1;
loadBuildings()


    }
});
var btn2 = new Button({
    x: buttonX,
    y: buttonY+75,
    colour: [11, 252, 3],
    label: cities[1],
    onClick: function() {
      print("new york");

      city = cities[1];
      scene = 1;

            city = cities[1];
              scene = 1;
      loadBuildings()


    }
});
var btn3 = new Button({
    x: buttonX,
    y: buttonY+150,
    colour: [11, 252, 3],
    label: cities[2],
    onClick: function() {
      print("london");
      city = cities[2];
      scene = 1;
      loadBuildings()
    }
});
var btn4 = new Button({
    x: buttonX,
    y: buttonY+225,
    colour: [255, 0, 0],
    label: 'ohio',
    onClick: function() {
      print("only in ohio");
      scene = -1;
    }
});
function loadBuildings() {
  peoples.push(new people(100, 100, createVector(1, 0)));
}
//Menu button functionalitity
var btnMenu = new Button({
  x: 495,
  y: 30,
  width: 30,
  height: 30,
  colour: [79, 133, 219],
  label:'˅',
  onClick:function() {
    console.log("Menu working");
    if (menuButtonPressed === false) {
          menuButtonPressed = true;
    }
    else {
      menuButtonPressed = false;
    }
  }
});

//Roads, schools, parks, etc
var infaBtn = new Button({
  x: buttonX + 400,
  y: buttonY - 15,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Infrastructure',
  onClick:function(){
    console.log("Infrastructure");
    if (infaButtonPressed === false) {
          menuButtonPressed = false;
          infaButtonPressed = true;
    }
    else {
      infaButtonPressed = false;
    }
  }
});

//Power and other utilities
var utilityBtn = new Button({
  x: buttonX + 400,
  y: buttonY + 25,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Utilities',
  onClick:function(){
    console.log("Utilities");
    if (utilityButtonPressed === false) {
          menuButtonPressed = false;
          utilityButtonPressed = true;
    }
    else {
      utilityButtonPressed = false;
    }
  }
});

//Housing
var houseBtn = new Button({
  x: buttonX + 400,
  y: buttonY + 65,
  width: 125,
  height: 30,
  colour: [252, 161, 3],
  label:'Housing',
  onClick:function(){
    console.log("Housing");
    if (housingButtonPressed === false) {
      menuButtonPressed = false;
      housingButtonPressed = true;
    }
    else {
      housingButtonPressed = false;
    }
  }
});

var buildingButtons =[infaBtn, utilityBtn, houseBtn];

function menu() {
  fill(3, 236, 252, 100);
  rect(395, 65, 150, 300);
  for(i = 0; i < buildingButtons.length; i++) {
    if (i === 0) {
      textSize(12);
    }
    else {
      textSize(25);
    }
    buildingButtons[i].draw();
  }
}

function infrastructure() {
  fill(3, 236, 252, 100);
  rect(395, 65, 150, 300);
}

function utilties() {
  fill(3, 236, 252, 100);
  rect(395, 65, 150, 300);
}

function housing() {
  fill(3, 236, 252, 100);
  rect(395, 65, 150, 300);
}


function draw() {
  background(220);
  if (scene === 0) {
  textStyle(NORMAL);

  btn1.draw();
  btn2.draw();
  btn3.draw();
  btn4.draw();
    
  textFont('Comic Sans MS');
  textStyle(BOLD);
  textSize(25);
  text("Select a City for Simulation", buttonX, buttonY-50);

  }
  if (scene === 1) {
    background(220);
    menuC = collidePointRect(mouseX, mouseY, btnMenu.x, btnMenu.y, btnMenu.width, btnMenu.height);
    if (menuButtonPressed === true && menuC === false) {
      menuC = collidePointRect(mouseX, mouseY, 395, 65, 150, 300);
    }
    image(map, 0, 0);
    //Menu button functionalitiy
    for (var i = 0; i < buildings.length; i++) {
      buildings[i].update()
    };
    for (var i = 0; i < peoples.length; i++) {
      peoples[i].update()
      console.log(i)
     if (peoples[i].stuck === true) {
        peoples.splice(i, 1)
       }
    };
      if (menuC === false) {
    gBuilding.update()
      }
    btnMenu.draw();
      if (menuButtonPressed === true) {
        //fill(3, 236, 252, 100);
        //rect(395, 65, 150, 300);
        menu();
      }
      if (infaButtonPressed === true) {
        infrastructure();
      }
    textStyle("Georgia");
    textSize(12);
    for (i = 0; i < stats.length; i++){
      stats[i].update()
    }
    };
    
  }
  if (scene === -1) {
    test = createImg("funny.gif")
    noLoop();
  }
  /*
  fill(0, 0, 0);
  fill(12, 203, 102);
  for(var i =0; i <cities.length; i++) {
    fill(12, 203, 102);
    rect(buttonX, buttonY + (i*75),200,50);
    fill (0, 0, 0);
    text (cities[i], buttonX+75, buttonY+25 + (i*75));
  }

  mouseClicked = function() {
    if (mouseX >= buttonX && mouseX <= buttonX+200 && mouseY >= buttonY && mouseY <= buttonY+50) {
      print("ottawa");
    } 
  }
  */



