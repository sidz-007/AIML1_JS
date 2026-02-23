// console.log("Hello, World!");
// document.write("Welcome to AIML1_JS!");
// var num=10;
// console.log(num);
// console.log(typeof(num));

// num = false;
// console.log(num);
// console.log(typeof(num));

// num = "Mohd Sheeraz";
// console.log(num);
// console.log(typeof(num));

// num = null;
// console.log(num);
// console.log(typeof(num));

// num = undefined;
// console.log(num);
// console.log(typeof(num));

// const sym1 = Symbol(4);
// console.log(sym1);

// const sym2 = Symbol(4);
// console.log(sym2);

// if (sym1 === sym2) {
//     console.log("true");
// }
// else {    console.log("false");
// }
// var a = 10; var b = 20;  var linebreak = "<br>";

// document.write("a+b+c = ");
// result = a + b + c;
// document.write("(a<b) => ");
// result = (a < b);
// document.write(result);
// document.write(linebreak);

// document.write("(a>b) => ");
// result = (a > b);
// document.write(result);
// document.write(linebreak);
var count;
document.write("Starting Lopp" + "<br/>");
for (count = 0; count < 10; count++){
    document.write("Current Count: " + count);
    document.write("<br/>");
}
document.write("Loop Ended");
const person = {
    fname:"Mohd",
    lname: "Sheeraz",
    age: 22
};
for (let x in person) {
     console.log("Person Details: " + x + " = " + person[x]);
}
