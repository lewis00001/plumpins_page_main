$(document).ready(function () {

    let img = "tree";

    let rendImg = [
        {class: "dot glow-off sqr", id: 0},
        {class: "dot glow-off sqr", id: 1},
        {class: "dot glow-off sqr", id: 2},
        {class: "dot sqr green", id: 3},
        {class: "dot sqr green", id: 4},
        {class: "dot sqr green", id: 5},
        {class: "dot sqr green", id: 6},
        {class: "dot glow-off sqr", id: 7},
        {class: "dot glow-off sqr", id: 8},
        {class: "dot glow-off sqr", id: 9},
        {class: "dot sqr green", id: 10},
        {class: "dot sqr green", id: 11},
        {class: "dot glow-off sqr", id: 12},
        {class: "dot glow-off sqr", id: 13},
        {class: "dot glow-off sqr", id: 14},
        {class: "dot glow-off sqr", id: 15},
        {class: "dot glow-off sqr", id: 16},
        {class: "dot sqr green", id: 17},
        {class: "dot sqr green", id: 18},
        {class: "dot sqr green", id: 19},
        {class: "dot sqr green", id: 20},
        {class: "dot sqr green", id: 21},
        {class: "dot sqr green", id: 22},
        {class: "dot sqr green", id: 23},
        {class: "dot sqr green", id: 24},
        {class: "dot sqr green", id: 25},
        {class: "dot sqr green", id: 26},
        {class: "dot sqr green", id: 27},
        {class: "dot sqr green", id: 28},
        {class: "dot glow-off sqr", id: 29},
        {class: "dot glow-off sqr", id: 30},
        {class: "dot glow-off sqr", id: 31},
        {class: "dot sqr green", id: 32},
        {class: "dot sqr green", id: 33},
        {class: "dot sqr green", id: 34},
        {class: "dot sqr green", id: 35},
        {class: "dot sqr green", id: 36},
        {class: "dot sqr green", id: 37},
        {class: "dot sqr green", id: 38},
        {class: "dot sqr green", id: 39},
        {class: "dot sqr green", id: 40},
        {class: "dot sqr green", id: 41},
        {class: "dot sqr green", id: 42},
        {class: "dot sqr green", id: 43},
        {class: "dot sqr green", id: 44},
        {class: "dot glow-off sqr", id: 45},
        {class: "dot glow-off sqr", id: 46},
        {class: "dot glow-off sqr", id: 47},
        {class: "dot sqr green", id: 48},
        {class: "dot sqr green", id: 49},
        {class: "dot sqr orange", id: 50},
        {class: "dot sqr orange", id: 51},
        {class: "dot glow-off sqr", id: 52},
        {class: "dot sqr orange", id: 53},
        {class: "dot glow-off sqr", id: 54},
        {class: "dot glow-off sqr", id: 55},
        {class: "dot sqr orange", id: 56},
        {class: "dot glow-off sqr", id: 57},
        {class: "dot sqr green", id: 58},
        {class: "dot sqr green", id: 59},
        {class: "dot sqr green", id: 60},
        {class: "dot glow-off sqr", id: 61},
        {class: "dot glow-off sqr", id: 62},
        {class: "dot glow-off sqr", id: 63},
        {class: "dot sqr green", id: 64},
        {class: "dot sqr green", id: 65},
        {class: "dot glow-off sqr", id: 66},
        {class: "dot sqr orange", id: 67},
        {class: "dot sqr orange", id: 68},
        {class: "dot glow-off sqr", id: 69},
        {class: "dot glow-off sqr", id: 70},
        {class: "dot glow-off sqr", id: 71},
        {class: "dot sqr orange", id: 72},
        {class: "dot sqr orange", id: 73},
        {class: "dot sqr orange", id: 74},
        {class: "dot sqr green", id: 75},
        {class: "dot glow-off sqr", id: 76},
        {class: "dot glow-off sqr", id: 77},
        {class: "dot glow-off sqr", id: 78},
        {class: "dot glow-off sqr", id: 79},
        {class: "dot glow-off sqr", id: 80},
        {class: "dot glow-off sqr", id: 81},
        {class: "dot glow-off sqr", id: 82},
        {class: "dot glow-off sqr", id: 83},
        {class: "dot sqr orange", id: 84},
        {class: "dot sqr orange", id: 85},
        {class: "dot glow-off sqr", id: 86},
        {class: "dot sqr orange", id: 87},
        {class: "dot sqr orange", id: 88},
        {class: "dot glow-off sqr", id: 89},
        {class: "dot glow-off sqr", id: 90},
        {class: "dot glow-off sqr", id: 91},
        {class: "dot glow-off sqr", id: 92},
        {class: "dot glow-off sqr", id: 93},
        {class: "dot glow-off sqr", id: 94},
        {class: "dot glow-off sqr", id: 95},
        {class: "dot glow-off sqr", id: 96},
        {class: "dot glow-off sqr", id: 97},
        {class: "dot glow-off sqr", id: 98},
        {class: "dot glow-off sqr", id: 99},
        {class: "dot glow-off sqr", id: 100},
        {class: "dot sqr orange", id: 101},
        {class: "dot sqr orange", id: 102},
        {class: "dot sqr orange", id: 103},
        {class: "dot glow-off sqr", id: 104},
        {class: "dot glow-off sqr", id: 105},
        {class: "dot glow-off sqr", id: 106},
        {class: "dot glow-off sqr", id: 107},
        {class: "dot glow-off sqr", id: 108},
        {class: "dot glow-off sqr", id: 109},
        {class: "dot glow-off sqr", id: 110},
        {class: "dot glow-off sqr", id: 111},
        {class: "dot glow-off sqr", id: 112},
        {class: "dot glow-off sqr", id: 113},
        {class: "dot glow-off sqr", id: 114},
        {class: "dot glow-off sqr", id: 115},
        {class: "dot glow-off sqr", id: 116},
        {class: "dot sqr orange", id: 117},
        {class: "dot sqr orange", id: 118},
        {class: "dot glow-off sqr", id: 119},
        {class: "dot glow-off sqr", id: 120},
        {class: "dot glow-off sqr", id: 121},
        {class: "dot glow-off sqr", id: 122},
        {class: "dot glow-off sqr", id: 123},
        {class: "dot glow-off sqr", id: 124},
        {class: "dot glow-off sqr", id: 125},
        {class: "dot glow-off sqr", id: 126},
        {class: "dot glow-off sqr", id: 127},
        {class: "dot glow-off sqr", id: 128},
        {class: "dot glow-off sqr", id: 129},
        {class: "dot glow-off sqr", id: 130},
        {class: "dot glow-off sqr", id: 131},
        {class: "dot sqr orange", id: 132},
        {class: "dot sqr orange", id: 133},
        {class: "dot sqr orange", id: 134},
        {class: "dot glow-off sqr", id: 135},
        {class: "dot glow-off sqr", id: 136},
        {class: "dot glow-off sqr", id: 137},
        {class: "dot glow-off sqr", id: 138},
        {class: "dot glow-off sqr", id: 139},
        {class: "dot glow-off sqr", id: 140},
        {class: "dot glow-off sqr", id: 141},
        {class: "dot glow-off sqr", id: 142},
        {class: "dot glow-off sqr", id: 143},
        {class: "dot glow-off sqr", id: 144},
        {class: "dot glow-off sqr", id: 145},
        {class: "dot glow-off sqr", id: 146},
        {class: "dot glow-off sqr", id: 147},
        {class: "dot sqr orange", id: 148},
        {class: "dot sqr orange", id: 149},
        {class: "dot sqr orange", id: 150},
        {class: "dot glow-off sqr", id: 151},
        {class: "dot glow-off sqr", id: 152},
        {class: "dot glow-off sqr", id: 153},
        {class: "dot glow-off sqr", id: 154},
        {class: "dot glow-off sqr", id: 155},
        {class: "dot glow-off sqr", id: 156},
        {class: "dot sqr green", id: 157},
        {class: "dot sqr green", id: 158},
        {class: "dot sqr green", id: 159},
        {class: "dot glow-off sqr", id: 160},
        {class: "dot glow-off sqr", id: 161},
        {class: "dot glow-off sqr", id: 162},
        {class: "dot sqr orange", id: 163},
        {class: "dot sqr orange", id: 164},
        {class: "dot sqr orange", id: 165},
        {class: "dot sqr orange", id: 166},
        {class: "dot sqr orange", id: 167},
        {class: "dot glow-off sqr", id: 168},
        {class: "dot glow-off sqr", id: 169},
        {class: "dot glow-off sqr", id: 170},
        {class: "dot glow-off sqr", id: 171},
        {class: "dot sqr green", id: 172},
        {class: "dot sqr green", id: 173},
        {class: "dot sqr green", id: 174},
        {class: "dot sqr green", id: 175},
        {class: "dot sqr green", id: 176},
        {class: "dot sqr green", id: 177},
        {class: "dot sqr green", id: 178},
        {class: "dot sqr green", id: 179},
        {class: "dot sqr green", id: 180},
        {class: "dot sqr green", id: 181},
        {class: "dot sqr green", id: 182},
        {class: "dot sqr green", id: 183},
        {class: "dot sqr green", id: 184},
        {class: "dot sqr green", id: 185},
        {class: "dot sqr green", id: 186},
        {class: "dot sqr green", id: 187},
        {class: "dot sqr green", id: 188},
        {class: "dot sqr green", id: 189},
        {class: "dot sqr green", id: 190},
        {class: "dot sqr green", id: 191},
        {class: "dot sqr green", id: 192},
        {class: "dot sqr green", id: 193},
        {class: "dot sqr green", id: 194},
        {class: "dot sqr green", id: 195},
        {class: "dot sqr green", id: 196},
        {class: "dot sqr green", id: 197},
        {class: "dot sqr green", id: 198},
        {class: "dot sqr green", id: 199},
        {class: "dot sqr green", id: 200},
        {class: "dot sqr green", id: 201},
        {class: "dot sqr green", id: 202},
        {class: "dot sqr green", id: 203},
        {class: "dot sqr green", id: 204},
        {class: "dot sqr green", id: 205},
        {class: "dot sqr green", id: 206},
        {class: "dot sqr green", id: 207}
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