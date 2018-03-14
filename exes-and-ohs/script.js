/*Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive.
The string can contain any char.*/

function XO(str){
  var equal = str.toLowerCase()
  var x = 0
  var o = 0
  for (var i=0; i<equal.length; i++){
    if(equal[i] === 'x'){
      x ++
    } else if(equal[i] === 'o'){
      o ++
    }
  }
  return x === o
