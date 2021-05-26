class Paper {
    constructor(x,y,width,height) {
      var options = {

          isStatic : false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2,

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill(0,0,255);
      ellipse(100,665,50,50);
    }
    
  }
  function keyPressed() {

    if (keyCode === RIGHT_ARROW) {

      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

    }

}