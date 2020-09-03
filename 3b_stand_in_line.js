function nextInLine(arr, item) {
  
  arr.push(item);
  var removed = arr.shift();
  return removed;
  
}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
