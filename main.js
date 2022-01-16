const phoneInputField = document.querySelector("#donor-contact-number");
// const phoneInputField = document.querySelector("#donor-Whatsapp-No");
// const phoneInput = window.intlTelInput(phoneInputField, {});

const formBloodType = document.querySelector(".form--blood-type");
const formPveBtn = document.querySelector(".form--button-positive");
const formNveBtn = document.querySelector(".form--button-negative");
console.log(formPveBtn,formNveBtn)

formNveBtn.addEventListener("click", ()=> {
    formBloodType.setAttribute("value","negative");
    formNveBtn.style.backgroundColor = "#FF0000";
    formNveBtn.style.color="#fff";
    formPveBtn.style.backgroundColor = "#fff";
    formPveBtn.style.color="#746868";
});

formPveBtn.addEventListener("click", ()=> {
    formBloodType.setAttribute("value","positive");
    formPveBtn.style.backgroundColor = "#FF0000";
    formPveBtn.style.color="#fff";
    formNveBtn.style.backgroundColor = "#fff";
    formNveBtn.style.color="#746868";
});