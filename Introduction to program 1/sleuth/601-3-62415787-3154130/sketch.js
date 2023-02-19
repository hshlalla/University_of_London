/*
Officer: 3154130
CaseNum: 601-3-62415787-3154130

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, BlueViolet fill ellipses at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Gold fill triangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings. If she was within less than 56 pixels of any of the crimes within no more than 3 days of their occurrence then the details should be pushed to the list of possible matches with the following format.

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
- ellipse()

- triangle() NB. Draw each triangle with the point roughly at its center.

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var killer_sightings = {
	pt_x: [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68],
	pt_y: [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461],
	recordDate: [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24],
};

//Recent crime records.

var attack_recorded = {
	PosX: [438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817],
	PosY: [420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474],
	recordedDay: [11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18],
	Murdered: ['DRUSILLA WARMAN', 'GAYLA WILLMAR', 'SUMMER CASIMERE', 'ERMELINDA OORIN', 'JESSIA PORTOS', 'KITTY THAXTER', 'LAVERNE JACQUELIN', 'DARBY MYRLE', 'DEEDEE PHINNEY', 'HANG NIEMELA', 'LIANNE COURTWOOD', 'PIERRE DORCEY', 'LINETTE MOHWAWK', 'NICOLE ASHELY', 'JAUNITA JOYER'],
};

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

    for(let j = 0; j <killer_sightings.pt_x.length;j++)
        {
            noStroke();
            fill(138,43,226);
            ellipse(killer_sightings.pt_x[j],killer_sightings.pt_y[j],9,9);
            for(let k =0; k<killer_sightings.pt_x.length;k++)
                {
                    fill(255,215,0);
                    triangle(killer_sightings.pt_x[k],killer_sightings.pt_y[k]);
                }
        }



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
