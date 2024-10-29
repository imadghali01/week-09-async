/*
    Write a program that gives the body background the color blue
    1 second later it becomes yellow
    1 second later it becomes red
    1 second later it becomes cyan
    1 second later it becomes violet
    1 second later it becomes green
    1 second later it becomes purple

Sounds pretty simple isn'it ?

But here are the restrictions :

    You CAN'T use setInterval
    You MUST set your setTimeout to 1 second for each color. (no doing maths counting 1,2,3,4,5 etc.)
*/
const body = document.querySelector('body');
const colorArray = ["yellow", "red", "cyan", "violet", "green", "purple"];

body.style.height = '100vh';
body.style.backgroundColor = `${colorArray[0]}`
function changeBGColor(array){
    setTimeout(() => {
        body.style.backgroundColor =`${array[1]}`;
        setTimeout(() => {
            body.style.backgroundColor =`${array[2]}`;
            setTimeout(() => {
                body.style.backgroundColor =`${array[3]}`;
                setTimeout(() => {
                    body.style.backgroundColor =`${array[4]}`;
                    setTimeout(() => {
                        body.style.backgroundColor =`${array[5]}`;
                    }, 1000); 
                }, 1000); 
            }, 1000); 
        }, 1000); 
    }, 1000);       
}

changeBGColor(colorArray);