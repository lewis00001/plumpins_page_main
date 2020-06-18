$(document).ready(function () {

    $("#sel-text").hover(function () {
        $(this).addClass("border");
        console.log("mouse in");
    }, function () {
        $(this).removeClass("border")
        console.log("mouse out");
    });

});