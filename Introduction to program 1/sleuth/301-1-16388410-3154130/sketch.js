/*
The case of the Python Syndicate
Stage 2


Officer: 3154130
CaseNum: 301-1-16388410-3154130

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Bones Karpinski

- The variables for Bones Karpinski have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Bones Karpinski
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Bones Karpinski variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Bones Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var robbieKrayImg;
var bonesKarpinskiImg;
var pawelKarpinskiImg;
var annaKarpinskiImg;
var countessHamiltonImg;
var cecilKarpinskiImg;


var bonesKarpinskiXCoord = 408;
var bonesKarpinskiYCoord = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbieKrayImg = loadImage("krayBrothers2.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bonesKarpinskiImg, bonesKarpinskiXCoord, bonesKarpinskiYCoord);

	image(robbieKrayImg, bonesKarpinskiXCoord-293, bonesKarpinskiYCoord);
	image(pawelKarpinskiImg, bonesKarpinskiXCoord+293, bonesKarpinskiYCoord);
	image(annaKarpinskiImg, bonesKarpinskiXCoord-293, bonesKarpinskiYCoord+269);
	image(countessHamiltonImg, bonesKarpinskiXCoord, bonesKarpinskiYCoord+269);
	image(cecilKarpinskiImg, bonesKarpinskiXCoord+293, bonesKarpinskiYCoord+269);

}