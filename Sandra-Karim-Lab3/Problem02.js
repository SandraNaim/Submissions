function array1() {
  var number = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      number.push(i);
    }
  }
  return number;
}
alert(array1());
console.log(array1);
