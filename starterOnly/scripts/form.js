// Sélection de l'élément form
let form = document.querySelector('form');

// Ajout d'un événement lors du "submit" au formulaire
form.addEventListener("submit", (event) => validate(event));

// Sélection des champs du formulaire par leur ID
let firstNameField = document.getElementById("first-name");
let lastNameField = document.getElementById("last-name");
let emailField = document.getElementById("email");
let birthdayField = document.getElementById("birthdate");
let quantityField = document.getElementById("quantity");

// Sélection de tous les boutons radios avec le nom "location"
let btnRadios = document.querySelectorAll('input[name="location"]');

// Sélection de la case à coché avec l'id "checkbox1"
let conditionsCheckbox = document.querySelector('#checkbox1');

// Ajout des événements lors des "input" pour la validation des champs
firstNameField.addEventListener('input', () => validateFirstName(firstNameField));
lastNameField.addEventListener('input', () => validateLastName(lastNameField));
emailField.addEventListener('input', () => validateEmail(emailField));
birthdayField.addEventListener('input', () => validateBirthday(birthdayField));
quantityField.addEventListener('input', () => validateQuantity(quantityField));

// Ajout des événements lors des "change" pour la validation des boutons radios
conditionsCheckbox.addEventListener('input', () => validateCondition(conditionsCheckbox));
btnRadios.forEach(radio => {
    radio.addEventListener('change', () => validateLocation(radio, radio));
});

/**
 * Cette fonction gère l'événement de soumission du formulaire.
 * Elle empêche le comportement par défaut de la soumission du formulaire,
 * puis appelle la fonction `manageForm` pour effectuer la validation.
 * @param {Event} event - L'événement de soumission du formulaire.
 */
function validate(event) {
    event.preventDefault();
    manageForm();
}

/**
 * Cette fonction prend un champ de prénom en paramètre et valide s'il est correct.
 * @param {HTMLElement} firstName - Champ de prénom à valider.
 * @returns {boolean} Renvoie true si le prénom est valide, sinon false.
 */
function validateFirstName(firstName) {
    let nameRegExp = /^[-A-Za-zÀ-ÖØ-öø-ÿ\s]*$/;

    if (firstName.value === "") {
        setErrorMessage(firstName, "Le prénom ne doit pas être vide");
        return false;
    }

    if (!nameRegExp.test(firstName.value)) {
        setErrorMessage(firstName, "Le prénom ne doit pas contenir de chiffre");
        return false;
    }

    if (firstName.value.trim().length < 2) {
        setErrorMessage(firstName, "Le prénom est trop court (au moins 2 caractères)");
        return false;
    }

    if (firstName.value.trim().length > 15) {
        setErrorMessage(firstName, "Le prénom est trop long (maximum 15 caractères)");
        return false;
    }

    hideErrorMessage(firstName);
    return true;
}

/**
 * Cette fonction prend un champ de nom en paramètre et valide s'il est correct.
 * @param {HTMLElement} lastName - Champ de nom à valider.
 * @returns {boolean} Renvoie true si le nom est valide, sinon false.
 */
function validateLastName(lastName) {
    let nameRegExp = /^[-A-Za-zÀ-ÖØ-öø-ÿ\s]*$/;

    if (lastName.value === "") {
        setErrorMessage(lastName, "Le nom ne doit pas être vide");
        return false;
    }

    if (!nameRegExp.test(lastName.value)) {
        setErrorMessage(lastName, "Le nom ne doit pas contenir de chiffre");
        return false;
    }

    if (lastName.value.trim().length < 2) {
        setErrorMessage(lastName, "Le nom est trop court (au moins 2 caractères)");
        return false;
    }

    if (lastName.value.trim().length > 15) {
        setErrorMessage(lastName, "Le nom est trop long (maximum 15 caractères)");
        return false;
    }

    hideErrorMessage(lastName);
    return true;
}

/**
 * Cette fonction prend un champ d'email en paramètre et valide s'il est au bon format.
 * @param {HTMLElement} email - Champ d'email à valider.
 * @returns {boolean} Renvoie true si l'email est valide, sinon false.
 */
function validateEmail(email) {
    let emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.value === "") {
        setErrorMessage(email, "L'adresse email ne doit pas être vide");
        return false;
    }

    if (!emailRegExp.test(email.value)) {
        setErrorMessage(email, "L'adresse email n'est pas valide");
        return false;
    }

    hideErrorMessage(email);
    return true;
}

/**
 * Cette fonction prend un champ de date de naissance en paramètre et valide s'il est correct.
 * @param {HTMLElement} birthday - Champ de date de naissance à valider.
 * @returns {boolean} Renvoie true si la date de naissance est valide, sinon false.
 */
function validateBirthday(birthday) {
    var dateNaissance = new Date(birthday.value);
    var dateActuelle = new Date();

    if (isNaN(dateNaissance) || birthday === "") {
        setErrorMessage(birthday, "La date de naissance ne doit pas être vide");
        return false;
    }

    if (dateNaissance > dateActuelle) {
        setErrorMessage(birthday, "La date de naissance ne peut pas excéder la date actuelle");
        return false;
    }

    if ((dateActuelle.getFullYear() - dateNaissance.getFullYear()) < 18) {
        setErrorMessage(birthday, "Vous devez avoir plus de 18 ans");
        return false;
    }

    if ((dateActuelle.getFullYear() - dateNaissance.getFullYear()) > 99) {
        setErrorMessage(birthday, "Erreur dans l'année");
        return false;
    }
    hideErrorMessage(birthday);
    return true;
}

/**
 * Cette fonction prend un champ de quantité en paramètre et valide s'il est correct.
 * @param {HTMLElement} quantity - Champ de quantité à valider.
 * @returns {boolean} Renvoie true si la quantité est valide, sinon false.
 */
function validateQuantity(quantity) {

    if (quantity.value === "") {
        setErrorMessage(quantity, "Le nombre de participation doit être renseigné");
        return false;
    }

    if (isNaN(quantity.value)) {
        setErrorMessage(quantity, "Le nombre de participation ne doit pas contenir de lettre");
        return false;
    }

    if (quantity.value < 0) {
        setErrorMessage(quantity, "Le nombre de participation ne peut pas être inférieur à 0");
        return false;
    }

    if (quantity.value > 99) {
        setErrorMessage(quantity, "Le nombre de participation ne peut pas être supérieur à 99");
        return false;
    }

    hideErrorMessage(quantity);
    return true;
}

/**
 * Cette fonction prend un bouton radio et son élément parent en paramètres 
 * et valide s'il y a un bouton radio sélectionné.
 * @param {HTMLElement} location - Bouton radio à valider.
 * @param {HTMLElement} parentElement - Élément parent du bouton radio.
 * @returns {boolean} Renvoie true si un bouton radio est sélectionné, sinon false.
 */
function validateLocation(location, parentElement) {
    if (!location) {
        setErrorMessage(parentElement, "Vous devez sélectionner un tournoi.");
        return false;
    } else {
        hideErrorMessage(parentElement);
        return true;
    }
}

/**
 * Cette fonction prend une case à cocher en paramètre 
 * et valide si elle est cochée.
 * @param {HTMLElement} condition - Case à cocher à valider.
 * @returns {boolean} Renvoie true si la case est cochée, sinon false.
 */
function validateCondition(condition) {
    if (!condition.checked) {
        setErrorMessage(condition, "Vous devez accepter les conditions générales.");
        return false;
    }
    hideErrorMessage(condition);
    return true;
}

/**
 * Cette fonction gère la validation globale du formulaire 
 * en appelant les fonctions de validation individuelles 
 * et affiche la modal de validation en cas de succès.
 */
function manageForm() {
    let firstName = validateFirstName(firstNameField);
    let lastName = validateLastName(lastNameField);
    let email = validateEmail(emailField);
    let birthday = validateBirthday(birthdayField);
    let quantity = validateQuantity(quantityField);
    let location = validateLocation(document.querySelector('input[name="location"]:checked'), document.querySelector('input[name="location"]'));
    let condition = validateCondition(document.getElementById("checkbox1"));
    if (firstName && lastName && email && birthday && quantity && location && condition) {
        launchModalValidation();
        form.reset();
    }
}

/**
 * Cette fonction affiche un message d'erreur pour un champ donné.
 * @param {HTMLElement} element - Champ pour lequel afficher le message d'erreur.
 * @param {string} message - Message d'erreur à afficher.
 */
function setErrorMessage(element, message) {
    element.parentElement.setAttribute('data-error-visible', 'true');
    element.parentElement.setAttribute('data-error', message);
}

/**
 * Cette fonction masque un message d'erreur pour un champ donné.
 * @param {HTMLElement} element - Champ pour lequel masquer le message d'erreur.
 */
function hideErrorMessage(element) {
    element.parentElement.setAttribute("data-error-visible", "false");
    element.parentElement.removeAttribute('data-error');
}
