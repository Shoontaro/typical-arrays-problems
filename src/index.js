
exports.min = function min (array) {
  if (!Array.isArray(array)) {
    return 0;
}

if (array.length === 0) {
    return 0;
}
  else{return Math.min.apply(null, array)};

}

exports.max = function max (array) {
  if (!Array.isArray(array)) {
    return 0;
}

if (array.length === 0) {
    return 0;
}
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  if (!Array.isArray(array)) {
    return 0;
}

if (array.length === 0) {
    return 0;
}
  let sum = array.reduce(function(a,b){return(a+b)});
  return sum/array.length;
}
