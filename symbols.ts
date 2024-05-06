let s = Symbol("Symbol1");

console.log(typeof s);

console.log(s.toString());

let s1 = Symbol("Symbol1");

console.log(s === s1);

let s2 = Symbol.for("something");

let s3 = Symbol.for("something");

console.log(s2 === s3);

console.log(s3.valueOf());
