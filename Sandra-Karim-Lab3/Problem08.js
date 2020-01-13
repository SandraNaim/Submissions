function rand(a, b) {
  var result = Math.floor(Math.random() * (b - a) + a);
  return result;
}

function eq(a, b) {
  if (a === b) {
    return true;
  }
}
var num1 = parseInt(prompt("choose a number"));
var num2 = parseInt(prompt("choose another number"));
var num3 = parseInt(prompt("guess the number"));
alert(rand(num1, num2));
console.log(rand(num1, num2));

for (let i = 0; i < 5; i++) {
  var random = rand(num1, num2);
  if (eq(num3, random) === true) {
    return "correct";
  }
}
