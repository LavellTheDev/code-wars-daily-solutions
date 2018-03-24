/*Write function avg which calculates average of numbers in given list.*/


function find_average(array) {
  var total = 0;
  array.forEach(x => total += x)
  return total/array.length
}
