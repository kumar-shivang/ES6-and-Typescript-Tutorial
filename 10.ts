// arguments

let logValues = function(){
    for (let i in arguments) {
        console.log(arguments[i]);
    }
}

logValues("a")

logValues("b","c")

logValues("d","e","f")



// Alternatively

let logValues2 = function name(...args:any[]) {
    for(let i in args){
        console.log(args[i]);
    }    
}

logValues2(1)
logValues2(2,3)
logValues2(4,5,6)