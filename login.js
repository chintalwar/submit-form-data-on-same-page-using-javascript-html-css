// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Get the values from url
var loginButton = document.getElementById("submit");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function myFunction() {
  document.getElementById("myForm").submit();
}

window.addEventListener('load', () =>{

  const params = (new URL (document.location)).searchParams;

  const name = params.get('name');
  const surname = params.get('surname');

  document.getElementById("nameResult").innerHTML = name;
  document.getElementById("surnameResult").innerHTML = surname;
})