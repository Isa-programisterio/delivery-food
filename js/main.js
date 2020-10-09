const cardButton = document.querySelector("#card-button");
const modal = document.querySelector(".modal")
const clouse = document.querySelector(".clouse")


cardButton.addEventListener ("click", toogleModal);
clouse.addEventListener ("click", toogleModal);

function toogleModal() {
	modal.classList.toggle("active");
}

new WOW().init();