'use strict';

var profileIndex = JSON.parse(localStorage.getItem('profileClick'));
var dogs = JSON.parse(localStorage.getItem('dogs'));
var profiledDog = dogs[profileIndex];
var details = [profiledDog.name, profiledDog.breed, profiledDog.size, profiledDog.age, profiledDog.sex, profiledDog.fixed, profiledDog.neighborhood, profiledDog.prefAge, profiledDog.prefSize, profiledDog.prefSex, profiledDog.prefFixed, profiledDog.swimming, profiledDog.ratingFetch, profiledDog.ratingWalks, profiledDog.ratingRunning, profiledDog.ratingSunbathing];
var tableLabels = ['Name:', 'Breed:', 'Size:', 'Age:', 'Sex:', 'Spay/Neuter Status:', 'Neighborhood:', 'Age Preference:', 'Size Preference:', 'Sex Preference:', 'Spay/Neuter Preference:', 'Rates Swimming At:', 'Rates Playing ratingSwimming At:', 'Rates Going On Walks At:', 'Rates Running At:', 'Rates Sun Bathing At:'];

var makeNewElement = function(elementTag, elementContent, target, cssClass){
  var newEl = document.createElement(elementTag);
  newEl.innerText = elementContent;
  newEl.setAttribute('class', cssClass);
  target.appendChild(newEl);
};

// DUPLICATED CODE FROM DISPLAY-RESULTS.JS
function makeNewImage(src, parent, childId, cssClass) {
  var parent = document.getElementById(parent);
  var newImg = document.createElement('img');
  newImg.setAttribute('src', src);
  newImg.setAttribute('id', childId);
  newImg.setAttribute('class', cssClass);
  parent.appendChild(newImg);
}
// DUPLICATED CODE FROM DISPLAY-RESULTS.JS

function initiateTable(parent, childId) {
  var parent = document.getElementById(parent);
  var newTable = document.createElement('table');
  newTable.setAttribute('id', childId);
  parent.appendChild(newTable);
}

function populateTable() {
  var table = document.getElementsByTagName('table')[0];
  for (var i = 0; i < details.length; i++) {
    var newRow = document.createElement('tr');
    table.appendChild(newRow);
    makeNewElement('td', tableLabels[i], newRow, 'label');
    makeNewElement('td', details[i], newRow, '');
  }
}

makeNewImage(profiledDog.filePath, 'picture-box', 'fullsize-pic', '');
initiateTable('profile-info', 'profile-data');
populateTable();
