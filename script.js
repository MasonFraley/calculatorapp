const screen = document.getElementById("screen");
var numbers = screen.innerHTML;


function doIt(val) {
    var numbers2 = screen.innerHTML;
    screen.innerHTML = numbers2.concat(val);
    console.log(screen.innerHTML);
    var x = eval(screen.innerHTML);
    console.log(x);
}

function calculate() {
    screen.innerHTML = eval(screen.innerHTML);
}

function clear() {
    screen.innerHTML = "";
}

