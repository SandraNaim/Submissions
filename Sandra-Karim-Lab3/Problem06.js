function bin(num) {
  if (num >= 0) {
    return num.toString(2);
  }
}

var number = parseInt(prompt("choose a number"));

alert(bin(number));
console.log(bin(number));
