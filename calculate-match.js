'use strict';

var totalMatches = 0;
function countMatches(i) {
  // This part calculates how much a dog matches the user
  if (dogs[i].neighborhood === user.neighborhood) {
    totalMatches++;
  }
  if (user.prefAge === 'Younger' && dogs[i].age < user.prefAge) {
    totalMatches++;
  } else if (user.prefAge === 'Older' && dogs[i].age > user.prefAge) {
    totalMatches++;
  } else if (user.prefAge === 'About the same' && dogs[i].age === user.prefAge) {
    totalMatches++;
  }
  if (user.prefSize === dogs[i].size || user.prefSize === 'No Preference') {
    totalMatches++;
  }
  if (user.prefSex === dogs[i].sex || user.prefSex === 'No Preference') {
    totalMatches++;
  }
  if (user.prefFixed === 'Fixed' && dogs[i].fixed === true || user.prefFixed === 'No Preference') {
    totalMatches++;
  } else if(user.prefFixed === 'Intact' && dogs[i].fixed === false) {
    totalMatches++;
  }
  // This part calculates how much a user matches a dog
  if (dogs[i].prefAge === 'Younger' && user.age < dogs[i].prefAge) {
    totalMatches++;
  } else if (dogs[i].prefAge === 'Older' && user.age > dogs[i].prefAge) {
    totalMatches++;
  } else if (dogs[i].prefAge === 'About the same' && user.age === dogs[i].prefAge) {
    totalMatches++;
  }
  if (dogs[i].prefSize === user.size || dogs[i].prefSize === 'No Preference') {
    totalMatches++;
  }
  if (dogs[i].prefSex === user.sex || dogs[i].prefSex === 'No Preference') {
    totalMatches++;
  }
  if (dogs[i].prefFixed === 'Fixed' && user.fixed === true || dogs[i].prefFixed === 'No Preference') {
    totalMatches++;
  } else if(dogs[i].prefFixed === 'Intact' && user.fixed === false) {
    totalMatches++;
  }
}

// Converts matches into a percentage.
function getPercentage(i) {
  dogs[i].matchPercentage = Math.round((totalMatches / 9) * 100);
}

// Calculates the percent of matches for each dog and sort by percentage.
function calculatePercentMatch() {
  for (var i = 0; i < dogs.length; i++) {
    countMatches(i);
    getPercentage(i);
    dogs.sort(function(a, b) {
      return b.matchPercentage - a.matchPercentage;
    });
  }
}
