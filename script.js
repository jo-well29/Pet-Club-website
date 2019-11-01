function newPicture () {
    document.getElementById('header-logo').src='images/dog.png'
}

function oldPicture () {
    document.getElementById('header-logo').src='images/dog-seating.png'
}


let btnPrompt = document.getElementById('btn')
btnPrompt.addEventListener('click', function () {
    alert(`Thank you for sumbitting your information`)
})

let modal = document.getElementById("myModal");
let btn = document.querySelector(".myBtn");
let span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
