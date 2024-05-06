class Persona {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    console.log(this.name, this.age);
  }
  greet = () => {
    console.log(`Hello ${this.name}`);
  };
}

class Developer extends Persona {
  exp: number;
  constructor(name: string, age: number, exp: number) {
    super(name, age);
    this.exp = exp;
    console.log(`dev constructor called ${this.exp}`);
  }
  greet = () => {
    console.log(`Hello Dear ${this.name}`);
  };
}

let dev = new Developer("Dibbu", 21, 2);
dev.greet();
