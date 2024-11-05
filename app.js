// ACCES
const body = document.querySelector('body');
const container = document.querySelector('.container');
const input = document.querySelector('#search');
const button = document.querySelector('button');
const mealGrid = document.querySelector('.mealGrid');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modalImg'); // Conteneur pour l'image
const modalTitle = document.querySelector('.modalTitle');
const modalList = document.querySelector('.modalList');
const modalP = document.querySelector('.modalP');
const modalContent = document.querySelector('.modalContent'); // Sélection du div parent pour flex

// STYLE
body.style.background = 'linear-gradient(236.56deg, #2C2D65 0.35%, #201F22 100%)';

container.style.padding = '200px 200px';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.gap = '30px';
container.style.alignItems = 'center';
container.style.color = 'white';

mealGrid.style.display = 'flex';
mealGrid.style.flexWrap = 'wrap';
mealGrid.style.gap = '30px';

// Style Flexbox pour le contenu de la modale (image et liste)
modalContent.style.display = 'flex';
modalContent.style.alignItems = 'flex-start';
modalContent.style.gap = '20px';

// Initial state of the modal
modal.style.display = 'none';

// LISTENER AND CALL

// Fonction pour appeler l'API avec le contenu du champ de recherche
const meals = async () => {
    let query = input.value;

    // Appel à l'API
    const mealsList = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const mymeals = await mealsList.json();
    console.log(mymeals.meals);

    // Appelle la fonction pour créer les cartes de repas
    mealsCards(mymeals);

    // Réinitialise le champ de recherche
    input.value = "";
};

// Fonction pour créer les cartes de repas
const mealsCards = (mymeals) => {
    // Vérifie si des résultats ont été trouvés
    if (!mymeals.meals) {
        console.log("Aucun résultat trouvé");
        return;
    }

    // Vide le contenu de `mealGrid` avant d'ajouter les nouveaux résultats
    mealGrid.innerHTML = "";

    // Création des cartes de repas
    mymeals.meals.forEach(meal => {
        const myMealCard = document.createElement('div');
        const myMealImg = document.createElement('img');
        const myMealH2 = document.createElement('h2');

        // Style de chaque carte de repas
        myMealCard.style.width = '200px';
        myMealImg.style.width = '200px';
        myMealImg.style.height = 'auto';
        
        // Remplissage des informations de la carte
        myMealImg.src = meal.strMealThumb;
        myMealH2.innerText = meal.strMeal;

        // Ajout d'un écouteur pour ouvrir la modale au clic
        myMealImg.addEventListener('click', () => {
            mealsModal(meal); // Appelle la fonction `mealsModal` avec le repas cliqué
        });

        // Ajout de la carte dans la grille
        mealGrid.appendChild(myMealCard);
        myMealCard.appendChild(myMealImg);
        myMealCard.appendChild(myMealH2);
    });
};

// Fonction pour afficher le modal avec les détails du repas sélectionné
const mealsModal = (meal) => {
    // Styles de la modale
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.gap = '10px';
    modal.style.maxHeight = '75vh';
    modal.style.overflowY = 'auto';
    modal.style.zIndex = '1000';
    modal.style.backgroundColor = 'rgba(119, 51, 255, 0.9)';
    modal.style.padding = '30px';
    modal.style.borderRadius = '20px';

    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';

    // Effacer l'image précédente si elle existe
    modalImg.innerHTML = '';

    // Créer et ajouter une balise <img> pour afficher l'image
    const imageElement = document.createElement('img');
    imageElement.src = meal.strMealThumb;
    imageElement.style.width = '300px';
    imageElement.style.height = 'auto';
    modalImg.appendChild(imageElement); // Ajoute l'image dans le conteneur modalImg

    // Remplissage des informations du modal
    modalTitle.innerText = meal.strMeal;
    modalP.innerText = meal.strInstructions;

    // Effacer les anciens ingrédients
    modalList.innerHTML = '';

    // Récupération des ingrédients et quantités
    for (let i = 1; i < 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.innerText = `${ingredient} - ${measure}`;
            modalList.appendChild(listItem);
        }
    }
};
// Exemple de bouton pour fermer le modal
const closeModalButton = document.createElement('button');
closeModalButton.innerText = 'Fermer';
closeModalButton.style.background = 'linear-gradient(236.56deg, #2C2D65 0.35%, #201F22 100%)';
closeModalButton.style.color = 'white';
closeModalButton.style.border = 'none';
closeModalButton.style.borderRadius = '10px';
closeModalButton.style.fontWeight = '500';
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Masque la modale
});
modal.appendChild(closeModalButton); // Ajoute le bouton à la modale
// Empêche le rechargement de la page lors du clic sur le bouton et appelle la fonction `meals`
button.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
    meals(); // Appelle la fonction pour rechercher les repas
});