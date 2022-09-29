class Box {
  constructor(x, y, width, height) {
   
    rect(x, y, width, height);
    this.x=x;
    this.y=y;
    this.width = width;
    this.height = height;
    
    
  }
  display(){
    //var pos =t his.body.position;
    var angle = this.body.angle;
    rectMode(CENTER);
    rotate(angle);
    fill(255);
    
    rect(0, 0, this.width, this.height);
   
  }
};