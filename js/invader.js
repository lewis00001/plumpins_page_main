$(document).ready(function () {

    let img = "invader";

    let rendImg = [
        {class: "dot glow-off sqr", id: 0},
        {class: "dot glow-off sqr", id: 1},
        {class: "dot glow-off sqr", id: 2},
        {class: "dot glow-off sqr", id: 3},
        {class: "dot sqr l_green", id: 4},
        {class: "dot glow-off sqr", id: 5},
        {class: "dot glow-off sqr", id: 6},
        {class: "dot glow-off sqr", id: 7},
        {class: "dot glow-off sqr", id: 8},
        {class: "dot glow-off sqr", id: 9},
        {class: "dot glow-off sqr", id: 10},
        {class: "dot sqr l_green", id: 11},
        {class: "dot glow-off sqr", id: 12},
        {class: "dot glow-off sqr", id: 13},
        {class: "dot glow-off sqr", id: 14},
        {class: "dot glow-off sqr", id: 15},
        {class: "dot glow-off sqr", id: 16},
        {class: "dot glow-off sqr", id: 17},
        {class: "dot glow-off sqr", id: 18},
        {class: "dot glow-off sqr", id: 19},
        {class: "dot glow-off sqr", id: 20},
        {class: "dot sqr l_green", id: 21},
        {class: "dot glow-off sqr", id: 22},
        {class: "dot glow-off sqr", id: 23},
        {class: "dot glow-off sqr", id: 24},
        {class: "dot glow-off sqr", id: 25},
        {class: "dot sqr l_green", id: 26},
        {class: "dot glow-off sqr", id: 27},
        {class: "dot glow-off sqr", id: 28},
        {class: "dot glow-off sqr", id: 29},
        {class: "dot glow-off sqr", id: 30},
        {class: "dot glow-off sqr", id: 31},
        {class: "dot glow-off sqr", id: 32},
        {class: "dot glow-off sqr", id: 33},
        {class: "dot glow-off sqr", id: 34},
        {class: "dot glow-off sqr", id: 35},
        {class: "dot sqr l_green", id: 36},
        {class: "dot sqr l_green", id: 37},
        {class: "dot sqr l_green", id: 38},
        {class: "dot sqr l_green", id: 39},
        {class: "dot sqr l_green", id: 40},
        {class: "dot sqr l_green", id: 41},
        {class: "dot sqr l_green", id: 42},
        {class: "dot sqr l_green", id: 43},
        {class: "dot glow-off sqr", id: 44},
        {class: "dot glow-off sqr", id: 45},
        {class: "dot glow-off sqr", id: 46},
        {class: "dot glow-off sqr", id: 47},
        {class: "dot glow-off sqr", id: 48},
        {class: "dot glow-off sqr", id: 49},
        {class: "dot glow-off sqr", id: 50},
        {class: "dot sqr l_green", id: 51},
        {class: "dot sqr l_green", id: 52},
        {class: "dot sqr red", id: 53},
        {class: "dot sqr l_green", id: 54},
        {class: "dot sqr l_green", id: 55},
        {class: "dot sqr l_green", id: 56},
        {class: "dot sqr l_green", id: 57},
        {class: "dot sqr red", id: 58},
        {class: "dot sqr l_green", id: 59},
        {class: "dot sqr l_green", id: 60},
        {class: "dot glow-off sqr", id: 61},
        {class: "dot glow-off sqr", id: 62},
        {class: "dot glow-off sqr", id: 63},
        {class: "dot glow-off sqr", id: 64},
        {class: "dot glow-off sqr", id: 65},
        {class: "dot sqr l_green", id: 66},
        {class: "dot sqr l_green", id: 67},
        {class: "dot sqr l_green", id: 68},
        {class: "dot sqr l_green", id: 69},
        {class: "dot sqr l_green", id: 70},
        {class: "dot sqr l_green", id: 71},
        {class: "dot sqr l_green", id: 72},
        {class: "dot sqr l_green", id: 73},
        {class: "dot sqr l_green", id: 74},
        {class: "dot sqr l_green", id: 75},
        {class: "dot sqr l_green", id: 76},
        {class: "dot sqr l_green", id: 77},
        {class: "dot glow-off sqr", id: 78},
        {class: "dot glow-off sqr", id: 79},
        {class: "dot glow-off sqr", id: 80},
        {class: "dot glow-off sqr", id: 81},
        {class: "dot sqr l_green", id: 82},
        {class: "dot sqr l_green", id: 83},
        {class: "dot sqr l_green", id: 84},
        {class: "dot sqr l_green", id: 85},
        {class: "dot sqr l_green", id: 86},
        {class: "dot sqr l_green", id: 87},
        {class: "dot sqr l_green", id: 88},
        {class: "dot sqr l_green", id: 89},
        {class: "dot sqr l_green", id: 90},
        {class: "dot sqr l_green", id: 91},
        {class: "dot sqr l_green", id: 92},
        {class: "dot sqr l_green", id: 93},
        {class: "dot glow-off sqr", id: 94},
        {class: "dot glow-off sqr", id: 95},
        {class: "dot glow-off sqr", id: 96},
        {class: "dot glow-off sqr", id: 97},
        {class: "dot sqr l_green", id: 98},
        {class: "dot glow-off sqr", id: 99},
        {class: "dot sqr l_green", id: 100},
        {class: "dot sqr l_green", id: 101},
        {class: "dot sqr l_green", id: 102},
        {class: "dot sqr l_green", id: 103},
        {class: "dot sqr l_green", id: 104},
        {class: "dot sqr l_green", id: 105},
        {class: "dot sqr l_green", id: 106},
        {class: "dot sqr l_green", id: 107},
        {class: "dot glow-off sqr", id: 108},
        {class: "dot sqr l_green", id: 109},
        {class: "dot glow-off sqr", id: 110},
        {class: "dot glow-off sqr", id: 111},
        {class: "dot glow-off sqr", id: 112},
        {class: "dot glow-off sqr", id: 113},
        {class: "dot sqr l_green", id: 114},
        {class: "dot glow-off sqr", id: 115},
        {class: "dot sqr l_green", id: 116},
        {class: "dot glow-off sqr", id: 117},
        {class: "dot glow-off sqr", id: 118},
        {class: "dot glow-off sqr", id: 119},
        {class: "dot glow-off sqr", id: 120},
        {class: "dot glow-off sqr", id: 121},
        {class: "dot glow-off sqr", id: 122},
        {class: "dot sqr l_green", id: 123},
        {class: "dot glow-off sqr", id: 124},
        {class: "dot sqr l_green", id: 125},
        {class: "dot glow-off sqr", id: 126},
        {class: "dot glow-off sqr", id: 127},
        {class: "dot glow-off sqr", id: 128},
        {class: "dot glow-off sqr", id: 129},
        {class: "dot glow-off sqr", id: 130},
        {class: "dot glow-off sqr", id: 131},
        {class: "dot sqr l_green", id: 132},
        {class: "dot sqr l_green", id: 133},
        {class: "dot sqr l_green", id: 134},
        {class: "dot glow-off sqr", id: 135},
        {class: "dot glow-off sqr", id: 136},
        {class: "dot sqr l_green", id: 137},
        {class: "dot sqr l_green", id: 138},
        {class: "dot sqr l_green", id: 139},
        {class: "dot glow-off sqr", id: 140},
        {class: "dot glow-off sqr", id: 141},
        {class: "dot glow-off sqr", id: 142},
        {class: "dot glow-off sqr", id: 143},
        {class: "dot glow-off sqr", id: 144},
        {class: "dot glow-off sqr", id: 145},
        {class: "dot glow-off sqr", id: 146},
        {class: "dot glow-off sqr", id: 147},
        {class: "dot glow-off sqr", id: 148},
        {class: "dot glow-off sqr", id: 149},
        {class: "dot glow-off sqr", id: 150},
        {class: "dot glow-off sqr", id: 151},
        {class: "dot glow-off sqr", id: 152},
        {class: "dot glow-off sqr", id: 153},
        {class: "dot glow-off sqr", id: 154},
        {class: "dot glow-off sqr", id: 155},
        {class: "dot glow-off sqr", id: 156},
        {class: "dot glow-off sqr", id: 157},
        {class: "dot glow-off sqr", id: 158},
        {class: "dot glow-off sqr", id: 159},
        {class: "dot glow-off sqr", id: 160},
        {class: "dot glow-off sqr", id: 161},
        {class: "dot glow-off sqr", id: 162},
        {class: "dot glow-off sqr", id: 163},
        {class: "dot glow-off sqr", id: 164},
        {class: "dot glow-off sqr", id: 165},
        {class: "dot glow-off sqr", id: 166},
        {class: "dot glow-off sqr", id: 167},
        {class: "dot glow-off sqr", id: 168},
        {class: "dot glow-off sqr", id: 169},
        {class: "dot glow-off sqr", id: 170},
        {class: "dot glow-off sqr", id: 171},
        {class: "dot glow-off sqr", id: 172},
        {class: "dot glow-off sqr", id: 173},
        {class: "dot glow-off sqr", id: 174},
        {class: "dot glow-off sqr", id: 175},
        {class: "dot glow-off sqr", id: 176},
        {class: "dot glow-off sqr", id: 177},
        {class: "dot glow-off sqr", id: 178},
        {class: "dot glow-off sqr", id: 179},
        {class: "dot glow-off sqr", id: 180},
        {class: "dot glow-off sqr", id: 181},
        {class: "dot glow-off sqr", id: 182},
        {class: "dot glow-off sqr", id: 183},
        {class: "dot glow-off sqr", id: 184},
        {class: "dot glow-off sqr", id: 185},
        {class: "dot glow-off sqr", id: 186},
        {class: "dot glow-off sqr", id: 187},
        {class: "dot glow-off sqr", id: 188},
        {class: "dot glow-off sqr", id: 189},
        {class: "dot glow-off sqr", id: 190},
        {class: "dot glow-off sqr", id: 191},
        {class: "dot glow-off sqr", id: 192},
        {class: "dot glow-off sqr", id: 193},
        {class: "dot glow-off sqr", id: 194},
        {class: "dot glow-off sqr", id: 195},
        {class: "dot glow-off sqr", id: 196},
        {class: "dot glow-off sqr", id: 197},
        {class: "dot glow-off sqr", id: 198},
        {class: "dot glow-off sqr", id: 199},
        {class: "dot glow-off sqr", id: 200},
        {class: "dot glow-off sqr", id: 201},
        {class: "dot glow-off sqr", id: 202},
        {class: "dot glow-off sqr", id: 203},
        {class: "dot glow-off sqr", id: 204},
        {class: "dot glow-off sqr", id: 205},
        {class: "dot glow-off sqr", id: 206},
        {class: "dot glow-off sqr", id: 207}
    ];

    $('#' + img).on('click', function (e) {
        for (let i = 0; i < 208; i++) {
            for (let j = 0; j < rendImg.length; j++) {
                if (rendImg[j].id === i) {
                    let currentDot = "#" + i;
                    $(currentDot).removeClass().addClass(rendImg[j].class);
                }
            }
        }
        
    });

});