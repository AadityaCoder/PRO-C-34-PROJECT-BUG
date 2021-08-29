class Stone {
    constructor(x, y, w, h) {
     
      this.body = Bodies.rectangle(x, y, w, h);
      this.w = w;
      this.h = h;
      this.image = loadImage("./assets/stone.png");
      World.add(world, this.body);
    }
  
    show() {
      let pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      strokeWeight(1);
      fill("white");
      imageMode(CENTER);
      image(this.image, 0, 0, this.w, this.h);
      noStroke();
      pop();
    }
  }
  