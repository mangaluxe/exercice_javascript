"use strict";

/*
Comprendre la création et l’utilisation des Structures de données objets et tableaux. 

- Réalisez un programme qui, à partir du tableau ci-dessous, permet :
    - D'afficher la liste des étudiants (Prenom Nom).
    - Pour chaque étudiant, d'afficher la liste des matières et la note associée à chaque matière.
    - Pour chaque étudiant, de calculer et afficher la moyenne générale.
*/

let etudiants = [ 
    {
        prenom: "José", 
        nom: "Garcia", 
        matieres: { 
            francais: 16, 
            anglais: 7, 
            humour: 14 
        }  
    }, 
    { 
        prenom: "Antoine", 
        nom: "De Caunes", 
        matieres: { 
            francais: 15, 
            anglais: 6, 
            humour: 16, 
            informatique: 4, 
            sport: 10 
        } 
    } 
]; 


// console.log("########## Debut étudiant ##########");

// // console.log(etudiants[0].matieres.length); // Test. Ne marche pas
// // console.log(Object.keys(etudiants[0].matieres).length); // Test ok

// let nbMatieres = Object.keys(etudiants[i].matieres).length;

// console.log("Etudiant : " + etudiants[0].nom + " " + etudiants[0].prenom);
// console.log(" francais : " + etudiants[0].matieres.francais + "/20");
// console.log(" anglais : " + etudiants[0].matieres.anglais + "/20");
// console.log(" humour : " + etudiants[0].matieres.humour + "/20");
// console.log("La moyenne est de : " + (etudiants[0].matieres.francais + etudiants[0].matieres.anglais + etudiants[0].matieres.humour) / nbMatieres);
// console.log("Moyenne arrondie : " + ((etudiants[0].matieres.francais + etudiants[0].matieres.anglais + etudiants[0].matieres.humour) / nbMatieres).toFixed(2));

// console.log("########## Fin étudiant ##########");

// console.log("########## Debut étudiant ##########");

// nbMatieres = Object.keys(etudiants[1].matieres).length;

// console.log("Etudiant : " + etudiants[1].nom + " " + etudiants[1].prenom);
// console.log(" francais : " + etudiants[1].matieres.francais + "/20");
// console.log(" anglais : " + etudiants[1].matieres.anglais + "/20");
// console.log(" humour : " + etudiants[1].matieres.humour + "/20");
// console.log(" informatique : " + etudiants[1].matieres.informatique + "/20");
// console.log(" sport : " + etudiants[1].matieres.sport + "/20");
// console.log("La moyenne est de : " + (etudiants[1].matieres.francais + etudiants[1].matieres.anglais + etudiants[1].matieres.humour + etudiants[1].matieres.informatique + etudiants[1].matieres.sport) / nbMatieres);
// console.log("Moyenne arrondie : " + ((etudiants[1].matieres.francais + etudiants[1].matieres.anglais + etudiants[1].matieres.humour + etudiants[1].matieres.informatique + etudiants[1].matieres.sport) / nbMatieres).toFixed(2));

// console.log("########## Fin étudiant ##########");


// =============== Version console.log ===============

for (let i = 0; i < etudiants.length; i++) {
    console.log("########## Debut étudiant ##########");

    console.log("Etudiant : " + etudiants[i].nom + " " + etudiants[i].prenom);
    for (let j = 0; j < Object.keys(etudiants[i].matieres).length; j++) {
        console.log(Object.keys(etudiants[i].matieres)[j] + " : " + etudiants[i].matieres[Object.keys(etudiants[i].matieres)[j]] + "/20");
    }

    let nbMatieres = Object.keys(etudiants[i].matieres).length;

    console.log("La moyenne est de : " + (etudiants[i].matieres.francais + etudiants[i].matieres.anglais + etudiants[i].matieres.humour) / nbMatieres);
    console.log("Moyenne arrondie : " + ((etudiants[i].matieres.francais + etudiants[i].matieres.anglais + etudiants[i].matieres.humour) / nbMatieres).toFixed(2));

    console.log("########## Fin étudiant ##########");
}


// =============== Version DOM ===============

for (let i = 0; i < etudiants.length; i++) {

    const nodeP = document.createElement("p");
    nodeP.textContent = "########## Debut étudiant ##########";
    resultats.appendChild(nodeP);

    const nodeDiv = document.createElement("div");
    resultats.appendChild(nodeDiv);

    const nodePara = document.createElement("p");
    nodePara.textContent = "Etudiant : " + etudiants[i].nom + " " + etudiants[i].prenom;
    nodeDiv.appendChild(nodePara);

    const nodeUl = document.createElement("ul");
    nodeDiv.appendChild(nodeUl);

    for (let j = 0; j < Object.keys(etudiants[i].matieres).length; j++) {
        const nodePara2 = document.createElement("li");
        nodePara2.textContent = Object.keys(etudiants[i].matieres)[j] + " : " + etudiants[i].matieres[Object.keys(etudiants[i].matieres)[j]] + "/20";
        nodeUl.appendChild(nodePara2);
    }

    let moyenne = (etudiants[i].matieres.francais + etudiants[i].matieres.anglais + etudiants[i].matieres.humour) / Object.keys(etudiants[i].matieres).length;

    let moyenneArrondie = moyenne.toFixed(2);

    const nodePara3 = document.createElement("p");
    nodePara3.textContent = "La moyenne est de : " + moyenne;
    nodeDiv.appendChild(nodePara3);

    const nodePara4 = document.createElement("p");
    nodePara4.textContent = "La moyenne arrondie est de : " + moyenneArrondie;
    nodeDiv.appendChild(nodePara4);


    const nodeP2 = document.createElement("p");
    nodeP2.textContent = "########## Fin étudiant ##########";
    resultats.appendChild(nodeP2);

}

