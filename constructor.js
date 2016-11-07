'use strict';

var dogs = []; // Dummy profiles are pushed here.

// Pre-populating some arrays with options to pull from for filling out the profile form so that it matches the options used in the dummy profiles.
var agePrefs = ['About the same', 'Younger', 'Older', 'No Preference'];
var sizes = ['Small', 'Medium', 'Large', 'No Preference'];
var neighborhoods = ['Capitol Hill', 'Downtown Seattle', 'West Seattle', 'Ballard', 'Queen Anne', 'Belltown', 'Fremont', 'Unversity District', 'North Seattle', 'Green Lake', 'Beacon Hill', 'South Lake Union', 'Other'];
var fixedPreference = ['Fixed', 'Intact', 'No Preference'];

// The actual constructor function and dummy accounts.
function Dog(name, breed, size, age, sex, fixed, neighborhood, prefAge, prefSize, prefSex, prefFixed, fileName){
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
  this.filePath = 'Assets/images/profile-photos/' + fileName;
  this.liked = false;
  this.matchPercentage;
  dogs.push(this);
}

new Dog('Allison', 'German Shepherd', 'Large', 4, 'Female', true, 'Capitol Hill', 'About the same', 'Large', 'Female', 'No Preference', 'allison.jpg');
new Dog('Cassius', 'French Bulldog', 'Small', 8, 'Male', true, 'Downtown Seattle', 'Older', 'Small', 'No Preference', 'No Preference', 'cassius.jpg');
new Dog('Buggy', 'Pug', 'Small', 1, 'Female', false, 'West Seattle', 'Younger', 'No Preference', 'No Preference', 'Fixed', 'buggy.jpg');
new Dog('Zeke', 'Husky', 'Medium', 2, 'Male', true, 'University District', 'No Preference', 'No Preference', 'No Preference', 'No Preference', 'zeke.jpg');
new Dog('Cheri', 'Golden Retriever', 'Large', 9, 'Feale', true, 'Ballard', 'About the same', 'Large', 'Male', 'Fixed', 'cheri.jpg');
new Dog('Lili', 'Mixed Breed', 3, 'Small', 'Female', false, 'Queen Anne', 'Older', 'Small', 'Female', 'Fixed', 'lili.jpg');
new Dog('Stan', 'Corgi', 5, 'Medium', 'Male', false, 'Belltown', 'Younger', 'No Preference', 'No Preference', 'Intact', 'stan.jpg');
new Dog('Clara', 'Pit Bull', 6, 'Large', 'Female', true, 'Freemont', 'No Preference', 'Large', 'Male', 'No Preference', 'clara.jpg');
new Dog('Murphy', 'Yellow Lab', 7, 'Large', 'Male', false, 'Green Lake', 'Younger', 'Medium', 'Female', 'No Preference', 'murphy.jpg');
new Dog('Chance', 'Yellow Lab', 4, 'Large', 'Male', true, 'Beacon Hill', 'About the same', 'No Preference', 'No Preference', 'No Preference', 'chance.jpg');

// // Provisional code.
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
  dogs[i].matchPercentage = (totalMatches / 9) * 100;
}

// Calculates the percent of matches for each dog.
function calculatePercentMatch() {
  for (var i = 0; i < dogs.length; i++) {
    countMatches(i);
    getPercentage(i);
  }
}
