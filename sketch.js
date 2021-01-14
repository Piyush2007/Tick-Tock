var hr,mn,sc;
var scAngle,mnAngle,hrAngle;

function setup() {
  createCanvas(780,355);


}

function draw() {
  background(0);  
  drawSprites();

  hr = hour();
  mn = minute();
  sc = second();
  dt = day();
  mt = month();
  ye = year();


  var t ,m;

  if(hr>12){

    t  = hr-12;
    m = "PM";

  }
  else{

    t = h;
    m = "AM"

  }

  textSize(20);
  fill(153, 51, 153);
  text(t+" : "+mn+" : "+sc+" "+m,363,200);

  fill(102, 102, 255);
  textSize(25);
  text("Digi clock",365,170);

  angleMode(DEGREES);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,60,0,360);

  scAngle += 188;
  mnAngle += 188;
  hrAngle -= 100;


  push();
  translate(200,200);
  rotate(scAngle);
  stroke("red");
  line(0,0,10,70);
  pop();

  
  push();
  translate(200,200);
  rotate(mnAngle);
  stroke("blue");
  strokeWeight(2);
  line(0,0,10,70);
  pop();

  push();
  translate(200,200);
  rotate(hrAngle);
  stroke("green");
  strokeWeight(2.5);
  line(0,0,10,70);
  pop();

  noFill();
  stroke("red");
  strokeWeight(3);
  arc(200, 200, 150, 150, -90, scAngle+82);

  stroke(204, 153, 255);
  arc(200, 200, 160, 165, -90, mnAngle+82);

  stroke(0, 102, 0);
  arc(200, 200, 170, 180, -90, hrAngle+82);

  fill(51, 102, 204);
  noStroke();
  circle(200,200,7,7);


}