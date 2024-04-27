function moveSelector (aLink) {
    let d = document.getElementById('navSelector');
    d.style.position = "fixed";
    let f = document.getElementById("nav" + aLink);
    let computedWidth = parseFloat(window.getComputedStyle(f).width);
    let computedHeight = parseFloat(window.getComputedStyle(f).height) * 0.2;
    let h = document.getElementById('headerNavBar').offsetLeft;
    d.style.width = computedWidth + 'px';
    d.style.height = computedHeight + 'px';

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
        x_pos = getElementLeftDistance(document.getElementById('navMERCH'));
    }

    let q = document.getElementById('navHOME').offsetLeft / 2.5;
    x_pos += h -=q;
    d.style.left = x_pos + "px";
    d.style.bottom = '35px'
}

function getElementLeftDistance(element) {
    var distance = 0;
    var currentElement = element;
    
    // Loop through each offset parent until we reach the top-level parent
    while (currentElement.offsetParent !== null) {
        distance += currentElement.offsetLeft; // Add the offsetLeft of each parent
        currentElement = currentElement.offsetParent;
    }
    
    // Subtract the horizontal scroll offset of the document
    distance -= document.documentElement.scrollLeft || document.body.scrollLeft;
    
    return distance;
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