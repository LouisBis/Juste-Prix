let chosendNumber = 0;
let hits         = 0;
let input         = document.querySelector('#price');
let error         = document.querySelector('.text-danger');
let form          = document.querySelector('#form');
let randomNumber  = Math.floor(Math.random() * 1001);
//math.random retourne un nb entre 0 et <1 pour avoir la possiblilité de tomber sur 1000 il faut x1001

error.style.display ='none'; // on cache l'erreur

//on vérifie le number entré, et on affiche les instructions correspondantes
function verify(number){
    let instruction = document.createElement('div');
    if (number < randomNumber){
        instruction.textContent = "#"+hits+" - "+number+" C'est plus !";
        instruction.className = "instruction plus";
    }
    else if (number > randomNumber){
        instruction.textContent = "#"+hits+" - "+number+" C'est moins !";
        instruction.className = "instruction moins";
    }
    else {
        instruction.textContent = "#"+hits+" - "+number+" Félicitation !";
        instruction.className = "fini instruction";
    }
    document.querySelector('#instructions').prepend(instruction);
};

//on met un écouteur sur input pour afficher le message d'erreur si pas un nb
input.addEventListener('keyup', () => {
    if (isNaN(input.value)){
        error.style.display = 'block';
    }
    else{
        error.style.display = 'none';
    }
});

//on met un écouteur sur le sbmit du form, et on retire l'évenement par defaut du navigateur
form.addEventListener('submit',(e) => {
    e.preventDefault();

    if (isNaN(input.value) || input.value == ""){
        input.style.borderColor ='red';
    }
    else{
        hits++;
        input.style.borderColor ='silver';
        chosenNumber = input.value;
        input.value = ""; // pour vider le champs de form
        verify(chosenNumber);
    }
    console.log(randomNumber);
});
