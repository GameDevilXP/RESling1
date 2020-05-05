const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var sling,proj;

var gameState = 'onSling';

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    proj = new Projectile(100,60);

    sling = new Shooter(proj,{x:75,y:60});
    
}

function draw(){
    background(000);
    Engine.update(engine);

    proj.display();
    sling.display();

    for(var i=600;i<800;i++) {
        rect(20,40,i,20);
    }
    
}

function mouseDragged() {
    if(gameState!=='launched') {
        Matter.Body.setPosition(proj.body,{x:mouseX,y:mouseY});
    }
}

function mouseReleased() {
    sling.fly;
    gameState='launched';
}

function keyPressed() {
    if(keyCode === 32) {
        Matter.Body.setPosition(bird.body,{x:75,y:60});
        sling.attach;
    }
}




