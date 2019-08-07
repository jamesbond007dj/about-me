'use strict'
var visitor = prompt ('Glad to see you, here. Welcome !!! I am Bond, James Bond. Please let me hear your name...');
  visitor = visitor.toUpperCase(); 
  alert ('Glad to meet you, '+ visitor + '! Please answer the questions to know me better...'); 
  console.log(visitor);

var howMany = function() {
  var count = prompt ( visitor + ', I am a Seattleite, Can you guess how many years i have been in this one of the most beautiful city?');
   while (isNaN(count)) {
     count = prompt ('Please guess it by numbers');
   };

   return Number(count);
};

var years = howMany();
years = parseInt(years);

if (years < 2) {
  var reason = prompt ('Good guess, ' + visitor + '! Really I am new here. Do you think that I moved to Seattle whether it is a Tech City or  Rainy City?');
  
} else {
  var reason = prompt ('Nope, ' + visitor + '! Really I am new here. Do you think that I moved to Seattle whether it is a "Tech City" or  "Rainy City"');
 
};

reason = reason.toUpperCase();

console.log(years);

if ( reason.charAt(0) == "T") {
  alert ( reason + '???! Nope, '+ visitor + '! Actually I like singing in rain. However I am good at Software Development & also I have a Mechanical Engineering Degree. I am looking for a new tech job to use my skills better and work with satisfaction');
} else {
  alert ('Wow good guess, ' + visitor + '! I like singing in rain. However I am good at Software Development & also I have a Mechanical Engineering Degree. I am looking for a new tech job to use my skills better and work with satisfaction');
};

console.log(reason);

var sport = prompt ( visitor + ', I am trying to keep myself fit, Can you guess whether I go for gym or biking?');
sport = sport.toUpperCase();


if (sport.charAt(0) == "G") {
  alert (visitor + '! Nope, I do not like sports in doors; I need oxygen, dude');
} else {
  alert ('I hope you like ' + sport + ', too ' + visitor + '! Let us do it together sometime at Lake Union');
};

console.log(sport);

var strength = prompt ('I am very succesfull at work, ' + visitor + '. Can you guess which of my skill is the key factor Networking or Integrity?'); 
strength = strength.toUpperCase();

if (strength.charAt(0) == "N") {
  alert ('My answer is Big No... ' + visitor + ', I agree that Networking is necessary, however if you have not some other key strengths, it may work reverse!');

} else {
  alert ( 'True, ' + visitor + '. If only you have Integrity, Networking may work good.');
};

consule.log(strength);