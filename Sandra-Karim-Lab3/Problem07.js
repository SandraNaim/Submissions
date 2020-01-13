function pr(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

var number = parseInt(prompt("choose a number"));

alert(pr(number));
console.log(pr(number));
