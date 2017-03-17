define(() => {

  const BULLET_SPEED = 3; // 3 px * 60 fps = 180 px/s

  return class Bullet {
    constructor(p5, direction) {
      this.p5 = p5;
      this.pos = this.p5.createVector();
      this.vel = direction.setMag(BULLET_SPEED);
    }
    getStartPos() {
      return this.vel.copy().setMag(35);
    }
    update() {
      this.pos.add(this.vel);
    }
    draw() {
      let p = this.p5;
      p.push();
      p.translate(p.width / 2 + this.pos.x, p.height / 2 + this.pos.y);
      p.fill(255);
      p.ellipse(this.getStartPos().x, this.getStartPos().y, 8, 8);
      p.pop();
    }
  }
});
