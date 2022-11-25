
const Engine = Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body = Matter.Body;

var motor;
var mundo;
var pelota;
var piso;
var roca;
var ventilador;
var angulo=50;
var ventilador2;
var angulo2=80;


function setup()
{
  motor=Engine.create();
  mundo=motor.world;
  createCanvas(400,400);



  var opciones_roca={
    restitution:0.5,

    frictionAir:0.01
  }

  var opciones_pelota={
    restitution:1
  }

  var opciones = {
    isStatic:true
  }



  pelota=Bodies.circle(100,50,20,opciones_pelota);
  World.add(mundo,pelota);
  piso=Bodies.rectangle(40,380,800,10,opciones);
  console.log(pelota);
  World.add(mundo,piso);
  roca=Bodies.circle(200,50,20,opciones_roca);
  World.add(mundo,roca);
  ventilador=Bodies.rectangle(100,200,50,20,opciones);
  World.add(mundo,ventilador);
  ventilador2=Bodies.rectangle(200,200,50,20,opciones);
  World.add(mundo,ventilador2);

  ellipseMode(RADIUS);
  rectMode(CENTER);
}

function draw() 
{
  
  background(51);
  Engine.update(motor);
  ellipse(pelota.position.x,pelota.position.y,20,20);
  rect(piso.position.x,piso.position.y,800,10);
  ellipse(roca.position.x,roca.position.y,40,40);

  Matter.Body.rotate(ventilador,angulo);
  push();
  fill("blue")
  translate(ventilador.position.x,ventilador.position.y);
  rotate(angulo);
  rect(0,0,50,20);
  pop();
  angulo-=0.1;


  Matter.Body.rotate(ventilador2,angulo2);
  push();
  fill ("yellow")
  translate(ventilador2.position.x,ventilador2.position.y);
  rotate(angulo2);
  rect(0,0,50,20)
  pop();
  angulo2+=0.2




}
