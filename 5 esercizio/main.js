let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = [];
for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] % 2 == 0) {
    evenNumbers.push(i);
  }
}
console.log(evenNumbers);

// dovrebbe restituire [1,3,5]
