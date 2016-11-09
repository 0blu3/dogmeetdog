'use strict';

//***DETERMINES SPLASH PAGE BUTTON***

var registerButton = document.getElementsByClassName('register')[0];
var newAnchor = document.createElement('a');
var newText = document.createElement('p');
if (!localStorage.user) {
  newAnchor.setAttribute('href', 'register.html');
  registerButton.appendChild(newAnchor);
  newText.innerHTML = 'Click Here To Start';
  newAnchor.appendChild(newText);
} else {
  newAnchor.setAttribute('href', 'results.html');
  registerButton.appendChild(newAnchor);
  newText.innerHTML = 'Welcome Back';
  newAnchor.appendChild(newText);
}


// ***CONSTRUCTOR FUNCTION AND DUMMY ACCOUNTS***
var user = JSON.parse(localStorage['user']);
var dogs = []; // Dummy profiles are pushed here.

// Pre-populating some arrays with options to pull from for filling out the profile form so that it matches the options used in the dummy profiles.
// var agePrefs = ['About the same', 'Younger', 'Older', 'No Preference'];
// var sizes = ['Small', 'Medium', 'Large', 'No Preference'];
// var neighborhoods = ['Capitol Hill', 'Downtown Seattle', 'West Seattle', 'Ballard', 'Queen Anne', 'Belltown', 'Fremont', 'Unversity District', 'North Seattle', 'Green Lake', 'Beacon Hill', 'South Lake Union', 'Other'];
// var fixedPreference = ['Fixed', 'Intact', 'No Preference'];

// The actual constructor function and dummy accounts.
function Dog(name, breed, size, age, sex, fixed, neighborhood, prefAge, prefSize, prefSex, prefFixed, ratingSwimming, ratingFetch, ratingWalks, ratingRunning, ratingSunbathing, fileName){
  this.name = name;
  this.breed = breed;
  this.size = size;
  this.age = age;
  this.sex = sex;
  this.fixed = fixed;
  this.neighborhood = neighborhood;
  this.prefAge = prefAge;
  this.prefSize = prefSize;
  this.prefSex = prefSex;
  this.prefFixed = prefFixed;
  this.ratingSwimming = ratingSwimming;
  this.ratingFetch = ratingFetch;
  this.ratingWalks = ratingWalks;
  this.ratingRunning = ratingRunning;
  this.ratingSunbathing = ratingSunbathing;
  this.filePath = 'Assets/images/profile-photos/' + fileName;
  this.liked = false;
  this.totalMatches = 0;
  this.matchPercentage;
  dogs.push(this);
}

new Dog('Allison', 'German Shepherd', 'Large', 4, 'Female', true, 'Capitol Hill', 'About the same', 'Large', 'Female', 'No Preference', 1, 2, 3, 4, 5, 'allison.jpg');
new Dog('Cassius', 'French Bulldog', 'Small', 8, 'Male', true, 'Downtown Seattle', 'Older', 'Small', 'No Preference', 'No Preference', 5, 4, 3, 2, 1, 'cassius.jpg');
new Dog('Buggy', 'Pug', 'Small', 1, 'Female', false, 'West Seattle', 'Younger', 'No Preference', 'No Preference', 'Fixed', 2, 1, 4, 5, 3, 'buggy.jpg');
new Dog('Zeke', 'Husky', 'Medium', 2, 'Male', true, 'University District', 'No Preference', 'No Preference', 'No Preference', 'No Preference', 5, 5, 5, 5, 5, 'zeke.jpg');
new Dog('Cheri', 'Golden Retriever', 'Large', 9, 'Female', true, 'Ballard', 'About the same', 'Large', 'Male', 'Fixed', 1, 1, 1, 1, 1, 'cheri.jpg');
new Dog('Lili', 'Mixed Breed', 3, 'Small', 'Female', false, 'Queen Anne', 'Older', 'Small', 'Female', 'Fixed', 4, 5, 4, 5, 2, 'lili.jpg');
new Dog('Stan', 'Corgi', 5, 'Medium', 'Male', false, 'Belltown', 'Younger', 'No Preference', 'No Preference', 'No Preference', 2, 5, 3, 1, 4, 'stan.jpg');
new Dog('Clara', 'Pit Bull', 6, 'Large', 'Female', true, 'Freemont', 'No Preference', 'Large', 'Male', 'No Preference', 4, 2, 5, 3, 1, 'clara.jpg');
new Dog('Murphy', 'Yellow Lab', 7, 'Large', 'Male', false, 'Green Lake', 'Younger', 'Medium', 'Female', 'No Preference', 3, 4, 3, 4, 5, 'murphy.jpg');
new Dog('Chance', 'Yellow Lab', 4, 'Large', 'Male', true, 'Beacon Hill', 'About the same', 'No Preference', 'No Preference', 'No Preference', 5, 5, 5, 5, 5, 'chance.jpg');
new Dog('Lisa', 'French Bulldog', 'Small', 3, 'Female', true, 'Capitol Hill', 'No Preference', 'Small', 'No Preference', 'Fixed', 3, 4, 2, 1, 4, 'lisa.jpg');
new Dog('Tiny', 'English Mastiff', 'Large', 5, 'Male', true, 'Green Lake', 'About the same', 'No Preference', 'Female', 'No Preference', 1, 1, 2, 3, 4, 'tiny.jpg');
new Dog('Cosmo', 'Beagle', 'Medium', 8, 'Male', false, 'Ballard', 'Older', 'No Preference', 'No Preference', 'Male', 'Fixed', 5, 5, 4, 2, 1, 'cosmo.jpg');
new Dog('Suki', 'Shiba Inu', 'Medium', 3, 'Female', true, 'University District', 'About the same', 'No Preference', 'Male', 'Fixed', 4, 4, 3, 4, 4, 'suki.jpg');
new Dog('Rusty', 'Australian Cattle Dog', 'Large', 6, 'Male', true, 'Freemont', 'No Preference', 'No Preference', 'No Preference', 'No Preference', 2, 3, 4, 1, 4, 'rusty.jpg');
new Dog('Hudson', 'Gold Retriever', 'Small', 1, 'Male', false, 'Beacon Hill', 'About the same', 'Small', 'No Preference', 'No Preference', 5, 5, 5, 5, 5, 'hudson.jpg');
new Dog('Charles', 'Papillon', 'Small', 1, 'Male', false, 'Belltown', 'About the same', 'Small', 'No Preference', 'No Preference', 2, 2, 1, 5, 5, 'charles.jpg');
new Dog('Jen', 'Mixed Breed', 'Small', 2, 'Female', true, 'Queen Anne', 'No Preference', 'No Preference', 'No Preference', 'Fixed', 4, 4, 3, 2, 1, 'jen.jpg');
new Dog('Nate', 'Mixed Breed', 'Small', 5, 'Male', true, 'Downtown Seattle', 'Older', 'Small', 'Female', 'Fixed', 3, 3, 4, 2, 1, 'nate.jpg');
new Dog('Sebastian', 'Mixed Breed', 'Small', 3, 'Male', true, 'West Seattle', 'About the same', 'No Preference', 'No Preference', 'Fixed', 5, 5, 4, 5, 5, 'sebastian.jpg');
new Dog('Boss', 'Golden Retriever', 'Large', 5, 'Male', true, 'Belltown', 'No Preference', 'Large', 'Female', 'Fixed', 3, 3, 4, 3, 2, 'boss.jpg');
new Dog('Maggie', 'Golden Doodle', 'Large', 7, 'Female', true, 'Ballard', 'No Preference', 'Medium', 'Female', 'Fixed', 5, 5, 4, 5, 3, 'maggie.jpg');

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

calculatePercentMatch();
sendToLocalStorage();
