import { confettiBurst } from './util/confetti';
import { consoleMeme } from './util/console-image';

(() => {
    const ticTacToe = document.getElementById('ticTacToe');

    if (ticTacToe) {
        let pause = 0;
        let all = 0;
        let a = 0;
        let b = 0;
        let c = 0;
        let d = 0;
        let e = 0;
        let f = 0;
        let g = 0;
        let h = 0;
        let i = 0;
        let temp = '';
        let ok = 0;
        let cf = 0;
        let choice = 9;
        let aRandomNumber = 0;
        let comp = 0;
        let t = 0;

        const cells = ticTacToe.querySelectorAll('.cell');
        const btnReplay = ticTacToe.querySelector('button');
        const score = ticTacToe.querySelector('.score');

        const logicOne = () => {
            if (a == 1 && b == 1 && c == 1) all = 1;
            if (a == 1 && d == 1 && g == 1) all = 1;
            if (a == 1 && e == 1 && i == 1) all = 1;
            if (b == 1 && e == 1 && h == 1) all = 1;
            if (d == 1 && e == 1 && f == 1) all = 1;
            if (g == 1 && h == 1 && i == 1) all = 1;
            if (c == 1 && f == 1 && i == 1) all = 1;
            if (g == 1 && e == 1 && c == 1) all = 1;
            if (a == 2 && b == 2 && c == 2) all = 2;
            if (a == 2 && d == 2 && g == 2) all = 2;
            if (a == 2 && e == 2 && i == 2) all = 2;
            if (b == 2 && e == 2 && h == 2) all = 2;
            if (d == 2 && e == 2 && f == 2) all = 2;
            if (g == 2 && h == 2 && i == 2) all = 2;
            if (c == 2 && f == 2 && i == 2) all = 2;
            if (g == 2 && e == 2 && c == 2) all = 2;
            if (a != 0 && b != 0 && c != 0 && d != 0 && e != 0 && f != 0 && g != 0 && h != 0 && i != 0 && all == 0) all = 3;
        };

        const logicTwo = () => {
            if (a == 2 && b == 2 && c == 0 && temp == '') temp = 'C';
            if (a == 2 && b == 0 && c == 2 && temp == '') temp = 'B';
            if (a == 0 && b == 2 && c == 2 && temp == '') temp = 'A';
            if (a == 2 && d == 2 && g == 0 && temp == '') temp = 'G';
            if (a == 2 && d == 0 && g == 2 && temp == '') temp = 'D';
            if (a == 0 && d == 2 && g == 2 && temp == '') temp = 'A';
            if (a == 2 && e == 2 && i == 0 && temp == '') temp = 'I';
            if (a == 2 && e == 0 && i == 2 && temp == '') temp = 'E';
            if (a == 0 && e == 2 && i == 2 && temp == '') temp = 'A';
            if (b == 2 && e == 2 && h == 0 && temp == '') temp = 'H';
            if (b == 2 && e == 0 && h == 2 && temp == '') temp = 'E';
            if (b == 0 && e == 2 && h == 2 && temp == '') temp = 'B';
            if (d == 2 && e == 2 && f == 0 && temp == '') temp = 'F';
            if (d == 2 && e == 0 && f == 2 && temp == '') temp = 'E';
            if (d == 0 && e == 2 && f == 2 && temp == '') temp = 'D';
            if (g == 2 && h == 2 && i == 0 && temp == '') temp = 'I';
            if (g == 2 && h == 0 && i == 2 && temp == '') temp = 'H';
            if (g == 0 && h == 2 && i == 2 && temp == '') temp = 'G';
            if (c == 2 && f == 2 && i == 0 && temp == '') temp = 'I';
            if (c == 2 && f == 0 && i == 2 && temp == '') temp = 'F';
            if (c == 0 && f == 2 && i == 2 && temp == '') temp = 'C';
            if (g == 2 && e == 2 && c == 0 && temp == '') temp = 'C';
            if (g == 2 && e == 0 && c == 2 && temp == '') temp = 'E';
            if (g == 0 && e == 2 && c == 2 && temp == '') temp = 'G';
        };

        const logicThree = () => {
            if (a == 1 && b == 1 && c == 0 && temp == '') temp = 'C';
            if (a == 1 && b == 0 && c == 1 && temp == '') temp = 'B';
            if (a == 0 && b == 1 && c == 1 && temp == '') temp = 'A';
            if (a == 1 && d == 1 && g == 0 && temp == '') temp = 'G';
            if (a == 1 && d == 0 && g == 1 && temp == '') temp = 'D';
            if (a == 0 && d == 1 && g == 1 && temp == '') temp = 'A';
            if (a == 1 && e == 1 && i == 0 && temp == '') temp = 'I';
            if (a == 1 && e == 0 && i == 1 && temp == '') temp = 'E';
            if (a == 0 && e == 1 && i == 1 && temp == '') temp = 'A';
            if (b == 1 && e == 1 && h == 0 && temp == '') temp = 'H';
            if (b == 1 && e == 0 && h == 1 && temp == '') temp = 'E';
            if (b == 0 && e == 1 && h == 1 && temp == '') temp = 'B';
            if (d == 1 && e == 1 && f == 0 && temp == '') temp = 'F';
            if (d == 1 && e == 0 && f == 1 && temp == '') temp = 'E';
            if (d == 0 && e == 1 && f == 1 && temp == '') temp = 'D';
            if (g == 1 && h == 1 && i == 0 && temp == '') temp = 'I';
            if (g == 1 && h == 0 && i == 1 && temp == '') temp = 'H';
            if (g == 0 && h == 1 && i == 1 && temp == '') temp = 'G';
            if (c == 1 && f == 1 && i == 0 && temp == '') temp = 'I';
            if (c == 1 && f == 0 && i == 1 && temp == '') temp = 'F';
            if (c == 0 && f == 1 && i == 1 && temp == '') temp = 'C';
            if (g == 1 && e == 1 && c == 0 && temp == '') temp = 'C';
            if (g == 1 && e == 0 && c == 1 && temp == '') temp = 'E';
            if (g == 0 && e == 1 && c == 1 && temp == '') temp = 'G';
        };

        const checkSpace = () => {
            if (temp == 'A' && a == 0) {
                ok = 1;
                if (cf == 0) a = 1;
                if (cf == 1) a = 2;
            }
            if (temp == 'B' && b == 0) {
                ok = 1;
                if (cf == 0) b = 1;
                if (cf == 1) b = 2;
            }
            if (temp == 'C' && c == 0) {
                ok = 1;
                if (cf == 0) c = 1;
                if (cf == 1) c = 2;
            }
            if (temp == 'D' && d == 0) {
                ok = 1;
                if (cf == 0) d = 1;
                if (cf == 1) d = 2;
            }
            if (temp == 'E' && e == 0) {
                ok = 1;
                if (cf == 0) e = 1;
                if (cf == 1) e = 2;
            }
            if (temp == 'F' && f == 0) {
                ok = 1;
                if (cf == 0) f = 1;
                if (cf == 1) f = 2;
            }
            if (temp == 'G' && g == 0) {
                ok = 1;
                if (cf == 0) g = 1;
                if (cf == 1) g = 2;
            }
            if (temp == 'H' && h == 0) {
                ok = 1;
                if (cf == 0) h = 1;
                if (cf == 1) h = 2;
            }
            if (temp == 'I' && i == 0) {
                ok = 1;
                if (cf == 0) i = 1;
                if (cf == 1) i = 2;
            }
        };

        const yourChoice = chName => {
            pause = 0;
            if (all != 0) ended();
            if (all == 0) {
                cf = 0;
                ok = 0;
                temp = chName;
                checkSpace();
                if (ok == 1) {
                    document.querySelector(`[data-sh-cell="${chName}"]`).innerHTML = '<i class="fa-solid fa-o text-opposite"></i>';
                }
                if (ok == 0) taken();
                process();
                if (all == 0 && pause == 0) myChoice();
            }

            if (!ticTacToe.classList.contains('active')) {
                ticTacToe.classList.add('active');
                console.log('Whahooo! You found the Tic-Tac-Toe game. 🎉');
                confettiBurst();
            }
        };

        const taken = () => {
            console.log('🤦‍♀️ That square is already occupied silly.');
            pause = 1;
        };

        const myChoice = () => {
            temp = '';
            ok = 0;
            cf = 1;
            logicTwo();
            logicThree();
            checkSpace();
            while (ok == 0) { // eslint-disable-line
                aRandomNumber = Math.random();
                comp = Math.round((choice - 1) * aRandomNumber) + 1;
                if (comp == 1) temp = 'A';
                if (comp == 2) temp = 'B';
                if (comp == 3) temp = 'C';
                if (comp == 4) temp = 'D';
                if (comp == 5) temp = 'E';
                if (comp == 6) temp = 'F';
                if (comp == 7) temp = 'G';
                if (comp == 8) temp = 'H';
                if (comp == 9) temp = 'I';
                checkSpace();
            }

            setTimeout(() => {
                document.querySelector(`[data-sh-cell="${temp}"]`).innerHTML = '<i class="fa-solid fa-x text-opposite"></i>';
            }, 500);

            process();
        };

        const ended = () => {
            console.log('The game has already ended. To play a new game click the Play Again button.');
        };

        const process = () => {
            logicOne();

            if (all == 1) {
                ticTacToe.classList.add('winner');
                score.innerHTML = 'Winner';
                console.log('You won, congratulations! 🏆');
                confettiBurst();
            }

            if (all == 2) {
                ticTacToe.classList.add('loser');
                score.innerHTML = 'Loser';
                consoleMeme('You lost', 'N00b', `https://cataas.com/cat/cute?width=200?height=200?${new Date().getTime()}`, 200, 200);
            }

            if (all == 3) {
                ticTacToe.classList.add('tie');
                score.innerHTML = 'Tie';
                console.log('We tied. 👔');
            }

            if (all == 1 || all == 2 || all == 3) {
                ticTacToe.classList.add('replay');
            }
        };

        btnReplay.addEventListener('click', () => {
            all = 0;
            a = 0;
            b = 0;
            c = 0;
            d = 0;
            e = 0;
            f = 0;
            g = 0;
            h = 0;
            i = 0;
            temp = '';
            ok = 0;
            cf = 0;
            choice = 9;
            aRandomNumber = 0;
            comp = 0;

            cells.forEach(el => {
                el.innerHTML = '';
            });

            if (t == 0) {
                t = 2;
                myChoice();
            }

            t--;

            ticTacToe.classList.remove('replay', 'winner', 'loser', 'tie');
            score.innerHTML = '';
        }, false);

        cells.forEach(el => {
            el.addEventListener('click', () => {
                yourChoice(el.getAttribute('data-sh-cell'));
            }, false);
        });

        myChoice();
    }
})();
