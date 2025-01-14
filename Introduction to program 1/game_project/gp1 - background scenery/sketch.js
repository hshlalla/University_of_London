/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 15 lines of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
    fill(255,255,50);
    ellipse(200,150,126,97);
    ellipse(262,150,70,60);
    ellipse(138,160,70,60);
	//... add your code here

	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
    
    fill(226, 219, 211);
    beginShape();
    curveVertex(485,432);
    curveVertex(485,432);
    curveVertex(580,285);
    curveVertex(600,245);
    curveVertex(670,245);
    curveVertex(690,285);
    curveVertex(765,432);
    curveVertex(765,432);
    endShape();
	fill(118, 148, 176);
	noStroke();
	beginShape();
	vertex(485,432);
	vertex(565,305);
	vertex(595,285);
	vertex(615,300);
	vertex(660,290);
	vertex(685,300);
	vertex(688,280);
	vertex(765,432);
	endShape(CLOSE);
    


	//... add your code here

	noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
    
	//... add your code here

    fill(150,100,50);
	ellipse(856, 356, 20, 40);
    ellipse(856, 320, 20, 40);
    ellipse(856, 386, 20, 40);
    ellipse(856, 416, 20, 40);
    
    fill(150,200,40,240);
	ellipse(804, 229, 20, 20);
	ellipse(817, 213, 40, 40);
	ellipse(900, 186, 40, 40);
	ellipse(837, 196, 40, 40);
	ellipse(820, 160, 40, 40);
    fill(200,200,100);
    
	ellipse(847, 169, 40, 40);
	ellipse(863,196,40,40);
	ellipse(826,133,40,40);
	ellipse(851,141,40,40);
	fill(100,200,100);
    ellipse(889,289,40,40);
	ellipse(872,160,40,40);
	ellipse(890,229,20,20);
	ellipse(788,250,40,40);
	fill(80,150,100);
    ellipse(879,274,40,40);
	ellipse(821,303,40,40);
	ellipse(852,285,40,40);
	ellipse(913,225,40,40);
	fill(150,200,180);
    ellipse(857,149,40,40);
	ellipse(832,259,40,40);
	ellipse(913,280,40,40);
	ellipse(870,241,40,40);

    
    
	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen
    fill(0, 148, 176);
	noStroke();
	beginShape();
	curveVertex(85,580);
	vertex(0,405);
	vertex(0,385);
	//vertex(115,400);
	vertex(160,390);
	//vertex(185,400);
	//vertex(188,380);
	vertex(165,572);
	endShape(CLOSE);
    
    line(240,560,80,380);
    strokeWeight(8);
    stroke(255,2,255);

	//... add your code here

	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
    //framework
    //noFill();
    stroke(0);
    strokeWeight(4);
    fill(200,200,100);
    ellipse(290,510,40,40); //뒷타이어
    ellipse(405,510,40,40); //앞타이어

    noStroke();
    fill(200,200,100);
    ellipse(290,510,25,25); //뒷바퀴 살
    ellipse(405,510,25,25); //앞바퀴 살
    stroke(0,0,0,200);
    strokeWeight(5);
    line(290,510,320,470); //뒷바퀴 연결되는 바디프레임
    line(320,470,400,470); //가장 윗프레임
    line(405,510,400,440); //앞프레임
    line(350,510,320,470); //안장쪽 뒷프레임
    line(290,510,350,510); //페달쪽 뒷프레임
    line(350,510,400,470); //안장쪽 앞프레임
    line(420,435,400,435); //손잡이
    //nofill();
    arc(420,450,30,30,3 * PI / 2, 2 * PI + PI / 2);//손잡이 프레임//

    strokeWeight(9);
    stroke(24,124,220);
    line(360,465,310,465); //안장
    strokeWeight(3);
    line(405,510, 400,440); //앞프레임 음영
    line(290,510,320,470); //뒷프레임 음영
    line(350,510,400,470); //페달쪽 음영
    
    
    // small middle wheels
    fill(10,255,255);
    ellipse(290,510,6,6); // 왼쪽
    ellipse(405,510,6,6); // 오른쪽
    // chain wheel
    strokeWeight(4);
    fill(10);
    ellipse(350,510,16,16);
    strokeWeight(4);
    fill(10);
    ellipse(350,510,8,8);
    //손잡이
    line(420,435,400,435);
    arc(420,450,30,30,3 * PI / 2, 2 * PI + PI / 2);
    
    //peddle, maybe idk
    strokeWeight(5);
    line(350,510,320,505); //페달
    stroke(20,205,205);
    strokeWeight(2);
    line(350,510,320,505);


	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
