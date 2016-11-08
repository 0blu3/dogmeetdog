'use strict';

// Taking match results from previous page
var rankedDogs = JSON.parse(localStorage['dogs']);

// General function to make new HTML elements
function makeNewElement(tag, innerText, parent, childId, cssClass) {
  var parent = document.getElementById(parent);
  var newEl = document.createElement(tag);
  newEl.innerText = innerText;
  newEl.setAttribute('id', childId);
  newEl.setAttribute('class', cssClass);
  parent.appendChild(newEl);
}

function makeNewImage(src, parent) {
  var parent = document.getElementById(parent);
  var newImg = document.createElement('img');
  newImg.setAttribute('src', src);
  parent.appendChild(newImg);
}

// Renders the HTML of the profiles from the objects in the array
function makeProfiles() {
  for (var i = 0; i < 3; i++) {
    makeNewElement('div', '', 'results', rankedDogs[i].name, 'profile-box');
    makeNewElement('div', '', rankedDogs[i].name, rankedDogs[i].name + '-pic', 'profile-pic');
    makeNewImage(rankedDogs[i].filePath, rankedDogs[i].name + '-pic');
    makeNewElement('div', '', rankedDogs[i].name, rankedDogs[i].name + '-name', 'profile-name');
    makeNewElement('p', rankedDogs[i].name, rankedDogs[i].name + '-name', '', '');
    makeNewElement('div', '', rankedDogs[i].name, rankedDogs[i].name + '-percent', 'match-percent');
    makeNewElement('p', rankedDogs[i].matchPercentage + '%', rankedDogs[i].name + '-percent', rankedDogs[i].name + '-percent-text', '');
  }
}

// Color codes the quality of the match.
function percentageColor() {
  for (var i = 0; i < 3; i++) {
    var percentText = document.getElementById(rankedDogs[i].name + '-percent-text');
    if (rankedDogs[i].matchPercentage >= 80) {
      percentText.setAttribute('class', 'great-match');
    } else if (rankedDogs[i].matchPercentage < 80 && rankedDogs[i].matchPercentage >= 60) {
      percentText.setAttribute('class', 'okay-match');
    } else if (rankedDogs[i].matchPercentage < 60 && rankedDogs[i].matchPercentage >= 40) {
      percentText.setAttribute('class', 'bad-match');
    } else {
      percentText.setAttribute('class', 'poor-match');
    }
  }
}

// The function that does everying at once.
function displayResults() {
  makeProfiles();
  percentageColor();
}

displayResults();
