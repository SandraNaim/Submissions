function rand(a, b) {
  var result = Math.floor(Math.random() * (b - a) + a);
  return result;
}

function eq(a, b) {
  if (a === b) {
    return true;
  }
}

function main(){


var num1 = parseInt(prompt("choose a number"));
var num2 = parseInt(prompt("choose another number"));

var random = rand(num1, num2);
console.log(random);


for (let i = 0; i < 5; i++) {
  var num3 = parseInt(prompt("guess the number"));
  if(eq(num3, random) ==true)
  {alert("true guess");
  break;}
}

}

main();
