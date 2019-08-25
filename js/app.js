'use strict';
// var visitor = prompt ('Glad to see you, here. Welcome !!! I am Bond, James Bond. Please let me hear your name...');
//  visitor = visitor.toUpperCase();
// alert ('Glad to meet you, '+ visitor + '! Please answer the questions to know me better...');
// console.log(visitor);

// var howMany = function() {
//   var count = prompt ( visitor + ', I am a Seattleite, Can you guess how many years i have been in this one of the most beautiful city?');
//   while (isNaN(count)) {
//     count = prompt ('Please guess it by numbers');
//   }

//   return Number(count);
// };

// var years = howMany();
// years = parseInt(years);

// if (years < 2) {
//   var reason = prompt ('Good guess, ' + visitor + '! Really I am new here. Do you think that I moved to Seattle whether it is a Tech City or  Rainy City?');

// } else {
//   prompt ('Nope, ' + visitor + '! Really I am new here. Do you think that I moved to Seattle whether it is a "Tech City" or  "Rainy City"');

// }

// reason = reason.toUpperCase();

// console.log(years);

// if ( reason.charAt(0) === 'T') {
//   alert ( reason + '???! Nope, '+ visitor + '! Actually I like singing in rain. However I am good at Software Development & also I have a Mechanical Engineering Degree. I am looking for a new tech job to use my skills better and work with satisfaction');
// } else {
//   alert ('Wow good guess, ' + visitor + '! I like singing in rain. However I am good at Software Development & also I have a Mechanical Engineering Degree. I am looking for a new tech job to use my skills better and work with satisfaction');
// }

// console.log(reason);

// var sport = prompt ( visitor + ', I am trying to keep myself fit, Can you guess whether I go for gym or biking?');
// sport = sport.toUpperCase();


// if (sport.charAt(0) === 'G') {
//   alert (visitor + '! Nope, I do not like sports in doors; I need oxygen, dude');
// } else {
//   alert ('I hope you like ' + sport + ', too ' + visitor + '! Let us do it together sometime at Lake Union');
// }

// console.log(sport);

// var strength = prompt ('I am very succesfull at work, ' + visitor + '. Can you guess which of my skill is the key factor Networking or Integrity?');
// strength = strength.toUpperCase();

// if (strength.charAt(0) === 'N') {
//   alert ('My answer is Big No... ' + visitor + ', I agree that Networking is necessary, however if you have not some other key strengths, it may work reverse!');

// } else {
//   alert ( 'True, ' + visitor + '. If only you have Integrity, Networking may work good.');
// }

// console.log(strength);

// var prof = prompt (visitor + '! Guess how many years of work experience I have');
// prof = parseInt(prof);
// if (prof < 25 ) {
//   prompt(visitor + '! Not a good guess, Please increase your number');
// } else if ( prof > 25) {
//   prompt(visitor + '! Not a good guess, Please decrease your number');
// } else {
//   prompt(visitor + '! Good guess, Can you guess which company I have not applied to work? Amazon ; Filpa ; Disney ; Boing');
// }
// console.log(prof);

// var talent = prompt('Guess whether I can play guitar or not? Yes/No').toLowerCase();

// switch (talent.charAt(0)) {
// case 'n':
//   console.log('talent = correct');
//   alert('I am not a Rockstar, but Yes I can play Guitar, ' + visitor + ' !' );
//   break;
// case 'y':
//   console.log('talent = wrong');
//   alert(+ visitor + '! it is not a good Guess');
//   break;
// default:
//   console.log('You typed wrong, i could not understand');
//   break;
// }

// var bestCitys = ['edinburgh', 'london', 'dublin', 'rome', 'venice', 'chicago', 'seattle', 'berlin', 'paris', 'orleans'];

// var Vacation = false;
// var numVacation = 1;

// while (Vacation === false && numVacation <= 6) {

//   var city = prompt( 'Can you guess which cities do I like to go to a vacation? you have 5 guesses');

//   for (var i = 0; i < bestCitys.length; i++) {

//     if (city.toLowerCase() === bestCitys[i]) {
//       alert(visitor + '! Correct, Superb!');
//       console.log('My vacation cities = correct');
//       Vacation = true;
//       break;
//     }

//   }

//   if (!Vacation) {
//     alert( visitor + '! Nope! There are more beautiful Cities!');
//     console.log('My vacation cities = wrong, user answered: ' + city);
//   }

//   numVacation++;

// }
// var howMany = function() {

//   var count = prompt ('PLEASE ENTER YOUR BIRTH YEAR BELOW:');

//   while ( isNaN(count) ) {

//     count = prompt('PLEASE ENTER A YEAR - 4 DIGIT NUMBER');

//   }

//   return Number(count);
// };

// var today = new Date();

// var date1 = today.getFullYear();

// var date2 = howMany();

// var date3 = date1 - date2;

// if ( date3 > 18) {

//   alert (visitor + '! Welcome to my site');

// } else {

//   alert (visitor + '! Bye bye');

//   window.location = 'https://media.wired.com/photos/5bd262d4b1e96429a704ba17/master/w_942,c_limit/bloodyhand_top-1036615756.jpg';

// }

