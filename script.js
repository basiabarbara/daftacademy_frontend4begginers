const buttonLub = document.querySelector('#button-Lub');
const buttonWar = document.querySelector('#button-War');
const buttonKra = document.querySelector('#button-Kra');
const buttonPoz = document.querySelector('#button-Poz');

buttonLub.addEventListener('click', () => {
    buttonLub.innerHTML = "Have fun!";
});

buttonWar.addEventListener('click', () => {
    buttonWar.innerHTML = "Have fun!";
});

buttonKra.addEventListener('click', () => {
    buttonKra.innerHTML = "Have fun!";
});

buttonPoz.addEventListener('click', () => {
    buttonPoz.innerHTML = "Have fun!";
});

const submit = document.querySelector('#submit');
var email = document.getElementById("email");
var topic = document.getElementById("topic");


submit.addEventListener('click', () => {
    console.log(email.value);
    console.log(topic.value);
});