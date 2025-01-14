/*

Officer: 3154130
CaseNum: 701-0-87641445-3154130

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist louise daviswood and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. I remember they had a neck tattoo. It's so hard to remember right now. I'll never forget their grey eyes. It was very dark and I could barely see, Their expression seemed blank. I'm sorry, that's all I can recall right now

*/

var suspectsLog = [
	{ 
		"name": "DEEDEE DAVISWOOD",
		"expression": "depressed",
		"tattoo": "ox",
		"eyes": "green"
	},
	{ 
		"name": "TU ZETLAND",
		"expression": "blank",
		"tattoo": "neck",
		"eyes": "grey"
	},
	{ 
		"name": "HANG JACQUELIN",
		"expression": "sad",
		"tattoo": "bull",
		"eyes": "brown"
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare your function here

function checkSuspect(suspectObj){
    if((suspectObj.expression=="blank")&
      suspectObj.tattoo=="neck"&
      suspectObj.eyes=="grey")
        {
            return true;
        }
     
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectsLog.length; i++){
    if(checkSuspect(suspectsLog[i]) == true){
      fill(255,0,0);
      text(suspectsLog[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(suspectsLog[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
