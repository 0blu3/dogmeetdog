'use strict';

function submit(event) {
  event.preventDefault();
  console.log(event);
  var inputName = event.target.name.value;
  localStorage.setItem('name', name.value);
  console.log(inputName);
  var inputNumber = event.target.contact_number.value;
  console.log(inputNumber);
  localStorage.setItem('contact_number', contact_number.value);
  var inputPupName = event.target.pupName.value;
  localStorage.setItem('pups_name', pupName.value);
  console.log(inputPupName);
  var inputBreed = event.target.breed.value;
  localStorage.setItem('breed', breed.value);
  console.log(inputBreed);

  var inputFemale = document.getElementById('female');
  if(inputFemale.checked) {
    inputFemale.value;
    console.log(inputFemale);
  }

  var inputAge = event.target.age.value;
  localStorage.setItem('age', age.value);
  console.log(inputAge);

  var inputSwimming = document.getElementById('swimming');
  if(inputSwimming.checked) {
    inputSwimming.value;
    console.log(inputSwimming);
  }

  var inputFetch = document.getElementById('fetch');
  if(inputFetch.checked) {
    inputSwimming.value;
    console.log(inputFetch);
  }

  var inputWalks = document.getElementById('walks');
  if(inputWalks.checked) {
    inputWalks.value;
    console.log(inputWalks);
  }

  var inputRunning = document.getElementById('running');
  if(inputRunning.checked) {
    inputSwimming.value;
    console.log(inputRunning);
  }

  var inputSunBathing = document.getElementById('sunBathing');
  if(inputSunBathing.checked) {
    inputSunBathing.value;
    console.log(inputSunBathing);
  }

  var inputAgePref = document.getElementById('agePref');
  if(inputAgePref.checked) {
    inputAgePref.value;
    console.log(inputAgePref);
  }

  var inputSpayNeuPref = document.getElementById('spayNeuPref');
  if(inputSpayNeuPref.checked) {
    inputSpayNeuPref.value;
    console.log(inputSpayNeuPref);
  }

  var inputPrefSize = document.getElementById('prefSize');
  if(inputPrefSize.checked) {
    inputPrefSize.value;
    console.log(inputPrefSize);
  }
}
var inputForm = document.getElementById('registration-form');
inputForm.addEventListener('submit', submit);
