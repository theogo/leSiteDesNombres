


//const formchange = () => {
//  man.classList.toggle('management2')
//}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  //for (i = 0; i < dots.length; i++) {
    //  dots[i].className = dots[i].className.replace(" active", "");
  //}
  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
}


// Pour ajouter une animation aux changement de section, on peut le faire en css et toggle de classe


var input = document.getElementById('input');
var h1 = document.querySelector(".number");
var p = document.querySelector(".lead");
var trivia = document.querySelector(".trivia");
var year = document.querySelector(".year");

trivia.addEventListener("click", fetchTrivia);
year.addEventListener("click", fetchYear);

function fetchTrivia(){
  input.addEventListener("input", fetchTrivia);
  var input_value = input.value;

  try {
    fetch("http://numbersapi.com/"+input_value+"/trivia")
    .then(response => response.text())
    .then(data => {
      h1.innerHTML = input_value;
      p.innerHTML = data;
    })
  } catch {
    console.log("erreur");
  }
}

function fetchYear(){
  input.addEventListener("input", fetchYear);
  var input_value = input.value;

  try {
    fetch("http://numbersapi.com/"+input_value+"/year")
    .then(response => response.text())
    .then(data => {
      h1.innerHTML = input_value;
      p.innerHTML = data;
    })
  } catch {
    console.log("erreur");
  }
}


function play0(){
  var audio1 = new Audio ('sons/sardo.mp3');
  audio1.play();
}

function play1(){
  var audio1 = new Audio ('sons/zbeb.mp3');
  audio1.play();
}

function play2(){
  var audio1 = new Audio ('sons/pavard.mp3');
  audio1.play();
}

function play3(){
  var audio1 = new Audio ('sons/villager.mp3');
  audio1.play();
}

function play4(){
  var audio1 = new Audio ('sons/coucou2.mp3');
  audio1.play();
}

function play5(){
  var audio1 = new Audio ('sons/psipsa2.mp3');
  audio1.play();
}

function play6(){
  var audio1 = new Audio ('sons/maman2.mp3');
  audio1.play();
}

function play7(){
  var audio1 = new Audio ('sons/net2.mp3');
  audio1.play();
}

function play8(){
  var audio1 = new Audio ('sons/benjam2.mp3');
  audio1.play();
}

function play9(){
  var audio1 = new Audio ('sons/tk2.mp3');
  audio1.play();
}

function play10(){
  var audio1 = new Audio ('sons/bimbamboum2.mp3');
  audio1.play();
}
