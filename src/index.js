
exports.min = function min (array) {
  if(array === undefined || array.length === 0) {return 0};
  array.sort((prev, next) => prev - next);
  return array[0]
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0) {return 0};
  array.sort((prev, next) => next - prev);
  return array[0]
}

exports.avg = function avg (array) {
  if(array === undefined || array.length === 0) {return 0};
  let sum = array.reduce((a, b) => a + b, 0);
	return sum/array.length;
}
