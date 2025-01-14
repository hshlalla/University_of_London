/*
The case of the Python Syndicate
Stage 4

Officer: 3154130
CaseNum: 301-3-63371487-3154130

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

- Organise each syndicate member into a new object. 
    - I’ve done one for you as an example.
    - Be sure to replicate the naming conventions for your own objects.
- Modify the image commands to make them use the new objects you created.
- Once you have done this you can delete the old variables.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var adaLovelaceImg;
var annaKarpinskiImg;
var countessHamiltonImg;
var pawelKarpinskiImg;
var robbieKrayImg;
var cecilKarpinskiImg;

var annaKarpinskiObj;


//declare your new objects below


var adaLovelaceXPos = 115;
var adaLovelaceYPos = 40;
var countessHamiltonXPos = 701;
var countessHamiltonYPos = 40;
var pawelKarpinskiXPos = 115;
var pawelKarpinskiYPos = 309;
var robbieKrayXPos = 408;
var robbieKrayYPos = 309;
var cecilKarpinskiXPos = 701;
var cecilKarpinskiYPos = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	adaLovelaceImg = loadImage("ada.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	annaKarpinskiObj = {
		x: 408,
		y: 40,
		image: annaKarpinskiImg
	};
    adaLovelaceObj = {
        x: 115,
        y: 40,
        image: adaLovelaceImg
    };
    countessHamiltonObj = {
        x: 701,
        y: 40,
        image: countessHamiltonImg
    };
    pawelKarpinskiObj = {
        x: 115,
        y: 309,
        image: pawelKarpinskiImg
    };
    robbieKrayObj = {
        x: 408,
        y: 309,
        image: robbieKrayImg
    };
    cecilKarpinskiObj = {
        x: 701,
        y: 309,
        image: cecilKarpinskiImg
    };



	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(adaLovelaceObj.image, adaLovelaceObj.x, adaLovelaceObj.y);
	image(annaKarpinskiObj.image, annaKarpinskiObj.x, annaKarpinskiObj.y);
	image(countessHamiltonObj.image, countessHamiltonObj.x, countessHamiltonObj.y);
	image(pawelKarpinskiObj.image, pawelKarpinskiObj.x, pawelKarpinskiObj.y);
	image(robbieKrayObj.image, robbieKrayObj.x, robbieKrayObj.y);
	image(cecilKarpinskiObj.image, cecilKarpinskiObj.x, cecilKarpinskiObj.y);


}