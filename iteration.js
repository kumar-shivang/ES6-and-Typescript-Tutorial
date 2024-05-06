let m = new Map([
  ["name", "John"],
  ["age", 21],
  ["profession", "developer"],
]);

for (let key of m.keys()) {
  console.log(key);
}

for (let value of m.values()) {
  console.log(value);
}

for (let entry of m.entries()) {
  console.log(entry[0], entry[1]);
}

for (let [key, value] of m.entries()) {
  console.log(`${key}, ${value}`);
}
