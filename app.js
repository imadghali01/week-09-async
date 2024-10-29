const body = document.querySelector('body');
const colorArray = ["yellow", "red", "cyan", "violet", "green", "purple"];

body.style.height = '100vh';

// Fonction qui retourne une promesse pour changer la couleur après 1 seconde
function changeBGColor(color) {
    return new Promise((resolve) => {
        setTimeout(() => {
            body.style.backgroundColor = color;
            resolve(`Changé en ${color}`);
        }, 1000);
    });
}

// Boucle de promesses pour chaque couleur
changeBGColor(colorArray[0])
    .then(() => changeBGColor(colorArray[1]))
    .then(() => changeBGColor(colorArray[2]))
    .then(() => changeBGColor(colorArray[3]))
    .then(() => changeBGColor(colorArray[4]))
    .then(() => changeBGColor(colorArray[5]))
    .then(() => changeBGColor(colorArray[6]))
    .catch((error) => console.error(error));