define(() => {

  const TANK_RADIUS = 30;

  return class Tank {
    constructor(p5) {
      this.p5 = p5;
      this.direction = this.p5.createVector();
    }
    getDirection() {
      let p = this.p5;
      let mouse = p.createVector(p.mouseX, p.mouseY);
      let center = p.createVector(p.width / 2, p.height / 2);
      return mouse.sub(center);
    }
    update() {
      this.direction = this.getDirection();
    }
    draw() {
      let p = this.p5;
      p.push();
      p.translate(p.width / 2, p.height / 2);
      p.rotate(this.direction.heading() - p.PI / 2);
      p.fill(180);
      p.rect(-10, 0, 20, 35);
      p.fill(255);
      p.ellipse(0, 0, TANK_RADIUS, TANK_RADIUS);
      p.pop();
    }
  }
});
