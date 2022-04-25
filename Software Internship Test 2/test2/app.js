// Clear data form input

var btnClear = document.querySelector('.clear-input-submit');

var inputForms = document.querySelectorAll('.input-form');

btnClear.addEventListener("click", () => {
    for (let i = 0; i < inputForms.length; i++) {
        inputForms[i].value = '';
    }
})