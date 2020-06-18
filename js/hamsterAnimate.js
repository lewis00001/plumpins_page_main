$(document).ready(function () {

    $("#sec-1").hover(function () {
        $("#hamster-1").removeClass("out").addClass("over");
    }, function () {
        $("#hamster-1").removeClass("over").addClass("out");
    });

    $("#sec-2").hover(function () {
        $("#hamster-2").removeClass("out").addClass("over");
    }, function () {
        $("#hamster-2").removeClass("over").addClass("out");
    });

    $("#sec-3").hover(function () {
        $("#hamster-3").removeClass("out").addClass("over");
    }, function () {
        $("#hamster-3").removeClass("over").addClass("out");
    });

});