/*OOOaaaaakaayyyy !

That was a lot of information on some basic concepts.

We will now do an exercise to practice API calls and DOM manipulation.

The mission

Using this api, create a little program as follow :

    There is a text input where you should be able to type something related to food, a meal, etc.

    When you press ENTER, you should fetch all meals related to the search field.

    You should then display in a grid the image of each meal and its title.

    A little text should also say : these are the results for "chicken", for example

    When you click on a meal, you should open a modal with the following meal information :
        Image cover
        Title
        List of ingredients and how much of them you will need
        A description on how to cook it.

    You should be able to close the modal and search for another meal as many times you want.

    Make it pretty ! Think of containers, menu, harmonic colors, etc.
 */

// ACCES

const container = document.querySelector('.container');
const input = document.querySelector('input');
const button = document.querySelector('button');
const grid = document.querySelector('.grid');
const modalImg = document.querySelector('.modalImg');
const modalTitle = document.querySelector('.modalTitle');
const modalList = document.querySelector('.modalList');
const modalP = document.querySelector('.modalP');
const query = input.value;
let mealArray = {};


//LISTENER AND CALL

// on click button call the api server about the searched content and put all results in a contentArray (object array)

const reponse = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
console.log(reponse);
    const searchedmeal = async (search) =>{
        reponse.forEach(meal => {
            return new Promise ((resolve, reject) =>{
                if(reponse){
                    resolve('all good');
                    mealArray[Object.key(reponse)] = reponse;
                }
                else{
                    reject('oh an error happened');
                }
            })
    });
    
}
button.addEventListener('click', ()=>{
    try{
        searchedmeal(query);
        console.log(reponse);
    }
    catch(error){
        console.log(error);
    }
})

// foreach object of contentarray use the objectkey as gridcontent and push it into a clickable div in the .grid section(style it a bit)


//SORT AND PUSH CONTENT

// sort contentArray objects values into contentImg, contentGoodsList, contentDescription use the objectkey as contentTitle

// push all in the apropriate mark





