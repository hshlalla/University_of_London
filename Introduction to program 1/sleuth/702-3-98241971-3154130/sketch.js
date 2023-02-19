/*

Officer: 3154130
CaseNum: 702-3-98241971-3154130

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a green car with a numberPlate of J6KT2B.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of sleuthCar and the cars in
Vehicle_Data to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Drive_Car()
{
  sleuthCar.kmsDriven += sleuthCar.speedVal;
  sleuthCar.rumbleValue += random(-0.01, 0.01);
  sleuthCar.rumbleValue = constrain(sleuthCar.rumbleValue, 0.04, 1.12);
  Run_Motor(sleuthCar);
}



function Cross_Lanes(targetCar)
{
  if (targetCar.xPosition == Lane_position_A)
  {
    targetCar.xPosition = Lane_position_B;
  }
  else
  {
    targetCar.xPosition = Lane_position_A;
  }
}



function SearchVehicle_IsAhead(Target_vehicle_A, Target_vehicle_B)
{
  if (Target_vehicle_A.xPosition == Target_vehicle_B.xPosition &&
      (Target_vehicle_A.kmsDriven<Target_vehicle_B.kmsDriven)&&
      abs( Target_vehicle_A.kmsDriven-Target_vehicle_B.kmsDriven) < 200)
  {
    return Target_vehicle_B;
  }
  else
  {
    return false;
  }
}



function Vehicle_IsBySide(targetVehicle)
{
  var parallelDistance = abs(sleuthCar.kmsDriven - targetVehicle.kmsDriven);
  if (parallelDistance < 25 && sleuthCar.xPosition != targetVehicle.xPosition)
  {
    return targetVehicle;
  }
  else
  {
    return false;
  }
}

function Spot_Suspect()
{

  
  // iterate over all the vehicles in Vehicle_Data
  for (var i = 0; i < Vehicle_Data.length; i++) {
    
    // check if the current vehicle is parallel with the sleuthCar
     var sustem=Vehicle_IsBySide(Vehicle_Data[i])
      
      // if the number plate of the current vehicle matches the suspect description, return the vehicle object
      if (sustem.numberPlate == "J6KT2B") {
        return sustem;
      }
    }
  
  
  // if no matching suspect vehicle was found, return false
  return false;
}

function Following_Suspect()
{
    if(typeof(suspect)=="object")
    {
        sleuthCar.speedVal *=1.001;
        sleuthCar.speedVal = min(sleuthCar.speedVal, 6);
    
    // check if any cars are ahead of the sleuthCar and match the suspect description
        for (var i = 0; i < Vehicle_Data.length; i++) 
        {
            var carAhead = SearchVehicle_IsAhead(sleuthCar, Vehicle_Data[i]);
            if (carAhead)
                {
                    if (carAhead.numberPlate == "J6KT2B") 
                         {
                             Arrest_Suspect();
                         }
                    else
                        {
                            Cross_Lanes(sleuthCar);  
                        }   
                }

        // if no suspect car is ahead, change lanes
          
        }
      
    }
  }


function Arrest_Suspect()
{
    suspect.isApprehended = true;
    sleuthCar.isArrestingSuspect = true;
    suspect.speedVal = 0;
    sleuthCar.speedVal = 0;
	/*
	This function should do the following: 
	 - set the isApprehended property of suspect to true.
	 - set the isArrestingSuspect property of sleuthCar to true.
	 - set the speedVal properties of both vehicles to zero.
	*/
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthCar;

var roadWidth;
var roadLeftEdge;
var Lane_position_A;
var Lane_position_B;
var carImages = {};
var suspect;

var Vehicle_Data = [
{ xPosition: 500, yPosition: 0, kmsDriven: -200, carModel: 'greenCar', numberPlate: 'N945EG', speedVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsDriven: 200, carModel: 'whiteCar', numberPlate: '01378F', speedVal: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, kmsDriven: 600, carModel: 'whiteCar', numberPlate: '6RC12C', speedVal: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, kmsDriven: 1000, carModel: 'blueCar', numberPlate: 'AAJWYJ', speedVal: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, kmsDriven: 1400, carModel: 'greenCar', numberPlate: 'J6KT2B', speedVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsDriven: 1800, carModel: 'greenCar', numberPlate: '6W4EF4', speedVal: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, kmsDriven: 2200, carModel: 'greenCar', numberPlate: 'B002BP', speedVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsDriven: 2600, carModel: 'greenCar', numberPlate: 'RE5O6K', speedVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsDriven: 3000, carModel: 'redCar', numberPlate: 'G15E60', speedVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsDriven: 3400, carModel: 'greenCar', numberPlate: '3SMG5A', speedVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsDriven: 3800, carModel: 'whiteCar', numberPlate: 'IKJ3PI', speedVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsDriven: 4200, carModel: 'redCar', numberPlate: '15HVEZ', speedVal: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, kmsDriven: 4600, carModel: 'redCar', numberPlate: '0F3VJK', speedVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsDriven: 5000, carModel: 'redCar', numberPlate: 'VZDP0F', speedVal: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, kmsDriven: 5400, carModel: 'blueCar', numberPlate: 'YS2DTK', speedVal: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, kmsDriven: 5800, carModel: 'redCar', numberPlate: 'GSQSSB', speedVal: 2, exhaust: [  ]} , { xPosition: 300, yPosition: 0, kmsDriven: 6200, carModel: 'whiteCar', numberPlate: 'Q4J553', speedVal: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, kmsDriven: 6600, carModel: 'redCar', numberPlate: 'PMV79B', speedVal: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, kmsDriven: 7000, carModel: 'whiteCar', numberPlate: 'C9YK0G', speedVal: 2, exhaust: [  ]} , { xPosition: 500, yPosition: 0, kmsDriven: 7400, carModel: 'redCar', numberPlate: 'KC1EMH', speedVal: 2, exhaust: [  ]} 
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
	Lane_position_A = 300;
	Lane_position_B = 500;

	sleuthCar = 
	{
		xPosition: roadLeftEdge + roadWidth/4,
		yPosition: 550,
		kmsDriven: 0,
		speedVal: 3,
		rumbleValue: 0,
		carModel: 'detective',
		numberPlate: '5L3UTH',
		isArrestingSuspect: false,
		tailingSuspect: false,
		exhaust: []
	}


}



function draw()
{
	background(0);

	drawRoad();
	drawCars();

	if(suspect)
	{
		if(suspect.isApprehended)
		{
			fill(255);

			text("suspect isApprehended!", width/2, height/2);
		}

	}


	////////////////////// HANDLE DETECTIVE /////////////////////////

	if(!sleuthCar.tailingSuspect&& !sleuthCar.isArrestingSuspect)
	{
		Drive_Car();
		for(var i = 0; i < Vehicle_Data.length; i++)
		{
var b2b = SearchVehicle_IsAhead(sleuthCar, Vehicle_Data[i]);
			if(b2b)Cross_Lanes(sleuthCar);
		}
		var a = Spot_Suspect();
		if(a != false)suspect = a;
		if(suspect)sleuthCar.tailingSuspect = true;
	}
	else if(!sleuthCar.isArrestingSuspect)
	{
		Following_Suspect();
		Drive_Car();
	}


	////////////////////// HANDLE ASSAILANT /////////////////////////

	if(suspect)
	{
		if(!suspect.isApprehended)
		{
			suspect.speedVal = 5;
			for(var i = 0; i < Vehicle_Data.length; i++)
			{
				var b2b = SearchVehicle_IsAhead(suspect, Vehicle_Data[i]);
				if(b2b)
				{
					if(b2b.numberPlate != suspect.numberPlate)
					{
						Cross_Lanes(suspect);
					}
				}
			}
		}
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < Vehicle_Data.length; i++)
	{
		Vehicle_Data[i].kmsDriven += Vehicle_Data[i].speedVal;
		Vehicle_Data[i].yPosition = sleuthCar.yPosition - Vehicle_Data[i].kmsDriven + sleuthCar.kmsDriven;

		if(suspect)
		{
			if(suspect.isApprehended)
			{
				if(Vehicle_Data[i].xPosition==sleuthCar.xPosition)
				{
					if(Vehicle_Data[i].kmsDriven<sleuthCar.kmsDriven)
					{
						if(Vehicle_Data[i].kmsDriven-sleuthCar.kmsDriven < 200)
						{
							Cross_Lanes(Vehicle_Data[i]);
						}
					}
				}
			}
		}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuthCar.kmsDriven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuthCar.kmsDriven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	drawExhaust(sleuthCar);
	image
	(
		carImages["detective"],
		sleuthCar.xPosition - carImages["detective"].width/2 + random(-sleuthCar.rumbleValue, sleuthCar.rumbleValue),
		sleuthCar.yPosition + random(-sleuthCar.rumbleValue, sleuthCar.rumbleValue)
	);

	//draw all other cars

	for(var i = 0; i < Vehicle_Data.length; i ++)
	{
		if(Vehicle_Data[i].yPosition < height && Vehicle_Data[i].yPosition > -height/2)
		{
			image(
			carImages[Vehicle_Data[i].carModel],
			Vehicle_Data[i].xPosition - carImages[Vehicle_Data[i].carModel].width/2,
			Vehicle_Data[i].yPosition
			);
			Run_Motor(Vehicle_Data[i]);

			drawExhaust(Vehicle_Data[i]);
		}
	}

}

function Run_Motor(car)
{

	car.exhaust.push({size: 2, x: car.xPosition, y: car.yPosition + carImages[car.carModel].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.speedVal/3);
		if(car.carModel != "detective")car.exhaust[i].y += (sleuthCar.speedVal - car.speedVal);
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
