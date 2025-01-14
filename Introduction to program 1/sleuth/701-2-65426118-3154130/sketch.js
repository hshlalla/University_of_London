/*

Officer: 3154130
CaseNum: 701-2-65426118-3154130

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from juliana daviswood. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. They brobably weigh between 70 and 88 kg. They were carrying a red backpack. I'll never forget their blue eyes. They seemed to be between the age of 25 and 65 years old. I remember they had a facial tattoo. They were fairly tall, I think between a height of 165 and 188 cm. They had red hair. I'm not quite sure. I distinctly remember that they were wearing a red necktie, I remember thinking that was quite unusual. It's so hard to remember right now. Can I go home now Sir? 

*/

var suspectsArray = [
	{ 
		"name": "LAKESHA SILVEIRA",
		"hair": "long white",
		"accessory": "brown paper bag",
		"tattoo": "ox",
		"eyes": "brown",
		"age": 48,
		"weight": 80,
		"height": 154
	},
	{ 
		"name": "RANDEE DORCEY",
		"hair": "no",
		"accessory": "big black envelope",
		"tattoo": "anchor",
		"eyes": "green",
		"age": 27,
		"weight": 76,
		"height": 185
	},
	{ 
		"name": "TU WILLMAR",
		"hair": "shaved",
		"accessory": "laptop bag",
		"tattoo": "neck",
		"eyes": "grey",
		"age": 32,
		"weight": 65,
		"height": 184
	},
	{ 
		"name": "JAUNITA PHINNEY",
		"hair": "dark brown",
		"accessory": "black duffle bag",
		"tattoo": "bull",
		"eyes": "pale",
		"age": 35,
		"weight": 82,
		"height": 167
	},
	{ 
		"name": "LESLEY PEGORD",
		"hair": "red",
		"accessory": "red backpack",
		"tattoo": "facial",
		"eyes": "blue",
		"age": 61,
		"weight": 80,
		"height": 172
	},
	{ 
		"name": "GAYLA MOHWAWK",
		"hair": "short black",
		"accessory": "orange plastic bag",
		"tattoo": "sword",
		"eyes": "blue",
		"age": 49,
		"weight": 67,
		"height": 151
	},
	{ 
		"name": "MAJORIE BROADVIEW",
		"hair": "thick black",
		"accessory": "metal briefcase",
		"tattoo": "chinese lettering",
		"eyes": "black",
		"age": 43,
		"weight": 73,
		"height": 155
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
function testProperties(suspectObj)
{
    var cnt=0;
    if(70<suspectObj.weight<88)
        {
            cnt=cnt+1;
        }
    if(suspectObj.accessory=="red backpack")
        {
            cnt=cnt+1;
        }
    if(suspectObj.eyes=="blue")
        {
            cnt=cnt+1;
        }
    if(25<suspectObj.age<65)
        {
            cnt=cnt+1;
        }
    if(suspectObj.tattoo=="facial")
        {
            cnt=cnt+1;
        }
    if(165<suspectObj.height<188)
        {
            cnt=cnt+1;
        }
    if(suspectObj.hair=="red")
        {
            cnt=cnt+1;
        }
    if(suspectObj.accessory=="red necktie")
        {
            cnt=cnt+1;
        }    
    return cnt;
}



function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < suspectsArray.length; i++){
    let matchingProperties = testProperties(suspectsArray[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + suspectsArray[i].name, 60, 60 + i * 20);
  }
}
