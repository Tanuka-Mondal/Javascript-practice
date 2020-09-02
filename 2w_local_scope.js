function myLocalScope() {
  'use strict';

  var myVar = 8

  console.log('inside myLocalScope', myVar); //inside myLocalScope 8
}
myLocalScope();

// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);  //ReferenceError: myVar is not defined
