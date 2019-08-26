'use strict';

var video = document.getElementById("myVideo");

var ctx = document.getElementById('chart').getContext('2d');

var allData = [
  
  {name:'BOATING', percent: 2,}, 
  {name:'PHOTOGRAPY', percent:8, }, 
  {name:'STRATEGY GAMES',  percent: 12, },
  {name:'TRAVEL', percent: 18, },
  {name:'BIKING',  percent: 25, },
  {name:'MUSIC&GUITARS',  percent: 35, },];

var labels = [];
var data = [];
var colors = ['yellow', 'blue', 'pink', 'salmon', 'orange', 'red'];


for (var i = 0; i < allData.length; i++) {
 
  labels.push(allData[i].name);
  data.push(allData[i].percent);
  };


makeChart(data, labels);

function makeChart(data, labels) {

  

  var chart = new Chart(ctx, {

      type: 'doughnut',

      data: {

      labels: labels,
        
      datasets: [{

        label: 'hobby',

        backgroundColor: colors,

        borderColor: 'white',

        data: data,

        
      },
    
     
    
    ]

    },

    options: {
      legend: {
          display: true,
          labels: {
              fontColor: 'rgb(255, 99, 132)',
              
          }
      }
  }

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
