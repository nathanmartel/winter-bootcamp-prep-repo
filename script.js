const myCat = document.getElementById('catName');
const myInput = document.getElementById('inputField');
const myButton = document.getElementById('submitButton');

const changeCat = () => {
  myCat.textContent = myInput.value;  
}

myButton.addEventListener('click', changeCat);
