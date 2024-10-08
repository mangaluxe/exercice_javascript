"use strict";

/*
- Réalisez un programme qui permet de connaitre, pour n notes saisies :
    - La meilleur note
    - La moins bonne note
    - La moyenne des notes

On affichera le resultat sur une page HTML.
*/

let nbNotes = prompt("Nombre de notes ?");
let notesArray = [];
const notes = document.getElementById("notes");
const resultats = document.getElementById("resultats");

for (let i = 0; i < nbNotes; i++) {
    notesArray.push(prompt("Note " + (i + 1) + " ?"));
}

// console.log(notesArray); // Vérif

for (let i = 0; i < notesArray.length; i++) {
    const node = document.createElement("li");
    node.textContent = `En note ${i + 1}, vous avez saisi ${notesArray[i]}/20.`;
    notes.appendChild(node);
}

/* Résultat obtenu :
<ul id="notes">
    <li>En note 1, vous avez saisi 12/20.</li>
    <li>En note 2, vous avez saisi 15/20.</li>
    <li>En note 3, vous avez saisi 18/20.</li>
    <li>En note 4, vous avez saisi 20/20.</li>
    <li>En note 5, vous avez saisi 10/20.</li>
</ul>
*/

let meilleureNote = Math.max(...notesArray);
let moinsBonneNote = Math.min(...notesArray);

/**
 * Calcul de la moyenne
 * @param {tableau} arr
 * @returns {nombre}
 */
function avg(arr) {
    let sum = 0;
 
    arr.forEach(function (item, idx) {
      sum += parseFloat(item);
    });
 
    return sum / arr.length;
}

// console.log(avg(notesArray)); // Test ok

let moyenne = avg(notesArray);

// console.log(meilleureNote); // Test ok
// console.log(moinsBonneNote);
// console.log(moyenne);

const node = document.createElement("li");
node.textContent = `La meilleure note est de ${meilleureNote}/20.`;
node.classList.add('success');
resultats.appendChild(node);

const node2 = document.createElement("li");
node2.textContent = `La moins bonne note est de ${moinsBonneNote}/20.`;
node2.classList.add('danger');
resultats.appendChild(node2);

const node3 = document.createElement("li");
node3.textContent = `La moyenne est de ${moyenne.toFixed(2)}/20.`;
resultats.appendChild(node3);

/* Résultat obtenu :
<ul id="resultats">
    <li class="success">La meilleure note est de 20/20.</li>
    <li class="danger">La moins bonne note est de 10/20.</li>
    <li>La moyenne est de 15/20.</li>
</ul>
*/