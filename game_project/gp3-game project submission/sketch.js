/*

The Game Project

Game Project submission

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var collectable;
var canyon;

var tree_x;



function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    isLeft = false;
    isRight =false;
    isFalling = false;
    isPlummeting = false;
    rd= random();

    
    collectable = {x_pos:750, y_pos: floorPos_y, size:0.4 , isFound : false};
    canyon = {canyon_x:30,  canyon_width:160};
    tree_x= [300,500,900,1150];
    
}

function draw()
{
    fill(0,0,255);
    ellipse(100,100,100,100);
    

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); 
    //draw some green ground
    
    
    for(var i=0; i < tree_x.length; i++){
        console.log("trees loop"+i);
    }
    

	//draw the canyon
    
    //폭포
    fill(0, 148, 176);
	noStroke();
    rect(canyon.canyon_x,floorPos_y,canyon.canyon_width,160,5);
    fill(70, 188, 255);
    rect(canyon.canyon_x+20,floorPos_y,canyon.canyon_width-40,150,10);


	//the game character
	if(isLeft && isFalling)
	{
        // add your jumping-left code

        fill(255,239,213);
        ellipse(gameChar_x,gameChar_y-30,15,10); //얼굴
        //ellipse(300,145,15,10); //얼굴
        fill(220,20,60)
        rect(gameChar_x-4,gameChar_y-23,7,15); //몸통
        fill(255,239,213)
        rect(gameChar_x-2.5,gameChar_y-28,5,5); //목

        fill("black");
        arc(gameChar_x,gameChar_y-35,10,5,5,PI,CHORD/2); //모자


        fill(85,107,47);
        rect(gameChar_x-10,gameChar_y-11,8,3); //왼쪽다리
        rect(gameChar_x,gameChar_y-8,8,3); //오른쪽다리


        fill(195,239,213);
        ellipse(gameChar_x-10,gameChar_y-9,4,5); //왼발
        ellipse(gameChar_x+9,gameChar_y-6.5,4,4); //오른발


        fill(255,239,213);
        strokeWeight(1)
        ellipse(gameChar_x+6,gameChar_y-18,10,3); //오른팔
        ellipse(gameChar_x-6,gameChar_y-18,10,3); //왼팔

        fill(190,239,253);
        strokeWeight(1)
        ellipse(gameChar_x+11,gameChar_y-18,3,4); //오른손
        ellipse(gameChar_x-10,gameChar_y-18,3,4); //왼손

        fill(0);
        rect(gameChar_x-5,gameChar_y-28,3,2); //입
        fill(245);
        fill(0);
        ellipse(gameChar_x-2,gameChar_y-31,2,2); //왼쪽눈
        //ellipse(gameChar_x+2,gameChar_y-51,2,2); //오른쪽눈

	}
    
    
	else if(isRight && isFalling)
	{
        // add your jumping-right code
        fill(255,239,213);
        ellipse(gameChar_x,gameChar_y-30,15,10); //얼굴
        //ellipse(300,145,15,10); //얼굴
        fill(220,20,60)
        rect(gameChar_x-4,gameChar_y-23,7,15); //몸통
        fill(255,239,213)
        rect(gameChar_x-2.5,gameChar_y-28,5,5); //목

        fill("black");
        arc(gameChar_x,gameChar_y-35,10,5,5,PI,CHORD/2); //모자


        fill(85,107,47);
        rect(gameChar_x-10,gameChar_y-11,8,3); //왼쪽다리
        rect(gameChar_x,gameChar_y-18,8,3); //오른쪽다리


        fill(195,239,213);
        ellipse(gameChar_x-10,gameChar_y-9,4,5); //왼발
        ellipse(gameChar_x+9,gameChar_y-6.5,4,4); //오른발


        fill(255,239,213);
        strokeWeight(1)
        ellipse(gameChar_x+6,gameChar_y-18,10,3); //오른팔
        ellipse(gameChar_x-6,gameChar_y-18,10,3); //왼팔

        fill(190,239,253);
        strokeWeight(1)
        ellipse(gameChar_x+11,gameChar_y-18,3,4); //오른손
        ellipse(gameChar_x-10,gameChar_y-18,3,4); //왼손

        fill(0);
        rect(gameChar_x+4,gameChar_y-28,3,2); //입
        fill(245);
        fill(0);
        //ellipse(gameChar_x-2,gameChar_y-51,2,2); //왼쪽눈
        ellipse(gameChar_x+2,gameChar_y-31,2,2); //오른쪽눈

	}
    
    
	else if(isLeft)
	{
        // add your walking left code
        fill(255,239,213);
        ellipse(gameChar_x,gameChar_y-30,15,10); //얼굴
        //ellipse(300,145,15,10); //얼굴
        fill(220,20,60)
        rect(gameChar_x-4,gameChar_y-23,7,15); //몸통
        fill(255,239,213)
        rect(gameChar_x-2.5,gameChar_y-28,5,5); //목

        fill("black");
        arc(gameChar_x,gameChar_y-35,10,5,5,PI,CHORD/2); //모자


        fill(85,107,47);
        rect(gameChar_x-4,gameChar_y-8,3,5); //왼쪽다리
        rect(gameChar_x,gameChar_y-8,3,5); //오른쪽다리


        fill(195,239,213);
        ellipse(gameChar_x-2,gameChar_y-1,5,4); //왼발
        ellipse(gameChar_x+2,gameChar_y-1,5,4); //오른발


        fill(255,239,213);
        strokeWeight(1)
        ellipse(gameChar_x-6,gameChar_y-15,10,3); //왼팔
        ellipse(gameChar_x,gameChar_y-18,10,3); //오른팔

        fill(190,239,253);
        strokeWeight(1)
        ellipse(gameChar_x-10,gameChar_y-14,3,4); //오른손
        ellipse(gameChar_x-6,gameChar_y-17,3,4); //왼손

        fill(0);
        rect(gameChar_x-5,gameChar_y-28,3,2); //입
        fill(245);
        fill(0);
        ellipse(gameChar_x-2,gameChar_y-31,2,2); //왼쪽눈
        //ellipse(gameChar_x+2,gameChar_y-31,2,2); //오른쪽눈
        
        
	}
    
	else if(isRight)
	{
        // add your walking right code

        fill(255,239,213);
        ellipse(gameChar_x,gameChar_y-30,15,10); //얼굴
        //ellipse(300,145,15,10); //얼굴
        fill(220,20,60)
        rect(gameChar_x-4,gameChar_y-23,7,15); //몸통
        fill(255,239,213)
        rect(gameChar_x-2.5,gameChar_y-28,5,5); //목

        fill("black");
        arc(gameChar_x,gameChar_y-35,10,5,5,PI,CHORD/2); //모자


        fill(85,107,47);
        rect(gameChar_x-4,gameChar_y-8,3,5); //왼쪽다리
        rect(gameChar_x,gameChar_y-8,3,5); //오른쪽다리


        fill(195,239,213);
        ellipse(gameChar_x-2,gameChar_y-1,5,4); //왼발
        ellipse(gameChar_x+2,gameChar_y-1,5,4); //오른발


        fill(255,239,213);
        strokeWeight(1)
        ellipse(gameChar_x+6,gameChar_y-15,10,3); //왼팔
        ellipse(gameChar_x,gameChar_y-18,10,3); //오른팔

        fill(190,239,253);
        strokeWeight(1)
        ellipse(gameChar_x+11,gameChar_y-14,3,4); //오른손
        ellipse(gameChar_x+6,gameChar_y-17,3,4); //왼손

        fill(0);
        rect(gameChar_x+4,gameChar_y-28,3,2); //입
        fill(245);
        fill(0);
        //ellipse(gameChar_x-2,gameChar_y-31,2,2); //왼쪽눈
        ellipse(gameChar_x+2,gameChar_y-31,2,2); //오른쪽눈

	}
    
    
	else if(isFalling || isPlummeting)
	{
        // add your jumping facing forwards code
        fill(255,239,213);
        ellipse(gameChar_x,gameChar_y-30,15,10); //얼굴
        //ellipse(300,145,15,10); //얼굴
        fill(220,20,60)
        rect(gameChar_x-4,gameChar_y-23,7,15); //몸통
        fill(255,239,213)
        rect(gameChar_x-2.5,gameChar_y-28,5,5); //목

        fill("black");
        arc(gameChar_x,gameChar_y-35,10,5,5,PI,CHORD/2); //모자


        fill(85,107,47);
        rect(gameChar_x-4,gameChar_y-8,3,5); //왼쪽다리
        rect(gameChar_x,gameChar_y-8,3,5); //오른쪽다리


        fill(195,239,213);
        ellipse(gameChar_x-2,gameChar_y-1,5,4); //왼발
        ellipse(gameChar_x+2,gameChar_y-1,5,4); //오른발


        fill(255,239,213);
        strokeWeight(1)
        ellipse(gameChar_x-6,gameChar_y-18,10,3); //왼팔
        ellipse(gameChar_x+8,gameChar_y-18,10,3); //오른팔

        fill(190,239,253);
        strokeWeight(1)
        ellipse(gameChar_x+13,gameChar_y-18,3,4); //오른손
        ellipse(gameChar_x-10,gameChar_y-18,4,3); //왼손

        fill(0);
        rect(gameChar_x-0.5,gameChar_y-28,1,2); //입
        fill(245);
        fill(0);
        ellipse(gameChar_x-2,gameChar_y-31,2,2); //왼쪽눈
        ellipse(gameChar_x+2,gameChar_y-31,2,2); //오른쪽눈

	}
    
	else
	{
        // add your standing front facing code
        fill(255,239,213);
        ellipse(gameChar_x,gameChar_y-30,15,10); //얼굴
        //ellipse(300,145,15,10); //얼굴
        fill(220,20,60)
        rect(gameChar_x-5.5,gameChar_y-23,12,15); //몸통
        fill(255,239,213)
        rect(gameChar_x-2.5,gameChar_y-28,5,5); //목

        fill("black");
        arc(gameChar_x,gameChar_y-35,10,5,5,PI,CHORD/2); //모자


        fill(85,107,47);
        rect(gameChar_x-5.5,gameChar_y-8,5); //왼쪽다리
        rect(gameChar_x+1.5,gameChar_y-8,5); //오른쪽다리


        fill(195,239,213);
        ellipse(gameChar_x-4,gameChar_y-1,5,4); //왼발
        ellipse(gameChar_x+5,gameChar_y-1,5,4); //오른발


        fill(255,239,213);
        strokeWeight(1)
        ellipse(gameChar_x-7,gameChar_y-13,3,10); //왼팔
        ellipse(gameChar_x+8,gameChar_y-13,3,10); //오른팔

        fill(190,239,253);
        strokeWeight(1)
        ellipse(gameChar_x+8,gameChar_y-7,4,3); //오른손
        ellipse(gameChar_x-7,gameChar_y-7,4,3); //왼손

        fill(0);
        rect(gameChar_x-0.5,gameChar_y-28,1,2); //입
        fill(245);
        fill(0);
        ellipse(gameChar_x-2,gameChar_y-31,2,2); //왼쪽눈
        ellipse(gameChar_x+2,gameChar_y-31,2,2); //오른쪽눈

	}
     
    if(dist(collectable.x_pos-300,
            collectable.y_pos,
            gameChar_x,gameChar_y ) <20)
    {
        collectable.isFound = true;
    }
    
    if(collectable.isFound == false)
    {

    // 수집가능한 아이템 collectable item

        stroke(0);
        strokeWeight(4);
        fill(200,200,100);

        ellipse(
            collectable.size*(collectable.x_pos+290),
            collectable.size*(collectable.y_pos+625),
            collectable.size*40,
            collectable.size*40); //뒷타이어

        ellipse(
            collectable.size*(collectable.x_pos+405),
            collectable.size*(collectable.y_pos+625),
            collectable.size*40,
            collectable.size*40); //앞타이어
        

        noStroke();
        fill(200,200,100);
        ellipse(
            collectable.size*(collectable.x_pos+290),
            collectable.size*(collectable.y_pos+625),
            collectable.size*25,
            collectable.size*25); //뒷바퀴 살
        ellipse(
            collectable.size*(collectable.x_pos+405),
            collectable.size*(collectable.y_pos+625),
            collectable.size*25,
            collectable.size*25); //앞바퀴 살
        stroke(0,0,0,200);
        strokeWeight(5);
        line(
            collectable.size*(collectable.x_pos+290),
            collectable.size*(collectable.y_pos+625),
            collectable.size*(collectable.x_pos+320),
            collectable.size*(collectable.y_pos+585)); //뒷바퀴 연결되는 바디프레임
        line(
            collectable.size*(collectable.x_pos+320),
            collectable.size*(collectable.y_pos+585),
            collectable.size*(collectable.x_pos+400),
            collectable.size*(collectable.y_pos+585)); //가장 윗프레임
        line(
            collectable.size*(collectable.x_pos+405),
            collectable.size*(collectable.y_pos+625),
            collectable.size*(collectable.x_pos+400),
            collectable.size*(collectable.y_pos+555)); //앞프레임
        line(
            collectable.size*(collectable.x_pos+350),
            collectable.size*(collectable.y_pos+625),
            collectable.size*(collectable.x_pos+320),
            collectable.size*(collectable.y_pos+585)); //안장쪽 뒷프레임
        line(
            collectable.size*(collectable.x_pos+290),
            collectable.size*(collectable.y_pos+625),
            collectable.size*(collectable.x_pos+350),
            collectable.size*(collectable.y_pos+625)); //페달쪽 뒷프레임
        line(
            collectable.size*(collectable.x_pos+350),
            collectable.size*(collectable.y_pos+625),
            collectable.size*(collectable.x_pos+400),
            collectable.size*(collectable.y_pos+585)); //안장쪽 앞프레임
        line(
            collectable.size*(collectable.x_pos+420),
            collectable.size*(collectable.y_pos+550),
            collectable.size*(collectable.x_pos+400),
            collectable.size*(collectable.y_pos+550)); //손잡이
        //nofill();
        arc(
            collectable.size*(collectable.x_pos+420),
            collectable.size*(collectable.y_pos+565),
            collectable.size*30,
            collectable.size*30,
            3 * PI / 2, 2 * PI + PI / 2);//손잡이 프레임//

        strokeWeight(collectable.size*9);
        stroke(24,124,220);
        line(
            collectable.size*(collectable.x_pos+360),
            collectable.size*(collectable.y_pos+580),
            collectable.size*(collectable.x_pos+310),
            collectable.size*(collectable.y_pos+580)); //안장
        strokeWeight(3);
        line(
            collectable.size*(collectable.x_pos+405),
            collectable.size*(collectable.y_pos+625), 
            collectable.size*(collectable.x_pos+400),
            collectable.size*(collectable.y_pos+555)); //앞프레임 음영
        line(
            collectable.size*(collectable.x_pos+290),
            collectable.size*(collectable.y_pos+625),
            collectable.size*(collectable.x_pos+320),
            collectable.size*(collectable.y_pos+585)); //뒷프레임 음영
        line(
            collectable.size*(collectable.x_pos+350),
            collectable.size*(collectable.y_pos+625),
            collectable.size*(collectable.x_pos+400),
            collectable.size*(collectable.y_pos+585)); //페달쪽 음영


        // small middle wheels
        fill(10,255,255);
        ellipse(
            collectable.size*(collectable.x_pos+290),
            collectable.size*(collectable.y_pos+625),
            collectable.size*6,
            collectable.size*6); // 왼쪽
        ellipse(
            collectable.size*(collectable.x_pos+405),
            collectable.size*(collectable.y_pos+625),
            collectable.size*6,
            collectable.size*6); // 오른쪽
        // chain wheel
        strokeWeight(4);
        fill(10);
        ellipse(
            collectable.size*(collectable.x_pos+350),
            collectable.size*(collectable.y_pos+625),
            collectable.size*16,
            collectable.size*16);
        strokeWeight(4);
        fill(10);
        ellipse(
            collectable.size*(collectable.x_pos+350),
            collectable.size*(collectable.y_pos+625),
            collectable.size*8,
            collectable.size*8);
        //손잡이
        line(
            collectable.size*(collectable.x_pos+420),
            collectable.size*(collectable.y_pos+550),
            collectable.size*(collectable.x_pos+400),
            collectable.size*(collectable.y_pos+550));
        arc(collectable.size*(collectable.x_pos+420),
            collectable.size*(collectable.y_pos+565),
            collectable.size*30,
            collectable.size*30,
            3 * PI / 2, 2 * PI + PI / 2);

        //peddle, maybe idk
        strokeWeight(5);
        line(
            collectable.size*(collectable.x_pos+350),
            collectable.size*(collectable.y_pos+625),
            collectable.size*(collectable.x_pos+320),
            collectable.size*(collectable.y_pos+620)); //페달
        stroke(20,205,205);
        strokeWeight(2);
        line(
            collectable.size*(collectable.x_pos+350),
            collectable.size*(collectable.y_pos+625),
            collectable.size*(collectable.x_pos+320),
            collectable.size*(collectable.y_pos+620));
    }

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    if((isLeft==true)&&(isPlummeting==false))
    {
        gameChar_x-=3
    }
    if((isRight==true)&&(isPlummeting==false))
    {
        gameChar_x+=3
    }
    if(floorPos_y>gameChar_y)
    {
        gameChar_y+=1;
        isFalling=true;
    }
    else
    {
        isFalling=false
    }
    
    if((gameChar_x>canyon.canyon_x)&&(gameChar_x<canyon.canyon_x+canyon.canyon_width)&&(gameChar_y>=floorPos_y))
    // 케릭터가 폭포를 만나면 아래로 떨어지도록 설계 점프를 했을때는 떨어지지 않도록 설계
    {
        isPlummeting=true
        console.log("Plummeting")
    }
    
//    if(dist(canyon.canyon_x+canyon.canyon_width/2,floorPos_y,gameChar_x,gameChar_y)==canyon.canyon_width/2)
//    {
//        isPlummeting=true
//        console.log("Plummeting")
//    }
    if((isPlummeting==true)&&gameChar_y<height)
    {
        gameChar_y+=2
    }





}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
	//open up the console to see how these work
	console.log("keyPressed: " + key); //assesment를 키로잡으면 한영이 되었을때 오류가 나므로 키코드로 잡아야 한다.
	console.log("keyPressed: " + keyCode);
    if(keyCode==65)
    {
        console.log("Pressed a")
        isLeft=true
    }
    if(keyCode==68)
    {
        console.log("Pressed d")
        isRight=true
    }
    if(keyCode==87)
    {
        console.log("Pressed w")
        isFalling=true
        if(floorPos_y==gameChar_y)
        {
            gameChar_y=gameChar_y-100
        }
    }
    if(keyCode==83)
    {
        console.log("Pressed w")
        isPlummeting=true
        
    }
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
    if(keyCode==65)
    {
        console.log("Released a")
        isLeft=false
    }
    if(keyCode==68)
    {
        console.log("Released d")
        isRight=false
    }
    if(keyCode==87)
    {
        console.log("Pressed w")
        isFalling=true
    
    }
    if(keyCode==83)
    {
        console.log("Pressed w")
        isPlummeting=false
    
    }
    
}
