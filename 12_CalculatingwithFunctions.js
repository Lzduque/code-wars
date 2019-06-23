function zero(x = 0) {
  if (x === 0) {
    return "0"
  } else {
    return eval("0".concat(x));
  }
}
function one(x = 0) {
  if (x === 0) {
    return "1"
  } else {
    return eval("1".concat(x));
  }
}
function two(x = 0) {
  if (x === 0) {
    return "2"
  } else {
    return eval("2".concat(x));
  }
}
function three(x = 0) {
  if (x === 0) {
    return "3"
  } else {
    return eval("3".concat(x));
  }
}
function four(x = 0) {
  if (x === 0) {
    return "4"
  } else {
    return eval("4".concat(x));
  }
}
function five(x = 0) {
  if (x === 0) {
    return "5"
  } else {
    return eval("5".concat(x));
  }
}
function six(x = 0) {
  if (x === 0) {
    return "6"
  } else {
    return eval("6".concat(x));
  }
}
function seven(x = 0) {
  if (x === 0) {
    return "7"
  } else {
    return eval("7".concat(x));
  }
}
function eight(x = 0) {
  if (x === 0) {
    return "8"
  } else {
    return eval("8".concat(x));
  }
}
function nine(x = 0) {
  if (x === 0) {
    return "9"
  } else {
    return eval("9".concat(x));
  }
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