

let btnPrompt = document.getElementById('btn')
console.log(btnPrompt)

btnPrompt.addEventListener('click', function () {
    alert('Submitted!')
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
