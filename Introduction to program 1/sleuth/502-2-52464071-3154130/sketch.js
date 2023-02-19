/*

Officer: 3154130
CaseNum: 502-2-52464071-3154130

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// arrays to be referenced in redactedText
var Censored_A = {
	Element_0: [ "mend", "clip", "plug"], 
	Element_1: [ "stuff", "consider", "charge"], 
	Element_2: [ "fence", "meddle", "mend"], 
	Element_3: [ "play", "meddle", "syndicate"], 
	Element_4: [ "sneeze", "Hopper", "fence"], 
	Element_5: [ "hurry", "clip", "radiate"], 
	Element_6: [ "protect", "smile", "tug"], 
	Element_7: [ "protect", "hurry", "consider"], 
	Element_8: [ "stuff", "succeed", "succeed"], 
	Element_9: [ "sail", "start", "stuff"]
};

var Censored_B = {
	Element_0: [ "Edsger", "consider", "mend"], 
	Element_1: [ "mend", "ALGOL", "charge"], 
	Element_2: [ "bake", "meddle", "smile"], 
	Element_3: [ "stuff", "meddle", "hit"], 
	Element_4: [ "clip", "hurry", "bake"], 
	Element_5: [ "tug", "rejoice", "meddle"], 
	Element_6: [ "sneeze", "campaign", "meddle"], 
	Element_7: [ "stuff", "mend", "$200,000"], 
	Element_8: [ "sneeze", "Governor Zuckerberg", "a donation"], 
	Element_9: [ "succeed", "succeed", "mend"]
};

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
  redactedText = "Dear "+Censored_B.Element_8[1]+", I am sure that something could be worked out in terms of "+Censored_B.Element_8[2]+" for your "+Censored_B.Element_6[1]+". How does "+Censored_B.Element_7[2]+" sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. "+Censored_A.Element_4[1]+" needs to be out of the picture. She’s caused enough trouble. Get the "+Censored_A.Element_3[2]+" to organise the "+Censored_B.Element_3[2]+" but I’d prefer it you don’t mention me or "+Censored_B.Element_1[1]+" I owe them enough favours already. Your old friend, "+Censored_B.Element_0[0]+"";

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
  text("Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger", 670, 100, 580, 600);
}
