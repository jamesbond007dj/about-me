"use strict"
var visitor = prompt ('Glad to see you, here. Welcome !!! I am Bond, James Bond. Please let me hear your name...');
  visitor = visitor.toUpperCase(); 
  alert ('Glad to meet you, '+ visitor + '! Please answer the questions to know me better..'); 
  console.log(visitor);

var howMany = function() {
  var count = prompt ( visitor + ', I am a Seattlite, Can you guess how many years i have been in this one of the most beautiful city?');
   while (isNaN(count)) {
     count = prompt ('Please guess it by numbers');
   }

   return Number(count);
};

var years = howMany();
years = parseInt(years)

if (years < 2) {
  var reason = prompt ('Good guess, ' + visitor + '! Really I am new here. Do you think that I moved to Seattle whether it is a "Tech City" or  "Rainy City"')
  
} else {
  var reason = prompt ('Nope, ' + visitor + '! Really I am new here. Do you think that I moved to Seattle whether it is a "Tech City" or  "Rainy City"')
 
}

reason = reason.toUpperCase();
reason = reason.charAt(0);


if ( reason == "T") {
  alert ('Sorry nope, '+ visitor + '! Actually I like singing in rain. However I am good at Software Development & also I have a Mechanical Engineering Degree. I am looking for a new tech job to use my skills better and work with satisfaction');
} if else {
  alert ('Wow good guess, you are Genuis, ' + visitor + '! I like singing in rain. However I am good at Software Development & also I have a Mechanical Engineering Degree. I am looking for a new tech job to use my skills better and work with satisfaction');
}


