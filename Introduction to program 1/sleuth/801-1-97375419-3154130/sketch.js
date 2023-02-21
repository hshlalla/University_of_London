/*
801
Stage 2: Don Giovanni

Officer: 3154130
CaseNum: 801-1-97375419-3154130

Our person in the box office at the Console City opera house has just informed us that the influential Order of Swartz will be attending Don Giovanni tonight. This vain lot should be easy to spot thanks to their distinguished retro glasses. They are all sitting in the 4th seat of each row. 

- Set the spotlights to shine on the members of the order. 
- Do this by setting the captured  property of the element in crowd to true. 
- You must use a single for loop to pick out the members of the order

Solve the case using only:
For (not nested)
crowd[ ][ ]


*/

var crowdImg;
var spotlight;

var crowd = [ [ { x: 50, y: 50, captured: false} , { x: 150, y: 50, captured: false} , { x: 250, y: 50, captured: false} , { x: 350, y: 50, captured: false} , { x: 450, y: 50, captured: false} , { x: 550, y: 50, captured: false} , { x: 650, y: 50, captured: false} , { x: 750, y: 50, captured: false} , { x: 850, y: 50, captured: false} , { x: 950, y: 50, captured: false}  ], [ { x: 50, y: 140, captured: false} , { x: 150, y: 140, captured: false} , { x: 250, y: 140, captured: false} , { x: 350, y: 140, captured: false} , { x: 450, y: 140, captured: false} , { x: 550, y: 140, captured: false} , { x: 650, y: 140, captured: false} , { x: 750, y: 140, captured: false} , { x: 850, y: 140, captured: false} , { x: 950, y: 140, captured: false}  ], [ { x: 50, y: 230, captured: false} , { x: 150, y: 230, captured: false} , { x: 250, y: 230, captured: false} , { x: 350, y: 230, captured: false} , { x: 450, y: 230, captured: false} , { x: 550, y: 230, captured: false} , { x: 650, y: 230, captured: false} , { x: 750, y: 230, captured: false} , { x: 850, y: 230, captured: false} , { x: 950, y: 230, captured: false}  ], [ { x: 50, y: 320, captured: false} , { x: 150, y: 320, captured: false} , { x: 250, y: 320, captured: false} , { x: 350, y: 320, captured: false} , { x: 450, y: 320, captured: false} , { x: 550, y: 320, captured: false} , { x: 650, y: 320, captured: false} , { x: 750, y: 320, captured: false} , { x: 850, y: 320, captured: false} , { x: 950, y: 320, captured: false}  ], [ { x: 50, y: 410, captured: false} , { x: 150, y: 410, captured: false} , { x: 250, y: 410, captured: false} , { x: 350, y: 410, captured: false} , { x: 450, y: 410, captured: false} , { x: 550, y: 410, captured: false} , { x: 650, y: 410, captured: false} , { x: 750, y: 410, captured: false} , { x: 850, y: 410, captured: false} , { x: 950, y: 410, captured: false}  ], [ { x: 50, y: 500, captured: false} , { x: 150, y: 500, captured: false} , { x: 250, y: 500, captured: false} , { x: 350, y: 500, captured: false} , { x: 450, y: 500, captured: false} , { x: 550, y: 500, captured: false} , { x: 650, y: 500, captured: false} , { x: 750, y: 500, captured: false} , { x: 850, y: 500, captured: false} , { x: 950, y: 500, captured: false}  ], [ { x: 50, y: 590, captured: false} , { x: 150, y: 590, captured: false} , { x: 250, y: 590, captured: false} , { x: 350, y: 590, captured: false} , { x: 450, y: 590, captured: false} , { x: 550, y: 590, captured: false} , { x: 650, y: 590, captured: false} , { x: 750, y: 590, captured: false} , { x: 850, y: 590, captured: false} , { x: 950, y: 590, captured: false}  ], [ { x: 50, y: 680, captured: false} , { x: 150, y: 680, captured: false} , { x: 250, y: 680, captured: false} , { x: 350, y: 680, captured: false} , { x: 450, y: 680, captured: false} , { x: 550, y: 680, captured: false} , { x: 650, y: 680, captured: false} , { x: 750, y: 680, captured: false} , { x: 850, y: 680, captured: false} , { x: 950, y: 680, captured: false}  ], [ { x: 50, y: 770, captured: false} , { x: 150, y: 770, captured: false} , { x: 250, y: 770, captured: false} , { x: 350, y: 770, captured: false} , { x: 450, y: 770, captured: false} , { x: 550, y: 770, captured: false} , { x: 650, y: 770, captured: false} , { x: 750, y: 770, captured: false} , { x: 850, y: 770, captured: false} , { x: 950, y: 770, captured: false}  ], [ { x: 50, y: 860, captured: false} , { x: 150, y: 860, captured: false} , { x: 250, y: 860, captured: false} , { x: 350, y: 860, captured: false} , { x: 450, y: 860, captured: false} , { x: 550, y: 860, captured: false} , { x: 650, y: 860, captured: false} , { x: 750, y: 860, captured: false} , { x: 850, y: 860, captured: false} , { x: 950, y: 860, captured: false}  ] ];

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
    for(var i=0;i<crowd.length;i++)
        {
            console.log(123);
            crowd[i][3].captured=true;
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

	for (var i = 0; i < crowd.length; i++)
	{
		for (var j = 0; j < crowd[i].length; j++)
		{
			if (crowd[i][j].captured)
			{
				image(spotlight, crowd[i][j].x, crowd[i][j].y, 100 , 100 );
			}
		}
	}
}
