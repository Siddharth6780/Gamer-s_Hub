let a = 1;
let b = 19;
let score = 20;
let highscore = 0;
let Number = a + (b - a) * Math.random();
Number = Math.round(Number);
console.log(Number);
document.querySelector('.check').addEventListener('click', function () {
    const guess = (document.querySelector('.guess').value);
    if (!guess) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'No Number!';
    }
    else if (guess == Number) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'Correct Number';
        if (highscore <= score) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.number').textContent = guess;
        document.querySelector('body').style.backgroundColor = '#60b347';
    }
    else if (guess > Number) {
        document.querySelector('.message').textContent = 'Too High';
        score--;
        document.querySelector('.score').textContent = score;
    }
    else {
        document.querySelector('.message').textContent = 'Too Low';
        score--;
        document.querySelector('.score').textContent = score;
    }
    if (score <= 0) {
        document.querySelector('.message').textContent = 'You Lost The Game';
    }
    document.querySelector('.again').addEventListener('click', function () {
        Number = Math.trunc(Math.random() * 20) + 1;
        score = 20;
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.guess').value = '';
    });
});