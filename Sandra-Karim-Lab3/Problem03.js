function array1(a, b) {
  var number = [];
  var sum = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 != 0) {
      sum = sum + i;
    }
  }
  return sum;
}

var number1 = parseInt(prompt("choose a number"));
var number2 = parseInt(prompt("choose another number"));

alert(array1(number1, number2));
console.log(array1(number1, number2));
