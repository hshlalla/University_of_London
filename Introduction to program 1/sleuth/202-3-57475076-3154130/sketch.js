/*

Officer: 3154130
CaseNum: 202-3-57475076-3154130

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Spring Green filled text with a Dark Cyan outline in Diggity font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(600,643);
	textSize(35);
}

function draw()
{
	background(255);

	fill(0,128,0);
	stroke(0,255,127); //spring green //dark cyan 0,139,139
	textFont(Diggity);
	//text("ignore", 103,219);
	push();
	fill(153,50,204);
	stroke(160,82,45);
	//text("I", 515,177);
	pop();
	fill(75,0,130);
	textFont(Melissa);
	//text("My", 19,35);
	fill(100,149,237);
	stroke(178,34,34);
	textFont(RonsFont);
	//text("I", 438,342);
	push();
	fill(184,134,11);
	stroke(255,0,255);
	textFont(Ballpointprint);
	//text("much", 19,140);
	pop();
	fill(178,34,34);
	stroke(0,191,255);
	//text("how", 477,105);
	fill(32,178,170);
	stroke(46,139,87);
	textFont(Diggity);
	//text("ed", 308,177);
	fill(139,0,139);
	stroke(153,50,204);
	textFont(Melissa);
	//text("short", 130,342);
	fill(255,127,80);
	stroke(0,128,0);
	textFont(RonsFont);
	//text("Perhaps", 451,219);
	fill(184,134,11);
	stroke(139,0,0);
	textFont(Ballpointprint);
	//text("me", 224,105);
	fill(218,112,214);
	stroke(210,105,30);
	//text("should", 46,261);
	fill(64,224,208);
	stroke(139,0,139);
	textFont(Diggity);
	//text("delays.", 366,219);
	fill(238,232,170);
	stroke(0,0,139);
	textFont(Ballpointprint);
	//text("secrets,", 406,140);
	fill(148,0,211);
	stroke(255,215,0);
	//text("safe", 443,301);
	fill(144,238,144);
	stroke(0,139,139); //dark cyan
	//text("Bob,", 166,35);
	push(); //시작
	fill(218,165,32);
	stroke(0,0,255);
	textFont(Melissa);
	//text("can", 468,342);
	pop();  //끝
	fill(0,255,127); //spring green
	textFont(Diggity);
	text("the", 517,140);
	text("for", 251,261);
	text("you", 77,105);
	fill(255,0,255);
	stroke(127,255,0);
	textFont(RonsFont);
	//text("relationship", 268,301);
	push();
	fill(219,112,147);
	stroke(75,0,130);
	textFont(Melissa);
	//text("so,", 401,342);
	pop();
	stroke(0,255,127);
	//text("away", 171,261);
	fill(218,112,214);
	stroke(255,255,0);
	textFont(Melissa);
	//text("silence.", 8,177);
	fill(186,85,211);
	stroke(0,128,0);
	//text("we", 9,261);
	push();
	fill(255,0,255);
	stroke(255,69,0);
	textFont(Ballpointprint);
	//text("so", 205,177);
	pop();
	stroke(0,128,128);
	textFont(Diggity);
	//text("Are", 17,342);
	fill(25,25,112);
	stroke(255,255,0);
	textFont(Ballpointprint);
	//text("more", 92,140);
	fill(106,90,205);
	stroke(34,139,34);
	textFont(RonsFont);
	//text("are", 143,177);
	push();
	fill(255,140,0);
	stroke(46,139,87);
	textFont(Ballpointprint);
	//text("break", 322,261);
	pop();
	stroke(255,140,0);
	textFont(Diggity);
	//text("?", 522,301);
	fill(107,142,35);
	stroke(75,0,130);
	textFont(RonsFont);
	//text("darling", 57,35);
	push();
	fill(75,0,130);
	stroke(25,25,112);
	textFont(Ballpointprint);
	//text("If", 341,342);
	pop();
	fill(0,139,139);
	textFont(Diggity);
	//text("take", 235,140);
	fill(255,127,80);
	stroke(128,0,128);
	textFont(Ballpointprint);
	//text("Daisy", 8,524);
	fill(127,255,212);
	stroke(220,20,60);
	textFont(RonsFont);
	//text("You", 81,177);
	fill(0,0,205);
	stroke(0,255,255);
	textFont(Diggity);
	//text("?", 314,342);
	fill(218,112,214);
	stroke(255,0,0);
	textFont(RonsFont);
	//text("som", 350,177);
	fill(255,255,0);
	stroke(0,250,154);
	textFont(Diggity);
	//text("ing", 185,105);
	fill(75,0,130);
	stroke(255,215,0);
	textFont(RonsFont);
	//text("sort", 473,261);
	fill(138,43,226);
	stroke(75,0,130);
	//text("of", 191,342);
	fill(186,85,211);
	stroke(255,69,0);
	textFont(Diggity);
	//text("?", 303,140);
	fill(240,128,128);
	stroke(220,20,60);
	textFont(Ballpointprint);
	//text("and", 412,261);
	fill(50,205,50);
	stroke(255,140,0);
	textFont(Melissa);
	//text("?", 278,105);
	fill(106,90,205);
	stroke(139,0,0);
	//text("can", 533,177);
	fill(128,0,128);
	stroke(154,205,50);
	//text("no", 11,219);
	push();
	fill(255,99,71);
	stroke(255,0,255);
	//text("longer", 40,219);
	pop();
	fill(219,112,147);
	textFont(Ballpointprint);
	//text("continual", 256,219);
	fill(0,128,128);
	stroke(210,105,30);
	textFont(Diggity);
	//text("these", 179,219);
	push();
	fill(218,165,32);
	stroke(165,42,42);
	textFont(RonsFont);
	//text("our", 199,301);
	pop();
	fill(0,0,128);
	stroke(165,42,42);
	textFont(Melissa);
	//text("yours,", 122,454);
	fill(0,0,255);
	stroke(160,82,45);
	textFont(Ballpointprint);
	//text("out.", 114,301);
	push();
	fill(148,0,211);
	stroke(199,21,133);
	//text("cash.", 101,384);
	pop();
	fill(244,164,96);
	textFont(RonsFont);
	//text("sure", 394,105);
	fill(0,0,139);
	stroke(0,255,255);
	textFont(Diggity);
	//text("Forever", 19,454);
	fill(72,209,204);
	stroke(0,100,0);
	textFont(Melissa);
	//text("a", 303,261);
	fill(153,50,204);
	stroke(34,139,34);
	textFont(Ballpointprint);
	//text("The", 330,140);
	fill(127,255,0);
	stroke(184,134,11);
	textFont(Melissa);
	//text("I", 165,140);
	fill(238,130,238);
	stroke(0,128,128);
	textFont(Ballpointprint);
	//text("you", 75,342);
	fill(218,165,32);
	stroke(0,250,154);
	textFont(RonsFont);
	//text("etimes.", 406,177);
	fill(255,69,0);
	stroke(0,0,255);
	textFont(Diggity);
	//text("can", 183,140);
	fill(75,0,130);
	stroke(160,82,45);
	textFont(Ballpointprint);
	//text("not", 344,105);
	fill(0,139,139);
	stroke(128,0,128);
	//text("all", 72,301);
	fill(255,215,0);
	stroke(25,25,112);
	textFont(Melissa);
	//text("Is", 169,301);
	fill(238,232,170);
	stroke(0,191,255);
	textFont(Diggity);
	//text("Are", 19,105);
	fill(0,255,127); //spring green
	stroke(50,205,50);
	textFont(Ballpointprint);
	//text("send", 24,384);
	fill(139,0,139);
	stroke(25,25,112);
	textFont(Melissa);
	//text("x", 100,524);
	push();
	fill(0,255,127); //spring green
	stroke(0,139,139); //dark cyan
	textFont(Diggity);
	text("avoid", 129,105);
	pop();
	fill(255,140,0);
	stroke(160,82,45);
	textFont(Diggity);
	//text("this", 18,301);
	fill(0,255,127); //spring green
	stroke(0,139,139); //dark cyan
	text("go", 134,261);
	text("money", 232,342);
	text("guard", 245,177);
	push();
	fill(75,0,130);
	stroke(32,178,170);
	//text("I'm", 297,105);
	pop();



}
