import { Animal } from "./1.js";

class Dog extends Animal {
  breed;
  constructor(name, breed) {
    super(name);
    this.breed = breed;
    console.log(this.breed);
  }
}

export default Dog;
