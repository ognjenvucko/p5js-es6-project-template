// Entry point of your application

define(['p5', 'app/tank', 'app/bullet'], (p5, Tank, Bullet) => {

  let tank;
  let bullets = [];

  new p5((p) => {
    p.setup = () => {
      p.createCanvas(800, 500);
      tank = new Tank(p);
    }
    p.draw = () => {
      p.background(50);
      bullets.forEach((bullet) => {
        bullet.update();
        bullet.draw();
      });
      tank.update();
      tank.draw();
      if (p.mouseIsPressed && p.frameCount % 9 === 0) {
        spawnBullet(p);
      }
      // TODO - remove old bullets
    }
    p.mouseClicked = () => {
      spawnBullet(p);
    }
  });

  function spawnBullet(p) {
    bullets.push(new Bullet(p, tank.getDirection()));
  }
});
