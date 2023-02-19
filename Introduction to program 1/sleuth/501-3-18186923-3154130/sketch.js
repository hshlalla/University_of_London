/*

Officer: 3154130
CaseNum: 501-3-18186923-3154130

Case 501 - John Von Neuman - stage 4

This is our last chance to catch that killer kid.
Let's hope that John Von Neuman can identify the killer.
To speak to him follow Madame McCarthy’s advice below.

John was ever the keen chess player. Many an hour was spent considering his next move.
To speak to John beyond the grave you must place a chess piece in each of the dashed circles.
Use the image() and the piece variable command to place the pieces in their positions.
Do this by using two for loops in a nested pattern.
You will need to use some conditional statements in order to position each row to match the pattern.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()
 * if()

*/

var backgroundImg, piece;

function preload() {
    backgroundImg = loadImage("background.jpg");
    piece = loadImage("Piece.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);
    imageMode(CENTER);
}

function draw() {
    for(var i=0;i<10;i++)
        {
            for(var j=0;j<7;j++)
                {
                    if(j%2==1)
                        {                        
                            image(piece,644+i*68,348+j*56);
                        }
                    if(j%2==0)
                        {                        
                            image(piece,712+i*68,348+j*56);
                        }                    
                    
                    
                }
        }
    // add your for loop below

}
