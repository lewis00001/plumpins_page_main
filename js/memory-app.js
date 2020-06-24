$(document).ready(function () {

    const findColorNum = (colorToNum) => ({
        "off":      0,
        "orange":   1,
        "purple":   2,
        "white":    3,
        "blue":     4,
        "yellow":   5
    }) [colorToNum];

    const puzzle = [
        // level 1
        ["yellow", "off", "blue", "off", 
        "off", "off", "off", "off", 
        "off", "off", "off", "off", 
        "off", "off", "off", "off",],
        // level 2
        ["off", "off", "white", "off", 
        "off", "off", "orange", "off", 
        "off", "off", "off", "off", 
        "off", "off", "off", "off",]
    ]

    let loadedPuzzleValues = [];
    let userPuzzleValues = [];

    let memActiveColor = "white";

    // records color selection
    $('.color-options').on('click', function () {
        memActiveColor = $(this).attr('value');
        $('#mem-active-color').removeClass();
        $('#mem-active-color').addClass(memActiveColor);
    });

    // adds currently selected color to dot and updates color value
    $('.m-dot').on('click', function (e) {
        $(this).removeClass();
        $(this).addClass('dot').addClass('m-dot').addClass('circ').addClass(memActiveColor);
        $(this).attr('value', findColorNum(memActiveColor));
    });

    // submit button
    $('#submit').on('click', function() {
        userPuzzleValues = [];
        for (let i = 0; i < 16; i++) {
            let userEntry = $('#user-dot-' + i).attr('value');
            userPuzzleValues.push(userEntry);
        }
        console.log('userEntry: ' + userPuzzleValues);
    });

    // loads the selected puzzle
    $('.memory-sel-button').on('click', function(e) {
        let level = $(this).attr('value');
        loadedPuzzleValues = [];
        for (let i = 0; i < 16; i++) {
            let memCurrentDot = '#' + i;
            $(memCurrentDot).removeClass().addClass("dot circ " + puzzle[level][i]);
            let num = findColorNum(puzzle[level][i]);
            loadedPuzzleValues.push(num);
        };
        console.log("puzzle: " + loadedPuzzleValues);
    });

});