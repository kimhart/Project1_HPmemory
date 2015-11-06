
// Make any card flip //

// var anyCard = document.querySelector("#board");
// anyCard.addEventListener("click", flipCard);
 
// var flipCard = function(e) {
//     if (e.target !== e.currentTarget) {
//         var clickedItem = e.target.id;
//         console.log(event);
//     }
//     e.stopPropagation();
// };


// STUPID STUPID NOT-DRY SHAMELESS CODE //

var card1 = document.querySelector("#card1");
var card2 = document.querySelector("#card2");
var card3 = document.querySelector("#card3");
var card4 = document.querySelector("#card4");
var card5 = document.querySelector("#card5");
var card6 = document.querySelector("#card6");
var card7 = document.querySelector("#card7");
var card8 = document.querySelector("#card8");


var flipCard1 = function(event){
	card1.classList.remove("facedown");
    console.log(event);
};

var flipCard2 = function(event){
	card2.classList.remove("facedown");
    console.log(event);
};

var flipCard3 = function(event){
	card3.classList.remove("blue");
    console.log(event);
};

var flipCard4 = function(event){
	card4.classList.remove("blue");
    console.log(event);
};

var flipCard5 = function(event){
	card5.classList.remove("blue");
    console.log(event);
};

var flipCard6 = function(event){
	card6.classList.remove("blue");
    console.log(event);
};

var flipCard7 = function(event){
	card7.classList.remove("blue");
    console.log(event);
};

var flipCard8 = function(event){
	card8.classList.remove("blue");
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


