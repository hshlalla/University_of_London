/*
Officer: 3154130
CaseNum: 601-3-98571801-3154130

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Turquoise fill rectangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Sienna fill ellipses at each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings. If she was within less than 43 pixels of any of the crimes within no more than 1 days of their occurrence then the details should be pushed to the list of possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- if()
- <
- &&
- .push()
- dist()
- abs()
- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- ellipse()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var murdererLogbook_pt_x = [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68];
var murdererLogbook_pt_y = [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461];
var murdererLogbook_day = [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24];


//Recent crime records.

var crimeData = [ 
  { coord_x : 438, coord_y : 420, recordedDay : 11, murdered_ : 'BRAD SILVEIRA'},
  { coord_x : 408, coord_y : 451, recordedDay : 11, murdered_ : 'PIERRE DORCEY'},
  { coord_x : 408, coord_y : 377, recordedDay : 13, murdered_ : 'NELSON TINTLE'},
  { coord_x : 642, coord_y : 289, recordedDay : 16, murdered_ : 'JACQUELINE DURANTS'},
  { coord_x : 623, coord_y : 279, recordedDay : 16, murdered_ : 'DARBY MYRLE'},
  { coord_x : 95, coord_y : 488, recordedDay : 17, murdered_ : 'DEEDEE PHINNEY'},
  { coord_x : 75, coord_y : 522, recordedDay : 18, murdered_ : 'JESUS FORSLIN'},
  { coord_x : 269, coord_y : 597, recordedDay : 26, murdered_ : 'ERMELINDA OORIN'},
  { coord_x : 389, coord_y : 554, recordedDay : 28, murdered_ : 'HANG NIEMELA'},
  { coord_x : 484, coord_y : 549, recordedDay : 2, murdered_ : 'BRIDGET BROADVIEW'},
  { coord_x : 496, coord_y : 484, recordedDay : 9, murdered_ : 'JULIANA ADVERSANE'},
  { coord_x : 546, coord_y : 463, recordedDay : 14, murdered_ : 'LOUISE ZETLAND'},
  { coord_x : 538, coord_y : 359, recordedDay : 12, murdered_ : 'DRUSILLA WARMAN'},
  { coord_x : 702, coord_y : 412, recordedDay : 17, murdered_ : 'MALINDA GOODBURY'},
  { coord_x : 817, coord_y : 474, recordedDay : 18, murdered_ : 'TU DAVISWOOD'} 
];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
	createCanvas(countyMap.width, countyMap.height);
	noFill();
	noStroke();
	image(countyMap, 0,0);

	//add your code below here
    for(var j=0; j <murdererLogbook_pt_x.length;j++)
        {
            noStroke();
            fill(64,224,208);
            rect(murdererLogbook_pt_x[j]-4,murdererLogbook_pt_y[j]-4,8,8);
        }
    for(var k =0; k<crimeData.length;k++)
        {
            fill(160,82,45);
            ellipse(crimeData[k].coord_x,crimeData[k].coord_y,8,8);
            //console.log(abs(crimeData[k].recordedDay-murdererLogbook_day[j]))
        }
    for(var l =0; l<crimeData.length;l++)
        {
            for(var m =0; m<murdererLogbook_day.length;m++)
            {
                if(abs(crimeData[l].recordedDay-murdererLogbook_day[m])<2 &&   
                    dist(murdererLogbook_pt_x[m],
                         murdererLogbook_pt_y[m],
                        crimeData[l].coord_x,
                        crimeData[l].coord_y)<43)
                {
                    console.log(123)
                }
            }
        }
        
//                    if((dist(murdererLogbook_pt_x[j],
//                            murdererLogbook_pt_y[j],
//                            crimeData[k].coord_x,
//                            crimeData[k].coord_y)<43)&&
//                      (abs(crimeData[k].recordedDay-murdererLogbook_day[j])<2))
//                        {
//                          possibleMatches.push({crime:{x:crimeData[k].coord_x,
//                                                       y:crimeData[k].coord_y,
//                                                      victimname:crimeData[k].murdered_},
//                                               suspect:{x:murdererLogbook_pt_x[j],
//                                                        y:murdererLogbook_pt_y[j]}});
//                            console.log(123)
//                            
//                        }
//                    if((dist(murdererLogbook_pt_x[j],
//                            murdererLogbook_pt_y[j],
//                            crimeData[k].coord_x,
//                            crimeData[k].coord_y)<43))
//                        {console.log(j,k)
//                            if(abs(crimeData[k].recordedDay-murdererLogbook_day[j])<3)
//                                {
//                                    
//                                
//                          possibleMatches.push({crime:{x:crimeData[k].coord_x,
//                                                       y:crimeData[k].coord_y,
//                                                      victimname:crimeData[k].murdered_},
//                                               suspect:{x:murdererLogbook_pt_x[j],
//                                                        y:murdererLogbook_pt_y[j]}});
//                            console.log(possibleMatches)
//                                }
                            
//                        }

    
    

	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

		noStroke();
		fill(127);
		text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
	}
}

//We are not using the draw function this time
