/*
802 - The case of Monte Carlo
Stage 4 - Club criminal


Officer: 3154130
CaseNum: 802-3-70529437-3154130

The card sharks from Rossling Polling are not pleased with your stellar performance and suspect foul play. They are challenging you to find a single card in the deck in just one cut.

- First write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers between 5 and 69.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().

Now, the card you are looking for is stored in the cutLocation object. You need to cut the deck at this exact location and the card sharks will be forced to give up their secrets.

- Write a function called cut_deck and call it from setup.
- This should search for card matching cutLocation inside card_deck.
- Once you've found a match use the JavaScript splice() function to store the cut card and all the elements after from the card_deck array in the deckUptoCut array. 
- You'll need to break the loop once you've done as you don't want to keep searching.
- Finally reverse the elements in deckUptoCut so that the card we cut the deck at is the last element and not the first. 
	- Unfortunately, if we use JavaScript's inbuilt reverse() function we’ll be spotted. You’ll have to write this yourself kid. 


*/



var card_deck = [ { s: 'Spades', number: 'A'} , { s: 'Spades', number: '2'} , { s: 'Spades', number: '3'} , { s: 'Spades', number: '4'} , { s: 'Spades', number: '5'} , { s: 'Spades', number: '6'} , { s: 'Spades', number: '7'} , { s: 'Spades', number: '8'} , { s: 'Spades', number: '9'} , { s: 'Spades', number: '10'} , { s: 'Spades', number: 'J'} , { s: 'Spades', number: 'Q'} , { s: 'Spades', number: 'K'} , { s: 'Clubs', number: 'A'} , { s: 'Clubs', number: '2'} , { s: 'Clubs', number: '3'} , { s: 'Clubs', number: '4'} , { s: 'Clubs', number: '5'} , { s: 'Clubs', number: '6'} , { s: 'Clubs', number: '7'} , { s: 'Clubs', number: '8'} , { s: 'Clubs', number: '9'} , { s: 'Clubs', number: '10'} , { s: 'Clubs', number: 'J'} , { s: 'Clubs', number: 'Q'} , { s: 'Clubs', number: 'K'} , { s: 'Hearts', number: 'A'} , { s: 'Hearts', number: '2'} , { s: 'Hearts', number: '3'} , { s: 'Hearts', number: '4'} , { s: 'Hearts', number: '5'} , { s: 'Hearts', number: '6'} , { s: 'Hearts', number: '7'} , { s: 'Hearts', number: '8'} , { s: 'Hearts', number: '9'} , { s: 'Hearts', number: '10'} , { s: 'Hearts', number: 'J'} , { s: 'Hearts', number: 'Q'} , { s: 'Hearts', number: 'K'} , { s: 'Diamonds', number: 'A'} , { s: 'Diamonds', number: '2'} , { s: 'Diamonds', number: '3'} , { s: 'Diamonds', number: '4'} , { s: 'Diamonds', number: '5'} , { s: 'Diamonds', number: '6'} , { s: 'Diamonds', number: '7'} , { s: 'Diamonds', number: '8'} , { s: 'Diamonds', number: '9'} , { s: 'Diamonds', number: '10'} , { s: 'Diamonds', number: 'J'} , { s: 'Diamonds', number: 'Q'} , { s: 'Diamonds', number: 'K'}  ];
var deck_img;
var table_img;
var drawCounter = 0;

var cutLocation = { type: 'Clubs', n: '10'} ;
var deckUptoCut = [];

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

	//call your cut_deck function here
    cut_deck();


}
//- Write a function called cut_deck and call it from setup.
//- This should search for card matching cutLocation inside card_deck.
//- Once you've found a match use the JavaScript splice() function to store the cut card and all the elements after from the card_deck array in the deckUptoCut array. 
//- You'll need to break the loop once you've done as you don't want to keep searching.
//- Finally reverse the elements in deckUptoCut so that the card we cut the deck at is the last element and not the first. 
//	- Unfortunately, if we use JavaScript's inbuilt reverse() function we’ll be spotted. You’ll have to write this yourself kid. 



//write your cut_deck function here
function cut_deck()
{
    var temporary =[];
    for(var j=0;j<card_deck.length;j++)
        {

            if((cutLocation.type == card_deck[j].s) && (cutLocation.n == card_deck[j].number))
            {
               temporary.push(card_deck.splice(j,card_deck.length-1));
               break;
            }
        }

    for(var i=temporary[0].length-1;i>=0;i--)
        {
            //console.log(temporary[0][i]);
            deckUptoCut.push(temporary[0][i])
        }
    
}

//write your shuffleSeed() function here.
function shuffleSeed()
{
    var seednum=[]
    for(var i =0;i<52;i++)
        {
            seednum.push(round(random(5,69)));
        }
    return seednum;
    
}

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < card_deck.length; j++)
	   {
		  var tempCard = card_deck.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          card_deck.splice(newLoc, 0, tempCard[0]);
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
		if(i < deckUptoCut.length)
		{
			drawCard(deckUptoCut[i], 880 + i * 18, 750);
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
			if (card.number == values[j] && card.s == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
