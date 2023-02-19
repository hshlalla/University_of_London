/*

Officer: 3154130
CaseNum: 702-2-40061188-3154130

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a green car with a numberPlate of OXVCFS. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of sleuthVehicleObject and the cars in
vehicles_data to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Move_Car()
{
    sleuthVehicleObject.kmsAmnt += sleuthVehicleObject.accelVal;
    sleuthVehicleObject.rumbleAmt += random(-0.04, 0.04);
    sleuthVehicleObject.rumbleAmt = constrain(sleuthVehicleObject.rumbleAmt, 0.07, 1.07);
    Run_Car_engine(sleuthVehicleObject);
	/*
	This function should do the following: 
	 - increment sleuthVehicleObject's kmsAmnt property by its accelVal property 
	 - add a random amount between -0.04 and 0.04 to sleuthVehicleObject's rumbleAmt property
	 - use the constrain function to constrain sleuthVehicleObject's rumbleAmt property to values between 0.07 and 1.07
	 - call the Run_Car_engine function passing sleuthVehicleObject as an argument
	*/
}


function Switch_Lanes(target_vehicle)
{
    if(target_vehicle.x === lanePos_a)
    {
        target_vehicle.x = lanePos_b;
    }
    else
    {
        target_vehicle.x = lanePos_a;
    }
    return target_vehicle;
	/*
	This function should do the following: 
	 - move target_vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lanePos_a and lanePos_b to effect the change.
	 - finally you should return target_vehicle at the end of the function.
	 hint: You will need to modify the x property of target_vehicle.
	*/
}


function Search_Ahead( vehicle_a, vehicle_b )
{

    if((vehicle_a.x == vehicle_b.x) && 
       (vehicle_a.kmsAmnt<vehicle_b.kmsAmnt)&&
       abs(vehicle_a.kmsAmnt -vehicle_b.kmsAmnt)< 200)
    {
        return true;
    }
    else
    {
        return false;
    }
	/*
	This function should do the following: 
	 - determine if vehicle_a is in the same lane and less than 200px behind vehicle_b.
	 - do this by comparing the two cars' kmsAmnt properties
	 - if these requirements are met then return true. Otherwise return false.
	*/
}


function Check_IsParallel( car_obj )
{
    var parallel = false;
    if(car_obj.y == sleuthVehicleObject.y && abs(car_obj.kmsAmnt - sleuthVehicleObject.kmsAmnt) < 25 && car_obj.x !== sleuthVehicleObject.x)
    {
        parallel = true;
    }
    if(parallel)
    {
        return car_obj.numberPlate;
    }
    else
    {
        return null;
    }
	/*
	This function should do the following: 
	 - determine if car_obj is parallel with sleuthVehicleObject.
	 - if car_obj is found to be parallel to sleuthVehicleObject then return the numberPlate property of car_obj.
	 - cars are considered parallel if the absolute difference between their kmsAmnt properties is less than 25 px and they have non-matching x properties	*/
}
function Detect_Assailant() 
{
  for (let i = 0; i < vehicles_data.length; i++) 
  {
      var num_plate;
      num_plate=Check_IsParallel(vehicles_data[i])
      if (num_plate == "OXVCFS") 
      {
        assailant = vehicles_data[i];
        break;
      }
  }
}

	/*
	This function should do the following: 
	 - Check cars passing parallel to sleuthVehicleObject to see if they match the numberPlate property in the assailant description.
	 - it does this by traversing vehicles_data and calling Check_IsParallel for each car
.	 - if a positive result is returned then the numberPlate property of the found car is then checked against the assailant description.
	 - if a match is found then the car in question is assigned to the global variable assailant.
	*/


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthVehicleObject;

var roadWidth;
var roadLeftEdge;
var lanePos_a;
var lanePos_b;
var carImages = {};
var assailant;

var vehicles_data = [
{ x: 500, y: 0, kmsAmnt: -200, vehicleType: 'blueCar', numberPlate: '5FXDXP', accelVal: 2, exhaust: [  ]} , { x: 300, y: 0, kmsAmnt: 200, vehicleType: 'greenCar', numberPlate: 'FDM5KE', accelVal: 2, exhaust: [  ]} , { x: 300, y: 0, kmsAmnt: 600, vehicleType: 'whiteCar', numberPlate: 'ENDLK4', accelVal: 2, exhaust: [  ]} , { x: 500, y: 0, kmsAmnt: 1000, vehicleType: 'whiteCar', numberPlate: 'J47Y2X', accelVal: 2, exhaust: [  ]} , { x: 500, y: 0, kmsAmnt: 1400, vehicleType: 'whiteCar', numberPlate: 'ML4Y1S', accelVal: 2, exhaust: [  ]} , { x: 500, y: 0, kmsAmnt: 1800, vehicleType: 'greenCar', numberPlate: 'WRVZOS', accelVal: 2, exhaust: [  ]} , { x: 300, y: 0, kmsAmnt: 2200, vehicleType: 'greenCar', numberPlate: 'OXVCFS', accelVal: 2, exhaust: [  ]} , { x: 300, y: 0, kmsAmnt: 2600, vehicleType: 'redCar', numberPlate: 'R56QBH', accelVal: 2, exhaust: [  ]} , { x: 300, y: 0, kmsAmnt: 3000, vehicleType: 'blueCar', numberPlate: '24ARJV', accelVal: 2, exhaust: [  ]} , { x: 500, y: 0, kmsAmnt: 3400, vehicleType: 'redCar', numberPlate: '33XVYD', accelVal: 2, exhaust: [  ]} , { x: 300, y: 0, kmsAmnt: 3800, vehicleType: 'greenCar', numberPlate: 'J6GG8F', accelVal: 2, exhaust: [  ]} , { x: 300, y: 0, kmsAmnt: 4200, vehicleType: 'blueCar', numberPlate: 'LB05ZJ', accelVal: 2, exhaust: [  ]} , { x: 500, y: 0, kmsAmnt: 4600, vehicleType: 'whiteCar', numberPlate: 'KKSEMS', accelVal: 2, exhaust: [  ]} , { x: 500, y: 0, kmsAmnt: 5000, vehicleType: 'blueCar', numberPlate: 'Z18J50', accelVal: 2, exhaust: [  ]} , { x: 500, y: 0, kmsAmnt: 5400, vehicleType: 'redCar', numberPlate: '96B1RP', accelVal: 2, exhaust: [  ]} , { x: 300, y: 0, kmsAmnt: 5800, vehicleType: 'blueCar', numberPlate: '28DOHU', accelVal: 2, exhaust: [  ]} , { x: 500, y: 0, kmsAmnt: 6200, vehicleType: 'greenCar', numberPlate: 'APIQ86', accelVal: 2, exhaust: [  ]} , { x: 300, y: 0, kmsAmnt: 6600, vehicleType: 'whiteCar', numberPlate: '76X6YE', accelVal: 2, exhaust: [  ]} , { x: 500, y: 0, kmsAmnt: 7000, vehicleType: 'whiteCar', numberPlate: 'SA8YLL', accelVal: 2, exhaust: [  ]} , { x: 300, y: 0, kmsAmnt: 7400, vehicleType: 'whiteCar', numberPlate: '46IIID', accelVal: 2, exhaust: [  ]} 
];



function preload()
{

	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];


	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	lanePos_a = 300;
	lanePos_b = 500;

	sleuthVehicleObject = 
	{
		x: roadLeftEdge + roadWidth/4,
		y: 550,
		kmsAmnt: 0,
		accelVal: 3,
		rumbleAmt: 0,
		vehicleType: 'detective',
		numberPlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	if(assailant)
	{
		fill(255);

		text("assailant found !", width/2, height/2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	Move_Car();
	for(var i = 0; i < vehicles_data.length; i++)
	{
var b2b = Search_Ahead(sleuthVehicleObject, vehicles_data[i]);
		if(b2b)Switch_Lanes(sleuthVehicleObject);
	}
	Detect_Assailant();


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < vehicles_data.length; i++)
	{
		vehicles_data[i].kmsAmnt += vehicles_data[i].accelVal;
		vehicles_data[i].y = sleuthVehicleObject.y - vehicles_data[i].kmsAmnt + sleuthVehicleObject.kmsAmnt;
	}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuthVehicleObject.kmsAmnt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuthVehicleObject.kmsAmnt%100)
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
		sleuthVehicleObject.x - carImages["detective"].width/2 + random(-sleuthVehicleObject.rumbleAmt, sleuthVehicleObject.rumbleAmt),
		sleuthVehicleObject.y + random(-sleuthVehicleObject.rumbleAmt, sleuthVehicleObject.rumbleAmt)
	);

	//draw all other cars

	for(var i = 0; i < vehicles_data.length; i ++)
	{
		if(vehicles_data[i].y < height && vehicles_data[i].y > -height/2)
		{
			image(
			carImages[vehicles_data[i].vehicleType],
			vehicles_data[i].x - carImages[vehicles_data[i].vehicleType].width/2,
			vehicles_data[i].y
			);
			Run_Car_engine(vehicles_data[i]);

			drawExhaust(vehicles_data[i]);
		}
	}

}

function Run_Car_engine(car)
{

	car.exhaust.push({size: 2, x: car.x, y: car.y + carImages[car.vehicleType].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.accelVal/3);
		if(car.vehicleType != "detective")car.exhaust[i].y += (sleuthVehicleObject.accelVal - car.accelVal);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
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
