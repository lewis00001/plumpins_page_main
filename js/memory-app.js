$(document).ready(function () {

    const findColorNum = (colorToNum) => ({
        "off": 0,
        "orange": 1,
        "purple": 2,
        "white": 3,
        "blue": 4,
        "yellow": 5
    })[colorToNum];

    const puzzle = [
        // level 1
        ["blue", "off", "off", "blue",
            "off", "blue", "blue", "off",
            "off", "blue", "blue", "off",
            "blue", "off", "off", "blue",
        ],
        // level 2
        ["off", "orange", "orange", "off",
            "orange", "purple", "purple", "orange",
            "orange", "purple", "purple", "orange",
            "off", "orange", "orange", "off",
        ],
        // level 3
        ["blue", "off", "off", "blue",
            "blue", "white", "white", "blue",
            "purple", "white", "white", "purple",
            "purple", "off", "off", "purple",
        ],
        // level 4
        ["white", "blue", "purple", "white",
            "purple", "yellow", "yellow", "blue",
            "blue", "yellow", "yellow", "purple",
            "white", "purple", "blue", "white",
        ],
        // level 5
        ["white", "yellow", "orange", "blue",
            "yellow", "white", "blue", "orange",
            "orange", "blue", "white", "yellow",
            "blue", "orange", "yellow", "white",
        ],
        // level 6
        ["off", "off", "off", "off",
            "off", "off", "off", "off",
            "off", "off", "off", "off",
            "off", "off", "off", "off",
        ],
        // level 7
        ["off", "off", "off", "off",
            "off", "off", "off", "off",
            "off", "off", "off", "off",
            "off", "off", "off", "off",
        ],
        // level 8
        ["off", "off", "off", "off",
            "off", "off", "off", "off",
            "off", "off", "off", "off",
            "off", "off", "off", "off",
        ], 
        // level 9
        ["off", "off", "off", "off",
            "off", "off", "off", "off",
            "off", "off", "off", "off",
            "off", "off", "off", "off",
        ], 
        // level 10
        ["off", "off", "off", "off",
            "off", "off", "off", "off",
            "off", "off", "off", "off",
            "off", "off", "off", "off",
        ]
    ];

    // score counters
    let points = 0;
    let peeks = 0;
    let scoreSum = 0;
    let points_base = 1000;
    let peeks_base = 100;

    let loadedPuzzleValues = [];
    let userPuzzleValues = [];
    let memActiveColor = "white";
    let currentPuzzleId = "";

    // compares arrays and returns a bool
    function match(arr1, arr2) {
        let isMatch = true;
        for (let i = 0; i < 16; i++) {
            if (loadedPuzzleValues[i] != userPuzzleValues[i]) {
                isMatch = false;
                break;
            }
        }
        console.log(isMatch);
        return isMatch;
    }

    // runs countdown timer for peek button
    peekCountDown = (time) => {
        let t = time;
        // disables users ability to click puzzle dots
        $('.m-dot').addClass('non-click');
        reduce = () => {
            $('#peek').html(t);
            if (t <= 0) {
                clearInterval(interval);
                $('#peek').html('PEEK -100pts');
                $('#load-puzzle').addClass('display-off');
                // enables users ability to click puzzle dots
                $('.m-dot').removeClass('non-click');
            }
            t--;
        };
        $('#load-puzzle').removeClass('display-off');
        let interval = setInterval(reduce, 1000);
    };

    // update total score
    updateTotalScore = () => {
        let updateSum = points - peeks;
        scoreSum = updateSum;
        $('#total-points').html(points);
        $('#peek-points').html(peeks);
        $('#score-sum').html(scoreSum);
    }

    // peek button function
    $('#peek').on('click', function () {
        peeks += peeks_base;
        peekCountDown(3);
        updateTotalScore();
    });

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
    $('#submit').on('click', function () {
        userPuzzleValues = [];
        for (let i = 0; i < 16; i++) {
            let userEntry = $('#user-dot-' + i).attr('value');
            userPuzzleValues.push(userEntry);
        }
        console.log('userEntry: ' + userPuzzleValues);
        let puzzleMatch = match(loadedPuzzleValues, userPuzzleValues);
        if (puzzleMatch) {
            $('.info-output').text('Great Memory!').addClass('confirm');
            setTimeout(function () {
                $('.info-output').html('').removeClass('confirm');
            }, 3000);
            points += points_base;
            updateTotalScore();
            $('#load-puzzle').removeClass('display-off');
            $(currentPuzzleId).removeClass('memory-sel-button-current').addClass('memory-sel-button-complete');
        } else {
            $('.info-output').text('Oops, try again').addClass('error');
            setTimeout(function () {
                $('.info-output').html('').removeClass('error');
            }, 3000);
        }
    });

    // clear last puzzle
    clearUserDots = () => {
        loadedPuzzleValues = [];
        for (let i = 0; i < 16; i++) {
            let memCurrentDot = '#user-dot-' + i;
            $(memCurrentDot).removeClass().addClass("dot m-dot circ off");
            $(memCurrentDot).attr('value', 0);
        };
    }

    // loads the selected puzzle
    $('.memory-sel-button').on('click', function (e) {
        clearUserDots();
        currentPuzzleId = "#" + $(this).attr('id');
        console.log(currentPuzzleId);
        $(this).addClass('memory-sel-button-current non-click')
        let level = $(this).attr('value');
        loadedPuzzleValues = [];
        for (let i = 0; i < 16; i++) {
            let memCurrentDot = '#' + i;
            $(memCurrentDot).removeClass().addClass("dot circ " + puzzle[level][i]);
            let num = findColorNum(puzzle[level][i]);
            loadedPuzzleValues.push(num);
        };
        console.log("sysPuzzle: " + loadedPuzzleValues);
        peekCountDown(5);
    });

});