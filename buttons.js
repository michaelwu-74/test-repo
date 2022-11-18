function Button(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
    this.colour = config.colour || [255, 255, 255];
}

Button.prototype.draw = function() {
    fill(this.colour[0], this.colour[1], this.colour[2]);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

mouseClicked = function() {
    if (scene === 0) {
      btn1.handleMouseClick();
      btn2.handleMouseClick();
      btn3.handleMouseClick();
      btn4.handleMouseClick();
    }
      //Menu button functionalitity
    else if (scene === 1) {
      btnMenu.handleMouseClick();
      if(menuC === true) {
        infaBtn.handleMouseClick();
        utilityBtn.handleMouseClick();
        houseBtn.handleMouseClick();
      }
    }
}
/*
mouseClicked = function() {
    btn1.handleMouseClick();
    btn2.handleMouseClick();
    btn3.handleMouseClick();
    btn4.handleMouseClick();
};
*/