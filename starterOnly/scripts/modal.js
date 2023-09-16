// Fonction qui affiche le menu de navigation en version mobile
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Sélection des éléments du DOM nécessaires
const modalbg = document.querySelector(".bground");
const modalbgValidation = document.querySelector(".bground-validation");
const modalBtnValidationClose = document.querySelector(".modal-validation-btn");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelectorAll(".close");

// Ajout des événements lors des "click" aux boutons d'ouverture de la modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Ajout des événements lors des "click" aux boutons de fermeture de la modal
modalBtnClose.forEach((span) => span.addEventListener("click", closeModal));

// Ajout d'un événement lors du "click" pour la fermeture de la modal validation
modalBtnValidationClose.addEventListener("click", closeModal);

// Fonction pour afficher la modal
function launchModal() {
  modalbg.style.display = "block";
}

// Fonction pour fermer la modal
function closeModal() {
  modalbg.style.display = "none";
  modalbgValidation.style.display = "none";
}

// Fonction pour afficher la modal de validation
function launchModalValidation() {
  modalbg.style.display = "none";
  modalbgValidation.style.display = "block";
}

