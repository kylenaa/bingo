card.onclick = function(mouseclick) {
    highlight(mouseclick.target);
}

function highlight(td) {
    td.classList.toggle('highlight');
}