'use strict';


console.log('well hello there!');

let score = 0;

let visitorName = prompt('What is your name?');

alert(`Welcome to my site ${visitorName}! Please guess yes or no to the following questions`);

let questionOneGuess = prompt('Do I have a daughter?').toUpperCase();

if (questionOneGuess === 'Y' || questionOneGuess === 'YES') {
  alert('You are correct!');
  score++;
} else if (questionOneGuess === 'N' || questionOneGuess === 'NO') {
  alert('Sorry, you are wrong');
}

let questionTwoGuess = prompt('Do I work full time?').toUpperCase();

if (questionTwoGuess === 'Y' || questionTwoGuess === 'YES') {
  alert('Of course I do!');
  score++;
} else if (questionTwoGuess === 'N' || questionTwoGuess === 'NO') {
  alert('Thats why im here.');
}

let questionThreeGuess = prompt('Do I ike Whisky?').toUpperCase();

if (questionThreeGuess === 'Y' || questionThreeGuess === 'YES') {
  alert('Im a singe father arent I!');
  score++;
} else if (questionThreeGuess === 'N' || questionThreeGuess === 'NO') {
  alert('Wrong if you said no');
}

let questionFourGuess = prompt('Is blue the best color?').toUpperCase();

if (questionFourGuess === 'Y' || questionFourGuess === 'YES') {
  alert('I think it is...');
  score++;
} else if (questionFourGuess === 'N' || questionFourGuess === 'NO') {
  alert('Daddy pink is the best color!');
}

let questionFiveGuess = prompt('Do I enjoy this class?').toUpperCase();

if (questionFiveGuess === 'Y' || questionFiveGuess === 'YES') {
  alert('Of course I do.');
  score++;
} else if (questionFiveGuess === 'N' || questionFiveGuess === 'NO') {
  alert('Refresh and type yes here.');
}



"in collaboration with Chris Johnston and Trace Dugar"



let userGuess = prompt('Try and guess the number im thinking of between 1 and 100');

let myNum = 21;
let guessNum = 4;
while (guessNum > 0) {
  let userNumGuess = prompt('What is my favorite number?');
  guessNum--;
  if (parseInt(userNumGuess) === myNum) {
    alert('Correct, Great job!');
    score++;
    guessNum = 0;
  }
  else if (parseInt(userNumGuess) > myNum) {
    alert('Too High');
  }
  else if (parseInt(userNumGuess) < myNum) {
    alert('Too Low');
  }
}





let guessNumQ7 = 6;
let myFoodArr = ['sushi', 'roast beef sandwiches', 'bbq chicken pizza', 'pho', 'southern bbq', 'steak chicken', 'tuna no crust', 'cheese burger', 'cheesecake']
while (guessNumQ7 > 0) {
  let questionSevenGuess = prompt('What is my favorite food?').toLowerCase();
  guessNumQ7--;
  console.log('Q7 >>>', questionSevenGuess);
  for (let i = 0; i < myFoodArr.length; i++) {
    if (questionSevenGuess === myFoodArr[i]) {
      alert('you are right');
      score++;
      guessNumQ7 = 0;
    }
  }
}
if (guessNumQ7 === 0){
  alert('You ran out of trys.')
}

alert(`Than you, ${visitorName} thank you for playing! you scored ${score} of 7`);

