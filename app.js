var hiddenNumber = Math.floor(Math.random() * 100) + 1

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
    } else if (validGuess < hiddenNumber) {
      document.querySelector('.last-guess-high-low').textContent = 'That was too low';
      document.querySelector('.last-guess-number').textContent = validGuess;
    } else {
      document.querySelector('.last-guess-high-low').textContent = 'BOOM';
      document.querySelector('.last-guess-number').textContent = validGuess;
    }}
})

document.querySelector('.reset').addEventListener('click', function () {
   hiddenNumber = Math.floor(Math.random() * 100) + 1;
   document.querySelector('.error').style.display = 'block';
   document.querySelector('.error').textContent = 'A new number has been generated';
})

document.querySelector('.clear').addEventListener('click', function () {
  document.getElementById('number-input').value = ''
})
