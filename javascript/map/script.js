// map = object that holds key-value pair of any type of data type


const store = new Map([
    ["t-shirts", 20],
    ["pant", 20],
    ["shirts", 20],
    ["underware", 20],
    ["socks", 20],

]);

let ShoppingCart = 0;
//get method 
ShoppingCart += store.get("t-shirts");
ShoppingCart += store.get("shirts");
ShoppingCart += store.get("shirts");

store.set("hat", 40);
store.delete("socks")
console.log(store.has("t-shirts"))
console.log(ShoppingCart)
store.forEach((value, key) => console.log(`${key} $${value}`));