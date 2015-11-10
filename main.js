
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
<<<<<<< HEAD
	{name: "harry2", img: "images/harry.png"},
	{name: "hermione", img: "images/hermione.png"},
	{name: "hermione2", img: "images/hermione.png"},
	{name: "ron", img: "images/ron.png"},
	{name: "ron2", img: "images/ron.png"},
	{name: "dobby", img: "images/dobby.png"},
	{name: "dobby2", img: "images/dobby.png"}
];


var flipCard1 = function(event){
	card1.classList.remove("facedown");
	card1.classList.add("character")
    console.log(event);
};
var flipCard2 = function(event){
	card2.classList.remove("facedown");
	card2.classList.add("character")
    console.log(event);
};
var flipCard3 = function(event){
	card3.classList.remove("facedown");
	card3.classList.add("character")
    console.log(event);
};
var flipCard4 = function(event){
	card4.classList.remove("facedown");
	card4.classList.add("character")
    console.log(event);
};
var flipCard5 = function(event){
	card5.classList.remove("facedown");
	card5.classList.add("character")
    console.log(event);
};
var flipCard6 = function(event){
	card6.classList.remove("facedown");
	card6.classList.add("character")
    console.log(event);
};
var flipCard7 = function(event){
	card7.classList.remove("facedown");
	card7.classList.add("character")
    console.log(event);
};
var flipCard8 = function(event){
	card8.classList.remove("facedown");
	card8.classList.add("character")
    console.log(event);
=======
	{name: "harry", img: "images/harry.png"},
	{name: "hermione", img: "images/hermione.png"},
	{name: "hermione", img: "images/hermione.png"},
	{name: "ron", img: "images/ron.png"},
	{name: "ron", img: "images/ron.png"},
	{name: "dobby", img: "images/dobby.png"},
	{name: "dobby", img: "images/dobby.png"}
];


var clickedCards = [];

var names = ['harry', 'hermione', 'ron', 'dobby'];

var winOrLose = document.querySelector(".win-or-lose-textbox");
	
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
			winOrLose.textContent=("It's a match! 10 points to Gryffindor!");
			clickedCards = [];
			if($('.facedown').length === 0) {
				winOrLose.textContent=("You win!");
				$('.card').addClass("facedown");
			}
		} else {
			var firstCard = '#' + clickedCards[0].id; 
			var secondCard = '#' + clickedCards[1].id;
			var firstCardEl = document.querySelector(firstCard);
			var secondCardEl = document.querySelector(secondCard);
			winOrLose.textContent=("10 points to Slytherin. Try again!");
			window.setTimeout(function() {
				firstCardEl.classList.add('facedown');
				secondCardEl.classList.add('facedown');
			}, 2*1000);
			clickedCards = [];
		}
	}
>>>>>>> phil-pairing
};

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
	var shuffledCharacters = shuffle(characterList);
	var cards = $('.card');
	cards.removeClass("hidden");
	for (i = 0; i < shuffledCharacters.length; i++) {
		cards.eq(i).addClass(shuffledCharacters[i].name)
	}
}


var startNewGame = document.querySelector(".new-game-button");
startNewGame.addEventListener("click", newGame);




