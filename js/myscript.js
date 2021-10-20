// Chiedi all’utente il suo nome,

let userName = prompt("what's your name?");
console.log(userName);

// poi chiedi il suo cognome,

let userSurname = prompt("what's your surname?");
console.log(userSurname);

// poi chiedi il suo colore preferito

let favColor = prompt("what's your favorite color?");
console.log(userSurname);

// Infine scrivi sulla pagina “La password assegnata è: ” nomecognomecolorepreferito21 

let generatedPasword= userName + userSurname + favColor + 21;
let getElement = document.getElementById("userPasword");
getElement.innerHTML = "Your generated pasword is: " + generatedPasword;