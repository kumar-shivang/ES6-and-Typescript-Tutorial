let a: number[] = [1, 2, 3, 4, 5];
var task = (element: number) => {
  console.log(element * 2);
};
a.forEach(task);

a.forEach((element: number) => {
  console.log(element);
});

let map = new Map([
  ["name", "Dibbu"],
  ["age", "21"],
]);

map.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
