/*
The case of the Python Syndicate
Stage 1

Officer: 3154130
CaseNum: 301-0-91010205-3154130

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var robbieKrayImg;
var adaLovelaceImg;
var annaKarpinskiImg;
var countessHamiltonImg;
var rockyKrayImg;
var bonesKarpinskiImg;



//declare your new variables below
var countessHamiltonXLocation = 115;
var countessHamiltonYLocation = 309;
var robbieKrayXLocation = 115;
var robbieKrayYLocation = 40;
var adaLovelaceXLocation = 408;
var adaLovelaceYLocation = 40;
var annaKarpinskiXLocation = 701;
var annaKarpinskiYLocation = 40;
var rockyKrayXLocation = 408;
var rockyKrayYLocation = 309;
var bonesKarpinskiXLocation = 701;
var bonesKarpinskiYLocation = 309;



function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbieKrayImg = loadImage("krayBrothers2.png");
	adaLovelaceImg = loadImage("ada.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	rockyKrayImg = loadImage("krayBrothers1.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(countessHamiltonImg, countessHamiltonXLocation, countessHamiltonYLocation);

	image(robbieKrayImg, robbieKrayXLocation, robbieKrayYLocation);
	image(adaLovelaceImg, adaLovelaceXLocation, adaLovelaceYLocation);
	image(annaKarpinskiImg, annaKarpinskiXLocation, annaKarpinskiYLocation);
	image(rockyKrayImg, rockyKrayXLocation, rockyKrayYLocation);
	image(bonesKarpinskiImg, bonesKarpinskiXLocation, bonesKarpinskiYLocation);

}