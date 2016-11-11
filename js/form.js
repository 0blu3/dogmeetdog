'use strict';

var user = {
  ownerName: '',
  pupName: '',
  breed: '',
  size: '',
  age: '',
  sex: '',
  fixed: '',
  neighborhood: '',
  prefAge: '',
  prefSex: '',
  prefSize: '',
  prefFixed: '',
  ratingSwimming: '',
  ratingFetch: '',
  ratingWalks: '',
  ratingRunning: '',
  ratingSunbathing: '',
};

function getNeighborhood() {
  var neighborhood = document.getElementById('neighborhood');
  var selected = neighborhood.options[neighborhood.selectedIndex].value;
  user.neighborhood = selected;
}

function getRadioNumericalValues(elementClass) {
  var radio = document.getElementsByClassName(elementClass);
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      user[elementClass] = parseInt(radio[i].value);
    }
  }
}

function getRadioTextValues(elementClass) {
  var radio = document.getElementsByClassName(elementClass);
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      user[elementClass] = radio[i].value;
    }
  }
}

function matchNeighborhood() {
  for (var i = 0; i < dogs.length; i++) {
    if (dogs[i].neighborhood === user.neighborhood) {
      dogs[i].totalMatches++;
    }
  }
}

function matchUserAgePref() {
  for (var i = 0; i < dogs.length; i++) {
    if (user.prefAge === 'Younger' && dogs[i].age < user.prefAge) {
      dogs[i].totalMatches++;
    } else if (user.prefAge === 'Older' && dogs[i].age > user.prefAge) {
      dogs[i].totalMatches++;
    } else if (user.prefAge === 'About the same' && dogs[i].age === user.prefAge) {
      dogs[i].totalMatches++;
    }
  }
}

function matchUserSizePref() {
  for (var i = 0; i < dogs.length; i++) {
    if (user.prefSize === dogs[i].size || user.prefSize === 'No Preference') {
      dogs[i].totalMatches++;
    }
  }
}

function matchUserSexPref() {
  for (var i = 0; i < dogs.length; i++) {
    if (user.prefSex === dogs[i].sex || user.prefSex === 'No Preference') {
      dogs[i].totalMatches++;
    }
  }
}

function matchUserFixedPref() {
  for (var i = 0; i < dogs.length; i++) {
    if (user.prefFixed === 'Fixed' && dogs[i].fixed === true || user.prefFixed === 'No Preference') {
      dogs[i].totalMatches++;
    }
  }
}

function matchDogAgePref() {
  for (var i = 0; i < dogs.length; i++) {
    if (dogs[i].prefAge === 'Younger' && user.age < dogs[i].prefAge) {
      dogs[i].totalMatches++;
    } else if (dogs[i].prefAge === 'Older' && user.age > dogs[i].prefAge) {
      dogs[i].totalMatches++;
    } else if (dogs[i].prefAge === 'About the same' && user.age === dogs[i].prefAge) {
      dogs[i].totalMatches++;
    }
  }
}

function matchDogSizePref() {
  for (var i = 0; i < dogs.length; i++) {
    if (dogs[i].prefSize === user.size || dogs[i].prefSize === 'No Preference') {
      dogs[i].totalMatches++;
    }
  }
}

function matchDogSexPref() {
  for (var i = 0; i < dogs.length; i++) {
    if (dogs[i].prefSex === user.sex || dogs[i].prefSex === 'No Preference') {
      dogs[i].totalMatches++;
    }
  }
}

function matchDogFixedPref() {
  for (var i = 0; i < dogs.length; i++) {
    if (dogs[i].prefFixed === 'Fixed' && user.fixed === true || dogs[i].prefFixed === 'No Preference') {
      dogs[i].totalMatches++;
    }
  }
}

function compareratingSwimming() {
  for (var i = 0; i < dogs.length; i++) {
    var difference = Math.abs(user.ratingSwimming - dogs[i].ratingSwimming);
    if (difference === 0) {
      dogs[i].totalMatches += 4;
    } else if (difference === 1) {
      dogs[i].totalMatches += 3;
    } else if (difference === 2) {
      dogs[i].totalMatches += 2;
    } else if (difference === 1) {
      dogs[i].totalMatches += 1;
    }
  }
}

function compareratingFetch() {
  for (var i = 0; i < dogs.length; i++) {
    var difference = Math.abs(user.ratingFetch - dogs[i].ratingFetch);
    if (difference === 0) {
      dogs[i].totalMatches += 4;
    } else if (difference === 1) {
      dogs[i].totalMatches += 3;
    } else if (difference === 2) {
      dogs[i].totalMatches += 2;
    } else if (difference === 1) {
      dogs[i].totalMatches += 1;
    }
  }
}

function compareratingWalks() {
  for (var i = 0; i < dogs.length; i++) {
    var difference = Math.abs(user.ratingWalks - dogs[i].ratingWalks);
    if (difference === 0) {
      dogs[i].totalMatches += 4;
    } else if (difference === 1) {
      dogs[i].totalMatches += 3;
    } else if (difference === 2) {
      dogs[i].totalMatches += 2;
    } else if (difference === 1) {
      dogs[i].totalMatches += 1;
    }
  }
}

function compareratingRunning() {
  for (var i = 0; i < dogs.length; i++) {
    var difference = Math.abs(user.ratingRunning - dogs[i].ratingRunning);
    if (difference === 0) {
      dogs[i].totalMatches += 4;
    } else if (difference === 1) {
      dogs[i].totalMatches += 3;
    } else if (difference === 2) {
      dogs[i].totalMatches += 2;
    } else if (difference === 1) {
      dogs[i].totalMatches += 1;
    }
  }
}

function compareratingSunbathing() {
  for (var i = 0; i < dogs.length; i++) {
    var difference = Math.abs(user.ratingSunbathing - dogs[i].ratingSunbathing);
    if (difference === 0) {
      dogs[i].totalMatches += 4;
    } else if (difference === 1) {
      dogs[i].totalMatches += 3;
    } else if (difference === 2) {
      dogs[i].totalMatches += 2;
    } else if (difference === 1) {
      dogs[i].totalMatches += 1;
    }
  }
}

function getNumericalMatches() {
  compareratingSwimming();
  compareratingFetch();
  compareratingWalks();
  compareratingRunning();
  compareratingSunbathing();
}

function countMatches() {
  matchNeighborhood();
  matchUserAgePref();
  matchUserSexPref();
  matchUserSizePref();
  matchUserFixedPref();
  matchDogAgePref();
  matchDogSexPref();
  matchDogSizePref();
  matchDogFixedPref();
  getNumericalMatches();
}

function getPercentage() {
  for (var i = 0; i < dogs.length; i++) {
    dogs[i].matchPercentage = Math.round((dogs[i].totalMatches / totalPossible) * 100);
  }
}

var totalPossible = 34;
function calculatePercentMatch() {
  countMatches();
  getPercentage();
  dogs.sort(function(a, b) {
    return b.matchPercentage - a.matchPercentage;
  });
}

function sendToLocalStorage() {
  localStorage.setItem('dogs', JSON.stringify(dogs));
}

function validate() {
  for (var i = 0; i < Object.values(user).length; i++) {
    if (Object.values(user)[i] === '') {
      alert('Please fill out the form completely so that we might better match you with a furry friend!');
      return;
    }
  }
  localStorage.setItem('user', JSON.stringify(user));
  calculatePercentMatch();
  sendToLocalStorage();
  location.href = 'results.html';
}

function submit(event) {
  event.preventDefault();
  user.ownerName = event.target.name.value;
  user.pupName = event.target.pupName.value;
  user.breed = event.target.breed.value;
  user.age = parseInt(event.target.age.value);
  getNeighborhood();
  getRadioTextValues('sex');
  getRadioTextValues('fixed');
  getRadioTextValues('size');
  getRadioNumericalValues('ratingSwimming');
  getRadioNumericalValues('ratingFetch');
  getRadioNumericalValues('ratingWalks');
  getRadioNumericalValues('ratingRunning');
  getRadioNumericalValues('ratingSunbathing');
  getRadioTextValues('prefAge');
  getRadioTextValues('prefSex');
  getRadioTextValues('prefSize');
  getRadioTextValues('prefFixed');
  validate();
}

var inputForm = document.getElementById('registration-form');
inputForm.addEventListener('submit', submit);
