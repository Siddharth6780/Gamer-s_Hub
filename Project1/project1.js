score = 0;
cross = true;
//audio=new audio('music.mp3');
audiogo=new Audio('gameover.mp3');
document.onkeydown = function (e) {
    //console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        fighter = document.querySelector('.fighter');
        fighter.classList.add('animatefighter');
        setTimeout(() => {
            fighter.classList.remove('animatefighter');
        }, 700);
    }
    else if (e.keyCode == 39) {
        dino = document.querySelector('fighter');
        dinox = parseInt(window.getComputedStyle(fighter, null).getPropertyValue('left'));
        fighter.style.left = dinox + 50 + "px";
    }
    else if (e.keyCode == 37) {
        dino = document.querySelector('fighter');
        dinox = parseInt(window.getComputedStyle(fighter, null).getPropertyValue('left'));
        fighter.style.left = dinox - 50 + "px";
    }
}
setInterval(() => {
    fighter = document.querySelector('.fighter');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');
    fx = parseInt(window.getComputedStyle(fighter, null).getPropertyValue('left'));
    fy = parseInt(window.getComputedStyle(fighter, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetx = Math.abs(fx - ox);
    offsety = Math.abs(fy - oy);
    console.log(offsetx + " " + offsety);
    if (offsetx <= 40 && offsety <= 40) {
        gameover.style.visibility = 'visible';
        gameover.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')
        cross = false;
        //audiogo.play();
        // setTimeout(() => {
        //     audiogo.pause();
        // }, 1000);
    }
    if (cross) {
        score += 1;
        updatescore(score);
    }
}, 100);
function updatescore(score) {
    scorecont.innerHTML = "Your Score : " + score;
}