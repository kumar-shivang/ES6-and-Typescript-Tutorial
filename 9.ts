// Default parameters

let getValue = function(value:number=10){ // 10 is the default value here
    console.log(
        value
    );
}

getValue(); // Using default value
getValue(20); // Passing a parameter


let getValue2 = function(value:number = 1,bonus:number = 2) {
    console.log(value,bonus);
}

getValue2() // With default parameters
getValue2(5) // With only first parameter
getValue2(undefined,10) // with only second parameter
getValue2(10,20) // With both parameters



let getValue3 = function(value:number=10, bonus:number = value*0.1) {
    console.log(value+bonus);
}

getValue3()
getValue3(5)
getValue3(10,20)
