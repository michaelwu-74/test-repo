class stat {
  constructor(type, x, y, value, per) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.value = value;
    this.per = per;
  }

  update() {
    if (this.per === true) {
      fill(255, 0, 0, 255);
      textStyle(BOLD);
      text((this.type + ": "+ this.value + '%'), this.x, this.y)
    }
    else {
      fill(255, 0, 0, 255)
      textStyle(BOLD);
      text((this.type + ": "+ this.value), this.x, this.y)

    }
  }
}