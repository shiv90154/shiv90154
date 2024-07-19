
// question no 1
function abcd(){
    var x = 12
    return function(){
        console.log(x)
    }
}
var ans = abcd()
ans()