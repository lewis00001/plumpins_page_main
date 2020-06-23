$(document).ready(function () {

    // variables
    let numDots = 208;
    let activeColor = "glow-white";
    let dotShape = "circ";
    let glow = true;

    // reloads the html page
    $('#clear').on('click', function () {
        location.reload();
    });
    // generates all the dots on the screen
    for (let i = 0; i < numDots; i++) {
        $("#dot-output").append("<div class='dot circ glow-off' id='" + i + "'></div>");
    }

    // records color selection - checks for glow
    $('.color-options').on('click', function () {
        if (glow) {
            activeColor = $(this).attr('value');
            $('#active-color').removeClass();
            $('#active-color').addClass(activeColor);
        } else {
            activeColor = $(this).attr('value').replace("glow-", "");
            $('#active-color').removeClass();
            $('#active-color').addClass(activeColor);
        }
    });

    // adds currently selected color to circ
    $('.dot').on('click', function (e) {
        $(this).removeClass();
        $(this).addClass('dot').addClass(dotShape).addClass(activeColor);
    });

    // sets shape of dot in the grid
    $('.toggle-shape').on('click', function (e) {
        let clicked = $(this).hasClass('t-circle');
        // change from square to circle
        if (clicked) {
            $('.t-circle').addClass('toggle-active');
            $('.t-square').removeClass('toggle-active');
            $('.dot').removeClass('sqr').addClass('circ');
            dotShape = "circ";
            // change from circle to square 
        } else {
            $('.t-circle').removeClass('toggle-active');
            $('.t-square').addClass('toggle-active');
            $('.dot').removeClass('circ').addClass('sqr');
            dotShape = "sqr";
        }
    });

    // sets glow boolean
    $('.toggle-glow').on('click', function (e) {
        let clicked = $(this).hasClass('t-glow-on');
        if (clicked) {
            $('.t-glow-on').addClass('toggle-active');
            $('.t-glow-off').removeClass('toggle-active');
            activeColor = "glow-" + activeColor;
            glow = true;
            $('#active-color').removeClass();
            $('#active-color').addClass(activeColor);
        } else {
            $('.t-glow-off').addClass('toggle-active');
            $('.t-glow-on').removeClass('toggle-active');
            activeColor = activeColor.split('-').pop();
            glow = false;
            $('#active-color').removeClass();
            $('#active-color').addClass(activeColor);
        }
    });

    // change bg color
    $('.bg-select').on('click', function (e) {
        let bg = $(this).attr('value');
        $('#dot-output').removeClass();
        $('#dot-output').addClass(bg);
    });

    // reloads page to clear screen
    $('#reset').on('click', function() {
        location.reload();
    });

});