// cards = document.getElementsByClassName("card");

// var headInd = 0; 

// for (let i = 1; i < cards.length; i++) {
//     cards[i].style.display = "none";
// }

// document.onkeydown = checkKey;

// function checkKey(e) {

//     e = e || window.event;

//     if (e.keyCode == '38') {
//         // up arrow
//     }
//     else if (e.keyCode == '40') {
//         // down arrow
//     }
//     else if (e.keyCode == '37') {
//         onLeft();
//     }
//     else if (e.keyCode == '39') {
//         // onRight();
//         right();
//     }

// }

// function onRight() {
//     if (headInd == 0) {
//         cards[headInd + 1].style.display = "block";
//         headInd++;
//     }
//     else if (headInd == cards.length - 1) {
//         cards[headInd].style.display = "none";
//         headInd = 0;
//     }
//     else {
//         cards[headInd].style.display = "none";
//         cards[headInd + 1].style.display = "block";
//         headInd++;
//     }
// }

// function right(){
//     if(headInd>=cards.length-1) return;

//     headInd++;
//     cards[headInd].style.display = "block";
// }

// function onLeft() {
//     if (headInd == 0) {
//         cards[cards.length-1].style.display = "block";
//         headInd = cards.length-1;
//     }
//     else {
//         cards[headInd].style.display = "none";
//         cards[headInd - 1].style.display = "block";
//         headInd--;
//     }
// }