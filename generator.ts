function* createGenerator() {
  let i: number = 0;
  while (i <= 10) {
    yield i;
    i++;
  }
}

let gen = createGenerator();

for (let index = 0; index <= 10; index++) {
  console.log(gen.next());
}

console.log(gen.next());
