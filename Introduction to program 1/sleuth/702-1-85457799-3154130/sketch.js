/*

Officer: 3154130
CaseNum: 702-1-85457799-3154130

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of sleuthVehicle and the cars in
vehicleObjectsData to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Drive_Car()
{
	/*
	This function should do the following: 
	 - increment sleuthVehicle's distanceAmount property by its gasAmt property 
	 - add a random amount between -0.1 and 0.1 to sleuthVehicle's engineVibrateValue property
	 - use the constrain function to constrain sleuthVehicle's engineVibrateValue property to values between 0.02 and 1.08
	 - call the Turn_Motor function passing sleuthVehicle as an argument
	*/
    sleuthVehicle.distanceAmount+=sleuthVehicle.gasAmt;
    sleuthVehicle.engineVibrateValue+=random(-0.1,0.1);
    sleuthVehicle.engineVibrateValue=constrain(sleuthVehicle.engineVibrateValue,0.02,1.08);
    Turn_Motor(sleuthVehicle);
}


function Change_Lanes(car_obj)
{
	/*
	This function should do the following: 
	 - move car_obj from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lane_coordinateA and lane_coordinateB to effect the change.
	 hint: You will need to modify the coordinateX property of car_obj.
	*/
    if(car_obj.coordinateX == lane_coordinateA)
        {
            car_obj.coordinateX = lane_coordinateB;
        }
    else
        {
            car_obj.coordinateX = lane_coordinateA;
        }

}


function CheckVehicle_Infront( target_car )
{
	/*
	This function should do the following: 
	 - determine if target_car is in the same lane and less than 200px behind any of the cars in vehicleObjectsData.
	 - do this by traversing vehicleObjectsData and comparing each car's distanceAmount property to that of target_car.
	 - if you find a car that matches these requirements then return the car object. Otherwise return false.
	*/
//   for (var i = 0; i<car_obj.length; i++)
//       {
//           if (abs(target_car))
//       }
//    car_obj.coordinateX+=200
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthVehicle;

var roadWidth;
var roadLeftEdge;
var lane_coordinateA;
var lane_coordinateB;
var carImages = {};

var vehicleObjectsData = [
{ coordinateX: 500, coordinateY: 0, distanceAmount: -200, carClassification: 'whiteCar', licencePlate: '4BFQ8G', gasAmt: 2, exhaust: [  ]} , { coordinateX: 300, coordinateY: 0, distanceAmount: 200, carClassification: 'redCar', licencePlate: '4ZMRF3', gasAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, distanceAmount: 600, carClassification: 'whiteCar', licencePlate: '10FW2Y', gasAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, distanceAmount: 1000, carClassification: 'greenCar', licencePlate: '87BK3K', gasAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, distanceAmount: 1400, carClassification: 'greenCar', licencePlate: '5LD7KQ', gasAmt: 2, exhaust: [  ]} , { coordinateX: 300, coordinateY: 0, distanceAmount: 1800, carClassification: 'redCar', licencePlate: 'XHWMZK', gasAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, distanceAmount: 2200, carClassification: 'redCar', licencePlate: 'ZG61NK', gasAmt: 2, exhaust: [  ]} , { coordinateX: 300, coordinateY: 0, distanceAmount: 2600, carClassification: 'redCar', licencePlate: '1ZQJHN', gasAmt: 2, exhaust: [  ]} , { coordinateX: 300, coordinateY: 0, distanceAmount: 3000, carClassification: 'whiteCar', licencePlate: 'PZ33YZ', gasAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, distanceAmount: 3400, carClassification: 'whiteCar', licencePlate: '992898', gasAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, distanceAmount: 3800, carClassification: 'greenCar', licencePlate: '9PUPOM', gasAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, distanceAmount: 4200, carClassification: 'redCar', licencePlate: 'AUPMKR', gasAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, distanceAmount: 4600, carClassification: 'redCar', licencePlate: 'BH1QDM', gasAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, distanceAmount: 5000, carClassification: 'blueCar', licencePlate: 'DURNJ2', gasAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, distanceAmount: 5400, carClassification: 'redCar', licencePlate: 'PNXXDV', gasAmt: 2, exhaust: [  ]} , { coordinateX: 300, coordinateY: 0, distanceAmount: 5800, carClassification: 'redCar', licencePlate: 'WYMUKT', gasAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, distanceAmount: 6200, carClassification: 'blueCar', licencePlate: '6YA0TE', gasAmt: 2, exhaust: [  ]} , { coordinateX: 300, coordinateY: 0, distanceAmount: 6600, carClassification: 'greenCar', licencePlate: '0JUEKJ', gasAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, distanceAmount: 7000, carClassification: 'greenCar', licencePlate: 'LGQ06W', gasAmt: 2, exhaust: [  ]} , { coordinateX: 500, coordinateY: 0, distanceAmount: 7400, carClassification: 'blueCar', licencePlate: 'YQ45AR', gasAmt: 2, exhaust: [  ]} 
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

	roadWidth = 400;
	roadLeftEdge = 200;
	lane_coordinateA = 300;
	lane_coordinateB = 500;

	sleuthVehicle = 
	{
		coordinateX: roadLeftEdge + roadWidth/4,
		coordinateY: 550,
		distanceAmount: 0,
		gasAmt: 3,
		engineVibrateValue: 0,
		carClassification: 'detective',
		licencePlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	Drive_Car();
	var b2b = CheckVehicle_Infront( sleuthVehicle );
	if(b2b)Change_Lanes(sleuthVehicle);


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < vehicleObjectsData.length; i++)
	{
		vehicleObjectsData[i].distanceAmount += vehicleObjectsData[i].gasAmt;
		vehicleObjectsData[i].coordinateY = sleuthVehicle.coordinateY - vehicleObjectsData[i].distanceAmount + sleuthVehicle.distanceAmount;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuthVehicle.distanceAmount%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuthVehicle.distanceAmount%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(sleuthVehicle);
	image
	(
		carImages["detective"],
		sleuthVehicle.coordinateX - carImages["detective"].width/2 + random(-sleuthVehicle.engineVibrateValue, sleuthVehicle.engineVibrateValue),
		sleuthVehicle.coordinateY + random(-sleuthVehicle.engineVibrateValue, sleuthVehicle.engineVibrateValue)
	);

	//draw all other cars

	for(var i = 0; i < vehicleObjectsData.length; i ++)
	{
		if(vehicleObjectsData[i].coordinateY < height && vehicleObjectsData[i].coordinateY > -height/2)
		{
			image(
			carImages[vehicleObjectsData[i].carClassification],
			vehicleObjectsData[i].coordinateX - carImages[vehicleObjectsData[i].carClassification].width/2,
			vehicleObjectsData[i].coordinateY
			);
			Turn_Motor(vehicleObjectsData[i]);

			drawExhaust(vehicleObjectsData[i]);
		}
	}

}

function Turn_Motor(car)
{

	car.exhaust.push({size: 2, x: car.coordinateX, y: car.coordinateY + carImages[car.carClassification].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gasAmt/3);
		if(car.carClassification != "detective")car.exhaust[i].y += (sleuthVehicle.gasAmt - car.gasAmt);
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
