try {

    let x = window.prompt("enter a #")
    x = Number(x);
    if (isNaN(x)) throw "this is not a number"
    if (x == "") throw "this is empty"

    console.log(`${x} is a number`);

}
catch (error) {
    console.log(error);

}
finally {
    console.log("this is always excuted")
}



