// Entry point of your application

define(['p5'], (p5) => {
  new p5((p) => {
    p.setup = () => {
      p.createCanvas(400, 300);
    }
    p.draw = () => {
      p.background(200);
      p.fill(255);
      p.textSize(22);
      p.text("Make something great with p5js!", p.width / 2 - 160, p.height / 2);
    }
  });
});
