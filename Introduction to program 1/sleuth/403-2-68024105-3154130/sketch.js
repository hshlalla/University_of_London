/*

Officer: 3154130
CaseNum: 403-2-68024105-3154130

Case 403 - Cornered - stage 3

We have Shiffman cornered at City Narrows and more help is on the way.
Until our backup arrives the orders are to make sure he stays inside City Narrows

Your job is to indicate that Shiffman (signified by the mouse) is indeed within the North - East - South - West bounds of City Narrows.
Draw a DarkBlue rectangle covering City Narrows for as long as Shiffman is in it.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  fill()  - Use r,g,b values between 0 and 255.
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
    if(mouseX>2048 && mouseX<2180 && mouseY>105 && mouseY<247)
    {
        fill(0,0,139);
        rect(2048,110,130,130);
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

