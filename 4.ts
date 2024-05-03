var a = 1
var b = 2


if (a===1) {
    console.log("Inside block");
    var a = 10
    let b = 20
    console.log(a);
    console.log(b);
}

console.log("Outside block");
console.log(a);
console.log(b);
