const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

const checkInputs = () => {
    //Get values from imputs
    const firstNameValue =  firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstNameValue === '') {
        const formControl = firstName.parentElement;
        formControl.className = 'form-control error';
    } else {
        const formControl = firstName.parentElement;
        formControl.className = 'form-control';
    }


    if(lastNameValue === '') {
        const formControl = lastName.parentElement;
        formControl.className = 'form-control error';
    } else {
        const formControl = lastName.parentElement;
        formControl.className = 'form-control';
    }


    if(passwordValue === '') {
        const formControl = password.parentElement;
        formControl.className = 'form-control error';
    } else {
        const formControl = password.parentElement;
        formControl.className = 'form-control';
    }

    if(validateEmail(emailValue)) {
        const formControl = email.parentElement;
        formControl.className = 'form-control';
    } else {
        const formControl = email.parentElement;
        formControl.className = 'form-control error';
    }

}

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}