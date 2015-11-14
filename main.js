
var characterList = [ 
	{name: "harry", img: "images/harry.png"}, 
	{name: "harry", img: "images/harry.png"},
	{name: "hermione", img: "images/hermione.png"},
	{name: "hermione", img: "images/hermione.png"},
	{name: "ron", img: "images/ron.png"},
	{name: "ron", img: "images/ron.png"},
	{name: "dobby", img: "images/dobby.png"},
	{name: "dobby", img: "images/dobby.png"},
	{name: "hagrid", img: "images/hagrid.png"},
	{name: "hagrid", img: "images/hagrid.png"},
	{name: "mcG", img: "images/mcG.png"},
	{name: "mcG", img: "images/mcG.png"},
	{name: "dumbledore", img: "images/dumbledore.png"},
	{name: "dumbledore", img: "images/dumbledore.png"},
	{name: "voldemort", img: "images/voldemort.png"},
	{name: "voldemort", img: "images/voldemort.png"},
	{name: "neville", img: "images/neville.png"},
	{name: "neville", img: "images/neville.png"}
];

var shuffle = function(array) {
    for (var i = characterList.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = characterList[i];
        winOrLose.textContent=(" ")
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

var clickedCards = [];
var names = ['harry', 'hermione', 'ron', 'dobby', 'mcG', 'dumbledore', 'voldemort', 'hagrid', 'neville'];

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
			window.setTimeout(function() {
			winOrLose.textContent=(" ")
		}, 2000);
			clickedCards = [];
			if($('.facedown').length === 0) {
				winOrLose.textContent=("You win!");
				window.setTimeout(function() {
				winOrLose.textContent=("I solemnly swear that I'm up to no good...click START NEW GAME to play again!")
				}, 2000);
				window.setTimeout(function() {
				$('.card').addClass("facedown");
				}, 2000);
			} return newgame();
		} else {
			var firstCard = '#' + clickedCards[0].id; 
			var secondCard = '#' + clickedCards[1].id;
			var firstCardEl = document.querySelector(firstCard);
			var secondCardEl = document.querySelector(secondCard);
			winOrLose.textContent=("10 points to Slytherin. Try again!");
			window.setTimeout(function() {
			winOrLose.textContent=(" ")
			}, 2000);
			window.setTimeout(function() {
				firstCardEl.classList.add('facedown');
				secondCardEl.classList.add('facedown');
			}, 2000);
			clickedCards = [];
		}
	}
};

$('.card').on('click', handleClick)


var startNewGame = document.querySelector(".new-game-button");
startNewGame.addEventListener("click", newGame)


