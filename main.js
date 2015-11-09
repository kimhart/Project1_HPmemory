

// STUPID STUPID NOT-DRY SHAMELESS CODE //

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
};

card1.addEventListener("click", flipCard1);
card2.addEventListener("click", flipCard2);
card3.addEventListener("click", flipCard3);
card4.addEventListener("click", flipCard4);
card5.addEventListener("click", flipCard5);
card6.addEventListener("click", flipCard6);
card7.addEventListener("click", flipCard7);
card8.addEventListener("click", flipCard8);


// ALSO NOT WORKING 

// var turnAllFacedown = function(event){
// 	if (allCards.classList.contains("character"){
// 		return allCards.classList.remove("character");
// 		       allCards.classList.add("facedown");
// 	}	
// };


function shuffleArray(array) {
    for (var i = characterList.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = characterList[i];
        characterList[i] = characterList[j];
        characterList[j] = temp;
    }
    return characterList;
};


var startNewGame = document.querySelector(".new-game-button");
startNewGame.addEventListener("click", shuffleArray);
// startNewGame.addEventListener("click", turnAllFacedown); // ISN'T WORKING WITH TWO EVENT LISTENERS



// var winOrLoseBox = document.querySelector(".win-or-lose-textbox");
// var choice1 = ??? //how do I determine this mofoooooo
// var choice2 = ???


// // do they match?? 
// var doTheCardsMatch = function() {
// 	if (choice1 === choice2) {
// 		winOrLoseBox.textContent = "10 Points for Gryffindor! Keep going!";
// 		// remove after a few seconds?
// 	} else {
// 		winOrLoseBox.textContent = ""
// 	}
// }





