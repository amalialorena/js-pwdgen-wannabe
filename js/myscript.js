// Chiedi all’utente il suo nome,

let userName = prompt("what's your name?");
console.log(userName);

// poi chiedi il suo cognome,

let userSurname = prompt("what's your surname?");
console.log(userSurname);

// poi chiedi il suo colore preferito

let favColor = prompt("what's your favorite color?");
console.log(favColor);

// Infine scrivi sulla pagina “La password assegnata è: ” nomecognomecolorepreferito21 

let generatedPassword= userName + userSurname + favColor + 21;
let element = document.getElementById("userPassword");
element.innerHTML = "Your generated password is: " + generatedPassword;

window.document.getElementById("userPassword")