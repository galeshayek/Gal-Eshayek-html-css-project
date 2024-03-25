import createAlert from "../projects/Js/@services/utils.js";

const fullName = document.getElementById("floatingInputName");
const email = document.getElementById("floatingInputEmail");
const phoneNumber = document.getElementById("floatingInputPhone");
const textArea = document.getElementById("floatingTextarea");
const submit = document.getElementById('submit-form');
submit.addEventListener('click', (e) => {
    e.preventDefault();
})

submit.addEventListener('click', () => {
    fullName.value = "";
    email.value = "";
    phoneNumber.value = "";
    textArea.value = "";
})
