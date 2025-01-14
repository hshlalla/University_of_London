/*
801
Stage 4: The Marriage of Figaro

Officer: 3154130
CaseNum: 801-3-25237643-3154130

We have a chance to record the powerful Order of Tukey before the curtain comes down on the Marriage of Figaro. They might be the most influential group in console city but they still have their quirks and will be spotable thanks their trademark earrings.

Our guy on the inside has only been able to provide us with the ticket stubs. They are stored in gangMember moving through the rows in order from left to right. Ticket stubbs are marked with true if they are in the gang. It’ll be tough but I’m sure you are up to it kid!

- Set the spotlights to shine on the members of the order. 
- Do this by setting the located  property of the element in operaBuffs to true. 
- You must use a nested for loop to pick out the members of the order


Complete the case using:
For loop (nested)
operaBuffs[ ][ ]
You can create an additional variable if it helps.


*/

var crowdImg;
var spotlight;

var operaBuffs = [ [ { x: 50, y: 50, located: false} , { x: 150, y: 50, located: false} , { x: 250, y: 50, located: false} , { x: 350, y: 50, located: false} , { x: 450, y: 50, located: false} , { x: 550, y: 50, located: false} , { x: 650, y: 50, located: false} , { x: 750, y: 50, located: false} , { x: 850, y: 50, located: false} , { x: 950, y: 50, located: false}  ], [ { x: 50, y: 140, located: false} , { x: 150, y: 140, located: false} , { x: 250, y: 140, located: false} , { x: 350, y: 140, located: false} , { x: 450, y: 140, located: false} , { x: 550, y: 140, located: false} , { x: 650, y: 140, located: false} , { x: 750, y: 140, located: false} , { x: 850, y: 140, located: false} , { x: 950, y: 140, located: false}  ], [ { x: 50, y: 230, located: false} , { x: 150, y: 230, located: false} , { x: 250, y: 230, located: false} , { x: 350, y: 230, located: false} , { x: 450, y: 230, located: false} , { x: 550, y: 230, located: false} , { x: 650, y: 230, located: false} , { x: 750, y: 230, located: false} , { x: 850, y: 230, located: false} , { x: 950, y: 230, located: false}  ], [ { x: 50, y: 320, located: false} , { x: 150, y: 320, located: false} , { x: 250, y: 320, located: false} , { x: 350, y: 320, located: false} , { x: 450, y: 320, located: false} , { x: 550, y: 320, located: false} , { x: 650, y: 320, located: false} , { x: 750, y: 320, located: false} , { x: 850, y: 320, located: false} , { x: 950, y: 320, located: false}  ], [ { x: 50, y: 410, located: false} , { x: 150, y: 410, located: false} , { x: 250, y: 410, located: false} , { x: 350, y: 410, located: false} , { x: 450, y: 410, located: false} , { x: 550, y: 410, located: false} , { x: 650, y: 410, located: false} , { x: 750, y: 410, located: false} , { x: 850, y: 410, located: false} , { x: 950, y: 410, located: false}  ], [ { x: 50, y: 500, located: false} , { x: 150, y: 500, located: false} , { x: 250, y: 500, located: false} , { x: 350, y: 500, located: false} , { x: 450, y: 500, located: false} , { x: 550, y: 500, located: false} , { x: 650, y: 500, located: false} , { x: 750, y: 500, located: false} , { x: 850, y: 500, located: false} , { x: 950, y: 500, located: false}  ], [ { x: 50, y: 590, located: false} , { x: 150, y: 590, located: false} , { x: 250, y: 590, located: false} , { x: 350, y: 590, located: false} , { x: 450, y: 590, located: false} , { x: 550, y: 590, located: false} , { x: 650, y: 590, located: false} , { x: 750, y: 590, located: false} , { x: 850, y: 590, located: false} , { x: 950, y: 590, located: false}  ], [ { x: 50, y: 680, located: false} , { x: 150, y: 680, located: false} , { x: 250, y: 680, located: false} , { x: 350, y: 680, located: false} , { x: 450, y: 680, located: false} , { x: 550, y: 680, located: false} , { x: 650, y: 680, located: false} , { x: 750, y: 680, located: false} , { x: 850, y: 680, located: false} , { x: 950, y: 680, located: false}  ], [ { x: 50, y: 770, located: false} , { x: 150, y: 770, located: false} , { x: 250, y: 770, located: false} , { x: 350, y: 770, located: false} , { x: 450, y: 770, located: false} , { x: 550, y: 770, located: false} , { x: 650, y: 770, located: false} , { x: 750, y: 770, located: false} , { x: 850, y: 770, located: false} , { x: 950, y: 770, located: false}  ], [ { x: 50, y: 860, located: false} , { x: 150, y: 860, located: false} , { x: 250, y: 860, located: false} , { x: 350, y: 860, located: false} , { x: 450, y: 860, located: false} , { x: 550, y: 860, located: false} , { x: 650, y: 860, located: false} , { x: 750, y: 860, located: false} , { x: 850, y: 860, located: false} , { x: 950, y: 860, located: false}  ] ];
var gangMember = [false,false,false,false,true,false,true,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false];

function setup()
{
	createCanvas(1100, 1100);

	crowdImg = loadImage("crowd.png");
	spotlight = loadImage("spotlight.png");
}

function draw()
{
	image(crowdImg, 0, 0);
	////////////YOUR CODE GOES HERE////////////////////////
//    var gangster=[];
//    for(var i=0;i<gangMember.length;i++)
//        {
//            if(gangMember[i]==true)
//                {
//                   gangster.push(i) 
//                }
//        }
//    for(var j=0;j<gangster.length;j++)
//        {
//            operaBuffs[int(gangster[j]/10)][int(gangster[j]%10)].located=true;
//        }

    var count = 0;
    for(var i=0; i<10;i++)
    {
        for(var j=0; j<10; j++)
        {
            if(gangMember[count])
            {
                operaBuffs[i][j].located = true;
            }
            count++;
        }
    }
    
        

	///////////DON'T CHANGE ANY CODE BELOW HERE////////////
	blendMode(BLEND);
	background(80);
	highlight();
	blendMode(DARKEST);
	image(crowdImg, 0, 0);
}

function highlight()
{
	fill(255, 0, 0, 100);

	for (var i = 0; i < operaBuffs.length; i++)
	{
		for (var j = 0; j < operaBuffs[i].length; j++)
		{
			if (operaBuffs[i][j].located)
			{
				image(spotlight, operaBuffs[i][j].x, operaBuffs[i][j].y, 100 , 100 );
			}
		}
	}
}
