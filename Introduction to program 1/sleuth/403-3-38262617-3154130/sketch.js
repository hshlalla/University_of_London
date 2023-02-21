/*

Officer: 3154130
CaseNum: 403-3-38262617-3154130

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Leodorf Way.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 129 meters from COBOL Theatre then alert local police by drawing a Teal circle around it with a radius of 129 pixels.
- if Shiffman is in Wrong Side of the tracks then the neighbourhood watch must be notified by drawing a YellowGreen rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a Indigo rectangle covering the area between Reynolds Street, Gates Avenue, Leodorf Way and Packard Avenue.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  else
  fill()  - Use r,g,b values between 0 and 255.
  dist()
  ellipse()
  rect()
  mouseX
  mouseY

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);
    console.log(mouseX,mouseY);
    //Write your code below here ...
    if(dist(mouseX,mouseY,1195,804)<129)
    {
        fill(0,128,128);
        ellipse(1195,804,258,258);
    }
    else if((mouseX>602&&mouseX<782)&&(mouseY<210&&mouseY>87))
    {
        fill(154,205,50);
        rect(600,85,180,125);        
    }
    else
    {
        fill(75,0,130);
        rect(55,480,1970,240);        
    }


    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);


    // a helpful mouse coordinate pointer
    fill(255);
    noStroke();
    text(`${mouseX},${mouseY}`,mouseX, mouseY);
}

