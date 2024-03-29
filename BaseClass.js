class BaseClass{
    constructor(x, y,width,height,angle) {
      var options = {
        'density':1.0,
        'friction': 1.0,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/base.png");
      World.add(world, this.body);
    };
    display(){
      //var pos = this.body.position;
      //pos.x = mouseX;
      //pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      //strokeWeight(3);
     // stroke('blue')
     // fill('red')
     // rectMode(CENTER)
     // rect(0, 0, this.width, this.height);
     imageMode(CENTER);
     image(this.image,0,0,this.width,this.height);
      pop();
    }
  }
  