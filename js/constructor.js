'use strict';

var dogs = []; // Dummy profiles are pushed here.

// Pre-populating some arrays with options to pull from for filling out the profile form so that it matches the options used in the dummy profiles.
var agePrefs = ['About the same', 'Younger', 'Older', 'No Preference'];
var sizes = ['Small', 'Medium', 'Large', 'No Preference'];
var neighborhoods = ['Capitol Hill', 'Downtown Seattle', 'West Seattle', 'Ballard', 'Queen Anne', 'Belltown', 'Fremont', 'Unversity District', 'North Seattle', 'Green Lake', 'Beacon Hill', 'South Lake Union', 'Other'];
var fixedPreference = ['Fixed', 'Intact', 'No Preference'];

// The actual constructor function and dummy accounts.
function Dog(name, breed, size, age, sex, fixed, neighborhood, prefAge, prefSize, prefSex, prefFixed, swimming, fetch, walks, running, sunBathing, fileName){
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
  this.swimming = swimming;
  this.fetch = fetch;
  this.walks = walks;
  this.running = running;
  this.sunBathing = sunBathing;
  this.filePath = 'Assets/images/profile-photos/' + fileName;
  this.liked = false;
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
