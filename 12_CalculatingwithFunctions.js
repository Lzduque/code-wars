function zero(x = 0) {
  return (x === 0 ? "0" : eval("0".concat(x)));
}
function one(x = 0) {
  return (x === 0 ? "1" : eval("1".concat(x)));
}
function two(x = 0) {
  return (x === 0 ? "2" : eval("2".concat(x)));
}
function three(x = 0) {
  return (x === 0 ? "3" : eval("3".concat(x)));
}
function four(x = 0) {
  return (x === 0 ? "4" : eval("4".concat(x)));
}
function five(x = 0) {
  return (x === 0 ? "5" : eval("5".concat(x)));
}
function six(x = 0) {
  return (x === 0 ? "6" : eval("6".concat(x)));
}
function seven(x = 0) {
  return (x === 0 ? "7" : eval("7".concat(x)));
}
function eight(x = 0) {
  return (x === 0 ? "8" : eval("8".concat(x)));
}
function nine(x = 0) {
  return (x === 0 ? "9" : eval("9".concat(x)));
}

function plus(x) {
  return "+".concat(x);
}
function minus(x) {
  return "-".concat(x);
}
function times(x) {
  return "*".concat(x);
}
function dividedBy(x) {
  return "/".concat(x);
}

console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);