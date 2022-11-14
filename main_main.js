document.onkeydown = function (e) {
    //console.log("Key code is: ", e.key)
    if (e.key == "ArrowUp") {
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = playerX + 224 + "px";
        player.classList.add('animatePlayer');
        setTimeout(() => {
            player.classList.remove('animatePlayer')
        }, 700);
    }
    if (e.key == "ArrowRight") {
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = playerX + 56 + "px";
    }
    if (e.key == "ArrowLeft") {
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = (playerX - 56) + "px";
    }
    dx = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(player, null).getPropertyValue('top'));
    console.log("Left: ", dx, " Top: ", dy)
}

setInterval(() => {
    player = document.querySelector('.player');
    projects = document.querySelector('.projects');
    skills = document.querySelector('.skills');
    achievements = document.querySelector('.achievements');
    projectcontent = document.querySelector('.projectcontent');
    skillcontent = document.querySelector('.skillcontent');
    achievementcontent = document.querySelector('.achievementcontent');

    plx = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    px = parseInt(window.getComputedStyle(projects, null).getPropertyValue('left'));
    sx = parseInt(window.getComputedStyle(skills, null).getPropertyValue('left'));
    dx = parseInt(window.getComputedStyle(achievements, null).getPropertyValue('left'));

    offsetpX = Math.abs(plx - px);
    offsetsX = Math.abs(plx - sx);
    offsetdX = Math.abs(plx - dx);

    if (offsetpX < 20) {
        projectcontent.style.visibility='visible';

        achievementcontent.style.visibility='hidden';
        skillcontent.style.visibility='hidden';
    }
    else if (offsetsX < 30) {
        skillcontent.style.visibility='visible';

        projectcontent.style.visibility='hidden';
        achievementcontent.style.visibility='hidden';
    }

    else if (offsetdX < 20) {
        achievementcontent.style.visibility='visible';

        skillcontent.style.visibility='hidden';
        projectcontent.style.visibility='hidden';
    }
    
    else {
        skillcontent.style.visibility='hidden';
        achievementcontent.style.visibility='hidden';
        projectcontent.style.visibility='hidden';
    }
}, 10);