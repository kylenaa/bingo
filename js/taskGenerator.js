// ignore for now. this will only work if in a live server, so if testing, use that

$(document).ready(function(){
    $.getJSON("../js/tasklist.json", function(tasks){
        for(var i = 0;i<tasks.easy.length;i++){
            console.log("reached here " + tasks.easy[i]);
        }
    }).fail(function(){
        console.log("An error occurred while generating tasks.");
    });
});

