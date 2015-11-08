

// STUPID STUPID NOT-DRY SHAMELESS CODE //
// SETTING UP ORIGINAL CARD VARIABLES //

var card1 = document.querySelector("#card1");
var card2 = document.querySelector("#card2");
var card3 = document.querySelector("#card3");
var card4 = document.querySelector("#card4");
var card5 = document.querySelector("#card5");
var card6 = document.querySelector("#card6");
var card7 = document.querySelector("#card7");
var card8 = document.querySelector("#card8");

// Now we want to be able to assign the class of 'character' to all of the cards RANDOMLY when the page loads. We need to make an array of objects that include 2 photos of each character, with their name and imgsrc as properties. This also needs to function on the shuffle command, which will be called when the player clicks 'reset board' or 'try level again' //




var startNewGame = document.querySelector(".new-game-button");


// SHUFFLE THROUGH THE CARDS //

var characterList = [ 
		{name: "harry", img: "images/harry.png"}, 
		{name: "harry2", img: "images/harry.png"},
		{name: "hermione", img: "images/hermione.png"},
		{name: "hermione2", img: "images/hermione.png"},
		{name: "ron", img: "images/ron.png"},
		{name: "ron2", img: "images/ron.png"}
		];

function shuffle(array) {
  var currentIndex = characterList.length, temporaryValue, randomIndex ;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = chacterList[currentIndex];
    chacterList[currentIndex] = chacterList[randomIndex];
    chacterList[randomIndex] = temporaryValue;
  }

  return chacterList;
}

// run shuffle function on click:
startNewGame.addEventListener("click", shuffle);



// CLICKING CARDS DURING THE GAME //

var flipCard1 = function(event){
	card1.classList.remove("facedown");
    console.log(event);
};

var flipCard2 = function(event){
	card2.classList.remove("facedown");
    console.log(event);
};

var flipCard3 = function(event){
	card3.classList.remove("facedown");
    console.log(event);
};

var flipCard4 = function(event){
	card4.classList.remove("facedown");
    console.log(event);
};

var flipCard5 = function(event){
	card5.classList.remove("facedown");
    console.log(event);
};

var flipCard6 = function(event){
	card6.classList.remove("facedown");
    console.log(event);
};

var flipCard7 = function(event){
	card7.classList.remove("facedown");
    console.log(event);
};

var flipCard8 = function(event){
	card8.classList.remove("facedown");
    console.log(event);
};

card1.addEventListener("click", flipCard1);
card2.addEventListener("click", flipCard2);
card3.addEventListener("click", flipCard3);
card4.addEventListener("click", flipCard4);
card5.addEventListener("click", flipCard5);
card6.addEventListener("click", flipCard6);
card7.addEventListener("click", flipCard7);
card8.addEventListener("click", flipCard8);


