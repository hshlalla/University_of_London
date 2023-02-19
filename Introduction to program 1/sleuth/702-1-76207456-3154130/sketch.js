/*

Officer: 3154130
CaseNum: 702-1-76207456-3154130

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

HINT: make sure you take a look at the initialisation of chase_car and the cars in
TrafficList to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function move_car()
{
    chase_car.kms_amount += chase_car.accel_amt;
    chase_car.vibrate_value += random(-0.06,0.06);
    chase_car.vibrate_value = constrain(chase_car.vibrate_value,0.08,1.05);
    cycle_motor(chase_car);
	/*
	This function should do the following: 
	 - increment chase_car's kms_amount property by its accel_amt property 
	 - add a random amount between -0.06 and 0.06 to chase_car's vibrate_value property
	 - use the constrain function to constrain chase_car's vibrate_value property to values between 0.08 and 1.05
	 - call the cycle_motor function passing chase_car as an argument
	*/
}


function cross_lanes(target_car)
{
    if(target_car.x_position==LaneCoordA)
        {
            target_car.x_position=LaneCoordB;  
        }
    else
        {
            target_car.x_position=LaneCoordA;
        }
    
	/*
	This function should do the following: 
	 - move target_car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LaneCoordA and LaneCoordB to effect the change.
	 hint: You will need to modify the x_position property of target_car.
	*/
}


console.log()

function search_infront( car_obj )
{
    for(var i =0;i<TrafficList.length;i++)
        {
            if(TrafficList[i].kms_amount > car_obj.kms_amount && 
               abs(car_obj.kms_amount-TrafficList[i].kms_amount)<200 && car_obj.x_position==TrafficList[i].x_position )
                {
                    return TrafficList[i].licence_plate;
                }
        }
    return false;
	/*
	This function should do the following: 
	 - determine if car_obj is in the same lane and less than 200px behind any of the cars in TrafficList.
	 - do this by traversing TrafficList and comparing each car's kms_amount property to that of car_obj.
	 - if you find a car that matches these requirements then return the licence_plate property for the car. Otherwise return false.
	*/
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var chase_car;

var roadWidth;
var roadLeftEdge;
var LaneCoordA;
var LaneCoordB;
var carImages = {};

var TrafficList = [
{ x_position: 300, y_position: 0, kms_amount: -200, car_classification: 'redCar', licence_plate: 'DTTLD5', accel_amt: 2, exhaust: [  ]} , { x_position: 500, y_position: 0, kms_amount: 200, car_classification: 'whiteCar', licence_plate: 'SO5GEN', accel_amt: 2, exhaust: [  ]} , { x_position: 500, y_position: 0, kms_amount: 600, car_classification: 'redCar', licence_plate: 'NLU6S3', accel_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_amount: 1000, car_classification: 'redCar', licence_plate: 'B4ES5I', accel_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_amount: 1400, car_classification: 'whiteCar', licence_plate: '426GKE', accel_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_amount: 1800, car_classification: 'greenCar', licence_plate: 'MB96VU', accel_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_amount: 2200, car_classification: 'redCar', licence_plate: 'FTKLDV', accel_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_amount: 2600, car_classification: 'greenCar', licence_plate: '3ENJBK', accel_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_amount: 3000, car_classification: 'whiteCar', licence_plate: 'LK3640', accel_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_amount: 3400, car_classification: 'greenCar', licence_plate: '276O2L', accel_amt: 2, exhaust: [  ]} , { x_position: 500, y_position: 0, kms_amount: 3800, car_classification: 'greenCar', licence_plate: 'ER2YBB', accel_amt: 2, exhaust: [  ]} , { x_position: 500, y_position: 0, kms_amount: 4200, car_classification: 'blueCar', licence_plate: 'X90VR8', accel_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_amount: 4600, car_classification: 'greenCar', licence_plate: '6Z7RXT', accel_amt: 2, exhaust: [  ]} , { x_position: 500, y_position: 0, kms_amount: 5000, car_classification: 'greenCar', licence_plate: 'S6HH9T', accel_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_amount: 5400, car_classification: 'redCar', licence_plate: '5VJ4R5', accel_amt: 2, exhaust: [  ]} , { x_position: 500, y_position: 0, kms_amount: 5800, car_classification: 'whiteCar', licence_plate: 'K87KCG', accel_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_amount: 6200, car_classification: 'redCar', licence_plate: 'OEQJ01', accel_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_amount: 6600, car_classification: 'redCar', licence_plate: 'V2EFZT', accel_amt: 2, exhaust: [  ]} , { x_position: 500, y_position: 0, kms_amount: 7000, car_classification: 'greenCar', licence_plate: '08FY2A', accel_amt: 2, exhaust: [  ]} , { x_position: 300, y_position: 0, kms_amount: 7400, car_classification: 'whiteCar', licence_plate: 'H5PPN1', accel_amt: 2, exhaust: [  ]} 
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
	LaneCoordA = 300;
	LaneCoordB = 500;

	chase_car = 
	{
		x_position: roadLeftEdge + roadWidth/4,
		y_position: 550,
		kms_amount: 0,
		accel_amt: 3,
		vibrate_value: 0,
		car_classification: 'detective',
		licence_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	move_car();
	var b2b = search_infront( chase_car );
	if(b2b)cross_lanes(chase_car);


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < TrafficList.length; i++)
	{
		TrafficList[i].kms_amount += TrafficList[i].accel_amt;
		TrafficList[i].y_position = chase_car.y_position - TrafficList[i].kms_amount + chase_car.kms_amount;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (chase_car.kms_amount%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (chase_car.kms_amount%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(chase_car);
	image
	(
		carImages["detective"],
		chase_car.x_position - carImages["detective"].width/2 + random(-chase_car.vibrate_value, chase_car.vibrate_value),
		chase_car.y_position + random(-chase_car.vibrate_value, chase_car.vibrate_value)
	);

	//draw all other cars

	for(var i = 0; i < TrafficList.length; i ++)
	{
		if(TrafficList[i].y_position < height && TrafficList[i].y_position > -height/2)
		{
			image(
			carImages[TrafficList[i].car_classification],
			TrafficList[i].x_position - carImages[TrafficList[i].car_classification].width/2,
			TrafficList[i].y_position
			);
			cycle_motor(TrafficList[i]);

			drawExhaust(TrafficList[i]);
		}
	}

}

function cycle_motor(car)
{

	car.exhaust.push({size: 2, x: car.x_position, y: car.y_position + carImages[car.car_classification].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.accel_amt/3);
		if(car.car_classification != "detective")car.exhaust[i].y += (chase_car.accel_amt - car.accel_amt);
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
