'use strict';

console.log('well hello there!');

let visitorName = prompt('What is your name?');

alert(`Welcome to my site ${visitorName}! Please guess yes or no to the following questions`);

let questionOneGuess = prompt('Do I have a daughter?').toUpperCase();

if(questionOneGuess === 'Y' || questionOneGuess === 'YES'){
alert('You are correct!');
} else if(questionOneGuess === 'N' || questionOneGuess === 'NO'){
  alert('Sorry, you are wrong');
}

let questionTwoGuess = prompt('Do I work full time?').toLocaleUpperCase;

if(questionTwoGuess === 'Y' || questionTwoGuess === 'YES'){
  alert('Of course I do!');
} else if(questionTwoGuess === 'N' || questionTwoGuess === 'NO'){
  alert('Thats why im here.');
}

let questionThreeGuess =prompt('Do I ike Whisky?').toLocaleUpperCase;

if(questionThreeGuess === 'Y' || questionThreeGuess === 'YES'){
  alert('Im a singe father arent I!');
} else if(questionThreeGuess === 'N' || questionThreeGuess === 'NO'){
  alert('Wrong if you said no');
}

let questionFourGuess = prompt('Is blue the best color?').toLocaleUpperCase;

if(questionFourGuess === 'Y' || questionFourGuess === 'YES'){
  alert('I think it is...');
} else if( questionFourGuess === 'N' || questionFourGuess === 'NO'){
  alert('Daddy pink is the best color!');
}

let questionFiveGuess = prompt('Do I enjoy this class?').toLocaleUpperCase;

if(questionFiveGuess === 'Y' || questionFiveGuess === 'YES'){
  alert('Of course I do.');
}else if(questionFiveGuess === 'N' || questionFiveGuess === 'NO'){
  alert('Refresh and type yes here.');
}
alert(`Thats all Folks ${visitorName}`);