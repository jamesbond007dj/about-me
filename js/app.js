'use strict';

var ctx = document.getElementById('chart').getContext('2d');

var allData = [
  {name:'RESET', years: 3, },
  {name:'NAVAL', years: 1,}, 
  {name:'ALFER', years:3, }, 
  {name:'AKFAN', years: 1, },
  {name:'FILPA TR', years: 6, },
  {name:'FILPA USA', years: 8, },];

var labels = [];
var data = [];
var colors = ['yellow', 'blue', 'navy', 'salmon', 'orange', 'red'];


for (var i = 0; i < allData.length; i++) {
 
  labels.push(allData[i].name);
  data.push(allData[i].years);
  };


makeChart(data, labels);

function makeChart(data, labels) {

  

  var chart = new Chart(ctx, {

    
    type: 'doughnut',

      data: {

      labels: labels,
        
      datasets: [{

        label: 'WORK EXPERIENCE',

        backgroundColor: colors,

        borderColor: 'white',

        data: data,

        
      },
    
     
    
    ]

    },

    options: {}

  });



}

var ctx = document.getElementById('funChart').getContext('2d');

var allFun = [
  {name:'TRAVEL', percent: 30, },
  {name:'BOATING', percent: 5,}, 
  {name:'PHOTOGRAPY', percent:10, }, 
  {name:'STRATEGY GAMES',  percent: 5, },
  {name:'GUITARS',  percent: 20, },
  {name:'BIKING',  percent: 30, },];

var labels = [];
var data = [];
var colors = ['yellow', 'blue', 'pink', 'salmon', 'orange', 'red'];


for (var i = 0; i < allFun.length; i++) {
 
  labels.push(allFun[i].name);
  data.push(allFun[i].percent);
  };


makeFunChart(data, labels);

function makeFunChart(data, labels) {

  

  var chart = new funChart(ctx, {

    
    type: 'bars',

      data: {

      labels: labels,
        
      datasets: [{

        label: 'FUN',

        backgroundColor: colors,

        borderColor: 'white',

        data: data,

        
      },
    
     
    
    ]

    },

    options: {}

  });



}
