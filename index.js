const input = document.getElementById('input');

function clickAlertCB() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlertCB)

function addingEventListener(){
  input.addEventListener('click', clickAlertCB)
}

addingEventListener();