function moveSelector (aLink) {
    let d = document.getElementById('navSelector');
    d.style.position = "absolute";

    let x_pos = 0;
    let winWidth = window.innerWidth * 0.26;

    if (aLink == "HOME") {
        x_pos = document.getElementById('navHOME').offsetLeft;
    }

    if (aLink == "ABOUT") {
        x_pos = document.getElementById('navABOUT').offsetLeft;
    }
    
    if (aLink == "MUSIC") {
        x_pos = document.getElementById('navMUSIC').offsetLeft;
    }

    if (aLink == "MERCH") {
        x_pos = document.getElementById('navMERCH').offsetLeft;
    }

    x_pos += winWidth
    d.style.left = x_pos + "px";
    d.style.bottom = '35px'
}

function navBarScroll () {
    /* let n = document.getElementById('navSelector');
    n.syle.bottom = '35px'; */
    console.log("scroll!")
}

function startTimer (aLink) {
    hoverTimer = setTimeout(function () {moveSelector(aLink);}, 250);
}

function stopTimer () {
    clearTimeout(hoverTimer)
}



/* function divColorTest (color) {
    let c = document.getElementById('navSelector')
    c.style.backgroundColor = color;
} */