function foo(a, b) {
  if (a === null || b === null) {
    return 0; //Return 0 instead of null, or handle null values in a more appropriate way
  } else {
    return a + b;
  }
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10