// Etape 1 - Sélectionner nos éléments
let nombreChoisi = 0;
let coups        = 0;
let input        = document.querySelector('#prix');
let error        = document.querySelector('.text-danger');
let formulaire   = document.querySelector('#formulaire');

// Etape 2 - Cacher l'erreur
error.style.display ='none';

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);
//math.random retourne un nb entre 0 et <1 pour avoir la possiblilité de tomber sur 1000 il faut x1001


// Etape 6 - Créer la fonction vérifier
function verifier(nombre){
    let instruction = document.createElement('div');
    if (nombre < nombreAleatoire){
        instruction.textContent = "#"+coups+" - "+nombre+" C'est plus !";
        instruction.className = "instruction plus";
    }
    else if (nombre > nombreAleatoire){
        instruction.textContent = "#"+coups+" - "+nombre+" C'est moins !";
        instruction.className = "instruction moins";
    }
    else {
        instruction.textContent = "#"+coups+" - "+nombre+" Félicitation !";
        instruction.className = "fini instruction";
    }
    document.querySelector('#instructions').prepend(instruction);
};


// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if (isNaN(input.value)){
        error.style.display = 'block';
    }
    else{
        error.style.display = 'none';
    }
});

// Etape 5 - Agir à l'envoi du formulaire

formulaire.addEventListener('submit',(e) => {
    e.preventDefault();

if (isNaN(input.value) || input.value == ""){
    input.style.borderColor ='red';
}
else{
    coups++;
    input.style.borderColor ='silver';
    nombreChoisi = input.value;
    input.value = ""; // pour vider le champs de formulaire
    verifier(nombreChoisi);
}
console.log(nombreAleatoire);
});
