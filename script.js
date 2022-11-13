const screen = document.getElementById("screen");
var numbers = screen.innerHTML;
const equals = document.getElementById("equals");



function doIt(val) {
    var numbers2 = screen.innerHTML;
    screen.innerHTML = numbers2.concat(val);
    console.log(screen.innerHTML);
    var x = eval(screen.innerHTML);
    console.log(x);
    if(document.getElementById("equals").clicked == true) {
        calculate();
    }
}

function calculate() {
    screen.innerHTML = eval(screen.innerHTML);
}

