'use strict';

var registerButton = document.getElementsByClassName('register')[0];
var newAnchor = document.createElement('a');
var newText = document.createElement('p');
if (!localStorage.user) {
  newAnchor.setAttribute('href', 'registration.html');
  registerButton.appendChild(newAnchor);
  newText.innerHTML = 'Click Here To Start';
  newAnchor.appendChild(newText);
} else {
  newAnchor.setAttribute('href', 'results.html');
  registerButton.appendChild(newAnchor);
  newText.innerHTML = 'Welcome Back';
  newAnchor.appendChild(newText);
}
