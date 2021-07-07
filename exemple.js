
let premierNb;
let deuxiemeNb;
let resultat;

do {
    
    let choix = affichageMenu();
    do {
        premierNb = prompt("Donnez un premier nombre :");
    } while (isNaN(premierNb) == true);
    premierNb = Number(premierNb);
    do {
        deuxiemeNb = prompt("Donnez un deuxième nombre :");
    } while (isNaN(deuxiemeNb) == true);
    deuxiemeNb = Number(deuxiemeNb);

    try {
        switch (choix) {
            case 1:
                resultat = addition(premierNb, deuxiemeNb);
                break;
            case 2:
                resultat = multiplication(premierNb, deuxiemeNb);
                break;
            case 3:
                resultat = soustraction(premierNb, deuxiemeNb);
                break;
            case 4:
                resultat = division(premierNb, deuxiemeNb);
                if (deuxiemeNb == 0) {
                    throw new Error("Impossible de divisé par 0");
                }
                break;
            default:
                throw new Error("Souci avec la calculatrice");

        }
        alert("Le résultat est : " + resultat)
    } catch (error) {
        alert(error)
    }

} while (confirm("Voulez-vous effectuez un nouveau calcul ?"));



/////////////////////////////FONCTIONS////////////////////////////////////

function addition(nb1, nb2) {
    let resultat = nb1 + nb2;
    return resultat
}
function soustraction(nb1, nb2) {
    let resultat = nb1 - nb2;
    return resultat
}
function multiplication(nb1, nb2) {
    let resultat = nb1 * nb2;
    return resultat
}
function division(nb1, nb2) {
    let resultat = nb1 / nb2;
    return resultat
}
function affichageMenu() {
    let saisie;
    do {
        saisie = parseInt(prompt("Que souhaitez-vous faire?\n\n 1-Addition\n 2-Multiplication\n 3-Soustraction\n4-Division"));
    } while (saisie < 1 || saisie > 4);

    return saisie
}