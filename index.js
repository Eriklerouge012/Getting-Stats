const numbers = [];

let saisie = null;
let saisieNumber = null;
let totalSaisie = 0;
let stats = '';
let somme = null;
let max = null;
let min = null;
do {
    saisie = prompt("Entrez un nombre (0 = arrêt de la saisie)");
    //prompt renvoie une string, transformation en number = parsing
   
    saisieNumber = parseInt(saisie);


    //calculate sum
    somme += saisieNumber; 


    //fillup board
    numbers.push(saisieNumber)
    totalSaisie += 1
}while(saisieNumber !== 0);



    numbers.pop();
    totalSaisie = numbers. length;
max = numbers [0];
min = numbers [0];


    //to define max 
for (let i  = 0; i < totalSaisie ; i++){
    if (max < numbers[i]){
        max = numbers[i];

    }

    //to define min
    if (min > numbers[i]){
        min = numbers[i];

    }
}



Stats = `
Vous avez saisi : ${totalSaisie} nombres; 
Dont la somme est  : ${somme};
Et la moyenne est  : ${somme / totalSaisie};
`

alert(stats)
    
    
    
    
    