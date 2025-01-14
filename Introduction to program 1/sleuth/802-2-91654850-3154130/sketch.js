/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards


Officer: 3154130
CaseNum: 802-2-91654850-3154130

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in winningHand from the deck and store it in the hand array.

- Write a function called build_winning_hand and call it from setup.
- The function should take each card in winningHand and seacrh for a match in deck.
- Matching cards should be added to the hand array
- You'll need to use a nested for loop and break statement in the inner loop to stop searching once you've found a match.

- You also need to write a shuffleSeed() function. 
- This needs to return an array of 52 random integers between 4 and 53.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var deck = [ { s: 'Spades', v: 'A'} , { s: 'Spades', v: '2'} , { s: 'Spades', v: '3'} , { s: 'Spades', v: '4'} , { s: 'Spades', v: '5'} , { s: 'Spades', v: '6'} , { s: 'Spades', v: '7'} , { s: 'Spades', v: '8'} , { s: 'Spades', v: '9'} , { s: 'Spades', v: '10'} , { s: 'Spades', v: 'J'} , { s: 'Spades', v: 'Q'} , { s: 'Spades', v: 'K'} , { s: 'Clubs', v: 'A'} , { s: 'Clubs', v: '2'} , { s: 'Clubs', v: '3'} , { s: 'Clubs', v: '4'} , { s: 'Clubs', v: '5'} , { s: 'Clubs', v: '6'} , { s: 'Clubs', v: '7'} , { s: 'Clubs', v: '8'} , { s: 'Clubs', v: '9'} , { s: 'Clubs', v: '10'} , { s: 'Clubs', v: 'J'} , { s: 'Clubs', v: 'Q'} , { s: 'Clubs', v: 'K'} , { s: 'Hearts', v: 'A'} , { s: 'Hearts', v: '2'} , { s: 'Hearts', v: '3'} , { s: 'Hearts', v: '4'} , { s: 'Hearts', v: '5'} , { s: 'Hearts', v: '6'} , { s: 'Hearts', v: '7'} , { s: 'Hearts', v: '8'} , { s: 'Hearts', v: '9'} , { s: 'Hearts', v: '10'} , { s: 'Hearts', v: 'J'} , { s: 'Hearts', v: 'Q'} , { s: 'Hearts', v: 'K'} , { s: 'Diamonds', v: 'A'} , { s: 'Diamonds', v: '2'} , { s: 'Diamonds', v: '3'} , { s: 'Diamonds', v: '4'} , { s: 'Diamonds', v: '5'} , { s: 'Diamonds', v: '6'} , { s: 'Diamonds', v: '7'} , { s: 'Diamonds', v: '8'} , { s: 'Diamonds', v: '9'} , { s: 'Diamonds', v: '10'} , { s: 'Diamonds', v: 'J'} , { s: 'Diamonds', v: 'Q'} , { s: 'Diamonds', v: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

var winningHand = [ { s: 'Hearts', value: 'K'} , { s: 'Diamonds', value: 'J'} , { s: 'Clubs', value: 'Q'} , { s: 'Hearts', value: 'J'} , { s: 'Hearts', value: '10'}  ];
var hand =[];


function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
    shuffleDeck(shuffleSeed());


	//call your build_winning_hand function here
    build_winning_hand();
        console.log(hand);
}
    //write your build_winning_hand function here
function build_winning_hand()
{
    for(var j =0;j<winningHand.length;j++)
        {
        for(var i =0;i<deck.length;i++)
            {
                if((winningHand[j].s==deck[i].s)&&(winningHand[j].value==deck[i].v))
                    {
                       hand.push(deck[i]);
                        break;

                    }

            }
            
        }
}

//write your shuffleSeed() function here.
function shuffleSeed()
{
    var random_sed=[];
    for(var i =0;i<52;i++)
        {
            random_sed.push(round(random(4,53)));
        }
    
    return random_sed;
}

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < deck.length; j++)
	   {
		  var tempCard = deck.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          deck.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 5)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if( i < hand.length)
		{
			drawCard(hand[i], 880 + i * 18, 750);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.v == values[j] && card.s == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
