'use strict';

var user = {
  size: 'Large',
  age: '4',
  sex: 'Male',
  fixed: true,
  neighborhood: 'Capitol Hill',
  prefAge: 'About the same',
  prefSex: 'No Preference',
  prefFixed: 'Fixed',
  swimming: 5,
  fetch: 4,
  walks: 3,
  running: 2,
  sunBathing: 1
};

// This part calculates how much a dog matches the user non-numerical values
function matchNeighborhood(i) {
  if (dogs[i].neighborhood === user.neighborhood) {
    totalMatches++;
  }
}

function matchUserAgePref(i) {
  if (user.prefAge === 'Younger' && dogs[i].age < user.prefAge) {
    totalMatches++;
  } else if (user.prefAge === 'Older' && dogs[i].age > user.prefAge) {
    totalMatches++;
  } else if (user.prefAge === 'About the same' && dogs[i].age === user.prefAge) {
    totalMatches++;
  }
}

function matchUserSizePref(i) {
  if (user.prefSize === dogs[i].size || user.prefSize === 'No Preference') {
    totalMatches++;
  }
}

function matchUserSexPref(i) {
  if (user.prefSex === dogs[i].sex || user.prefSex === 'No Preference') {
    totalMatches++;
  }
}

function matchUserFixedPref(i) {
  if (user.prefFixed === 'Fixed' && dogs[i].fixed === true || user.prefFixed === 'No Preference') {
    totalMatches++;
  }
}

// This part calculates how much a user matches a dog's non-numerical values
function matchDogAgePref(i) {
  if (dogs[i].prefAge === 'Younger' && user.age < dogs[i].prefAge) {
    totalMatches++;
  } else if (dogs[i].prefAge === 'Older' && user.age > dogs[i].prefAge) {
    totalMatches++;
  } else if (dogs[i].prefAge === 'About the same' && user.age === dogs[i].prefAge) {
    totalMatches++;
  }
}

function matchDogSizePref(i) {
  if (dogs[i].prefSize === user.size || dogs[i].prefSize === 'No Preference') {
    totalMatches++;
  }
}

function matchDogSexPref(i) {
  if (dogs[i].prefSex === user.sex || dogs[i].prefSex === 'No Preference') {
    totalMatches++;
  }
}

function matchDogFixedPref(i) {
  if (dogs[i].prefFixed === 'Fixed' && user.fixed === true || dogs[i].prefFixed === 'No Preference') {
    totalMatches++;
  }
}

// This part calculates percent match between numerical values;
function compareNumericals(user, dog) {
  var difference = Math.abs(user - dog);
  if (difference === 0) {
    totalMatches += 4;
  } else if (difference === 1) {
    totalMatches += 3;
  } else if (difference === 2) {
    totalMatches += 2;
  } else if (difference === 1) {
    totalMatches += 1;
  }
}

function getNumericalMatches(i) {
  for (var i = 0; i < dogs.length; i++) {
    compareNumericals(user.swimming, dogs[i].swmming);
    compareNumericals(user.fetch, dogs[i].fetch);
    compareNumericals(user.walks, dogs[i].walks);
    compareNumericals(user.running, dogs[i].running);
    compareNumericals(user.SunBathing, dogs[i].sunBathing);
  }
}

// Put it all together, now!
function countMatches(i) {
  matchNeighborhood(i);
  matchUserAgePref(i);
  matchUserSexPref(i);
  matchUserSizePref(i);
  matchUserFixedPref(i);
  matchDogAgePref(i);
  matchDogSexPref(i);
  matchDogSizePref(i);
  matchDogFixedPref(i);
  getNumericalMatches(i);
}

// Converts matches into a percentage.
function getPercentage(i) {
  dogs[i].matchPercentage = Math.round((totalMatches / totalPossible) * 100);
}

// Calculates the percent of matches for each dog and sort by percentage.
var totalMatches = 0;
var totalPossible = 34;
function calculatePercentMatch() {
  for (var i = 0; i < dogs.length; i++) {
    countMatches(i);
    getPercentage(i);
    totalMatches = 0;
  }
  dogs.sort(function(a, b) {
    return b.matchPercentage - a.matchPercentage;
  });
}

calculatePercentMatch();
localStorage.setItem('dogs', dogs);
