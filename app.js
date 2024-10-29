/*
    Create a function generateBG that takes two parameters (color, delay)
    This function returns a promise that turns the background color of the body color after delay time. Then it resolves.
    Now you create an async function that calls and wait generateBG for each color given in the exercise :
        blue
        yellow
        red
        cyan
        violet
        green
        purple

Done ? Look at this code ! Simple and legible ! :)

Now, let's give it a litte bit of imprevisibility :

    In the function generateBG, create a random number between 0 and 0.999
    If the random number is bigger than 0.5, reject the promise.
    Run your program.
    You'll see that at some point you'll get a native browser error (Uncaught (in promise))
    We want to handle this error and not have the default error that breaks our code.
    Use try/catch to console.log oh no! an error if there is a problem

(remember, you have a 50% chance of getting an error, so play with the condition in generateBG
to have less or more chances )*/

const body = document.querySelector('body');
const colorArray = ["yellow", "red", "cyan", "violet", "green", "purple"];

body.style.height = '100vh';
const randomDelay = () => Math.random();

// Fonction qui retourne une promesse pour changer la couleur après "delay" seconde
function generateBG(color, delay) {
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
            if(delay > 0.5){
                    body.style.backgroundColor = color;
                    resolve(`Changé en ${color}`);
            }
            else{
                reject('oh no! an error')
            }
        }, (delay*2000))
    });
}
// Boucle de promesses pour chaque couleur
async function changeColor(){
    for (let i = 0; i < colorArray.length; i++) {
        try {
            const message = await generateBG(colorArray[i], randomDelay());
            console.log(message);
        }
        catch(error){
            console.log(error);
        }
    }
}
changeColor();
