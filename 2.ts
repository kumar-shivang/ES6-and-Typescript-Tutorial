function greetPerson(name) {
    // var greet;
    if (name==="Shivang"){
        // var greet = "Hello Shivang"
        greet = "Hello Shivang"
    }
    else{
        // var greet = "Hi There"
        greet = "Hello"
    }
    console.log(greet);
    var greet; // variable hosisting moves it to top 
}



greetPerson("Shivang");

greetPerson("Someone Else")