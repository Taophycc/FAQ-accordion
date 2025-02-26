'use strict';

// Select the question and answer classes
const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');

// loop through the questions in order to add event listener to each of them
for (let i = 0; i < question.length; i++) {
  question[i].addEventListener('click', function () {
    answer[i].classList.toggle('active');

    const icon = question[i].querySelector('img');

    // Condition for the switching plus and minus icons
    if (answer[i].classList.contains('active')) {
      icon.src = 'assets/images/icon-minus.svg';
      icon.alt = 'minus sign';
    } else {
      icon.src = 'assets/images/icon-plus.svg';
      icon.alt = 'plus sign';
    }
  });
}
