/*

Officer: 3154130
CaseNum: 502-1-18358922-3154130

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way. This message is a little more tricky to decipher, but I know you can do it.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var ARecord = [
	{part0: "capital", part1: "protect", part2: "meddle"}, //0
	{part0: "a donation", part1: "delicate", part2: "sneeze"}, //1 
	{part0: "bake", part1: "hurry", part2: "charge"}, //2
	{part0: "clip", part1: "smile", part2: "radiate"}, //3
	{part0: "protect", part1: "meddle", part2: "protect"},//4 
	{part0: "clip", part1: "protect", part2: "sneeze"}, //5
	{part0: "start", part1: "COBOL", part2: "Hopper’s"}, //6
	{part0: "smile", part1: "plug", part2: "clip"}, //7
	{part0: "smile", part1: "sneeze", part2: "sneeze"},//8 
	{part0: "consider", part1: "Edsger", part2: "bake"}//9
];

var BRecord = [
	{part0: "play", part1: "fence", part2: "sneeze"}, 
	{part0: "tug", part1: "radiate", part2: "protect"}, 
	{part0: "protect", part1: "meddle", part2: "clip"}, 
	{part0: "tug", part1: "romantic", part2: "smile"}, 
	{part0: "she has", part1: "radiate", part2: "play"}, 
	{part0: "sneeze", part1: "sail", part2: "consider"}, 
	{part0: "start", part1: "clip", part2: "hurry"}, 
	{part0: "meddle", part1: "sail", part2: "stuff"}, 
	{part0: "mend", part1: "syndicate", part2: "bake"}, 
	{part0: "Governor Zuckerberg", part1: "sneeze", part2: "consider"}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "My dearest" +ARecord[9].part1 +", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about "+ARecord[6].part2 +" intervention. I suspect that " +BRecord[4].part0 +" a " +BRecord[3].part1 +" interest at the " +ARecord[6].part1 +". I and the " +BRecord[8].part1 +" appreciate your many contributions over the years. However, this is a most " +ARecord[1].part1 +" matter which would require significant " +ARecord[0].part0 +" for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps " +ARecord[1].part0 +" to my forthcoming campaign would help. Yours sincerely, " +BRecord[9].part0 +"";

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text("Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg", 670, 100, 580, 600);
}
