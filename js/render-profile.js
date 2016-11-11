'use strict';

var inputForm = document.getElementById('registration-form');
inputForm.addEventListener('submit', sendMessage);
var profileIndex = JSON.parse(localStorage.getItem('profileClick'));
var dogs = JSON.parse(localStorage.getItem('dogs'));
var profiledDog = dogs[profileIndex];
var details = [profiledDog.name, profiledDog.breed, profiledDog.size, profiledDog.age, profiledDog.sex, profiledDog.fixed, profiledDog.neighborhood, profiledDog.prefAge, profiledDog.prefSize, profiledDog.prefSex, profiledDog.prefFixed];
var detailLabels = ['Name:', 'Breed:', 'Size:', 'Age:', 'Sex:', 'Spay/Neuter Status:', 'Neighborhood:', 'Age Preference:', 'Size Preference:', 'Sex Preference:', 'Spay/Neuter Preference:'];
var ratings = [profiledDog.ratingSwimming, profiledDog.ratingFetch, profiledDog.ratingWalks, profiledDog.ratingRunning, profiledDog.ratingSunbathing];
var ratingLabels = ['Rates Swimming At:', 'Rates Playing Fetch At:', 'Rates Going On Walks At:', 'Rates Running At:', 'Rates Sun Bathing At:'];

var makeNewElement = function(elementTag, elementContent, target, cssClass){
  var newEl = document.createElement(elementTag);
  newEl.innerText = elementContent;
  newEl.setAttribute('class', cssClass);
  target.appendChild(newEl);
};

function makeNewImage(src, parent, childId, cssClass) {
  var parent = document.getElementById(parent);
  var newImg = document.createElement('img');
  newImg.setAttribute('src', src);
  newImg.setAttribute('id', childId);
  newImg.setAttribute('class', cssClass);
  parent.appendChild(newImg);
}

function initiateTable(parent, childId) {
  var parent = document.getElementById(parent);
  var newTable = document.createElement('table');
  newTable.setAttribute('id', childId);
  parent.appendChild(newTable);
}

function pawRatings() {
  var table = document.getElementsByTagName('table')[0];
  for (var i = 0; i < ratings.length; i++) {
    var newRow = document.createElement('tr');
    table.appendChild(newRow);
    makeNewElement('td', ratingLabels[i], newRow, 'label');
    var ratingBox = document.createElement('td');
    newRow.appendChild(ratingBox);
    for (var j = 0; j < ratings[i]; j++) {
      var pawPrint = document.createElement('i');
      pawPrint.setAttribute('class', 'fa fa-paw');
      pawPrint.setAttribute('aria-hidden', 'true');
      ratingBox.appendChild(pawPrint);
    }
  }
}

function populateTable() {
  var table = document.getElementsByTagName('table')[0];
  for (var i = 0; i < details.length; i++) {
    var newRow = document.createElement('tr');
    table.appendChild(newRow);
    makeNewElement('td', detailLabels[i], newRow, 'label');
    makeNewElement('td', details[i], newRow, '');
  }
  pawRatings();
}

function sendMessage(event) {
  event.preventDefault();
  var textBox = document.getElementsByTagName('textarea')[0];
  if (textBox.value === '') {
    alert('You have to enter a message to send it!');
  } else {
    textBox.value = '';
    alert('Your message has been sent!');
  }
}

makeNewImage(profiledDog.filePath, 'picture-box', 'fullsize-pic', '');
initiateTable('profile-info', 'profile-data');
populateTable();
