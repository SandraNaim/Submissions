var number1 = prompt("choose a number");


function array1(number1) {
  var l=number1.length;

  let orig = number1;
  var sum = 0;
  var e;
  while (number1 > 0) {
    //Here is the mistake
    e = number1 % 10;
    
    sum = sum + Math.pow(e, length);
   
    number1 = parseInt(number1 / 10);
    
  }

  if (sum == orig) {
    alert("given is an amstrong number");
  } else {
    alert("given no is not an amstrong number");
  }
}
array1(number1);
