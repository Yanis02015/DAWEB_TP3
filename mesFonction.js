// Variable du index.html
var text = document.getElementsByClassName("MyDiv");
var input = document.getElementById("chaine");

// Variable du js-simple.html
var psw1 = document.getElementById("psw1");
var psw2 = document.getElementById("psw2");

// La fonction pour l'inverse d'une chaîne de caractères
function inverse() {
    text[0].innerHTML = input.value.split('').reverse().join('');
}

// La fonction pour vérifier si "#" est dans ma chaîne de caractères
function trouver() {
    // indexOf("#") retourne la position du '#' dans la chaîne de caractères
    let position = input.value.indexOf("#");

    // si la valeur retourner est -1 c'est que le '#' ne y figure pas
    if(position != -1) {
        input.setAttribute("style","border-color: green;");
    } else {
        // Il faut supprimer l'effet de style pour que l'effet sur la class prend le dessus
        input.removeAttribute("style");
        input.setAttribute("class","phaseErronee");
    }
}

// La fonction pour vérifier si les mots de passes sont identique
function checkPasswords() {
    if(psw1.value === psw2.value) {
        console.log("true");
        // si la condition est vérifier alors mettre les bords des inputs en vert
        psw1.setAttribute("style","border-color: green;");
        psw2.setAttribute("style","border-color: green;");
    } else {
        console.log("false");
        // si non les mettre en rouge
        psw1.setAttribute("style","border-color: red;");
        psw2.setAttribute("style","border-color: red;");
    }
}