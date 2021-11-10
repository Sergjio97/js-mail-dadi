const login = prompt("inserisci la tua mail");

const utentiRegistrati = ["abc@gmail.com","dfg@gmail.com","hil@gmail.com"];

let sentinella = false;

for (let i = 0; i < utentiRegistrati.length && sentinella == false; i++){

    if (utentiRegistrati[i] == login){
        sentinella = true;
    }
}

if (sentinella == true){

    alert("Login effettuato con successo");
} else {
    alert("utente non registrato");
}

// *** start gioco dei dadi ***

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){

    document.getElementById("player").innerHTML = Math.floor(Math.random()* 6) + 1;

    document.getElementById("computer").innerHTML = Math.floor(Math.random()* 6) + 1;

    let p = document.getElementById("player").innerHTML = Math.floor(Math.random()* 6) + 1;

    let c = document.getElementById("computer").innerHTML = Math.floor(Math.random()* 6) + 1;
    
    if (p > c){
        document.getElementById("esito").innerHTML = "Hai avuto fortuna";
    } else {
        document.getElementById("esito").innerHTML = "La morte ti aspetta";
    };
    
});

// let p = document.getElementById("player").innerHTML = Math.floor(Math.random()* 6) + 1;

// let c = document.getElementById("computer").innerHTML = Math.floor(Math.random()* 6) + 1;

// if (p > c){
//     alert("hai vinto");
// } else {
//     alert("hai perso");
// };




