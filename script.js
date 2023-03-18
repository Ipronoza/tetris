window.onload = function () {
    let tetris = [];
    let tetrisField = document.querySelector('#tetris-field');
    let scoreField = document.querySelector('.score-field');
    let color = [1, 2, 3, 4, 5];  //number of colors
    let timer;
    let score = 0;
    let flag;

    //lets make tetris array

    function init() {
        let x = 9;
        let y = 15;
        for (let i = 0; i < y; i++) {
            tetris[i] = [];
            for (let j = 0; j < x; j++) {
                tetris[i][j] = 0;
            }
        }
        // console.table(tetris);
    }


    //game field
    function draw() {
        let out = '';
        for (let i = 0; i < tetris.length; i++) {
            for (let j = 0; j < tetris[i].length; j++) {
                if (tetris[i][j] == 0) {
                    out += '<div class = "white"></div>';
                }
                else if (tetris[i][j] == 1 || tetris[i][j] == 11) {
                    out += '<div class = "lightblue"></div>';
                }
                else if (tetris[i][j] == 2 || tetris[i][j] == 12) {
                    out += '<div class = "orange"></div>';
                }
                else if (tetris[i][j] == 3  || tetris[i][j] == 13) {
                    out += '<div class = "red"></div>';
                }
                else if (tetris[i][j] == 4  || tetris[i][j] == 14) {
                    out += '<div class = "green"></div>';
                }
                else if (tetris[i][j] == 5  || tetris[i][j] == 15) {
                    out += '<div class = "darkblue"></div>';
                }
            }
        }
        tetrisField.innerHTML = out;
        scoreField.innerHTML = score;
    }

    //game block

    function square() {
        function getRandomArbitrary(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
        tetris[0][0] = getRandomArbitrary(0, color.length);
        console.log(tetris[0][0]);
    }

    function run() {
        draw();
        flag = true;
        for (let i = tetris.length - 1; i >= 0; i--) {
            for (let j = 0; j < tetris[i].length; j++) {
                if (tetris[i][j]< 10) {
                    if (tetris[i][j] != 0) {
                        if (i == tetris.length - 1) {
                            tetris[i][j] = tetris[i][j] + 10;
                        }
                        else if (tetris[i + 1][j] == 0) {
                            tetris[i + 1][j] = tetris[i][j];
                            tetris[i][j] = 0;
                            flag = false;
                        }
                    }
                }
            }
        }
        if (flag) square();
    }

    init();
    draw();
    square();

    document.querySelector('button').addEventListener('click', run);
}

