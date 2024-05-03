function greetPerson2(name){
    if (name==="Shivang") {
        let greet = "Hello Shivang"
    } else {
        let greet = "Hi There"
        // let greet; //Doesn't support hoisting
    }
    console.log(greet); // This throws an error because let is block scoped
    // NOTE : A block is the space between {}


}

greetPerson2("Shivang")

greetPerson2("Another Person")
