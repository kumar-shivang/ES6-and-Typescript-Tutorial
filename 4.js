var a = 1;
var b = 2;
if (a === 10) {
    console.log("Inside block");
    var a = 10;
    var b_1 = 20;
    console.log(a);
    console.log(b_1);
}
console.log("Outside block");
console.log(a);
console.log(b);
