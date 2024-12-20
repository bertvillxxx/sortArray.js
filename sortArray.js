const numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
const names = ["Zenyo", "Erica", "Jordie", "Alicia", "Redon"];
const mergedArray = numbers.concat(names);

console.log("Merged Array:", mergedArray);

numbers.sort((a, b) => b - a);
console.log("Numbers (Reverse Sorted):", names);

names.sort();
console.log("Names (Alphabetical Sorted):", names);