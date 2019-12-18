function f() {
  if (
    document.querySelector("#confirmation").value !=
    document.querySelector("#password").value
  ) {
    document.querySelector("#confirmation").style.borderColor = "red";
    document.querySelector("#password").style.borderColor = "red";
  }
}
