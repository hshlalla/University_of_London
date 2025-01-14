/*
Officer: 3154130
CaseNum: 601-1-20627845-3154130

Case 601 - Cross Reference - stage 2

Fry is still on the loose. We think she’s resorted to stealing to get by.
Hopefully we can track her down by cross-referencing sightings and recent thefts in the area.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Maroon stroke rectangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Red stroke ellipses at each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- ellipse()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var Casey_Logbook = {
	posX: [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555],
	posY: [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474],
};

//Recent crime records.

var Theft_Recorded = [ 
  { Coord_X : 403, Coord_Y : 401},
  { Coord_X : 402, Coord_Y : 360},
  { Coord_X : 427, Coord_Y : 403},
  { Coord_X : 646, Coord_Y : 284},
  { Coord_X : 639, Coord_Y : 264},
  { Coord_X : 830, Coord_Y : 434},
  { Coord_X : 809, Coord_Y : 443},
  { Coord_X : 844, Coord_Y : 496},
  { Coord_X : 802, Coord_Y : 350},
  { Coord_X : 683, Coord_Y : 413},
  { Coord_X : 552, Coord_Y : 464},
  { Coord_X : 629, Coord_Y : 498},
  { Coord_X : 712, Coord_Y : 562},
  { Coord_X : 783, Coord_Y : 603},
  { Coord_X : 415, Coord_Y : 225},
  { Coord_X : 561, Coord_Y : 282},
  { Coord_X : 562, Coord_Y : 392},
  { Coord_X : 751, Coord_Y : 283},
  { Coord_X : 680, Coord_Y : 359},
  { Coord_X : 626, Coord_Y : 436},
  { Coord_X : 701, Coord_Y : 455},
  { Coord_X : 838, Coord_Y : 565},
  { Coord_X : 322, Coord_Y : 508},
  { Coord_X : 468, Coord_Y : 556},
  { Coord_X : 625, Coord_Y : 737} 
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
    
    stroke(128,0,0);
    rectMode("Center");
    for(var j=0;j<Casey_Logbook["posX"].length;j++)
        {
            rect(Casey_Logbook.posX[j],Casey_Logbook.posY[j],9,9)
        }
    
    stroke(255,0,0);
    
    for(var i=0;i<Theft_Recorded.length;i++)
        {
            ellipse(Theft_Recorded[i].Coord_X,Theft_Recorded[i].Coord_Y,9,9)
        }



}

//We are not using the draw function this time
