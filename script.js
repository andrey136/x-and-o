let count = 0;
let chosenItems_X = [];
let chosenItems_O = [];
const winIndexs = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let trueOrFalse = [];
let _end = false;


function chosen(id) {
    if (!chosenItems_X.includes(id) && !chosenItems_O.includes(id) && !_end) {
        count++;
        const x = document.createElement('img');
        count % 2 ? x.src = 'photos/Xs.png' : x.src = 'photos/Os.png';
        x.width = 120;
        x.height = 120;
        document.getElementById(id).appendChild(x);
        count % 2 ? chosenItems_O.push(id) : chosenItems_X.push(id);
        console.log(count % 2);
        if (count > 4) end();
    }
}

function end() {
    let str = '';
    let h2 = document.createElement('h2');
    if (count === 9) {
        str = "The game is over";
    }
    if (trueOrFalse.length === 0) {
        console.log('!!!!!!');
        winIndexs.map(el => {
            trueOrFalse.push(el.every(cur => chosenItems_X.indexOf(cur) > -1));
        });
        if (trueOrFalse.includes(true)) {
            str = "Player 2 wins";
            _end = true;
        } else {
            trueOrFalse = [];
        }
    }
    if (trueOrFalse.length === 0) {
        winIndexs.map(el => {
            trueOrFalse.push(el.every(cur => chosenItems_O.indexOf(cur) > -1));
        });
        if (trueOrFalse.includes(true)) {
            str = "Player 1 wins";
            _end = true;
        } else {
            trueOrFalse = [];
        }
    }
    h2.textContent = str;
    document.getElementById('game').appendChild(h2);
    console.log(count);
}