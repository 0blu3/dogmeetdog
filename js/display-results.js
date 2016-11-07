'use strict';

// Taking match results from previous page
var rankedDogs = JSON.parse(localStorage['dogs']);

// General function to make new HTML elements
function makeNewElement(tag, innerText, parent, childId) {
  var parent = document.getElementById(parent);
  var newEl = document.createElement(tag);
  newEl.innerText = innerText;
  newEl.setAttribute('id', childId);
  parent.appendChild(newEl);
}

// Renders the HTML of the profiles from the objects in the array
function makeProfiles() {
  for (var i = 0; i < 3; i++) {
    makeNewElement('div', '', 'results', rankedDogs[i].name);
    makeNewElement('div', '', rankedDogs[i].name, rankedDogs[i].name + '-pic');
    makeNewElement('img', rankedDogs[i].filePath, rankedDogs[i].name + '-pic', '');
    makeNewElement('div', '', rankedDogs[i].name, rankedDogs[i].name + '-name');
    makeNewElement('p', rankedDogs[i].name, rankedDogs[i].name + '-name', '');
    makeNewElement('div', '', rankedDogs[i].name, rankedDogs[i].name + '-percent');
    makeNewElement('p', rankedDogs[i].matchPercentage + '%', rankedDogs[i].name + '-percent', '');
  }
}

// Color codes the quality of the match.
function percentageColor() {
  var percentText = document.getElementyById(rankedDogs[i].name + '-percent');
  for (var i = 0; i < 3; i++) {
    if (rankedDogs[i].matchPercentage >= 80) {
      percentText.setAttribute('class', '.great-match');
    } else if (rankedDogs[i].matchPercentage < 80 && rankedDogs[i].matchPercentage >= 60) {
      percentText.setAttribute('class', '.okay-match');
    } else if (rankedDogs[i].matchPercentage < 60 && rankedDogs[i].matchPercentage >= 40) {
      percentText.setAttribute('class', '.bad-match');
    } else {
      percentText.setAttribute('class', '.poor-match');
    }
  }
}

// The function that does everying at once.
function displayResults() {
  makeProfiles();
  percentageColor();
}
