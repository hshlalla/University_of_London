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
var treePos_y;

var clouds;

var mountain;

var cameraPosX = 0;


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
    
    collectable = {x_pos:750, y_pos: floorPos_y, size:0.4 , isFound : false};
    canyon = {canyon_x:30,  canyon_width:160};
    tree_x= [300,500,900,1150];
    treePos_y = height/2;
    
    clouds= {cloud_x:[100,200,600,800,1200],
             cloud_y:[100,30,150,40,150],
             cloud_size:[1,0.5,0.7,1,0.8]};
    
    mountain={mountain_x:[180,350,620,1000,1200],
              mountain_y:floorPos_y};
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
    
    push();
    translate(-cameraPosX,0);
    
    
    //Clouds 구름
    for(var i=0;i<clouds.cloud_x.length;i++){
        fill(220,225,255);
        ellipse(clouds.cloud_size[i]*(clouds.cloud_x[i]+62),
                clouds.cloud_size[i]*(clouds.cloud_y[i]),
                clouds.cloud_size[i]*126,
                clouds.cloud_size[i]*97);
        ellipse(clouds.cloud_size[i]*(clouds.cloud_x[i]+124),
                clouds.cloud_size[i]*(clouds.cloud_y[i]),
                clouds.cloud_size[i]*70,
                clouds.cloud_size[i]*60);
        ellipse(clouds.cloud_size[i]*(clouds.cloud_x[i]),
                clouds.cloud_size[i]*(clouds.cloud_y[i]+10),
                clouds.cloud_size[i]*70,
                clouds.cloud_size[i]*60);
    }
    
    
    //mountain 산
    for(var i=0;i<mountain.mountain_x.length;i++){
        //산
        fill(226, 219, 211);
        beginShape();
        curveVertex(mountain.mountain_x[i]+85,mountain.mountain_y);
        curveVertex(mountain.mountain_x[i]+85,mountain.mountain_y);
        curveVertex(mountain.mountain_x[i]+180,mountain.mountain_y-147);
        curveVertex(mountain.mountain_x[i]+200,mountain.mountain_y-187);
        curveVertex(mountain.mountain_x[i]+270,mountain.mountain_y-187);
        curveVertex(mountain.mountain_x[i]+290,mountain.mountain_y-147);
        curveVertex(mountain.mountain_x[i]+365,mountain.mountain_y);
        curveVertex(mountain.mountain_x[i]+365,mountain.mountain_y);
        endShape();
        fill(118, 148, 176);
        noStroke();
        beginShape();
        vertex(mountain.mountain_x[i]+85,mountain.mountain_y);
        vertex(mountain.mountain_x[i]+165,mountain.mountain_y-127);
        vertex(mountain.mountain_x[i]+195,mountain.mountain_y-147);
        vertex(mountain.mountain_x[i]+215,mountain.mountain_y-132);
        vertex(mountain.mountain_x[i]+260,mountain.mountain_y-142);
        vertex(mountain.mountain_x[i]+285,mountain.mountain_y-132);
        vertex(mountain.mountain_x[i]+288,mountain.mountain_y-152);
        vertex(mountain.mountain_x[i]+365,mountain.mountain_y);
        endShape(CLOSE);

    }
    
    
    //Trees
    for(var i=0; i < tree_x.length; i++){
        fill(150,100,50);
        ellipse(tree_x[i], treePos_y+125, 20, 40);
        ellipse(tree_x[i], treePos_y+95, 20, 40);
        ellipse(tree_x[i], treePos_y+45, 20, 40);
        ellipse(tree_x[i], treePos_y+65, 20, 40);

        fill(150,200,40,240);
        ellipse(tree_x[i]-52, treePos_y+27, 20, 20);
        ellipse(tree_x[i]+39, treePos_y-43, 40, 40);
        ellipse(tree_x[i]+34, treePos_y-70, 40, 40);
        ellipse(tree_x[i]-19, treePos_y-60, 40, 40);
        ellipse(tree_x[i]-36, treePos_y, 40, 40);
        
        fill(200,200,100);
        ellipse(tree_x[i]-9, treePos_y-7, 40, 40);
        ellipse(tree_x[i]+7,treePos_y+26,40,40);
        ellipse(tree_x[i]-30,treePos_y+33,40,40);
        ellipse(tree_x[i]-5,treePos_y-41,40,40);
        
        fill(100,200,100);
        ellipse(tree_x[i]+36,treePos_y,40,40);
        ellipse(tree_x[i]+16,treePos_y-60,40,40);
        ellipse(tree_x[i]+34,treePos_y+29,20,20);
        ellipse(tree_x[i]-38,treePos_y-10,40,40);
        
        fill(80,150,100);
        ellipse(tree_x[i]+13,treePos_y-74,40,40);
        ellipse(tree_x[i]+45,treePos_y-15,40,40);
        ellipse(tree_x[i]-4,treePos_y,40,40);
        ellipse(tree_x[i]+57,treePos_y+25,40,40);
        
        fill(150,200,180);
        ellipse(tree_x[i]+1,treePos_y-49,40,40);
        ellipse(tree_x[i]-24,treePos_y-29,40,40);
        ellipse(tree_x[i]+57,treePos_y+8,40,40);
        ellipse(tree_x[i]+14,treePos_y-41,40,40);
        
    }
    

	//canyon
    //폭포
    fill(0, 148, 176);
	noStroke();
    rect(canyon.canyon_x,floorPos_y,canyon.canyon_width,160,5);
    fill(70, 188, 255);
    rect(canyon.canyon_x+20,floorPos_y,canyon.canyon_width-40,150,10);
    
    


	//the game character
	if(isLeft && isFalling)
	{
        fill(255,239,213);
        ellipse(gameChar_x,gameChar_y-30,15,10); //얼굴 face
        fill(220,20,60)
        rect(gameChar_x-4,gameChar_y-23,7,15); //몸통 body
        fill(255,239,213)
        rect(gameChar_x-2.5,gameChar_y-28,5,5); //목 neck

        fill("black");
        arc(gameChar_x,gameChar_y-35,10,5,5,PI,CHORD/2); //모자 hat


        fill(85,107,47);
        rect(gameChar_x-10,gameChar_y-11,8,3); //왼쪽다리 left leg
        rect(gameChar_x,gameChar_y-8,8,3); //오른쪽다리 right leg


        fill(195,239,213);
        ellipse(gameChar_x-10,gameChar_y-9,4,5); //왼발 left foot
        ellipse(gameChar_x+9,gameChar_y-6.5,4,4); //오른발 right foot


        fill(255,239,213);
        strokeWeight(1)
        ellipse(gameChar_x-6,gameChar_y-18,10,3); //왼팔 left arm
        ellipse(gameChar_x+6,gameChar_y-18,10,3); //오른팔 right arm

        fill(190,239,253);
        strokeWeight(1)
        ellipse(gameChar_x-10,gameChar_y-18,3,4); //왼손 left hand
        ellipse(gameChar_x+11,gameChar_y-18,3,4); //오른손 right hand
        

        fill(0);
        rect(gameChar_x-5,gameChar_y-28,3,2); //입 mouse
        fill(245);
        fill(0);
        ellipse(gameChar_x-2,gameChar_y-31,2,2); //왼쪽눈 eye
        
	}
    
    
	else if(isRight && isFalling)
	{
        // add your jumping-right code
        fill(255,239,213);
        ellipse(gameChar_x,gameChar_y-30,15,10); //얼굴 face
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
        ellipse(gameChar_x+2,gameChar_y-31,2,2); //오른쪽눈

	}
    
    
	else if(isLeft)
	{
        // add your walking left code
        fill(255,239,213);
        ellipse(gameChar_x,gameChar_y-30,15,10); //얼굴
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
        
        
	}
    
	else if(isRight)
	{
        // add your walking right code

        fill(255,239,213);
        ellipse(gameChar_x,gameChar_y-30,15,10); //얼굴
        fill(220,20,60);
        rect(gameChar_x-4,gameChar_y-23,7,15); //몸통
        fill(255,239,213);
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
        strokeWeight(1);
        ellipse(gameChar_x+6,gameChar_y-15,10,3); //왼팔
        ellipse(gameChar_x,gameChar_y-18,10,3); //오른팔

        fill(190,239,253);
        strokeWeight(1);
        ellipse(gameChar_x+11,gameChar_y-14,3,4); //오른손
        ellipse(gameChar_x+6,gameChar_y-17,3,4); //왼손

        fill(0);
        rect(gameChar_x+4,gameChar_y-28,3,2); //입
        fill(245);
        fill(0);
        ellipse(gameChar_x+2,gameChar_y-31,2,2); //오른쪽눈

	}
    
    
	else if(isFalling || isPlummeting)
	{
        fill(255,239,213);
        ellipse(gameChar_x,gameChar_y-30,15,10); //얼굴 face
        fill(220,20,60);
        rect(gameChar_x-4,gameChar_y-23,7,15); //몸통 body
        fill(255,239,213);
        rect(gameChar_x-2.5,gameChar_y-28,5,5); //목 neck

        fill("black");
        arc(gameChar_x,gameChar_y-35,10,5,5,PI,CHORD/2); //모자 hat


        fill(85,107,47);
        rect(gameChar_x-4,gameChar_y-8,3,5); //왼쪽다리 left leg
        rect(gameChar_x,gameChar_y-8,3,5); //오른쪽다리 right leg


        fill(195,239,213);
        ellipse(gameChar_x-2,gameChar_y-1,5,4); //왼발 left foot
        ellipse(gameChar_x+2,gameChar_y-1,5,4); //오른발 right foot


        fill(255,239,213);
        strokeWeight(1)
        ellipse(gameChar_x-6,gameChar_y-18,10,3); //왼팔 left arm
        ellipse(gameChar_x+8,gameChar_y-18,10,3); //오른팔 right arm

        fill(190,239,253);
        strokeWeight(1)
        ellipse(gameChar_x+13,gameChar_y-18,3,4); //오른손 right hand
        ellipse(gameChar_x-10,gameChar_y-18,4,3); //왼손  left hand

        fill(0);
        rect(gameChar_x-0.5,gameChar_y-28,1,2); //입 mouse
        fill(245);
        fill(0);
        ellipse(gameChar_x-2,gameChar_y-31,2,2); //왼쪽눈 left eye
        ellipse(gameChar_x+2,gameChar_y-31,2,2); //오른쪽눈  right eye

	}
    
	else
	{
        // add your standing front facing code
        fill(255,239,213);
        ellipse(gameChar_x,gameChar_y-30,15,10); //얼굴
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

        //peddle
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
    pop();

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    if((isLeft==true)&&(isPlummeting==false))
    {
        gameChar_x-=3
        cameraPosX-=3
    }
    if((isRight==true)&&(isPlummeting==false))
    {
        gameChar_x+=3
        cameraPosX+=3
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
    }
    if(isPlummeting==true)
    {
        gameChar_y+=2
    }
    
//    if((isPlummeting==true)&&gameChar_y<height)
//    {
//        gameChar_y+=2
//    }





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