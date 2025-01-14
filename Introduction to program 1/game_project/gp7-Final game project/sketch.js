/*
gp7- final game project
- Copy your game project code into this file
- for the p5.Sound library look here https://p5js.org/reference/#/libraries/p5.sound
- for finding cool sounds perhaps look here
https://freesound.org/


*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var lives;
var enemies;

var platforms;

var collectables;
var canyons;
var trees;
var clouds;
var mountain;

var cameraPosX;

var game_score;
var flagpole;
var ost_sound;
var slide_music;
var game_page;
var jump_sound;
var falling_sound;
var item_sound;
var revival_sound;
var hidden_items;

function preload()
{
    soundFormats('mp3','wav');
    
    //load your sounds here
    ost_sound = loadSound("assets/gameproject_ost.mp3");
    ost_sound.setVolume(0.5);
    jump_sound = loadSound("assets/jump.wav");
    jump_sound.setVolume(0.1);
    falling_sound = loadSound("assets/isfalling.wav");
    falling_sound.setVolume(0.1);
    item_sound = loadSound("assets/item_get2.wav");
    item_sound.setVolume(0.5);
    revival_sound = loadSound("assets/regen.wav");
    revival_sound.setVolume(0.1);

}


function setup()
{

	createCanvas(1024, 576);

	floorPos_y = height * 3/4; 
    lives = 4;
    game_page=true;
    startGame();
    Enermy_character();


}

function draw()
{   
    if(game_page)
        {
            dragmouse_startmusic();  
        }
    
    else
        {
            textSize(15);
            fill(0,0,255);
            
            ellipse(100,100,100,100);
            background(50,155,205); //fill the sky blue
            noStroke();
            fill(100,155,255);
            rect(0, floorPos_y, width, height - floorPos_y); 

            push();
            translate(-cameraPosX,0);

            drawClouds();
            drawMountains();
            drawTrees();

            for(var i=0;i<platforms.length;i++)
            {

                platforms[i].draw();
            }


            //canyon
            //폭포
            for (var j =0; j<canyons.length; j++){
                drawCanyon(canyons[j]);
                checkCanyon(canyons[j]);
            }

            //the game character
            drawGameChar();
            
            //translate(width/2,height/2);

            var v = createVector(gameChar_x, gameChar_y);
            v.normalize();
            tamagotchi.draw(v);
            
            
            

            for (var i=0;i<3;i++){
                if(!collectables[i].isFound)//이게 없으면 아이템 자리에 서있으면 계속 점수가 올라간다.
                    {
                        checkCollectable(collectables[i]);
                        drawCollectable(collectables[i]); 
                    }
                if(!hidden_items[i].isFound)
                    {
                        checkCollectable(hidden_items[i]);
                        drawHiddenItems(hidden_items[i]); 
                    }
                else
                    {
                        
                        noStroke();
                        text("I will kill you!!",-1250,350);
                        text("You can on cloude",-680,250);
                    }

            }
            renderFlagpole(flagpole);

            if(flagpole.isReached==false)
                {
                    checkFlagpole(flagpole);
                }

            for(var i=0;i<enemies.length; i++)
                {
                    enemies[i].draw();
                    var isContact = enemies[i].checkContact(gameChar_x,gameChar_y);

                    if(isContact)
                        {
                            if(lives > 0)
                            {
                                startGame();
                                break;
                            }

                        }
                }
            fill(0);
            text("Do not Come closer!! I'm scared",18,200);
            fill(255);
            text("If you want to cross the canyons, you have to come on the clouds",1250,450,200,120);




            pop();

            checkPlayerDie();

            for (var i=0; i <lives;i++)
                {

                    noStroke();
                    fill(255);

                    fill(255,55,0);
                    ellipse(28+i*30,55,10,10);
                }




            fill(255);
            noStroke();
            text("Score: " +game_score,20,20);
            text("your life: " + lives,20,40);
            

            if(lives<1)
            {
                textSize(50);
                text("Game over. Press space to continue.",width/3,height/2,400);
                return;
            }


            if(flagpole.isReached)
            {
                textSize(50);
                text("Level complete..",width/3,height/2,400);
                return;
            }

            ///////////INTERACTION CODE//////////
            //Put conditional statements to move the game character below here
            if((isLeft==true)&&(isPlummeting==false))
            {
                gameChar_x-=3;
                cameraPosX-=3;
            }
            if((isRight==true)&&(isPlummeting==false))
            {
                gameChar_x+=3;
                cameraPosX+=3;
            }
            if(floorPos_y>gameChar_y)
            {
                var isContact = false;
                for(var i=0;i<platforms.length;i++)
                    {

                    if(platforms[i].checkContact(gameChar_x,gameChar_y)==true)
                        {
                            isContact = true;
                            break;
                        }
                    }
                if(isContact==false)
                    {
                        gameChar_y+=3;
                        isFalling=true;   
                    }
                else
                {
                    isFalling=false;
                }

            }
            else
            {
                isFalling=false;
            }
        }

}


function keyPressed()
{
    if(flagpole.isReached && keyCode==32)
    {
        console.log("conglatulation");
    }
    else if(lives == 0 && keyCode==32)
    {
        startGame();
        lives=3;
    }

	console.log("keyPressed: " + key); //assesment를 키로잡으면 한영이 되었을때 오류가 나므로 키코드로 잡아야 한다.
    if(keyCode==65)
    {
        console.log("Pressed a");
        isLeft=true;
    }
    if(keyCode==68)
    {
        console.log("Pressed d");
        isRight=true;
        tamagotchi.shrink();
    }
    if(keyCode==87)
    {
        console.log("Pressed w");
        if(!isFalling)
        {
            jump_sound.play();
            gameChar_y=gameChar_y-130;
        }
    }

}

function keyReleased()
{
	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
    if(keyCode==65)
    {
        console.log("Released a");
        isLeft=false;
    }
    if(keyCode==68)
    {
        console.log("Released d");
        isRight=false;
    }
}

function mousePressed()
{
    slide_music=true;
}
function drawGameChar()
{
	if(isLeft && isFalling)
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
        rect(gameChar_x-10,gameChar_y-11,8,3); //왼쪽다리 left leg
        rect(gameChar_x,gameChar_y-8,8,3); //오른쪽다리 right leg


        fill(195,239,213);
        ellipse(gameChar_x-10,gameChar_y-9,4,5); //왼발 left foot
        ellipse(gameChar_x+9,gameChar_y-6.5,4,4); //오른발 right foot


        fill(255,239,213);
        strokeWeight(1);
        ellipse(gameChar_x-6,gameChar_y-18,10,3); //왼팔 left arm
        ellipse(gameChar_x+6,gameChar_y-18,10,3); //오른팔 right arm

        fill(190,239,253);
        strokeWeight(1);
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
        fill(220,20,60);
        rect(gameChar_x-4,gameChar_y-23,7,15); //몸통
        fill(255,239,213);
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
        strokeWeight(1);
        ellipse(gameChar_x+6,gameChar_y-18,10,3); //오른팔
        ellipse(gameChar_x-6,gameChar_y-18,10,3); //왼팔

        fill(190,239,253);
        strokeWeight(1);
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
        ellipse(gameChar_x-6,gameChar_y-15,10,3); //왼팔
        ellipse(gameChar_x,gameChar_y-18,10,3); //오른팔

        fill(190,239,253);
        strokeWeight(1);
        ellipse(gameChar_x-10,gameChar_y-14,3,4); //오른손
        ellipse(gameChar_x-6,gameChar_y-17,3,4); //왼손

        fill(0);
        rect(gameChar_x-5,gameChar_y-28,3,2); //입
        fill(245);
        fill(0);
        ellipse(gameChar_x-2,gameChar_y-31,2,2); //왼쪽눈
        tamagotchi.grow();
        
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
        tamagotchi.shrink();

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
        strokeWeight(1);
        ellipse(gameChar_x-6,gameChar_y-18,10,3); //왼팔 left arm
        ellipse(gameChar_x+8,gameChar_y-18,10,3); //오른팔 right arm

        fill(190,239,253);
        strokeWeight(1);
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
        fill(220,20,60);
        rect(gameChar_x-5.5,gameChar_y-23,12,15); //몸통
        fill(255,239,213);
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
        strokeWeight(1);
        ellipse(gameChar_x-7,gameChar_y-13,3,10); //왼팔
        ellipse(gameChar_x+8,gameChar_y-13,3,10); //오른팔

        fill(190,239,253);
        strokeWeight(1);
        ellipse(gameChar_x+8,gameChar_y-7,4,3); //오른손
        ellipse(gameChar_x-7,gameChar_y-7,4,3); //왼손

        fill(0);
        rect(gameChar_x-0.5,gameChar_y-28,1,2); //입
        fill(245);
        fill(0);
        ellipse(gameChar_x-2,gameChar_y-31,2,2); //왼쪽눈
        ellipse(gameChar_x+2,gameChar_y-31,2,2); //오른쪽눈

	}
}
function drawClouds()
{
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
        ellipse(clouds.cloud_x[i], clouds.cloud_y[i] + 40, 60, 60);
        ellipse(clouds.cloud_x[i] + 40, clouds.cloud_y[i] + 40, 60, 60);
        ellipse(clouds.cloud_x[i] + 80, clouds.cloud_y[i] + 40, 60, 60);
        ellipse(clouds.cloud_x[i] + 120, clouds.cloud_y[i] + 40, 60, 60);
        ellipse(clouds.cloud_x[i] + 160, clouds.cloud_y[i] + 40, 60, 60);
        ellipse(clouds.cloud_x[i] + 40, clouds.cloud_y[i] + 20, 60, 60);
        ellipse(clouds.cloud_x[i] + 80, clouds.cloud_y[i] + 20, 60, 60);
        ellipse(clouds.cloud_x[i] + 80, clouds.cloud_y[i] + 60, 60);
    } 
}
function drawMountains()
{
    //mountain 산
    for(var i=0;i<mountain.mountain1_x.length;i++){
        //산
        fill(226, 219, 251);
        beginShape();
        curveVertex(mountain.mountain1_x[i]+85,mountain.mountain_y);
        curveVertex(mountain.mountain1_x[i]+85,mountain.mountain_y);
        curveVertex(mountain.mountain1_x[i]+180,mountain.mountain_y-147);
        curveVertex(mountain.mountain1_x[i]+200,mountain.mountain_y-187);
        curveVertex(mountain.mountain1_x[i]+270,mountain.mountain_y-187);
        curveVertex(mountain.mountain1_x[i]+290,mountain.mountain_y-147);
        curveVertex(mountain.mountain1_x[i]+365,mountain.mountain_y);
        curveVertex(mountain.mountain1_x[i]+365,mountain.mountain_y);
        endShape();
        fill(118, 148, 176);
        noStroke();
        beginShape();
        vertex(mountain.mountain1_x[i]+85,mountain.mountain_y);
        vertex(mountain.mountain1_x[i]+165,mountain.mountain_y-127);
        vertex(mountain.mountain1_x[i]+195,mountain.mountain_y-147);
        vertex(mountain.mountain1_x[i]+215,mountain.mountain_y-132);
        vertex(mountain.mountain1_x[i]+260,mountain.mountain_y-142);
        vertex(mountain.mountain1_x[i]+285,mountain.mountain_y-132);
        vertex(mountain.mountain1_x[i]+288,mountain.mountain_y-152);
        vertex(mountain.mountain1_x[i]+365,mountain.mountain_y);
        endShape(CLOSE);
    }
    for(var i=0;i<mountain.mountain2_x.length;i++){
        fill(120,200);
        triangle(mountain.mountain2_x[i], mountain.mountain_y,
		mountain.mountain2_x[i] + mountain.width[i], mountain.mountain_y,
		mountain.mountain2_x[i] + (mountain.width[i] / 2), mountain.mountain_y - mountain.height[i])
        fill(226, 219, 251,220);
        triangle(mountain.mountain2_x[i]+50, mountain.mountain_y-160,
		mountain.mountain2_x[i] + mountain.width[i]-50, mountain.mountain_y-160,
		mountain.mountain2_x[i] + (mountain.width[i] / 2), mountain.mountain_y - mountain.height[i])}

    
}
function drawTrees()
{
    
    //Trees
    for(var i=0; i < trees.tree_x.length; i++){
        fill(150,100,150);
        ellipse(trees.tree_x[i], trees.treePos_y+125, 20, 40);
        ellipse(trees.tree_x[i], trees.treePos_y+95, 20, 40);
        ellipse(trees.tree_x[i], trees.treePos_y+45, 20, 40);
        ellipse(trees.tree_x[i], trees.treePos_y+65, 20, 40);

        fill(150,200,140,240);
        ellipse(trees.tree_x[i]-52, trees.reePos_y+27, 20, 20);
        ellipse(trees.tree_x[i]+39, trees.treePos_y-43, 40, 40);
        ellipse(trees.tree_x[i]+34, trees.treePos_y-70, 40, 40);
        ellipse(trees.tree_x[i]-19, trees.treePos_y-60, 40, 40);
        ellipse(trees.tree_x[i]-36, trees.treePos_y, 40, 40);
        
        fill(200,200,200);
        ellipse(trees.tree_x[i]-9, trees.treePos_y-7, 40, 40);
        ellipse(trees.tree_x[i]+7,trees.treePos_y+26,40,40);
        ellipse(trees.tree_x[i]-30,trees.treePos_y+33,40,40);
        ellipse(trees.tree_x[i]-5,trees.treePos_y-41,40,40);
        
        fill(100,200,200);
        ellipse(trees.tree_x[i]+36,trees.treePos_y,40,40);
        ellipse(trees.tree_x[i]+16,trees.treePos_y-60,40,40);
        ellipse(trees.tree_x[i]+34,trees.treePos_y+29,20,20);
        ellipse(trees.tree_x[i]-38,trees.treePos_y-10,40,40);
        
        fill(80,150,200);
        ellipse(trees.tree_x[i]+13,trees.treePos_y-74,40,40);
        ellipse(trees.tree_x[i]+45,trees.treePos_y-15,40,40);
        ellipse(trees.tree_x[i]-4,trees.treePos_y,40,40);
        ellipse(trees.tree_x[i]+57,trees.treePos_y+25,40,40);
        
        fill(150,200,280);
        ellipse(trees.tree_x[i]+1,trees.treePos_y-49,40,40);
        ellipse(trees.tree_x[i]-24,trees.treePos_y-29,40,40);
        ellipse(trees.tree_x[i]+57,trees.treePos_y+8,40,40);
        ellipse(trees.tree_x[i]+14,trees.treePos_y-41,40,40);
        
    }    
}
function drawHiddenItems(hidden_item)
{
    if(hidden_item.isFound == false)
    {
                // 보석
        noStroke();
        fill(130, 237, 252, 205);
        triangle(
            hidden_item.x_pos - 20, hidden_item.y_pos - 58,
            hidden_item.x_pos - 30, hidden_item.y_pos - 38,
            hidden_item.x_pos - 10, hidden_item.y_pos - 38);

        noStroke();
        fill(157, 237, 252, 205);
        triangle(
            hidden_item.x_pos + 0, hidden_item.y_pos - 58,
            hidden_item.x_pos - 10, hidden_item.y_pos - 38,
            hidden_item.x_pos + 10, hidden_item.y_pos - 38);

        noStroke();
        fill(95, 207, 152, 205);
        triangle(
            hidden_item.x_pos + 20, hidden_item.y_pos - 58,
            hidden_item.x_pos + 10, hidden_item.y_pos - 38,
            hidden_item.x_pos + 30, hidden_item.y_pos - 38);

        noStroke();
        fill(102, 222, 152, 205);
        triangle(
            hidden_item.x_pos - 10, hidden_item.y_pos - 38,
            hidden_item.x_pos - 20, hidden_item.y_pos - 58,
            hidden_item.x_pos + 0, hidden_item.y_pos - 58);
        noStroke();
        fill(102, 222, 152, 205);
        triangle(
            hidden_item.x_pos + 10, hidden_item.y_pos - 38,
            hidden_item.x_pos + 0, hidden_item.y_pos - 58,
            hidden_item.x_pos + 20, hidden_item.y_pos - 58);
        
        noStroke();
        fill(157, 237, 153, 205);
        triangle(
            hidden_item.x_pos + 0, hidden_item.y_pos,
            hidden_item.x_pos - 30, hidden_item.y_pos - 38,
            hidden_item.x_pos - 10, hidden_item.y_pos - 38);

        noStroke();
        fill(134, 237, 153, 255);
        triangle(
            hidden_item.x_pos + 0, hidden_item.y_pos,
            hidden_item.x_pos - 10, hidden_item.y_pos - 38,
            hidden_item.x_pos + 10, hidden_item.y_pos - 38);

        noStroke();
        fill(95, 207, 152, 255);
        triangle(
            hidden_item.x_pos + 0, hidden_item.y_pos,
            hidden_item.x_pos + 10, hidden_item.y_pos - 38,
            hidden_item.x_pos + 30, hidden_item.y_pos - 38);
           
    }

}
function drawCollectable(t_collectable)
{

    
    if(t_collectable.isFound == false)
    {

    // 수집가능한 아이템 t_collectable item

        stroke(0);
        strokeWeight(4);
        fill(200,200,100);

        ellipse(
            t_collectable.size*(t_collectable.x_pos-34),
            t_collectable.size*(t_collectable.y_pos-9),
            t_collectable.size*16,
            t_collectable.size*16); //뒷타이어

        ellipse(
            t_collectable.size*(t_collectable.x_pos+12),
            t_collectable.size*(t_collectable.y_pos-9),
            t_collectable.size*16,
            t_collectable.size*16); //앞타이어
    

        noStroke();
        fill(200,200,100);
        ellipse(
            t_collectable.size*(t_collectable.x_pos-34),
            t_collectable.size*(t_collectable.y_pos-9),
            t_collectable.size*10,
            t_collectable.size*10); //뒷바퀴 살
        ellipse(
            t_collectable.size*(t_collectable.x_pos+12),
            t_collectable.size*(t_collectable.y_pos-9),
            t_collectable.size*10,
            t_collectable.size*10); //앞바퀴 살
        stroke(0,0,0,200);
        strokeWeight(5);
        line(
            t_collectable.size*(t_collectable.x_pos-34),
            t_collectable.size*(t_collectable.y_pos-9),
            t_collectable.size*(t_collectable.x_pos-22),
            t_collectable.size*(t_collectable.y_pos-25)); //뒷바퀴 연결되는 바디프레임
        line(
            t_collectable.size*(t_collectable.x_pos-22),
            t_collectable.size*(t_collectable.y_pos-25),
            t_collectable.size*(t_collectable.x_pos+10),
            t_collectable.size*(t_collectable.y_pos-25)); //가장 윗프레임
        line(
            t_collectable.size*(t_collectable.x_pos+12),
            t_collectable.size*(t_collectable.y_pos-9),
            t_collectable.size*(t_collectable.x_pos+10),
            t_collectable.size*(t_collectable.y_pos-37)); //앞프레임
        line(
            t_collectable.size*(t_collectable.x_pos-10),
            t_collectable.size*(t_collectable.y_pos-9),
            t_collectable.size*(t_collectable.x_pos-22),
            t_collectable.size*(t_collectable.y_pos-25)); //안장쪽 뒷프레임
        line(
            t_collectable.size*(t_collectable.x_pos-34),
            t_collectable.size*(t_collectable.y_pos-9),
            t_collectable.size*(t_collectable.x_pos-10),
            t_collectable.size*(t_collectable.y_pos-9)); //페달쪽 뒷프레임
        line(
            t_collectable.size*(t_collectable.x_pos-10),
            t_collectable.size*(t_collectable.y_pos-9),
            t_collectable.size*(t_collectable.x_pos+10),
            t_collectable.size*(t_collectable.y_pos-25)); //안장쪽 앞프레임
        line(
            t_collectable.size*(t_collectable.x_pos+18),
            t_collectable.size*(t_collectable.y_pos-39),
            t_collectable.size*(t_collectable.x_pos+10),
            t_collectable.size*(t_collectable.y_pos-39)); //손잡이
        arc(
            t_collectable.size*(t_collectable.x_pos+18),
            t_collectable.size*(t_collectable.y_pos-33),
            t_collectable.size*12,
            t_collectable.size*12,
            3 * PI / 2, 2 * PI + PI / 2);//손잡이 프레임//

        strokeWeight(t_collectable.size*3);
        stroke(24,124,220);
        line(
            t_collectable.size*(t_collectable.x_pos-6),
            t_collectable.size*(t_collectable.y_pos-27),
            t_collectable.size*(t_collectable.x_pos-26),
            t_collectable.size*(t_collectable.y_pos-27)); //안장
        strokeWeight(3);
        line(
            t_collectable.size*(t_collectable.x_pos+12),
            t_collectable.size*(t_collectable.y_pos-9), 
            t_collectable.size*(t_collectable.x_pos+10),
            t_collectable.size*(t_collectable.y_pos-37)); //앞프레임 음영
        line(
            t_collectable.size*(t_collectable.x_pos-34),
            t_collectable.size*(t_collectable.y_pos-9),
            t_collectable.size*(t_collectable.x_pos-22),
            t_collectable.size*(t_collectable.y_pos-25)); //뒷프레임 음영
        line(
            t_collectable.size*(t_collectable.x_pos-10),
            t_collectable.size*(t_collectable.y_pos-9),
            t_collectable.size*(t_collectable.x_pos+10),
            t_collectable.size*(t_collectable.y_pos-25)); //페달쪽 음영


        // small middle wheels
        fill(10,255,255);
        ellipse(
            t_collectable.size*(t_collectable.x_pos-34),
            t_collectable.size*(t_collectable.y_pos-9),
            t_collectable.size*2,
            t_collectable.size*2); // 왼쪽
        ellipse(
            t_collectable.size*(t_collectable.x_pos+12),
            t_collectable.size*(t_collectable.y_pos-9),
            t_collectable.size*2,
            t_collectable.size*2); // 오른쪽
        // chain wheel
        strokeWeight(4);
        fill(10);
        ellipse(
            t_collectable.size*(t_collectable.x_pos-10),
            t_collectable.size*(t_collectable.y_pos-9),
            t_collectable.size*6,
            t_collectable.size*6);
        strokeWeight(4);
        fill(10);
        ellipse(
            t_collectable.size*(t_collectable.x_pos-10),
            t_collectable.size*(t_collectable.y_pos-9),
            t_collectable.size*3,
            t_collectable.size*3);
        //손잡이
        line(
            t_collectable.size*(t_collectable.x_pos+18),
            t_collectable.size*(t_collectable.y_pos-39),
            t_collectable.size*(t_collectable.x_pos+10),
            t_collectable.size*(t_collectable.y_pos-39));
        arc(t_collectable.size*(t_collectable.x_pos+18),
            t_collectable.size*(t_collectable.y_pos-33),
            t_collectable.size*12,
            t_collectable.size*12,
            3 * PI / 2, 2 * PI + PI / 2);

        //peddle
        strokeWeight(5);
        line(
            t_collectable.size*(t_collectable.x_pos-10),
            t_collectable.size*(t_collectable.y_pos-9),
            t_collectable.size*(t_collectable.x_pos-22),
            t_collectable.size*(t_collectable.y_pos-11)); //페달
        stroke(20,205,205);
        strokeWeight(2);
        line(
            t_collectable.size*(t_collectable.x_pos-10),
            t_collectable.size*(t_collectable.y_pos-9),
            t_collectable.size*(t_collectable.x_pos-22),
            t_collectable.size*(t_collectable.y_pos-11));
    }
        

}
function drawCanyon(t_canyon)
{
    fill(0, 48, 6,80);
	noStroke();
    rect(t_canyon.canyon_x,floorPos_y,t_canyon.canyon_width,160,5);
    fill(30, 80, 210,80);
    rect(t_canyon.canyon_x+20,floorPos_y,t_canyon.canyon_width-40,150,10);    
}

//interection
function checkCollectable(t_collectable)
{

    if(dist(t_collectable.x_pos,
            t_collectable.y_pos,
            gameChar_x,gameChar_y ) <20)
    {
        t_collectable.isFound = true;
        game_score=game_score+1;
        item_sound.play();
    }    
}

function checkCanyon(t_canyon)
{
    if((gameChar_x>t_canyon.canyon_x)&&(gameChar_x<t_canyon.canyon_x+t_canyon.canyon_width)&&(gameChar_y>=floorPos_y))
    // 케릭터가 폭포를 만나면 아래로 떨어지도록 설계 점프를 했을때는 떨어지지 않도록 설계
    {
        isPlummeting=true;
        falling_sound.play();
    }
    
    if((isPlummeting==true)&&gameChar_y<(height+gameChar_y))
    {
        gameChar_y+=3;
    }    
}

function renderFlagpole(flag)
{
    push();
    strokeWeight(5);
    stroke(180);
    line(flag.x_pos,floorPos_y,flag.x_pos,floorPos_y-250);
    fill(255,90,40,200);
    noStroke();
    
    if(flagpole.isReached)
        {
            rect(flag.x_pos,floorPos_y-250,30,20);
        }
    else
        {
            rect(flag.x_pos,floorPos_y-20,30,20);
        }
    pop();
}

function checkFlagpole(flag)
{
    var d = abs(gameChar_x - flag.x_pos);
    if(d<15)
        {
            flag.isReached = true;
        }
}

function checkPlayerDie()
{
    if(gameChar_y>height)
    {
        if(lives>0)
        {
            //lives= lives-1;
            startGame();
        }
        

    }
    
}

function createPlatforms(x, y, length)
{
    var p = {
        x: x,
        y: y,
        length: length,
        draw: function(){
            fill(25,100,255,1);
            rect(this.x,this.y, this.length, 20);
        },
        checkContact: function(gc_x,gc_y)
            {
            if(gc_x > this.x && gc_x < this.x+this.length)
                {
                    var d =this.y - gc_y;
                    if(d >= 0&& d< 5)
                        {
                            return true;
                        }
                    
                }
                return false;
            }
    }
    
    return p;
}

function startGame()
{
    
    gameChar_x = width/2;
	gameChar_y = floorPos_y; 

    
    cameraPosX =0;
    game_score =0;
    isLeft = false;
    isRight =false;
    isFalling = false;
    isPlummeting = false;
    
    collectables = [{x_pos:0, y_pos: floorPos_y, size:1 , isFound : false},
                   {x_pos:650, y_pos: floorPos_y, size:1 , isFound : false},
                   {x_pos:1200, y_pos: floorPos_y, size:1 , isFound : false}];
    hidden_items = [{x_pos:-1150, y_pos: floorPos_y, size:1 , isFound : false},
                   {x_pos:-1250, y_pos: floorPos_y, size:1 , isFound : false},
                   {x_pos:-1200, y_pos: floorPos_y, size:1 , isFound : false}];
    canyons = [{canyon_x:30,  canyon_width:160},
              {canyon_x:330,  canyon_width:70},
              {canyon_x:730,  canyon_width:70},
              {canyon_x:1230,  canyon_width:240}];
    
    platforms = [];
    
    platforms.push(createPlatforms(-920,floorPos_y-100,220));
    platforms.push(createPlatforms(-720,floorPos_y-200,220));
    platforms.push(createPlatforms(-520,floorPos_y-300,240));
    platforms.push(createPlatforms(-240,floorPos_y-360,240));
    
    platforms.push(createPlatforms(-10,floorPos_y-330,120));
    platforms.push(createPlatforms(-10,floorPos_y-250,220));
    platforms.push(createPlatforms(30,floorPos_y-100,150));
    platforms.push(createPlatforms(190,floorPos_y-360,420));
    platforms.push(createPlatforms(580,floorPos_y-350,220));
    platforms.push(createPlatforms(780,floorPos_y-330,230));
    platforms.push(createPlatforms(880,floorPos_y-400,120));
    platforms.push(createPlatforms(1070,floorPos_y-370,240));

    trees = {tree_x: [-1300,300,500,900,1150],
             treePos_y:height/2};

    
    clouds= {cloud_x:[-900,-700,-500,-200,0,200,400,600,800,1100,1600],
             cloud_y:[300,200,100,30,150,40,10,50,80,30,150],
             cloud_size:[1,0.5,1,0.5,0.7,0.2,0.8,0.7,0.6,0.8,0.3]};
    
    mountain={mountain1_x:[180,350,620,1000,1200],
              mountain2_x:[-400,-250,1500,1650],
              mountain_y:floorPos_y,
             height:[320,200,320,200],
             width:[230,130,230,130]}
    
    flagpole = {isReached:false,x_pos:1500};
    lives -=1 
    enemies = [];
    enemies.push(new Enemy(-1300,floorPos_y,200));
    enemies.push(new Enemy(180,floorPos_y,150));
    enemies.push(new Enemy(920,floorPos_y,300));
    
}

function Enemy(x,y,range,boost)
{
    this.x = x;
    this.y = y;
    this.range = range;
    
    this.currentX = x;
    this.inc = 2;
    
    this.update = function()
    {
        this.currentX += this.inc;
        if(this.currentX >= this.x + this.range)
            {
                this.inc = -2;
            }
        else if(this.currentX < this.x)
            {
                this.inc =2;
            }
        
    }
    this.draw = function()
    {
        this.update();
        //팔
        fill(253, 181, 147);
        rect(this.currentX - 15, this.y - 38, 8, 20, 300);

        fill(253, 181, 147);
        rect(this.currentX + 7.5, this.y - 38, 20, 8, 300);

        fill(224, 24, 80);
        rect(this.currentX - 10, this.y - 44, 20, 30);
            
        // 칼
        
        fill(224, 25, 55);
        rect(this.currentX + 22, this.y - 80, 15, 30);
        
        fill(80);
        rect(this.currentX + 22, this.y - 80, 3, 50);
        
        //다리
        fill(24,80,224);
        rect(this.currentX + 2, this.y - 16, 8, 15);

        fill(24,80,224);
        rect(this.currentX - 10, this.y - 16, 8, 15);

        //얼굴
        fill(254, 215, 180);
        ellipse(this.currentX, this.y - 51, 25, 20);
        fill(0,0,50);
        rect(this.currentX-13, this.y - 75, 26, 20);
        
        


        //입
        fill(0, 0, 0);
        rect(this.currentX-10, this.y - 47, 20, 2);
        
        
        fill(0, 0, 0);
        arc(this.currentX - 6, this.y - 0, 10.0, 10.5, PI, 0);

        fill(0, 0, 0);
        arc(this.currentX + 6, this.y - 0, 10.0, 10.5, PI, 0);

        fill(0, 0, 0);
        ellipse(this.currentX - 5, this.y - 52, 2.5, 5);

        fill(0, 0, 0);
        ellipse(this.currentX + 5, this.y - 52, 2.5, 5);
    }
    
    this.checkContact = function(gc_x,gc_y)
    {
        var d = dist(gc_x,gc_y,this.currentX,this.y);
        if(d<50)
            {
                return true;
            }
        return false;
    }
}

function dragmouse_startmusic() 
{
    background(constrain(mouseX,10,900)/4);
    textSize(50)

    text("Drag your mouse Right!",width/2 - 300, height - 310 )
    fill(255);
    rect(width/2 - 300, height - 300, 600, 40);
    if(mouseX < 812 && mouseX > width/2 - 300 && mouseY<(height-260)&& mouseY>(height-300)) 
        {
            fill(0)
            rect(mouseX - 5, 275, 10, 40);
            if((mouseX>790)&&(slide_music==true))
                {
                    ost_sound.play();
                    slide_music=false;
                    game_page=false;
                }
        }
    else
        {
            rect(width/2 - 300, 275, 10, 40);
        }
    
}

function Enermy_character()
{
    noStroke();
    tamagotchi = {
        
        points: [],
        size: 100,
        
        setup: function()
        {
            
            for(var i = 0; i < 36; i++)
            {
                var v = createVector(0,random(0.75,1));
                var r = (PI * 2 * i)/36; 
                v.rotate(r);
                console.log(v);
                this.points.push(v);
            }
        },
        
        draw: function(eyeDirection)
        {

            fill(128,0,128,100);
            
            beginShape();
            for(var i = 0; i < this.points.length; i++)
            {
                var v = p5.Vector.mult(this.points[i], this.size);
                
                curveVertex(v.x+100,v.y+300);
            }
            endShape();
            
            eyeDirection.mult((this.size * 0.07)/2);
            
            fill(255);
            ellipse(-this.size * 0.2+100, -this.size * 0.1+300, this.size * 0.15);
            ellipse(this.size * 0.2+100, -this.size * 0.1+300, this.size * 0.15);
            
            fill(0);
            ellipse(
                -this.size * 0.2 + (eyeDirection.x+100), 
                -this.size * 0.1 + (eyeDirection.y+300), 
                this.size * 0.05);
            ellipse(
                this.size * 0.2 + (eyeDirection.x+100), 
                -this.size * 0.1 + (eyeDirection.y+300), 
                this.size * 0.05);
            
        },
        
        grow: function()
        {
            this.size *= random(1,1.001);
            
            var rot = random(-0.01,0.01);
            
            for(var i = 0; i < this.points.length; i++)
            {
                this.points[i].rotate(rot);
            }
        },
      
        shrink: function()
        {
            this.size *= random(0.9995,1);
            this.size = max(this.size, 30);
            var rot = random(-0.01,0.01);
            
            for(var i = 0; i < this.points.length; i++)
            {
                this.points[i].rotate(rot);
            }
        }
//        
    };
    tamagotchi.setup();
}