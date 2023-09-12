let form = document.querySelector('form')
form.addEventListener("submit", (event) => validate(event))


function validate(event) {
    event.preventDefault()
    manageForm()
}

function validateFirstName(firstName) {
    if (firstName.value.trim().length < 2) {
        setErrorMessage(firstName, "Le prénom est trop court.")
        return false
    }
    hideErrorMessage(firstName)
    return true
}

function validateLastName(lastName) {
    if (lastName.value.trim().length < 2) {
        setErrorMessage(lastName, "Le nom est trop court.")
        return false
    }
    hideErrorMessage(lastName)
    return true
}

function validateEmail(email) {
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+")
    if (!emailRegExp.test(email.value)) {
        setErrorMessage(email, "L'adresse email n'est pas valide'")
        return false
    }
    hideErrorMessage(email)
    return true
}

function validateBirthday(birthday) {
    var dateNaissance = new Date(birthday.value);
    var dateActuelle = new Date();
    if (birthday === "" || isNaN(dateNaissance) || dateNaissance > dateActuelle) {
        setErrorMessage(birthday, "La date de naissance n'est pas valide.")
        return false
    }
    hideErrorMessage(birthday)
    return true
}

function validateQuantity(quantity) {
    if (quantity.value < 0 || quantity.value === "" || isNaN(quantity.value) || quantity.value > 99) {
        setErrorMessage(quantity, "Le nombre de participation est incorrecte.")
        return false
    }
    hideErrorMessage(quantity)
    return true
}

function validateLocation(location) {
    let isCheck = false;
    for (let i = 0; i < location.length; i++) {
        if (location[i].checked) {
            isCheck = true
            break
        }
    }
    if (!isCheck) {
        setErrorMessage(location[0], "Vous devez sélectionner un tournoi.")
        return false
    } else {
        hideErrorMessage(location[0])
        return true
    }
}

function validateCondition(condition) {
    if (!condition.checked) {
        setErrorMessage(condition, "Vous devez accepter les conditions générales.")
        return false
    }
    hideErrorMessage(condition)
    return true
}

function manageForm() {
    let firstName = validateFirstName(document.getElementById("first-name"))
    let lastName = validateLastName(document.getElementById("last-name"))
    let email = validateEmail(document.getElementById("email"))
    let birthday = validateBirthday(document.getElementById("birthdate"))
    let quantity = validateQuantity(document.getElementById("quantity"))
    let location = validateLocation(document.querySelectorAll('input[name="location"]'))
    let condition = validateCondition(document.getElementById("checkbox1"))
    if (firstName && lastName && email && birthday && quantity && location && condition) {
        launchModalValidation()
        form.reset()
    }
}

function setErrorMessage(element, message) {
    element.parentElement.setAttribute('data-error-visible', 'true')
    element.parentElement.setAttribute('data-error', message)
}

function hideErrorMessage(element) {
    element.parentElement.setAttribute("data-error-visible", "false")
    element.parentElement.removeAttribute('data-error')
}
