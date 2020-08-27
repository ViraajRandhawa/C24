class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
    };

    display(){ 

      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      RectMode(CENTER); 
                      
      pop();      
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

    };
}
