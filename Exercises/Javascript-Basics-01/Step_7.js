function shoSize() {
  var shoe_size = document.getElementById("shoe_size").value;
  var year = document.getElementById("year").value;
  var size = (shoe_size * 2 + 5) * 50 - year + 1766;
  alert(size);
}
