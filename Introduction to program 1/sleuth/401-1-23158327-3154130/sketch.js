/*

Officer: 3154130
CaseNum: 401-1-23158327-3154130

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- When ricin goes above 0.28 or spider_venom goes above 0.26, try decreasing ethanol by 0.05
	- When SnakeVenom dips below 0.62 and alcohol goes above 0.62, increase ethanol by 0.05
	- If spider_venom dips below 0.3 and ricin goes above 0.35, decrement insulin by 0.01
	- If alcohol goes above 0.27 and SnakeVenom dips below 0.42, increase insulin by 0.05
	- When alcohol dips below 0.25, reduce protamine by 0.05
	- If spider_venom goes above 0.74 and ricin goes above 0.48, increase protamine by 0.02
	- If SnakeVenom dips below 0.46 or alcohol dips below 0.42, reduce Calcium_Gluconate by 0.05
	- When spider_venom dips below 0.75, try increasing Calcium_Gluconate by 0.03


Your conditional statements should consider the following poisons:

	- SnakeVenom
	- ricin
	- alcohol
	- spider_venom


Your conditional statements should modify the following antidotes:

	- ethanol
	- insulin
	- protamine
	- Calcium_Gluconate


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var SnakeVenom;
var ricin;
var alcohol;
var spider_venom;


//Declare the antidote variables
var ethanol;
var insulin;
var protamine;
var Calcium_Gluconate;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	SnakeVenom = 0.5;
	ricin = 0.5;
	alcohol = 0.5;
	spider_venom = 0.5;
	ethanol = 0.5;
	insulin = 0.5;
	protamine = 0.5;
	Calcium_Gluconate = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}
//	- When ricin goes above 0.28 or spider_venom goes above 0.26, try decreasing ethanol by 0.05
//	- When SnakeVenom dips below 0.62 and alcohol goes above 0.62, increase ethanol by 0.05
//	- If spider_venom dips below 0.3 and ricin goes above 0.35, decrement insulin by 0.01
//	- If alcohol goes above 0.27 and SnakeVenom dips below 0.42, increase insulin by 0.05
//	- When alcohol dips below 0.25, reduce protamine by 0.05
//	- If spider_venom goes above 0.74 and ricin goes above 0.48, increase protamine by 0.02
//	- If SnakeVenom dips below 0.46 or alcohol dips below 0.42, reduce Calcium_Gluconate by 0.05
//	- When spider_venom dips below 0.75, try increasing Calcium_Gluconate by 0.03
function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
    if (ricin >0.28 || spider_venom >0.26)
    {
        ethanol-=0.05
    }
    if( SnakeVenom<0.62 && alcohol > 0.62)
    {
        ethanol+=0.05
    }
    if(spider_venom<0.3 && ricin >0.35)
    {
        insulin-=0.01
    }
    if(alcohol>0.27 && SnakeVenom <0.42)
    {
        insulin+=0.05
    }
    if(alcohol<0.25)
    {
        protamine-=0.05
    }
    if(spider_venom >0.74 && ricin >0.48)
    {
        protamine+=0.02
    }
    if(SnakeVenom < 0.46 || alcohol<0.42)
    {
        Calcium_Gluconate-=0.05
    }
    if(spider_venom <0.75)
    {
        Calcium_Gluconate += 0.03
    }




	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	SnakeVenom = nextValue(graphs[0],SnakeVenom);
	ricin = nextValue(graphs[1],ricin);
	alcohol = nextValue(graphs[2],alcohol);
	spider_venom = nextValue(graphs[3],spider_venom);


	ethanol = constrain(ethanol, 0, 1);
	insulin = constrain(insulin, 0, 1);
	protamine = constrain(protamine, 0, 1);
	Calcium_Gluconate = constrain(Calcium_Gluconate, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('SnakeVenom: ' + nf(SnakeVenom,1,2), 20,20);
	fill(colors[1]);
	text('ricin: ' + nf(ricin,1,2), 20,40);
	fill(colors[2]);
	text('alcohol: ' + nf(alcohol,1,2), 20,60);
	fill(colors[3]);
	text('spider_venom: ' + nf(spider_venom,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(ethanol,50,'ethanol');
	drawBar(insulin,200,'insulin');
	drawBar(protamine,350,'protamine');
	drawBar(Calcium_Gluconate,500,'Calcium_Gluconate');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
