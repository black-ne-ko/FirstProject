function changeColor() {
    var randomColor = '#' + randomHexValue() + randomHexValue() + randomHexValue();
    var main = document.getElementsByClassName("main");
    for (var i = 0; i < main.length; i++) {
        main[i].style.backgroundColor = randomColor;
    }
    document.getElementById('colorCode').textContent = randomColor;
}

function randomHexValue() {
    return ('0' + Math.floor(Math.random() * 256).toString(16)).slice(-2);
}
