'use strict';

var user = {
  ownerName: '',
  pupName: '',
  contactNumber: '',
  breed: '',
  size: '',
  age: '',
  sex: '',
  fixed: '',
  neighborhood: '',
  prefAge: '',
  prefSex: '',
  prefFixed: '',
  ratingSwimming: '',
  ratingFetch: '',
  ratingWalks: '',
  ratingRunning: '',
  ratingSunbathing: '',
};

function getRatingValues(elementClass) {
  var radio = document.getElementsByClassName(elementClass);
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      console.log(radio[i].value);
      user.elementClass = parseInt(radio[i].value);
    }
  }
}

function submit(event) {
  event.preventDefault();
  console.log(event);
  user.ownerName = event.target.name.value;
  console.log(user.ownerName);
  user.contactNumber = event.target.contact_number.value;
  console.log(user.contactNumber);
  user.pupName = event.target.pupName.value;
  console.log(user.pupName);
  user.breed = event.target.breed.value;
  console.log(user.breed);

  getRatingValues('ratingSwimming');

  // var inputFemale = document.getElementById('female');
  // if(inputFemale.checked) {
  //   inputFemale.value;
  //   console.log(inputFemale);
  // }
  //
  // var inputAge = event.target.age.value;
  // localStorage.setItem('age', age.value);
  // console.log(inputAge);
  //
  // var inputSwimming = document.getElementById('swimming');
  // if(inputSwimming.checked) {
  //   inputSwimming.value;
  //   console.log(inputSwimming.value);
  // }
  //
  // var inputFetch = document.getElementById('fetch');
  // if(inputFetch.checked) {
  //   inputSwimming.value;
  //   console.log(inputFetch.value);
  // }
  //
  // var inputWalks = document.getElementById('walks');
  // if(inputWalks.checked) {
  //   inputWalks.value;
  //   console.log(inputWalks.value);
  // }
  //
  // var inputRunning = document.getElementById('running');
  // if(inputRunning.checked) {
  //   inputSwimming.value;
  //   console.log(inputRunning.value);
  // }
  //
  // var inputSunBathing = document.getElementById('sunBathing');
  // if(inputSunBathing.checked) {
  //   inputSunBathing.value;
  //   console.log(inputSunBathing.value);
  // }
  //
  // var inputAgePref = document.getElementById('agePref');
  // if(inputAgePref.checked) {
  //   inputAgePref.value;
  //   console.log(inputAgePref.value);
  // }
  //
  // var inputSpayNeuPref = document.getElementById('spayNeuPref');
  // if(inputSpayNeuPref.checked) {
  //   inputSpayNeuPref.value;
  //   console.log(inputSpayNeuPref.value);
  // }
  //
  // var inputPrefSize = document.getElementById('prefSize');
  // if(inputPrefSize.checked) {
  //   inputPrefSize.value;
  //   console.log(inputPrefSize.value);
  // }


}
var inputForm = document.getElementById('registration-form');
inputForm.addEventListener('submit', submit);
