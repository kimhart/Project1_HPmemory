
// Make any card flip //

var anyCard = document.querySelector("#board");
anyCard.addEventListener("click", flipCard);
 
function flipCard(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        console.log(event);
    }

    e.stopPropagation();
};

//