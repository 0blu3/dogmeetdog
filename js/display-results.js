'use strict';

var user = JSON.parse(localStorage['user']);
var rankedDogs = JSON.parse(localStorage['dogs']);
var topDogs = 3;

function makeNewContainingElement(tag, innerText, parent, childId, cssClass) {
  var parent = document.getElementById(parent);
  var newEl = document.createElement(tag);
  newEl.innerText = innerText;
  newEl.setAttribute('id', childId);
  newEl.setAttribute('class', cssClass);
  parent.appendChild(newEl);
}

function makeNewAnchor(href, parent, childId) {
  var parent = document.getElementById(parent);
  var newAnchor = document.createElement('a');
  newAnchor.setAttribute('href', href);
  newAnchor.setAttribute('id', childId);
  parent.appendChild(newAnchor);
}

function makeNewImage(src, parent, childId, cssClass) {
  var parent = document.getElementById(parent);
  var newImg = document.createElement('img');
  newImg.setAttribute('src', src);
  newImg.setAttribute('id', childId);
  newImg.setAttribute('class', cssClass);
  parent.appendChild(newImg);
}

function makeProfileBoxes() {
  for (var i = 0; i < topDogs; i++) {
    makeNewContainingElement('div', '', 'results', rankedDogs[i].name, 'profile-box');
    makeNewContainingElement('div', '', rankedDogs[i].name, rankedDogs[i].name + '-pic', 'profile-pic');
    makeNewAnchor('profile.html', rankedDogs[i].name + '-pic', rankedDogs[i].name + '-link');
    makeNewImage(rankedDogs[i].filePath, rankedDogs[i].name + '-link', i, 'clickable');
    makeNewContainingElement('div', '', rankedDogs[i].name, rankedDogs[i].name + '-name', 'profile-name');
    makeNewContainingElement('p', rankedDogs[i].name, rankedDogs[i].name + '-name', '', '');
    makeNewContainingElement('div', '', rankedDogs[i].name, rankedDogs[i].name + '-percent', 'match-percent');
    makeNewContainingElement('p', rankedDogs[i].matchPercentage + '%', rankedDogs[i].name + '-percent', rankedDogs[i].name + '-percent-text', '');
  }
}

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

function getClickedArrayIndex(event) {
  var profileClick = event.target.id;
  localStorage.setItem('profileClick', JSON.stringify(profileClick));
}

function displayResults() {
  makeProfileBoxes();
  percentageColor();
}

displayResults();

var imgTags = document.getElementsByClassName('clickable');
for (var i = 0; i < imgTags.length; i++) {
  imgTags[i].addEventListener('click', getClickedArrayIndex);
}
