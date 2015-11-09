


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



// var makeCard = function(){
// 	var newCard = document.createElement('div');
// 	newCard.classList.add('card')
// 	newCard.classList.add('facedown')
// 	return newCard;	
// }

// makeNewCards = function() {
// 	for(var i = 0; i < characterList.length; i++) {
// 		var newCard = document.createElement('div');
// 		newCard.classList.add('card')
// 		newCard.classList.add('facedown')
// 		console.log(characterList[i]);	
// 	}
// };


// // target .card in the DOM and use a for loop to add each name
// var assignCharacters = function(){
// 	for(var i = 0; i < characterList.length; i++) {
// 		$('.card').addClass('character');
// 		$('.card')
// 	return setCharacter;
// 	}
// }

//event listeners for clicks on cards
// card1.addEventListener("click", flipCard1);
// card2.addEventListener("click", flipCard2);
// card3.addEventListener("click", flipCard3);
// card4.addEventListener("click", flipCard4);

// determining first and second click
var firstClick = false;
var secondClick = false;

// ANNA's IDEA //
// Grab the classList array & save it to a variable
		// Remove 'card' from THAT ARRAY 
		// The remaining element in the array should be the character name!
		// Get that character name out of the array
		// See if the OTHER clicked div has that class as well.
		

var handleClick = function(event){
	event.target.classList.remove("facedown");
	if (firstClick) {
		secondClick = event.target;
		
		
		// better decide if they match quick!
		// if they match remain face up, can't click anymore
		// else maybe reset first and second click
		firstClick = false;
		secondClick = false;
	} else {
		firstClick =  event.target;
	}

	console.log(event);
}




$('.card').on('click', handleClick)



function shuffleArray(array) {
    for (var i = characterList.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = characterList[i];
        characterList[i] = characterList[j];
        characterList[j] = temp;
    }
    return characterList;
};

var newGame = function(event){
	console.log("clicked")
	shuffleArray(characterList)
	var shuffledCharacters = shuffleArray(characterList) 
	var cards = $('.card');
	for (i = 0; i < shuffledCharacters.length; i++) {
		cards.eq(i).addClass(shuffledCharacters[i].name)
	}
	
}

var startNewGame = document.querySelector(".new-game-button");
startNewGame.addEventListener("click", newGame);
// startNewGame.addEventListener("click", turnAllFacedown); // ISN'T WORKING WITH TWO EVENT LISTENERS





//win or lose box in a separate function




