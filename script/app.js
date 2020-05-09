var integer_number = 0;
function decrease() {
  let number_decrease = document.getElementsByTagName("h2").item(0);
  number_decrease.innerHTML = integer_number--;
}
function reset() {
  let number_reset = document.getElementsByTagName("h2").item(0);
  number_reset.innerHTML = 0;
  integer_number = 0;
}
function increase() {
  let number_increase = document.getElementsByTagName("h2").item(0);
  number_increase.innerHTML = integer_number++;
}
