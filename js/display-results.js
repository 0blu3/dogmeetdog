'use strict';

// Taking match results from previous page
var rankedDogs = JSON.parse(localStorage['dogs']);
var topDogs = 3;

// General function to make new HTML elements
function makeNewContainingElement(tag, innerText, parent, childId, cssClass) {
  var parent = document.getElementById(parent);
  var newEl = document.createElement(tag);
  newEl.innerText = innerText;
  newEl.setAttribute('id', childId);
  newEl.setAttribute('class', cssClass);
  parent.appendChild(newEl);
}

function makeNewAnchor(href, parent, childId, cssClass) {
  var parent = document.getElementById(parent);
  var newAnchor = document.createElement('a');
  newAnchor.setAttribute('href', href);
  newAnchor.setAttribute('id', childId);
  newAnchor.setAttribute('class', cssClass);
  parent.appendChild(newAnchor);
}

function makeNewImage(src, parent) {
  var parent = document.getElementById(parent);
  var newImg = document.createElement('img');
  newImg.setAttribute('src', src);
  parent.appendChild(newImg);
}

// Renders the HTML of the profiles from the objects in the array
function makeProfiles() {
  for (var i = 0; i < topDogs; i++) {
    makeNewContainingElement('div', '', 'results', rankedDogs[i].name, 'profile-box');
    makeNewContainingElement('div', '', rankedDogs[i].name, rankedDogs[i].name + '-pic', 'profile-pic');
    makeNewAnchor('profile.html', rankedDogs[i].name + '-pic', i, 'profile-link');
    makeNewImage(rankedDogs[i].filePath, i, 'clickable');
    makeNewContainingElement('div', '', rankedDogs[i].name, rankedDogs[i].name + '-name', 'profile-name');
    makeNewContainingElement('p', rankedDogs[i].name, rankedDogs[i].name + '-name', '', '');
    makeNewContainingElement('div', '', rankedDogs[i].name, rankedDogs[i].name + '-percent', 'match-percent');
    makeNewContainingElement('p', rankedDogs[i].matchPercentage + '%', rankedDogs[i].name + '-percent', rankedDogs[i].name + '-percent-text', '');
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

// Event listener for capturing which picture gets clicked on and passed to the profile page.

function getClickedArrayIndex(event) {
  var profileClick = event.target.id;
  localStorage.setItem('profileClick', profileClick);
}

var anchorTags = document.getElementsByClassName('profile-link');
for (var i = 0; i < anchorTags.length; i++) {
  console.log('hi there');
  anchorTags[i].addEventListener('click', getClickedArrayIndex);
}

// The function that does everying at once.
function displayResults() {
  makeProfiles();
  percentageColor();
}

displayResults();
