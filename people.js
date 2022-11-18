class people {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
     this.stuck = false;
  }

  update() {
    /*
    this.velocity = createVector(mouseX, mouseY).sub(this.x, this.y)
    this.velocity = this.velocity.normalize();
    this.x+= this.velocity.x
    this.y+= this.velocity.y
    */
    
    this.collision()
    fill(255, 255, 255);
    ellipse(this.x, this.y, 10, 10)
    
}

  collision() {
    for (var j=0; j<16; j++) {
    var personC = false
    this.x += this.direction.x
    this.y += this.direction.y
    for (var i = 0; i < buildings.length; i++) {
      if (collideRectCircle(buildings[i].x-25, buildings[i].y-25, 50, 50, this.x, this.y, 10) || this.x<0 || this.x>width || this.y<0 || this.y> height) {
        personC = true;
      }
    }
      if (personC === true) {
        this.x -= this.direction.x
        this.y -= this.direction.y
        this.direction = createVector(random(-1, 1), random(-1, 1))
      }
      else{
        return
      }
    }
    this.stuck = true;
  }
}