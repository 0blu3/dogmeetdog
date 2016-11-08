'use strict!';

function submit(event) {
  event.preventDefault();
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

  var inputGender = document.getElementById('gender');
  for (var i = 0; i < inputGender.length; i++) {
    if(inputGender[i].checked) {
      return inputGender[i].value;
      console.log(inputGender);
    }
  }

  var inputAge = event.target.age.value;
  localStorage.setItem('age', age.value);
  console.log(age);

  var inputSwimming = document.getElementById('swimming');
  for (var i = 0; i < inputSwimming.length; i++) {
    inputSwimming[i].value;
    console.log(inputSwimming);
  }
  var inputFetch = document.getElementById('fetch').value;
  localStorage.setItem('fetch', fetch.value);
  var inputWalks = document.getElementById('walks').value;
  localStorage.setItem('walks', walks.input);
  var inputRunning = document.getElementById('running').value;
  localStorage.setItem('running', running.value);
  var inputSunBathing = document.getElementById('sunBathing').value;
  localStorage.setItem('sunBathing', sunBathing.value);
  var inputNeighborhood = document.getElementById('neighborhood').value;
  localStorage.setItem('neighborhood', neighborhood.value);
  var inputagePref = document.getElementById('agePref').value;
  localStorage.setItem('agePref', agePref.value);
  var inputSpayNeuPref = document.getElementById('spayNeuPref').value;
  localStorage.setItem('spayNeuPref', spayNeuPref.value);
  var inputSize = document.getElementById('sizes').value;
  localStorage.setItem('sizes', sizes.value);
}
var inputForm = document.querySelectorAll('form');
form.addEventListener('submit', submit);
