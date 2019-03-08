var guessCounter = 0
var hiddenNumber = null
document.querySelector('.reset').addEventListener('mouseover', function (){
  document.querySelector('.reset').style.background = '#ED458B';
})
document.querySelector('.reset').addEventListener('mouseleave', function (){
  document.querySelector('.reset').style.background = '#929497';
})

document.querySelector('.guess').addEventListener('mouseover', function (){
  document.querySelector('.guess').style.background = '#ED458B';
})
document.querySelector('.guess').addEventListener('mouseleave', function (){
  document.querySelector('.guess').style.background = '#929497';
})

document.querySelector('.clear').addEventListener('mouseover', function (){
  document.querySelector('.clear').style.background = '#ED458B';
})
document.querySelector('.clear').addEventListener('mouseleave', function (){
  document.querySelector('.clear').style.background = '#929497';
})

document.querySelector('.guess').addEventListener('click', function () {
  var guess = document.getElementById('number-input').value;
  var validGuess = parseInt(guess);
  if (Number.isNaN(validGuess)) {
    document.querySelector('.error').style.display = 'block';
  } else if (validGuess > parseInt(document.getElementById('number-input').max) || validGuess < parseInt(document.getElementById('number-input').min)) {
    document.querySelector('.error').style.display = 'block';
  }
  else {
    document.querySelector('.error').style.display = 'none';
    if (validGuess > hiddenNumber) {
      document.querySelector('.last-guess-high-low').textContent = 'That was too high';
      document.querySelector('.last-guess-number').textContent = validGuess;
      guessCounter += 1;
    } else if (validGuess < hiddenNumber) {
      document.querySelector('.last-guess-high-low').textContent = 'That was too low';
      document.querySelector('.last-guess-number').textContent = validGuess;
      guessCounter += 1;
    } else {
      document.querySelector('.last-guess-high-low').textContent = 'BOOM';
      document.querySelector('.last-guess-number').textContent = validGuess;
      guessCounter = 0;
      rangeSelection();
    }}
})

document.querySelector('.reset').addEventListener('click', function () {
   hiddenNumber = Math.floor(Math.random() * 100) + 1;
   document.querySelector('.error').style.display = 'block';
   document.querySelector('.error').textContent = 'A new number has been generated';
})

document.querySelector('.clear').addEventListener('click', function () {
  document.getElementById('number-input').value = '';
})

document.getElementById('submit-button').addEventListener('click', function () {
      var validMin = parseInt(document.getElementById('min-number').value);
      var validMax = parseInt(document.getElementById('max-number').value);
    if (Number.isNaN(validMax) || Number.isNaN(validMax) || validMax <= validMin){
      document.querySelector('.error').textContent = 'Not a valid range'
      document.querySelector('.error').style.display = 'block'
    } else {
      document.getElementById('number-input').min = validMin;
      document.getElementById('number-input').max = validMax;
      hiddenNumber = Math.floor(Math.random() * (validMax - validMin) + validMin);
      document.querySelector('.min-max-selection').style.display = 'none';
      document.getElementById('min-number').style.display = 'none';
      document.getElementById('max-number').style.display = 'none';
      document.getElementById('submit-button').style.display = 'none';
      document.querySelector('.error').style.display = 'none'
    }
  })

// if (hiddenNumber === null) {
//   document.querySelector(".clear").disabled = true;
//   document.querySelector(".guess").disabled = true;
//   document.querySelector(".reset").disabled = true;
// } else {
//   document.querySelector(".clear").disabled = false;
//   document.querySelector(".guess").disabled = false;
//   document.querySelector(".reset").disabled = false;
// }
//
// if (document.getElementById('number-input').value === '') {
//   document.querySelector(".clear").disabled = true;
// } else {
//   document.querySelector(".clear").disabled = false;
// }

function rangeSelection () {
  document.querySelector('.min-max-selection').style.display = 'block';
  document.getElementById('min-number').style.display = 'inline-block';
  document.getElementById('max-number').style.display = 'inline-block';
  document.getElementById('submit-button').style.display = 'inline-block';
}
