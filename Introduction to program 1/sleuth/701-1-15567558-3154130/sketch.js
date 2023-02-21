/*

Officer: 3154130
CaseNum: 701-1-15567558-3154130

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspectTraits(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. They were quite big, they probably weigh more than 64 Kg. They were wearing a black overcoat. It's hard to say. I distinctly remember that they were wearing a dotted necktie, I remember thinking that was quite unusual. It was very dark and I could barely see, By the look of them they were younger than 45. I'll never forget their pale eyes. They wore red glasses. That's all I can remember about them. 

*/

var suspectList = [
	{ 
		"name": "DEEDEE JOYER",
		"coat": "black overcoat",
		"eyes": "pale",
		"item": "dotted necktie",
		"age": 38,
		"weight": 70
	},
	{ 
		"name": "TAMICA PEGORD",
		"coat": "red parka",
		"eyes": "pale",
		"item": "purple hat",
		"age": 45,
		"weight": 78
	},
	{ 
		"name": "LESLEY JENI",
		"coat": "yellow poncho",
		"eyes": "grey",
		"item": "net weave shirt",
		"age": 43,
		"weight": 73
	},
	{ 
		"name": "LAKESHA DAVISWOOD",
		"coat": "blue overcoat",
		"eyes": "brown",
		"item": "orange socks",
		"age": 58,
		"weight": 71
	},
	{ 
		"name": "LOUISE NIEMELA",
		"coat": "white fur coat",
		"eyes": "blue",
		"item": "red necktie",
		"age": 47,
		"weight": 62
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
function checkSuspectTraits(suspectObj){
    if((suspectObj.weight>64)&
       (suspectObj.coat=="black overcoat")&
       (suspectObj.item=="dotted necktie")&
       (suspectObj.age<45)&
       (suspectObj.eyes=="pale"))
    {
       return true;
    }
    
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectList.length; i++){
    if(checkSuspectTraits(suspectList[i]) == true){
      fill(255,0,0);
      text(suspectList[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(suspectList[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
