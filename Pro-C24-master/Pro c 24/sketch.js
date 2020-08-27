// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var ground , tank1  ;
var  shootingball, bubbleball;

function setup() {

    canvas = createCanvas(400,400) ;  

    ground = new Ground(600,height,1200,20);

    tank1= new Tanker(200,10,20,20) ;

    shootingball = new ShootBall(tank1.body,{x:200, y:50}) ; 

    bubbleball = new CanonBall(20,20) ; 

     
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

}

function draw() {   
Engine.update(Engine) ; 

background(220) ; 

ground.display() ;

tank1.display() ;

shootingball.display() ;

bubbleball.display() ;


// Remember to update the Matter Engine and set the background.
}


function keyReleased() {   

    
    // Call the shoot method for the cannon.
}