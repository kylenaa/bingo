/**
 * TO-DO
 * 
 * Let user click a button to assign team colour - done
 * User now highlights with their respective colour
 * highlight can only be a strip in the box? rather than the whole box?
 * 
 * only able to toggle one button at a time
 * 
 */

/*
If attribute is clicked
let colour be highlight colour
change property in css using js
*/
let highlightColor = "";

function toggleColour(elementID){
    document.getElementById(elementID).classList.toggle("toggled");


    const redTeam = document.querySelector("redTeam");
    const redStyle = getComputedStyle(redTeam);

    document.classList.highlight
    highlightColor = redStyle.backgroundColor;
}

bingoCard.onclick = function(mouseclick) {
    highlight(mouseclick.target);
}

function highlight(td) {
    td.classList.toggle('highlight');
}
