'use strict';

var user = JSON.parse(localStorage['user']);
var rankedDogs = JSON.parse(localStorage['dogs']);
var topDogs = 4;

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
  return newAnchor;
}

function makeNewImage(src, parent, childId, cssClass) {
  var parent = document.getElementById(parent);
  var newImg = document.createElement('img');
  newImg.setAttribute('src', src);
  newImg.setAttribute('id', childId);
  newImg.setAttribute('class', cssClass);
  parent.appendChild(newImg);
}

function switchMainDogPicture(event) {
  event.preventDefault();
  var clickedDog = rankedDogs[event.target.id];
  var formerMainDog = rankedDogs[0];
  rankedDogs[0] = clickedDog;
  rankedDogs[event.target.id] = formerMainDog;
  makeProfileBoxes(rankedDogs);
}

function makeProfileBoxes(rankedDogs) {
  var resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  var sideResultsDiv = document.getElementById('side-results');
  sideResultsDiv.innerHTML = '';
  for (var i = 0; i < topDogs; i++) {
    if(i === 0){
      makeNewContainingElement('div', '', 'results', rankedDogs[i].name, 'profile-box');
      makeNewContainingElement('div', '', rankedDogs[i].name, rankedDogs[i].name + '-pic', 'profile-pic');
      makeNewAnchor('profile.html', rankedDogs[i].name + '-pic', rankedDogs[i].name + '-link');
      makeNewImage(rankedDogs[i].filePath, rankedDogs[i].name + '-link', i, 'clickable');
      makeNewContainingElement('div', '', rankedDogs[i].name, rankedDogs[i].name + '-name', 'profile-name');
      makeNewContainingElement('p', rankedDogs[i].name, rankedDogs[i].name + '-name', '', '');
      makeNewContainingElement('div', '', rankedDogs[i].name, rankedDogs[i].name + '-percent', 'match-percent');
      makeNewContainingElement('p', rankedDogs[i].matchPercentage + '%', rankedDogs[i].name + '-percent', rankedDogs[i].name + '-percent-text', '');
      percentageColor();
    } else {
      makeNewContainingElement('div', '', 'side-results', rankedDogs[i].name, 'profile-box');
      makeNewContainingElement('div', '', rankedDogs[i].name, rankedDogs[i].name + '-pic', 'side-profile-pic');
      var anchor = makeNewAnchor('profile.html', rankedDogs[i].name + '-pic', rankedDogs[i].name + '-link');
      makeNewImage(rankedDogs[i].filePath, rankedDogs[i].name + '-link', i, 'clickable');
      anchor.addEventListener('click', switchMainDogPicture);
    }
  }
}

function percentageColor() {
  for (var i = 0; i < 3; i++) {
    var percentText = document.getElementById(rankedDogs[0].name + '-percent-text');
    if (rankedDogs[0].matchPercentage >= 80) {
      percentText.setAttribute('class', 'great-match');
    } else if (rankedDogs[0].matchPercentage < 80 && rankedDogs[0].matchPercentage >= 60) {
      percentText.setAttribute('class', 'okay-match');
    } else if (rankedDogs[0].matchPercentage < 60 && rankedDogs[0].matchPercentage >= 40) {
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
  makeProfileBoxes(rankedDogs);
}

displayResults();

var imgTags = document.getElementsByClassName('clickable');
for (var i = 0; i < imgTags.length; i++) {
  imgTags[i].addEventListener('click', getClickedArrayIndex);
}
