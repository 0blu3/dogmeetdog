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
  prefSize: '',
  prefFixed: '',
  ratingSwimming: '',
  ratingFetch: '',
  ratingWalks: '',
  ratingRunning: '',
  ratingSunbathing: '',
};

function submit(event) {
  event.preventDefault();
  var inputName = event.target.name.value;
  var inputPupName = event.target.pupName.value;
  var inputBreed = event.target.breed.value;
  var inputAge = event.target.age.value;
  var selectNeighborhood = document.getElementById('neighborhood');
  var selected = selectNeighborhood.options[selectNeighborhood.selectedIndex].value;
  console.log(selected);

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

  function submit(event) {
    event.preventDefault();
    user.ownerName = event.target.name.value;
    user.contactNumber = event.target.contact_number.value;
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
  }
}
var inputForm = document.getElementById('registration-form');
inputForm.addEventListener('submit', submit);
