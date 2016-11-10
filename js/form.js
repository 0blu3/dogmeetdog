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

var selectNeighborhood = document.getElementById('neighborhood');
var selected = selectNeighborhood.options[selectNeighborhood.selectedIndex].value;

function getRadioNumericalValues(elementClass) {
  var radio = document.getElementsByClassName(elementClass);
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      console.log(radio[i].value);
      user[elementClass] = parseInt(radio[i].value);
    }
  }
}

function getRadioTextValues(elementClass) {
  var radio = document.getElementsByClassName(elementClass);
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      console.log(radio[i].value);
      user[elementClass] = radio[i].value;
    }
  }
}
// ***CODE THAT RUNS THE MATCHING***

// This part calculates how much a dog matches the user non-numerical values
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

// This part calculates how much a user matches a dog's non-numerical values
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

// This part scores matches between numerical values;
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

// Put it all together, now!
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

// Converts matches into a percentage.
function getPercentage() {
  for (var i = 0; i < dogs.length; i++) {
    dogs[i].matchPercentage = Math.round((dogs[i].totalMatches / totalPossible) * 100);
  }
}

// Calculates the percent of matches for each dog and sort by percentage.
var totalPossible = 34;
function calculatePercentMatch() {
  countMatches();
  getPercentage();
  dogs.sort(function(a, b) {
    return b.matchPercentage - a.matchPercentage;
  });
}

// Send percent matched profiles to local storage
function sendToLocalStorage() {
  localStorage.setItem('dogs', JSON.stringify(dogs));
}

function verifyForm(){
  document.getElementById('registration-form');
  var inputData = document.getElementsByTagName('input');
  for (var i = 0; i < inputData.length; i++) {
    if (inputData[i].value === null) {
      alert('*Required fields missing information');
      // inputData.style.backgroundColor = 'red';
      return false;
    }console.log(inputData.value);
  }
  return true;
};

function submit(event) {
  event.preventDefault();
  var formValid = verifyForm();
  if (formValid === false) {
    return;
  }
  user.ownerName = event.target.name.value;
  user.pupName = event.target.pupName.value;
  user.breed = event.target.breed.value;
  user.age = parseInt(event.target.age.value);
  getRadioTextValues('sex');
  getRadioNumericalValues('ratingSwimming');
  getRadioNumericalValues('ratingFetch');
  getRadioNumericalValues('ratingWalks');
  getRadioNumericalValues('ratingRunning');
  getRadioNumericalValues('ratingSunbathing');
  getRadioTextValues('prefAge');
  getRadioTextValues('prefSex');
  getRadioTextValues('prefSize');
  getRadioTextValues('prefFixed');
  localStorage.setItem('user', JSON.stringify(user));
  calculatePercentMatch();
  sendToLocalStorage();
  // location.href = 'results.html';
};

var inputForm = document.getElementById('registration-form');
inputForm.addEventListener('submit', submit);
