let a = setTimeout(firstmessage, 3000);
let b = setTimeout(secondmessage, 3000);

let c = setTimeout(thirdmessage, 3000);

function firstmessage() {
    alert("hey this is the first message")
}
function secondmessage() {
    alert("hey this is the second message")
}

function thirdmessage() {
    alert("hey this is the third message")
}
document.getElementById("Buy").onclick = function (firstmessage) {
    clearTimeout(a);
    clearTimeout(b);


    clearTimeout(c);
    alert("thanks for buying")
}
