const login = prompt("inserisci la tua mail");

const utentiRegistrati = ["abc@gmail.com","dfg@gmail.com","hil@gmail.com"];

let sentinella = false;

for (let i = 0; i < utentiRegistrati.length && sentinella == false; i++){

    if (utentiRegistrati[i] == login){
        sentinella = true;
    }
}

if (sentinella == true){
    console.log("ok");
} else {
    console.log("no");
}