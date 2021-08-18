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

let highlightColor;

/*
Needs to disable the other buttons if a button has already been selected.
Maybe use the teamButtons class/div? Disable all children in div except toggled

Still need to include team indicator.
*/
function toggleColor(elementID){
    try{
        const e = document.getElementById(elementID); // the element
        const style = getComputedStyle(e); // edits external CSS, as opposed to style.backgroundColor
        var teamColour;
    
        switch(elementID){
            case 'redTeam':
                teamColour = "Red";
                bingoTaskDone(e, style, teamColour);
                break;
            
            case 'blueTeam':
                teamColour = "Blue";
                bingoTaskDone(e, style, teamColour); break;
    
            case 'greenTeam':
                teamColour = "Green";
                bingoTaskDone(e, style, teamColour); break;
                
            case 'yellowTeam':
                teamColour = "Yellow";
                bingoTaskDone(e, style, teamColour); break;
                
            case 'orangeTeam':
                teamColour = "Orange";
                bingoTaskDone(e, style, teamColour); break;
                
            default: console.log("There's been an error selecting a team."); break;
        }
    } catch (e){
        console.log(e);
    }
}

function bingoTaskDone(e, style, teamColour){
    try{
        if(e.classList.toggle("toggled")){ //if a team is toggled
            highlightColor = style.backgroundColor;  // get that team's bg colour and assign to global variable
            document.getElementById("teamColour").innerHTML = "You've joined the " + teamColour + " team"; //Change text above to team colour
        } else {
            highlightColor = ""; //otherwise, keep global variable empty
            document.getElementById("teamColour").innerHTML = "Click a team colour";
        }
    } catch(e){
        console.log(e);
    }
}

bingoCard.onclick = function(mouseclick) {
    highlight(mouseclick.target);
}

function highlight(td) {
    if(td.style.backgroundColor == highlightColor){ //if td's background is the same as global variable
        td.style.backgroundColor = "transparent"; // make it transparent it (reset it)
    } else{
        td.style.backgroundColor = highlightColor; //otherwise, change background to global variable
    }
}


