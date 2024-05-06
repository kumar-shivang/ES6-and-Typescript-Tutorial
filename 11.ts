class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    console.log(name, age);
  }
  greet = () => {
    console.log(`hello ${this.name}`);
  };
  static staticMethod() {
    console.log("static method called");
  }
}

let dibbu = new Person("Dibiya", 21);

dibbu.greet();

// dibbu.staticMethod() //won't work

Person.staticMethod();
