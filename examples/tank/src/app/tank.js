define(() => {

  const TANK_RADIUS = 30;
  const PULL_LENGTH = -7;

  return class Tank {
    constructor(p5) {
      this.p5 = p5;
      this.direction = this.p5.createVector();
      this.gunDelta = 0;
      this.recoil = false;
    }
    getDirection() {
      let p = this.p5;
      let mouse = p.createVector(p.mouseX, p.mouseY);
      let center = p.createVector(p.width / 2, p.height / 2);
      return mouse.sub(center);
    }
    beginRecoil() {
      this.recoil = true;
    }
    update() {
      let p = this.p5;
      this.direction = this.getDirection();
      if (this.recoil && this.gunDelta > 0.9 * PULL_LENGTH) {
        this.gunDelta = p.lerp(this.gunDelta, PULL_LENGTH, 0.5);
      } else {
        this.recoil = false;
        this.gunDelta = p.lerp(this.gunDelta, 0, 0.3);
      }
    }
    draw() {
      let p = this.p5;
      p.push();
      p.translate(p.width / 2, p.height / 2);
      p.rotate(this.direction.heading() - p.PI / 2);
      p.fill(180);
      p.rect(-10, this.gunDelta, 20, 35);
      p.fill(255);
      p.ellipse(0, 0, TANK_RADIUS, TANK_RADIUS);
      p.pop();
    }
  }
});
