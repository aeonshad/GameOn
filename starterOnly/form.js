let form = document.querySelector('form')
form.addEventListener("submit", (event) => {
    event.preventDefault();
    manageForm()
})

function validateFirstName(firstName) {
    if (firstName.trim().length > 2) {
        return true
    }
    console.log("prenom erreur")
    return false
}

function validateLastName(lastName) {
    if (lastName.trim().length > 2) {
        return true
    }
    console.log("nom erreur")
    return false
}

function validateEmail(email) {
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+")
    if (emailRegExp.test(email)) {
        return true
    }
    console.log("email erreur")
    return false
}

function validateBirthday(birthday) {
    var dateNaissance = new Date(birthday);
    var dateActuelle = new Date();
    if (dateNaissance < dateActuelle) {
        return true;
    }
    console.log("birthday erreur")
    return false
}

function validateQuantity(quantity) {
    if (quantity >= 0 && quantity !== "" && quantity <= 99) {
        return true
    }
    console.log("quantité erreur")
    return false
}

function validateLocation(location) {
    if (location) {
        return true
    }
    console.log("location erreur")
    return false
}

function validateCondition(condition) {
    if (condition.checked) {
        return true
    }
    console.log("condition erreur")
    return false
}

function manageForm() {
    let firstName = document.getElementById("first-name").value
    let lastName = document.getElementById("last-name").value
    let email = document.getElementById("email").value
    let birthday = document.getElementById("birthdate").value
    let quantity = document.getElementById("quantity").value
    let location = document.querySelector('input[name="location"]:checked');
    let condition = document.getElementById("checkbox1")

    if (validateFirstName(firstName) && validateLastName(lastName) && validateEmail(email) && validateBirthday(birthday) && validateQuantity(quantity) && validateLocation(location) && validateCondition(condition)) {
        console.log("OK")
    }
    else {
        console.log("Il y a une ou des erreurs")
    }
}
