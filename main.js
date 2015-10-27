var numbers = Array.from(document.getElementsByClassName('number'));
var operators = Array.from(document.getElementsByClassName('operator'));
var output = document.querySelector('.output');

var left;
var right;
var operator;

// numbers.forEach(function(element){
//   element.addEventListener('click', function(event){
//     var value = event.target.value;

    $('.numbers').on('click', function(event) {

    // });

  if (!left && !operator) {
    left = value;
  } else if (left && !operator) {
     left += value;
  } else if (!right && !operator) {
    right = value;
  } else if (right && operator) {
    right += value;
  }

  output.value += value;
});
});

operators.forEach(function(element){
  element.addEventListener('click', function(event){
    var value = event.target.value;

    if (value !== '=') {
      operator = value;
      output.value += value;
    } else {
      left = eval(left + operator + right);
      right = undefined;
      operator = undefined;
      output.value = left;
    }
  });
});
