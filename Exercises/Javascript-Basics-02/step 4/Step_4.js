function resett() {
  if (
    confirm("Click ok to clear all form \nClick cancel to keep the form") ==
    true
  ) {
    document.querySelector("#name").value = " ";
    document.querySelector("#surname").value = " ";
    document.querySelector("#city").value = " ";
  }
}
