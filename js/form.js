'use strict';

function submit(event) {
  event.preventDefault();
  console.log(event);
  var inputName = event.target.name.value;
  console.log(inputName);
  var inputPupName = event.target.pupName.value;
  console.log(inputPupName);
  var inputBreed = event.target.breed.value;
  console.log(inputBreed);

  var inputAge = event.target.age.value;
  localStorage.setItem('age', age.value);
  console.log(inputAge);

  var selectNeighborhood = document.getElementById('neighborhood');
  var selected = selectNeighborhood.options[selectNeighborhood.selectedIndex].value;
  console.log(selected);
  //
  // function selectNeighborhood (){
  //   var select = document.getElementById('neighborhood').value;
  //   console.log(select.value);
  // }

  // var radio = document.getElementsByTagName('input');
  // for (var i = 0; i < radio.length; i++) {
  //   if(radio[i].checked); {
  //     return radio[i].value;
  //     console.log(radio[i].value);
}
var inputForm = document.getElementById('registration-form');
inputForm.addEventListener('submit', submit);
