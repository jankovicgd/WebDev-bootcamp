function isEven(x) {
  if (x % 2 == 0) {
    return true;
  }else {
    return false;
  }
}

function factorial(x) {
  var y = 1;
  for (var i = x; i > 0; i--) {
    y = y * i;
  }
  return y;
}

function kebabToSnake(x) {
  return x.replace("-", "_");
}
