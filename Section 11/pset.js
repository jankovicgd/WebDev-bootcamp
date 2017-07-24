function printReverse(array) {
  var len = array.length;
  for (var i = len - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

printReverse([3, 6, 5, 2])

function isUniform(array) { //can be optimized by starting from first element and comparing just to it
  var previous = array[0];
  var uniform = true;
  array.forEach(function(element){
    current = element;
    if(current != previous){
      uniform = false;
      return uniform;
    } else {
      previous = element;
    }
  })
  return uniform;
}

console.log(isUniform([1, 1, 1, 1]));
console.log(isUniform([1, 2, 1, 1]));

function sumArray(array) {
  var sum = 0;
  array.forEach(function(element){
    sum += element;
  });
  return sum;
}

sumArray([5, 5, 5])

function max(array){
  var max = array[0];
  array.forEach(function(element){
    if(element > max){
      max = element;
    }
  });
  return max;
}
