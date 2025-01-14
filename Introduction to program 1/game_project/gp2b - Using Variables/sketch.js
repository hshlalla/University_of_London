/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;
    
    canyon_x = 10;
    canyon_width = 100;
    
    cloud_x = 100;
    cloud_y = 100;
    cloud_size = 1;
    
    mountain_x = 100;
    mountain_y = 100;
    mountain_size = 1;
        
    collectable_x = 220;
    collectable_y = 550;
    collectable_size =0.4;
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground

    //구름
    fill(255,255,50);
    ellipse(cloud_x+100,cloud_y+50,cloud_size*126,cloud_size*97);
    ellipse(cloud_x+162,cloud_y+50,cloud_size*70,cloud_size*60);
    ellipse(cloud_x+38,cloud_y+60,cloud_size*70,cloud_size*60);

	//산
    fill(226, 219, 211);
    beginShape();
    curveVertex(mountain_size*(mountain_x+185),mountain_size*(mountain_y+332));
    curveVertex(mountain_size*(mountain_x+185),mountain_size*(mountain_y+332));
    curveVertex(mountain_size*(mountain_x+280),mountain_size*(mountain_y+185));
    curveVertex(mountain_size*(mountain_x+300),mountain_size*(mountain_y+145));
    curveVertex(mountain_size*(mountain_x+370),mountain_size*(mountain_y+145));
    curveVertex(mountain_size*(mountain_x+390),mountain_size*(mountain_y+185));
    curveVertex(mountain_size*(mountain_x+465),mountain_size*(mountain_y+332));
    curveVertex(mountain_size*(mountain_x+465),mountain_size*(mountain_y+332));
    endShape();
    fill(118, 148, 176);
    noStroke();
    beginShape();
    vertex(mountain_size*(mountain_x+185),mountain_size*(mountain_y+332));
    vertex(mountain_size*(mountain_x+265),mountain_size*(mountain_y+205));
    vertex(mountain_size*(mountain_x+295),mountain_size*(mountain_y+185));
    vertex(mountain_size*(mountain_x+315),mountain_size*(mountain_y+200));
    vertex(mountain_size*(mountain_x+360),mountain_size*(mountain_y+190));
    vertex(mountain_size*(mountain_x+385),mountain_size*(mountain_y+200));
    vertex(mountain_size*(mountain_x+388),mountain_size*(mountain_y+180));
    vertex(mountain_size*(mountain_x+465),mountain_size*(mountain_y+332));
    endShape(CLOSE);

    
    
    // 나무
    fill(150,100,50);
	ellipse(treePos_x, treePos_y+125, 20, 40);
    ellipse(treePos_x, treePos_y+95, 20, 40);
    ellipse(treePos_x, treePos_y+45, 20, 40);
    ellipse(treePos_x, treePos_y+65, 20, 40);
    //856, 356
    fill(150,200,40,240);
	ellipse(treePos_x-52, treePos_y+27, 20, 20);
	ellipse(treePos_x+39, treePos_y-43, 40, 40);
	ellipse(treePos_x+34, treePos_y-70, 40, 40);
	ellipse(treePos_x-19, treePos_y-60, 40, 40);
	ellipse(treePos_x-36, treePos_y, 40, 40);
    fill(200,200,100);
    
	ellipse(treePos_x-9, treePos_y-7, 40, 40);
	ellipse(treePos_x+7,treePos_y+26,40,40);
	ellipse(treePos_x-30,treePos_y+33,40,40);
	ellipse(treePos_x-5,treePos_y-41,40,40);
	fill(100,200,100);
    ellipse(treePos_x+36,treePos_y,40,40);
	ellipse(treePos_x+16,treePos_y-60,40,40);
	ellipse(treePos_x+34,treePos_y+29,20,20);
	ellipse(treePos_x-38,treePos_y-10,40,40);
	fill(80,150,100);
    ellipse(treePos_x+13,treePos_y-74,40,40);
	ellipse(treePos_x+45,treePos_y-15,40,40);
	ellipse(treePos_x-4,treePos_y,40,40);
	ellipse(treePos_x+57,treePos_y+25,40,40);
	fill(150,200,180);
    ellipse(treePos_x+1,treePos_y-49,40,40);
	ellipse(treePos_x-24,treePos_y-29,40,40);
	ellipse(treePos_x+57,treePos_y+8,40,40);
	ellipse(treePos_x+14,treePos_y-41,40,40);



	//폭포
    fill(0, 148, 176);
	noStroke();
    rect(canyon_x+20,432,canyon_width+60,160,5);
    fill(70, 188, 255);
    rect(canyon_x+40,432,canyon_width+20,150,10);
    
    
    
    
//	beginShape();
//	curveVertex(canyon_x+0,-(canyon_width)+450);
//	curveVertex(canyon_x+0,canyon_width+470);
//	curveVertex(canyon_x+188,570);
//	curveVertex(canyon_x+165,460);
//	endShape(CLOSE);
//    fill(70, 188, 255);
//	noStroke();
//	beginShape();
//	curveVertex(canyon_x+0,370);
//	curveVertex(canyon_x+20,550);
//	curveVertex(canyon_x+160,550);
//	curveVertex(canyon_x+160,500);
//	endShape(CLOSE);
    



    // 수집가능한 아이템
    stroke(0);
    strokeWeight(4);
    fill(200,200,100);
    ellipse(collectable_size*(collectable_x+290),collectable_size*(collectable_y+510),collectable_size*40,collectable_size*40); //뒷타이어
    ellipse(collectable_size*(collectable_x+405),collectable_size*(collectable_y+510),collectable_size*40,collectable_size*40); //앞타이어

    noStroke();
    fill(200,200,100);
    ellipse(collectable_size*(collectable_x+290),collectable_size*(collectable_y+510),collectable_size*25,collectable_size*25); //뒷바퀴 살
    ellipse(collectable_size*(collectable_x+405),collectable_size*(collectable_y+510),collectable_size*25,collectable_size*25); //앞바퀴 살
    stroke(0,0,0,200);
    strokeWeight(5);
    line(collectable_size*(collectable_x+290),collectable_size*(collectable_y+510),collectable_size*(collectable_x+320),collectable_size*(collectable_y+470)); //뒷바퀴 연결되는 바디프레임
    line(collectable_size*(collectable_x+320),collectable_size*(collectable_y+470),collectable_size*(collectable_x+400),collectable_size*(collectable_y+470)); //가장 윗프레임
    line(collectable_size*(collectable_x+405),collectable_size*(collectable_y+510),collectable_size*(collectable_x+400),collectable_size*(collectable_y+440)); //앞프레임
    line(collectable_size*(collectable_x+350),collectable_size*(collectable_y+510),collectable_size*(collectable_x+320),collectable_size*(collectable_y+470)); //안장쪽 뒷프레임
    line(collectable_size*(collectable_x+290),collectable_size*(collectable_y+510),collectable_size*(collectable_x+350),collectable_size*(collectable_y+510)); //페달쪽 뒷프레임
    line(collectable_size*(collectable_x+350),collectable_size*(collectable_y+510),collectable_size*(collectable_x+400),collectable_size*(collectable_y+470)); //안장쪽 앞프레임
    line(collectable_size*(collectable_x+420),collectable_size*(collectable_y+435),collectable_size*(collectable_x+400),collectable_size*(collectable_y+435)); //손잡이
    //nofill();
    arc(collectable_size*(collectable_x+420),collectable_size*(collectable_y+450),collectable_size*30,collectable_size*30,3 * PI / 2, 2 * PI + PI / 2);//손잡이 프레임//

    strokeWeight(collectable_size*9);
    stroke(24,124,220);
    line(collectable_size*(collectable_x+360),collectable_size*(collectable_y+465),collectable_size*(collectable_x+310),collectable_size*(collectable_y+465)); //안장
    strokeWeight(3);
    line(collectable_size*(collectable_x+405),collectable_size*(collectable_y+510), collectable_size*(collectable_x+400),collectable_size*(collectable_y+440)); //앞프레임 음영
    line(collectable_size*(collectable_x+290),collectable_size*(collectable_y+510),collectable_size*(collectable_x+320),collectable_size*(collectable_y+470)); //뒷프레임 음영
    line(collectable_size*(collectable_x+350),collectable_size*(collectable_y+510),collectable_size*(collectable_x+400),collectable_size*(collectable_y+470)); //페달쪽 음영
    
    
    // small middle wheels
    fill(10,255,255);
    ellipse(collectable_size*(collectable_x+290),collectable_size*(collectable_y+510),collectable_size*6,collectable_size*6); // 왼쪽
    ellipse(collectable_size*(collectable_x+405),collectable_size*(collectable_y+510),collectable_size*6,collectable_size*6); // 오른쪽
    // chain wheel
    strokeWeight(4);
    fill(10);
    ellipse(collectable_size*(collectable_x+350),collectable_size*(collectable_y+510),collectable_size*16,collectable_size*16);
    strokeWeight(4);
    fill(10);
    ellipse(collectable_size*(collectable_x+350),collectable_size*(collectable_y+510),collectable_size*8,collectable_size*8);
    //손잡이
    line(collectable_size*(collectable_x+420),collectable_size*(collectable_y+435),collectable_size*(collectable_x+400),collectable_size*(collectable_y+435));
    arc(collectable_size*(collectable_x+420),collectable_size*(collectable_y+450),collectable_size*30,collectable_size*30,3 * PI / 2, 2 * PI + PI / 2);
    
    //peddle, maybe idk
    strokeWeight(5);
    line(collectable_size*(collectable_x+350),collectable_size*(collectable_y+510),collectable_size*(collectable_x+320),collectable_size*(collectable_y+505)); //페달
    stroke(20,205,205);
    strokeWeight(2);
    line(collectable_size*(collectable_x+350),collectable_size*(collectable_y+510),collectable_size*(collectable_x+320),collectable_size*(collectable_y+505));

    //draw the game character
	noStroke();
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
}

function mousePressed()
{
    gameChar_x = mouseX;
    gameChar_y = mouseY;


}
