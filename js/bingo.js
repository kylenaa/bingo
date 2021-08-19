/**
 * TO-DO
 * 
 * Let user click a button to assign team colour - done 18.08.2021
 * User now highlights with their respective colour - done 18.08.2021
 * highlight can only be a strip in the box? rather than the whole box?
 * 
 * only able to toggle one button at a time - done 19.08.2021
 * 
 */

 let highlightColor;
 let teamColour = "";

 /*
 Still need to include team indicator.
 */

 function toggleColor(elementID){
     try{
         const e = document.getElementById(elementID); // the element
         const style = getComputedStyle(e); // edits external CSS, as opposed to style.backgroundColor
         var teamButtons = document.getElementsByClassName("teamButtons");

         switch(elementID){
             case 'redTeam': //This can probably be put in a function on its own
                if(teamColour === "Red"){ //if teamColour (the global variable) is red 
                    teamColour = ""; //reset it
                    $(".teamButtons").not(e).prop("disabled", false);//enable others
                    bingoTaskDone(e, style, teamColour, teamButtons);   //set highlight color to none
                    return;
                   } else{(teamColour === "") //else if teamColour is not set
                    teamColour = "Red"; //set to red
                    bingoTaskDone(e, style, teamColour, teamButtons);   //set to red
                    $(".teamButtons").not(e).prop("disabled",true); //disable other buttons
                }break;
             
             case 'blueTeam':
                if(teamColour === "Blue"){ 
                    teamColour = ""; 
                    $(".teamButtons").not(e).prop("disabled", false);
                    bingoTaskDone(e, style, teamColour, teamButtons);   
                    return;
                   } else{(teamColour === "") 
                    teamColour = "Blue"; 
                    bingoTaskDone(e, style, teamColour, teamButtons);   
                    $(".teamButtons").not(e).prop("disabled",true); 
                }break;
     
             case 'greenTeam':
                if(teamColour === "Green"){ 
                    teamColour = ""; 
                    $(".teamButtons").not(e).prop("disabled", false);
                    bingoTaskDone(e, style, teamColour, teamButtons);   
                    return;
                   } else{(teamColour === "") 
                    teamColour = "Green"; 
                    bingoTaskDone(e, style, teamColour, teamButtons);   
                    $(".teamButtons").not(e).prop("disabled",true); 
                } break;
                 
             case 'yellowTeam':
                if(teamColour === "Yellow"){ 
                    teamColour = ""; 
                    $(".teamButtons").not(e).prop("disabled", false);
                    bingoTaskDone(e, style, teamColour, teamButtons);   
                    return;
                   } else{(teamColour === "") 
                    teamColour = "Yellow"; 
                    bingoTaskDone(e, style, teamColour, teamButtons);   
                    $(".teamButtons").not(e).prop("disabled",true); 
                } break;
                 
             case 'orangeTeam':
                if(teamColour === "Orange"){ //if teamColour (the global variable) is red 
                    teamColour = ""; //reset it
                    $(".teamButtons").not(e).prop("disabled", false);//enable others
                    bingoTaskDone(e, style, teamColour, teamButtons);   //set highlight color to none
                    return;
                   } else{(teamColour === "") //else if teamColour is not set
                    teamColour = "Orange"; //set to red
                    bingoTaskDone(e, style, teamColour, teamButtons);   //set to red
                    $(".teamButtons").not(e).prop("disabled",true); //disable other buttons
                }  break;

             default: console.log("There's been an error selecting a team."); break;
         }
     } catch (e){
         console.log(e);
     }
 }
 
 function bingoTaskDone(e, style, teamColour, teamButtons){
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
         td.style.backgroundColor = "lightgrey"; // make it transparent it (reset it)
     } else{
         td.style.backgroundColor = highlightColor; //otherwise, change background to global variable
     }
 }