/*
Officer: 3154130
CaseNum: 601-2-71457931-3154130

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, GreenYellow fill ellipses at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, SandyBrown stroke rectangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 56 pixels of any of the crimes then the details should be pushed to possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn. Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- <
- .push()
- ellipse()

- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var caseyFryLog = {
	pos_x: [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555],
	pos_y: [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474],
};

//Recent crime records.

var killingRecord_location_x = [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456];
var killingRecord_location_y = [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770];
var killingRecord_fatality_ = ['LIANNE COURTWOOD', 'JACQUELINE DURANTS', 'JAUNITA JOYER', 'HANG NIEMELA', 'JESSIA PORTOS', 'MALINDA GOODBURY', 'LAKESHA SYMMES', 'JENIFFER DEAUVILLE', 'DRUSILLA WARMAN', 'JESUS FORSLIN', 'DEEDEE PHINNEY', 'BRAD SILVEIRA', 'GAYLA WILLMAR', 'MAJORIE JENI'];


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

	for(let j = 0 ; j < caseyFryLog.pos_x.length ; j++)
        {
            noStroke()
            fill(173,255,47);
            ellipse(caseyFryLog.pos_x[j],caseyFryLog.pos_y[j],9,9)

            for(let k = 0 ; k < killingRecord_location_x.length ; k++)
                {
                    noFill();
                    stroke(244,164,96);
                    rectMode("Center");
                    rect(killingRecord_location_x[k],killingRecord_location_y[k],9,9)
                    if(dist(caseyFryLog.pos_x[j],caseyFryLog.pos_y[j],
                        killingRecord_location_x[k],killingRecord_location_y[k])<56)
                        {console.log(k,killingRecord_fatality_[k]),
                            possibleMatches.push({
                                crime:{
                                    x:caseyFryLog.pos_x[j],
                                    y:caseyFryLog.pos_y[j],
                                    victimName: killingRecord_fatality_[k]}, 
                                suspect:{
                                    x:killingRecord_location_x[k], y:killingRecord_location_y[k]} })
                        }
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
