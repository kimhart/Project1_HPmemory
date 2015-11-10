


var card1 = document.querySelector("#card1");
var card2 = document.querySelector("#card2");
var card3 = document.querySelector("#card3");
var card4 = document.querySelector("#card4");
var card5 = document.querySelector("#card5");
var card6 = document.querySelector("#card6");
var card7 = document.querySelector("#card7");
var card8 = document.querySelector("#card8");
var allCards = document.querySelectorAll(".card");


var characterList = [ 
	{name: "harry", img: "images/harry.png"}, 
	{name: "harry", img: "images/harry.png"},
	{name: "hermione", img: "images/hermione.png"},
	{name: "hermione", img: "images/hermione.png"},
	{name: "ron", img: "images/ron.png"},
	{name: "ron", img: "images/ron.png"},
	{name: "dobby", img: "images/dobby.png"},
	{name: "dobby", img: "images/dobby.png"}
];


// determining first and second click
// var firstClick = false;
// var secondClick = false;

var clickedCards = [];

var names = ['harry', 'hermione', 'ron', 'dobby'];

	
var handleClick = function(event) {
	var classes = event.target.classList;
	var cardName;
	for (var i =0; i < classes.length; i++) {
		if(names.indexOf(classes[i]) !== -1) {
			cardName = classes[i];
		}
	}
	var cardId = event.target.id;
	var cardObj = {name: cardName, id: cardId};
	clickedCards.push(cardObj);
	event.target.classList.remove('facedown');

	if (clickedCards.length === 2) {
		console.log(clickedCards);
		if (clickedCards[0].name === clickedCards[1].name) {
			console.log('YOU WON');
			clickedCards = [];
		} else {
			var firstCard = '#' + clickedCards[0].id; 
			var secondCard = '#' + clickedCards[1].id;
			var firstCardEl = document.querySelector(firstCard);
			var secondCardEl = document.querySelector(secondCard);
			window.setTimeout(function() {
				firstCardEl.classList.add('facedown');
				secondCardEl.classList.add('facedown');
			}, 2*1000);
			clickedCards = [];
		}
	}
};

// var doTheyMatch = function(click1, click2) {
// 	if  {
// 		console.log("It's a match!")
// 	}
// }

// doTheyMatch(firstClick, secondClick)


$('.card').on('click', handleClick)



function shuffle(array) {
    for (var i = characterList.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = characterList[i];
        characterList[i] = characterList[j];
        characterList[j] = temp;
    }
    return characterList;
};


var newGame = function(event){
	shuffle(characterList)
	var shuffledCharacters = shuffle(characterList) 
	var cards = $('.card');
	for (i = 0; i < shuffledCharacters.length; i++) {
		cards.eq(i).addClass(shuffledCharacters[i].name)
	}
}


var startNewGame = document.querySelector(".new-game-button");
startNewGame.addEventListener("click", newGame);
// startNewGame.addEventListener("click", turnAllFacedown); // ISN'T WORKING WITH TWO EVENT LISTENERS





//win or lose box in a separate function




