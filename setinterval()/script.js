let count = 0;
let max = window.prompt("count up to this nummber");
max = Number(max);
const mytimer = setInterval(countup, 1000);
function countup() {
    count += 1;
    console.log(count);
    if (count >= max) {
        clearInterval(mytimer);
    }
}