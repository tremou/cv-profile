/* document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseover", (event) => {
    event.currentTarget.classList.toggle("img-circle");
  });
}); */


var cardElement = document.getElementById("test");
var linkAppear = document.getElementById("test");

function myFunction() {
  linkAppear.style.visibility = "hidden";
}

function myOtherFunction() {
  linkAppear.style.visibility = "visible";
}

cardElement.addEventListener("mouseover", myFunction);
cardElement.addEventListener("mouseleave", myOtherFunction);

