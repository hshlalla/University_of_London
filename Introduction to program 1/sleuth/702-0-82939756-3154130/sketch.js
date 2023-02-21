/*

Officer: 3154130
CaseNum: 702-0-82939756-3154130

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of sleuthVehicleObject to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function moveCar()
{
	/*
	This function should do the following: 
	 - increment sleuthVehicleObject's distDriven property by its speedAmt property 
	 - add a random amount between -0.08 and 0.08 to sleuthVehicleObject's engineVibrateValue property
	 - use the constrain function to constrain sleuthVehicleObject's engineVibrateValue property to values between 0.09 and 1.13
	 - call the cycleMotor function passing sleuthVehicleObject as an argument
	*/
    
    sleuthVehicleObject.distDriven += sleuthVehicleObject.speedAmt;
    sleuthVehicleObject.engineVibrateValue += random(-0.08,0.08);
    sleuthVehicleObject.engineVibrateValue=constrain(sleuthVehicleObject.engineVibrateValue,0.09,1.13);
    cycleMotor(sleuthVehicleObject);
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthVehicleObject;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	sleuthVehicleObject = 
	{
		posX: roadLeftEdge + roadWidth/4,
		posY: 300,
		distDriven: 0,
		speedAmt: 3,
		engineVibrateValue: 0,
		vehicleClassification: 'detective',
		licencePlate: '5L3UTH',
		exhaust: []
	};


}



function draw()
{
	background(0);


	moveCar();


	drawRoad();
	drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuthVehicleObject.distDriven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuthVehicleObject.distDriven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(sleuthVehicleObject);
	image
	(
		carImages["detective"],
		sleuthVehicleObject.posX - carImages["detective"].width/2 + random(-sleuthVehicleObject.engineVibrateValue, sleuthVehicleObject.engineVibrateValue),
		sleuthVehicleObject.posY + random(-sleuthVehicleObject.engineVibrateValue, sleuthVehicleObject.engineVibrateValue)
	);

}

function cycleMotor(car)
{

	car.exhaust.push({size: 2, x: car.posX, y: car.posY + carImages[car.vehicleClassification].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.speedAmt/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
