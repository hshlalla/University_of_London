/*

Officer: 3154130
CaseNum: 701-3-92563348-3154130

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from louise mohwawk.
All they need is for you to do the detective work.

This time you must implement two functions:

- A matchProperties function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A traverseSuspects function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - function traverseSuspects(){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. I distinctly remember that they were wearing a red necktie, I remember thinking that was quite unusual. The person I saw was male. They seemed to be between the age of 18 and 50 years old. It's hard to say. They were fairly tall, I think between a height of 176 and 184 cm. They were wearing a black hoodie. It was very dark and I could barely see, They had shaved hair. I'll never forget their pale eyes. They brobably weigh between 64 and 88 kg. I'm not quite sure. They wore light tan glasses. I hope I never have to go through that again. 

*/

var suspectsArray = [
	{ 
		"name": "HANG PHINNEY",
		"gender": "female",
		"glasses": "white",
		"coat": "white fur coat",
		"eyes": "grey",
		"age": 55,
		"height": 164,
		"weight": 70
	},
	{ 
		"name": "LARRAINE SILVEIRA",
		"gender": "male",
		"glasses": "thin metallic",
		"coat": "green jacket",
		"eyes": "green",
		"age": 44,
		"height": 174,
		"weight": 74
	},
	{ 
		"name": "MAJORIE WILLMAR",
		"gender": "male",
		"glasses": "dark brown",
		"coat": "red parka",
		"eyes": "brown",
		"age": 24,
		"height": 192,
		"weight": 75
	},
	{ 
		"name": "LIANNE FORSLIN",
		"gender": "male",
		"glasses": "cheap plastic",
		"coat": "blue overcoat",
		"eyes": "black",
		"age": 45,
		"height": 165,
		"weight": 74
	},
	{ 
		"name": "JESUS MYRLE",
		"gender": "male",
		"glasses": "very thick",
		"coat": "yellow poncho",
		"eyes": "pale",
		"age": 42,
		"height": 158,
		"weight": 73
	},
	{ 
		"name": "NELSON DORCEY",
		"gender": "male",
		"glasses": "red",
		"coat": "black overcoat",
		"eyes": "green",
		"age": 30,
		"height": 155,
		"weight": 76
	},
	{ 
		"name": "JENIFFER DURANTS",
		"gender": "male",
		"glasses": "light tan",
		"coat": "black hoodie",
		"eyes": "pale",
		"age": 49,
		"height": 182,
		"weight": 74
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

// Declare both your functions here


function matchProperties(suspectObj)
{
    var cnt=0;
    if(suspectObj.accessory=="red necktie")
        {
            cnt=cnt+1;
        }
    if(suspectObj.gender=="male")
        {
            cnt=cnt+1;
        }
    if(18<suspectObj.age<50)
        {
            cnt=cnt+1;
        }
    if(176<suspectObj.height<184)
        {
            cnt=cnt+1;
        }
    if(suspectObj.coat=="black hoodie")
        {
            cnt=cnt+1;
        }
    if(suspectObj.hair=="shaved")
        {
            cnt=cnt+1;
        }
    if(suspectObj.eyes=="pale")
        {
            cnt=cnt+1;
        }
    if(64<suspectObj.height<88)
        {
            cnt=cnt+1;
        }
    if(suspectObj.glasses=="light tan")
        {
            cnt=cnt+1;
            
        }
    return cnt;
}
function traverseSuspects()
{
    var count=0;
    var name={};
    for(var j=0;j<suspectsArray.length;j++)
        {
            cnt=matchProperties(suspectsArray[j]);
            if (cnt>count)
                {
                    count=cnt;
                    name=suspectsArray[j];
                }
        }
    console.log(count);
    console.log(name);
    return name;
}

function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(traverseSuspects().name + " is guilty!", 60, 80);
}
