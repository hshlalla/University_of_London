/*

Officer: 3154130
CaseNum: 401-3-78868269-3154130

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If either cyanide dips below 0.63, arsenic dips below 0.57, or perhaps strychnine goes above 0.54, try decreasing protamine by 0.03
	- When mercury goes above 0.45, whilst at the same time, ricin dips below 0.7 or methanol dips below 0.4, try increasing protamine by 0.03
	- If arsenic dips below 0.44 or sarin goes above 0.56, whilst at the same time, formaldehyde dips below 0.69 or ricin goes above 0.47, decrease paracetamol by 0.04
	- When mercury goes above 0.59 and methanol dips below 0.26, whilst at the same time, strychnine goes above 0.41 or cyanide dips below 0.73, increment paracetamol by 0.02
	- When cyanide goes above 0.46 or mercury dips below 0.4, whilst at the same time, formaldehyde goes above 0.31 or ricin dips below 0.38, decrement chalk by 0.03
	- If sarin goes above 0.74 or methanol dips below 0.52, or on the other hand, arsenic dips below 0.75 and strychnine dips below 0.32, try increasing chalk by 0.02
	- When mercury dips below 0.29 and ricin dips below 0.54, or on the other hand, arsenic goes above 0.64 or methanol goes above 0.5, decrement SodiumBicarbonate by 0.04
	- If cyanide goes above 0.44 or strychnine dips below 0.32, whilst at the same time, formaldehyde dips below 0.49 and sarin goes above 0.6, raise SodiumBicarbonate by 0.01
	- If mercury goes above 0.42 and formaldehyde goes above 0.69, or on the other hand, methanol goes above 0.73, decrease calcium_gluconate by 0.02
	- If cyanide dips below 0.28 and ricin dips below 0.54, or on the other hand, arsenic goes above 0.67, try increasing calcium_gluconate by 0.05


Your conditional statements should consider the following poisons:

	- cyanide
	- methanol
	- mercury
	- strychnine
	- ricin
	- arsenic
	- formaldehyde
	- sarin


Your conditional statements should modify the following antidotes:

	- protamine
	- paracetamol
	- chalk
	- SodiumBicarbonate
	- calcium_gluconate


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
var cyanide;
var methanol;
var mercury;
var strychnine;
var ricin;
var arsenic;
var formaldehyde;
var sarin;


//Declare the antidote variables
var protamine;
var paracetamol;
var chalk;
var SodiumBicarbonate;
var calcium_gluconate;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	cyanide = 0.5;
	methanol = 0.5;
	mercury = 0.5;
	strychnine = 0.5;
	ricin = 0.5;
	arsenic = 0.5;
	formaldehyde = 0.5;
	sarin = 0.5;
	protamine = 0.5;
	paracetamol = 0.5;
	chalk = 0.5;
	SodiumBicarbonate = 0.5;
	calcium_gluconate = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}
//You still have some work to do on adjusting protamine.
//You still have some work to do on adjusting paracetamol.
//You still have some work to do on adjusting chalk.

//	- If either cyanide dips below 0.63, arsenic dips below 0.57, or perhaps strychnine goes above 0.54, try decreasing protamine by 0.03
//	- When mercury goes above 0.45, whilst at the same time, ricin dips below 0.7 or methanol dips below 0.4, try increasing protamine by 0.03
//	- If arsenic dips below 0.44 or sarin goes above 0.56, whilst at the same time, formaldehyde dips below 0.69 or ricin goes above 0.47, decrease paracetamol by 0.04
//	- When mercury goes above 0.59 and methanol dips below 0.26, whilst at the same time, strychnine goes above 0.41 or cyanide dips below 0.73, increment paracetamol by 0.02
//	- When cyanide goes above 0.46 or mercury dips below 0.4, whilst at the same time, formaldehyde goes above 0.31 or ricin dips below 0.38, decrement chalk by 0.03
//	- If sarin goes above 0.74 or methanol dips below 0.52, or on the other hand, arsenic dips below 0.75 and strychnine dips below 0.32, try increasing chalk by 0.02
//	- When mercury dips below 0.29 and ricin dips below 0.54, or on the other hand, arsenic goes above 0.64 or methanol goes above 0.5, decrement SodiumBicarbonate by 0.04
//	- If cyanide goes above 0.44 or strychnine dips below 0.32, whilst at the same time, formaldehyde dips below 0.49 and sarin goes above 0.6, raise SodiumBicarbonate by 0.01
//	- If mercury goes above 0.42 and formaldehyde goes above 0.69, or on the other hand, methanol goes above 0.73, decrease calcium_gluconate by 0.02
//	- If cyanide dips below 0.28 and ricin dips below 0.54, or on the other hand, arsenic goes above 0.67, try increasing calcium_gluconate by 0.05

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
    if(cyanide<0.63||arsenic<0.57||strychnine>0.54)
    {
        protamine-=0.03
    }
    if(mercury>0.45 && (ricin <0.7|| methanol <0.4))
    {
        protamine+=0.03
    }
    if((arsenic<0.44||sarin>0.56)&&(formaldehyde<0.69||ricin>0.47))
    {
        paracetamol-=0.04
    }
    if((mercury>0.59&&methanol<0.26)&&(strychnine>0.41||cyanide<0.73))
    {
       paracetamol+=0.02
    }
    if((cyanide>0.46||mercury<0.4)&&(formaldehyde>0.31||ricin<0.38))
    {
        chalk-=0.03
    }
    if((sarin>0.74||methanol<0.52)||(arsenic<0.75&&strychnine<0.32))
    {
       chalk+=0.02
    }
    if((mercury<0.29&&ricin<0.54)||(arsenic>0.64||methanol>0.5))
    {
        SodiumBicarbonate-=0.04
    }
    if((cyanide>0.44||strychnine<0.32)&&(formaldehyde<0.49&&sarin>0.6))
    {
        SodiumBicarbonate+=0.01
    }
    if((mercury>0.42&&formaldehyde>0.69)||(methanol>0.73))
    {
        calcium_gluconate-=0.02
    }
    if((cyanide<0.28&&ricin<0.54)||(arsenic>0.67))
    {
        calcium_gluconate+=0.05
    }

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	cyanide = nextValue(graphs[0],cyanide);
	methanol = nextValue(graphs[1],methanol);
	mercury = nextValue(graphs[2],mercury);
	strychnine = nextValue(graphs[3],strychnine);
	ricin = nextValue(graphs[4],ricin);
	arsenic = nextValue(graphs[5],arsenic);
	formaldehyde = nextValue(graphs[6],formaldehyde);
	sarin = nextValue(graphs[7],sarin);


	protamine = constrain(protamine, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);
	chalk = constrain(chalk, 0, 1);
	SodiumBicarbonate = constrain(SodiumBicarbonate, 0, 1);
	calcium_gluconate = constrain(calcium_gluconate, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('cyanide: ' + nf(cyanide,1,2), 20,20);
	fill(colors[1]);
	text('methanol: ' + nf(methanol,1,2), 20,40);
	fill(colors[2]);
	text('mercury: ' + nf(mercury,1,2), 20,60);
	fill(colors[3]);
	text('strychnine: ' + nf(strychnine,1,2), 20,80);
	fill(colors[4]);
	text('ricin: ' + nf(ricin,1,2), 20,100);
	fill(colors[5]);
	text('arsenic: ' + nf(arsenic,1,2), 20,120);
	fill(colors[6]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,140);
	fill(colors[7]);
	text('sarin: ' + nf(sarin,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(protamine,50,'protamine');
	drawBar(paracetamol,200,'paracetamol');
	drawBar(chalk,350,'chalk');
	drawBar(SodiumBicarbonate,500,'SodiumBicarbonate');
	drawBar(calcium_gluconate,650,'calcium_gluconate');


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
