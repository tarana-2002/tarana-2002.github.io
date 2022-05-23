//Hide objects with id si card.
$(document).ready(function() {
    $(".card").click(function() {
        $(this).hide();
    });

});

//Give a warning when clicked.
$(document).ready(function() {
    $(".click").mouseup(function() {
        alert("Successfully clicked!");
    });

});

//close open operation
$(document).ready(function() {
    $(".close").click(function() {
        $(".Hide").toggle();
    });

});