/*

Officer: 3154130
CaseNum: 401-2-92725840-3154130

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.


    
	- If either lead dips below 0.71, sarin goes above 0.72, or perhaps arsenic goes above 0.45, decrease chalk by 0.02
    
	- If deadly_nightshade dips below 0.56, AmanitaMushrooms dips below 0.44, and also chlorine dips below 0.25, increment chalk by 0.03
    
	- If either sarin goes above 0.73, AmanitaMushrooms goes above 0.36, or perhaps arsenic goes above 0.34, reduce protamine by 0.03
    
	- When deadly_nightshade dips below 0.37 or chlorine goes above 0.26, increment protamine by 0.02
    



Your conditional statements should consider the following poisons:

	- deadly_nightshade
	- lead
	- arsenic
	- AmanitaMushrooms
	- sarin
	- chlorine


Your conditional statements should modify the following antidotes:

	- sulphates
	- chalk
	- protamine
	- CalciumChloride


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var deadly_nightshade;
var lead;
var arsenic;
var AmanitaMushrooms;
var sarin;
var chlorine;


//Declare the antidote variables
var sulphates;
var chalk;
var protamine;
var CalciumChloride;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	deadly_nightshade = 0.5;
	lead = 0.5;
	arsenic = 0.5;
	AmanitaMushrooms = 0.5;
	sarin = 0.5;
	chlorine = 0.5;
	sulphates = 0.5;
	chalk = 0.5;
	protamine = 0.5;
	CalciumChloride = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}
//	- If either lead dips below 0.71, sarin goes above 0.72, or perhaps arsenic goes above 0.45, decrease chalk by 0.02
//    
//	- If deadly_nightshade dips below 0.56, AmanitaMushrooms dips below 0.44, and also chlorine dips below 0.25, increment chalk by 0.03
//    
//	- If either sarin goes above 0.73, AmanitaMushrooms goes above 0.36, or perhaps arsenic goes above 0.34, reduce protamine by 0.03
//    
//	- When deadly_nightshade dips below 0.37 or chlorine goes above 0.26, increment protamine by 0.02
function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
    if(AmanitaMushrooms<0.72 && lead >0.36)
    {
        sulphates-=0.05
    }
    if(chlorine<0.63 || deadly_nightshade>0.36)
    {
        sulphates+=0.03
    }
    if((lead<0.71 || sarin >0.72) ||arsenic>0.45)
    {
        chalk-=0.02
    }
    if((deadly_nightshade<0.56 && AmanitaMushrooms <0.44)&& chlorine <0.25)
    {
        chalk += 0.03
    }
    if((sarin >0.73 || AmanitaMushrooms >0.36)|| arsenic >0.34)
    {
        protamine-=0.03
    }
    if(deadly_nightshade<0.37||chlorine>0.26)
    {
        protamine+=0.02
    }
    if((deadly_nightshade<0.36 && chlorine <0.4)&&lead<0.67)
    {
        CalciumChloride-=0.01
    }
    if((arsenic<0.32 && AmanitaMushrooms>0.61)&& sarin >0.33)
    {
        CalciumChloride+=0.01
    }
    




	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	deadly_nightshade = nextValue(graphs[0],deadly_nightshade);
	lead = nextValue(graphs[1],lead);
	arsenic = nextValue(graphs[2],arsenic);
	AmanitaMushrooms = nextValue(graphs[3],AmanitaMushrooms);
	sarin = nextValue(graphs[4],sarin);
	chlorine = nextValue(graphs[5],chlorine);


	sulphates = constrain(sulphates, 0, 1);
	chalk = constrain(chalk, 0, 1);
	protamine = constrain(protamine, 0, 1);
	CalciumChloride = constrain(CalciumChloride, 0, 1);


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
	text('deadly_nightshade: ' + nf(deadly_nightshade,1,2), 20,20);
	fill(colors[1]);
	text('lead: ' + nf(lead,1,2), 20,40);
	fill(colors[2]);
	text('arsenic: ' + nf(arsenic,1,2), 20,60);
	fill(colors[3]);
	text('AmanitaMushrooms: ' + nf(AmanitaMushrooms,1,2), 20,80);
	fill(colors[4]);
	text('sarin: ' + nf(sarin,1,2), 20,100);
	fill(colors[5]);
	text('chlorine: ' + nf(chlorine,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(sulphates,50,'sulphates');
	drawBar(chalk,200,'chalk');
	drawBar(protamine,350,'protamine');
	drawBar(CalciumChloride,500,'CalciumChloride');


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
