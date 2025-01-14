/*

Officer: 3154130
CaseNum: 502-3-64221025-3154130

Case 502 - A donation - stage 4

This final document will seal the deal. C’mon kid, let’s send these crooks down.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.


*/


var redactedText;

// data structures to be referenced in redactedText
var listing_A = [
{
	part_0: {element_0: "plug", element_1: "play", element_2: "clip", element_3: "mend"}, 
	part_1: {element_0: "hurry", element_1: "start", element_2: "sail", element_3: "smile"}, 
	part_2: {element_0: "protect", element_1: "protect", element_2: "radiate", element_3: "charge"}
},
{
	part_0: {element_0: "sail", element_1: "smile", element_2: "sail", element_3: "charge"}, 
	part_1: {element_0: "consider", element_1: "charge", element_2: "charge", element_3: "radiate"}, 
	part_2: {element_0: "stuff", element_1: "fence", element_2: "sail", element_3: "play"}
},
{
	part_0: {element_0: "clip", element_1: "succeed", element_2: "consider", element_3: "consider"}, 
	part_1: {element_0: "sneeze", element_1: "hurry", element_2: "clip", element_3: "bake"}, 
	part_2: {element_0: "sail", element_1: "syndicate", element_2: "plug", element_3: "bake"}
},
{
	part_0: {element_0: "hurry", element_1: "development", element_2: "COBOL", element_3: "sail"}, 
	part_1: {element_0: "play", element_1: "Edsger", element_2: "succeed", element_3: "sneeze"}, 
	part_2: {element_0: "donation", element_1: "consider", element_2: "plug", element_3: "bake"}
},
{
	part_0: {element_0: "sail", element_1: "tug", element_2: "plug", element_3: "consider"}, 
	part_1: {element_0: "hurry", element_1: "rejoice", element_2: "fence", element_3: "fence"}, 
	part_2: {element_0: "stuff", element_1: "succeed", element_2: "$200,000", element_3: "stuff"}
}];

var listing_B = [
{
	part_0: {element_0: "succeed", element_1: "start", element_2: "hurry", element_3: "fence"}, 
	part_1: {element_0: "start", element_1: "plug", element_2: "sail", element_3: "meddle"}, 
	part_2: {element_0: "stuff", element_1: "smile", element_2: "radiate", element_3: "Governor Zuckerberg"}
},
{
	part_0: {element_0: "rejoice", element_1: "radiate", element_2: "protect", element_3: "succeed"}, 
	part_1: {element_0: "protect", element_1: "charge", element_2: "bake", element_3: "tug"}, 
	part_2: {element_0: "smile", element_1: "radiate", element_2: "tug", element_3: "start"}
},
{
	part_0: {element_0: "play", element_1: "charge", element_2: "charge", element_3: "fence"}, 
	part_1: {element_0: "start", element_1: "sneeze", element_2: "plug", element_3: "ALGOL"}, 
	part_2: {element_0: "stuff", element_1: "smile", element_2: "start", element_3: "bake"}
},
{
	part_0: {element_0: "hurry", element_1: "clip", element_2: "sneeze", element_3: "start"}, 
	part_1: {element_0: "radiate", element_1: "stuff", element_2: "tug", element_3: "sail"}, 
	part_2: {element_0: "stuff", element_1: "play", element_2: "plug", element_3: "consider"}
},
{
	part_0: {element_0: "tug", element_1: "sail", element_2: "consider", element_3: "meddle"}, 
	part_1: {element_0: "tug", element_1: "bake", element_2: "rejoice", element_3: "sail"}, 
	part_2: {element_0: "you", element_1: "start", element_2: "protect", element_3: "ALGOL fish wholesalers"}
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above
  redactedText = "My dearest "+listing_A[3].part_1.element_1+", I have just received your very generous "+listing_A[3].part_2.element_0+" of "+listing_A[4].part_2.element_2+". Thank you. This will be invaluable to our campaign. "+listing_B[2].part_1.element_3+" is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of "+listing_B[4].part_2.element_0+" or "+listing_B[4].part_2.element_3+" to the "+listing_A[2].part_2.element_1+". Your new "+listing_A[3].part_0.element_1+" at the "+listing_A[3].part_0.element_2+" can now proceed without impediment. Yours sincerely, "+listing_B[0].part_2.element_3+"";

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
  text("Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg", 670, 100, 580, 600);
}
