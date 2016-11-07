'use strict';

var dogs = [];
var agePrefs = ['About the same', 'Younger', 'Older', 'No Preference'];
var sizes = ['Small', 'Medium', 'Large', 'No Preference'];
var neighborhoods = ['Capitol Hill', 'Downtown Seattle', 'West Seattle', 'Ballard', 'Queen Anne', 'Belltown', 'Fremont', 'Unversity District', 'North Seattle', 'Green Lake', 'Beacon Hill', 'South Lake Union', 'Other'];
var fixedPreference = ['Fixed', 'Intact', 'No Preference'];

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
  this.fileName = fileName;
  this.liked = false;
  dogs.push(this);
}

new Dog('Thor', 'German Shepherd', 'Large', 4, 'Male', true, 'Capitol Hill', 'About the same', 'Large', 'No Preference', Thor.jpg);
new Dog('Jean Luc', 'French Bulldog', 'Small', 8, 'Male', true, 'Downtown Seattle', 'Older', 'Small', 'No Preference', JeanLuc.jpg);
new Dog('Smooshy', 'Pug', 'Small', 1, 'Female', false, 'West Seattle', 'Younger', 'No Preference', 'Fixed', Smooshy.jpg);
new Dog('YooDub', 'Husky', 'Medium', 2, 'Female', true, 'University District', 'No Preference', 'No Preference', 'No Preference', 'No Preference', YooDub.jpg);
new Dog('Yukon', 'Golden Retriever', 'Large', 9, 'Male', true, 'Ballard', 'About the same', 'Large', 'Male', 'Fixed', Yukon.jpg);
new Dog('Screw Ball', 'Mixed Breed', 3, 'Small', 'Female', false, 'Queen Anne', 'Older', 'Small', 'Female', 'Fixed', ScrewBall.jpg);
new Dog('Atlas, Titan of the Sky', 'Corgi', 5, 'Medium', 'Male', false, 'Belltown', 'Younger', 'No Preference', 'No Preference', 'Intact', Atlas.jpg);
new Dog('Armando Christian Pérez', 'Pit Bull', 6, 'Large', 'Male', true, 'Freemont', 'No Preference', 'Large', 'Male', 'No Preference', Armando.jpg);
new Dog('Cat', 'Yellow Lab', 7, 'Large', 'Female', false, 'Green Lake', 'Younger', 'Medium', 'Female', 'No Preference', Cat.jpg);
