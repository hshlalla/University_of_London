/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. Around 10-20 lines of code should work for each state of your game character.

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...
    
	fill(255,239,213);
	ellipse(gameChar_x,gameChar_y-50,15,10); //얼굴
    //ellipse(300,145,15,10); //얼굴
	fill(220,20,60)
    rect(gameChar_x-5.5,gameChar_y-43,12,15); //몸통
	fill(255,239,213)
	rect(gameChar_x-2.5,gameChar_y-48,5,5); //목
    
	fill("black");
	arc(gameChar_x,gameChar_y-55,10,5,5,PI,CHORD/2); //모자
	

	fill(85,107,47);
	rect(gameChar_x-5.5,gameChar_y-28,5); //왼쪽다리
	rect(gameChar_x+1.5,gameChar_y-28,5); //오른쪽다리
	

	fill(195,239,213);
	ellipse(gameChar_x-4,gameChar_y-21,5,4); //왼발
	ellipse(gameChar_x+5,gameChar_y-21,5,4); //오른발
	
	
	fill(255,239,213);
	strokeWeight(1)
	ellipse(gameChar_x-7,gameChar_y-33,3,10); //왼팔
	ellipse(gameChar_x+8,gameChar_y-33,3,10); //오른팔
	
	fill(190,239,253);
	strokeWeight(1)
	ellipse(gameChar_x+8,gameChar_y-27,4,3); //오른손
	ellipse(gameChar_x-7,gameChar_y-27,4,3); //왼손

	fill(0);
	rect(gameChar_x-0.5,gameChar_y-48,1,2); //입
	fill(245);
	fill(0);
	ellipse(gameChar_x-2,gameChar_y-51,2,2); //왼쪽눈
	ellipse(gameChar_x+2,gameChar_y-51,2,2); //오른쪽눈


	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...
    fill(255,239,213);
	ellipse(gameChar_x,gameChar_y-50,15,10); //얼굴
    //ellipse(300,145,15,10); //얼굴
	fill(220,20,60)
    rect(gameChar_x-4,gameChar_y-43,7,15); //몸통
	fill(255,239,213)
	rect(gameChar_x-2.5,gameChar_y-48,5,5); //목
    
	fill("black");
	arc(gameChar_x,gameChar_y-55,10,5,5,PI,CHORD/2); //모자
	

	fill(85,107,47);
	rect(gameChar_x-4,gameChar_y-28,3,5); //왼쪽다리
	rect(gameChar_x,gameChar_y-28,3,5); //오른쪽다리
	

	fill(195,239,213);
	ellipse(gameChar_x-2,gameChar_y-21,5,4); //왼발
	ellipse(gameChar_x+2,gameChar_y-21,5,4); //오른발
	
	
	fill(255,239,213);
	strokeWeight(1)
	ellipse(gameChar_x-6,gameChar_y-33,3,10); //왼팔
	ellipse(gameChar_x+8,gameChar_y-38,10,3); //오른팔
	
	fill(190,239,253);
	strokeWeight(1)
	ellipse(gameChar_x+13,gameChar_y-38,3,4); //오른손
	ellipse(gameChar_x-6,gameChar_y-27,4,3); //왼손

	fill(0);
	rect(gameChar_x+4,gameChar_y-48,3,2); //입
	fill(245);
	fill(0);
	//ellipse(gameChar_x-2,gameChar_y-51,2,2); //왼쪽눈
	ellipse(gameChar_x+2,gameChar_y-51,2,2); //오른쪽눈


	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...
    fill(255,239,213);
	ellipse(gameChar_x,gameChar_y-50,15,10); //얼굴
    //ellipse(300,145,15,10); //얼굴
	fill(220,20,60)
    rect(gameChar_x-4,gameChar_y-43,7,15); //몸통
	fill(255,239,213)
	rect(gameChar_x-2.5,gameChar_y-48,5,5); //목
    
	fill("black");
	arc(gameChar_x,gameChar_y-55,10,5,5,PI,CHORD/2); //모자
	

	fill(85,107,47);
	rect(gameChar_x-4,gameChar_y-28,3,5); //왼쪽다리
	rect(gameChar_x,gameChar_y-28,3,5); //오른쪽다리
	

	fill(195,239,213);
	ellipse(gameChar_x-2,gameChar_y-21,5,4); //왼발
	ellipse(gameChar_x+2,gameChar_y-21,5,4); //오른발
	
	
	fill(255,239,213);
	strokeWeight(1)
	ellipse(gameChar_x-6,gameChar_y-35,10,3); //왼팔
	ellipse(gameChar_x,gameChar_y-38,10,3); //오른팔
	
	fill(190,239,253);
	strokeWeight(1)
	ellipse(gameChar_x-10,gameChar_y-34,3,4); //오른손
	ellipse(gameChar_x-6,gameChar_y-37,3,4); //왼손

	fill(0);
	rect(gameChar_x-5,gameChar_y-48,3,2); //입
	fill(245);
	fill(0);
	ellipse(gameChar_x-2,gameChar_y-51,2,2); //왼쪽눈
	//ellipse(gameChar_x+2,gameChar_y-51,2,2); //오른쪽눈


	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...
    fill(255,239,213);
	ellipse(gameChar_x,gameChar_y-50,15,10); //얼굴
    //ellipse(300,145,15,10); //얼굴
	fill(220,20,60)
    rect(gameChar_x-4,gameChar_y-43,7,15); //몸통
	fill(255,239,213)
	rect(gameChar_x-2.5,gameChar_y-48,5,5); //목
    
	fill("black");
	arc(gameChar_x,gameChar_y-55,10,5,5,PI,CHORD/2); //모자
	

	fill(85,107,47);
	rect(gameChar_x-4,gameChar_y-28,3,5); //왼쪽다리
	rect(gameChar_x,gameChar_y-28,3,5); //오른쪽다리
	

	fill(195,239,213);
	ellipse(gameChar_x-2,gameChar_y-21,5,4); //왼발
	ellipse(gameChar_x+2,gameChar_y-21,5,4); //오른발
	
	
	fill(255,239,213);
	strokeWeight(1)
	ellipse(gameChar_x+6,gameChar_y-35,10,3); //왼팔
	ellipse(gameChar_x,gameChar_y-38,10,3); //오른팔
	
	fill(190,239,253);
	strokeWeight(1)
	ellipse(gameChar_x+11,gameChar_y-34,3,4); //오른손
	ellipse(gameChar_x+6,gameChar_y-37,3,4); //왼손

	fill(0);
	rect(gameChar_x+4,gameChar_y-48,3,2); //입
	fill(245);
	fill(0);
	//ellipse(gameChar_x-2,gameChar_y-51,2,2); //왼쪽눈
	ellipse(gameChar_x+2,gameChar_y-51,2,2); //오른쪽눈

	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...
    fill(255,239,213);
	ellipse(gameChar_x,gameChar_y-50,15,10); //얼굴
    //ellipse(300,145,15,10); //얼굴
	fill(220,20,60)
    rect(gameChar_x-4,gameChar_y-43,7,15); //몸통
	fill(255,239,213)
	rect(gameChar_x-2.5,gameChar_y-48,5,5); //목
    
	fill("black");
	arc(gameChar_x,gameChar_y-55,10,5,5,PI,CHORD/2); //모자
	

	fill(85,107,47);
	rect(gameChar_x-10,gameChar_y-31,8,3); //왼쪽다리
	rect(gameChar_x,gameChar_y-28,8,3); //오른쪽다리
	

	fill(195,239,213);
	ellipse(gameChar_x-10,gameChar_y-29,4,5); //왼발
	ellipse(gameChar_x+9,gameChar_y-26.5,4,4); //오른발
	
	
	fill(255,239,213);
	strokeWeight(1)
	ellipse(gameChar_x+6,gameChar_y-38,10,3); //오른팔
	ellipse(gameChar_x-6,gameChar_y-38,10,3); //왼팔
	
	fill(190,239,253);
	strokeWeight(1)
	ellipse(gameChar_x+11,gameChar_y-38,3,4); //오른손
	ellipse(gameChar_x-10,gameChar_y-38,3,4); //왼손

	fill(0);
	rect(gameChar_x+4,gameChar_y-48,3,2); //입
	fill(245);
	fill(0);
	//ellipse(gameChar_x-2,gameChar_y-51,2,2); //왼쪽눈
	ellipse(gameChar_x+2,gameChar_y-51,2,2); //오른쪽눈

	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...
    fill(255,239,213);
	ellipse(gameChar_x,gameChar_y-50,15,10); //얼굴
    //ellipse(300,145,15,10); //얼굴
	fill(220,20,60)
    rect(gameChar_x-4,gameChar_y-43,7,15); //몸통
	fill(255,239,213)
	rect(gameChar_x-2.5,gameChar_y-48,5,5); //목
    
	fill("black");
	arc(gameChar_x,gameChar_y-55,10,5,5,PI,CHORD/2); //모자
	

	fill(85,107,47);
	rect(gameChar_x-10,gameChar_y-31,8,3); //왼쪽다리
	rect(gameChar_x,gameChar_y-28,8,3); //오른쪽다리
	

	fill(195,239,213);
	ellipse(gameChar_x-10,gameChar_y-29,4,5); //왼발
	ellipse(gameChar_x+9,gameChar_y-26.5,4,4); //오른발
	
	
	fill(255,239,213);
	strokeWeight(1)
	ellipse(gameChar_x+6,gameChar_y-38,10,3); //오른팔
	ellipse(gameChar_x-6,gameChar_y-38,10,3); //왼팔
	
	fill(190,239,253);
	strokeWeight(1)
	ellipse(gameChar_x+11,gameChar_y-38,3,4); //오른손
	ellipse(gameChar_x-10,gameChar_y-38,3,4); //왼손

	fill(0);
	rect(gameChar_x-5,gameChar_y-48,3,2); //입
	fill(245);
	fill(0);
	ellipse(gameChar_x-2,gameChar_y-51,2,2); //왼쪽눈
	//ellipse(gameChar_x+2,gameChar_y-51,2,2); //오른쪽눈

}
