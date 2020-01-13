var number1 = prompt("choose a number");

function array1(number1) {
  let orig = number1;
  var d = 0;
  var e;
  while (number1 > 0) {
    //Here is the mistake
    e = number1 % 10;
    console.log("e", e);
    d = d + Math.pow(e, 3);
    console.log("d", d);
    number1 = parseInt(number1 / 10);
    console.log("number1", number1);
  }

  if (d == orig) {
    alert("given is an amstrong number");
  } else {
    alert("given no is not an amstrong number");
  }
}
array1(number1);
