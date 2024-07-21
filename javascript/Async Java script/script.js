// async matlb saare kaam ek saath shuru kardo ,jiska answer phele aajaye uska jawaab dedena
// sync code line by liinne chlta hai

// task a -5s
// task b -4s
// task c -2s
// task d -10s

// total time 21
// used in async- 10s

// setTimeout
// setInterval
// promises             (code is async)
// fetchs
// axios
// XMLHttpRequest

// Async js kya hota hai
//  kai  baar aapka final code depended hota jao kisi or ke server par  is case mein humeni nahi pata
// hota ki answer uske server se kab laut kaar aayega to hum kya nahi kr skte is writting a sync code
//  isse nipatne ke lye hum log async code likh dete
// hai taali blocking na ho jab bhi answer aaye humara answer ke respecr mein chalne wala code chale

console.log("hey");
setTimeout(function () {
  console.log("hey 2");
}, -2000);
