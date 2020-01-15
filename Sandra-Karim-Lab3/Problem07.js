function pr(num) {
  for (let i = 2; i < num; i++) { //u can put instead of num: num/2 or redical of the num(more precise)
    if (num % i === 0) {
      return false;
    }
  }
  
    return true;
  
}

var number = parseInt(prompt("choose a number"));

alert(pr(number));
console.log(pr(number));
