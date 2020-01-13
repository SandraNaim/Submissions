function div(integer) {
  const array = [];
  var sum = 0;
  for (let i = 0; i < integer; i++) {
    if (i % integer != 0) {
      sum = sum + i;
      if (sum === integer) {
        return "perfect number";
      }
    }
  }
}

var number1 = parseInt(prompt("choose a number"));
alert(div(number1));
console.log(div(number1));
