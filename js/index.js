/* const recipeList = document.querySelector('#recipe-list'); 
const recipeIframe = document.querySelector('#recipe-iframe'); 



recipeList.addEventListener('change', function () {
    const selectedRecipe = recipeList.value;
    recipeIframe.src = selectedRecipe;
});
 */


// Variables declaration
const recipeIframe = document.querySelector('#recipeIframe')

let activeCategory = 'meat';
let subCat = 'soup';
let lastSelection = activeCategory + subCat;
let lastRecipeButton = null
//Category Variables and Consts
const categoryNav = document.querySelector('#categoryNav');
const catButtons = categoryNav.querySelectorAll('.nav-link');
//Subcategory Variables and Const
const subNav = document.querySelector('#subNav');
const subCategories = subNav.querySelectorAll('.nav-item');
console.log(subCategories)
const subButtons = subNav.querySelectorAll('.nav-link')
console.log(subButtons)
//Recipe Variables and Const

const recipeNav = document.querySelector('#recipeNav');
const recipeGroups = recipeNav.querySelectorAll('.nav');
const recipeButtons = recipeNav.querySelectorAll('.nav-link');

//Functions

/* hideAll
  this functions hides all items from the parameter
*/
function hideAll(groups) {
  groups.forEach(group => {
    group.hidden = true;
  });

};


function hideRecepies(group) {
  // console.log(group);
  let helper = document.getElementById(group);
  helper.hidden = true;
  // console.log('after true')

};

function showRecepies(group) {
  let recipes = document.getElementById(group);
  recipes.hidden = false;
};

hideAll(recipeGroups);

//Click on Main Categories
catButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    if (btn.value !== activeCategory) {
      hideRecepies(lastSelection);
      activeCategory = btn.value;
      showRecepies(activeCategory + subCat);
      lastSelection = activeCategory + subCat

    }
    console.log(btn.value);
  });
});

// Click on Subcategory
subButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    console.log(btn.value);
    hideRecepies(lastSelection);
    subCat = btn.value;
    const activate = activeCategory + subCat;
    console.log(activate);
    showRecepies(activate);
    lastSelection = activate;
  })
});


function changeIframe(cat, subCat, value) {
  console.log(cat)
  const path = "./Recipes/" + cat + "/" + subCat + "/" + value;

  recipeIframe.src = path;
}

recipeButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    if (lastRecipeButton !== btn) {
      if (lastRecipeButton !== null) {
        console.log("deactivate button")
        lastRecipeButton.classList.remove('active');
      }

      changeIframe(activeCategory, subCat, btn.value);
      lastRecipeButton = btn;
    }

  });
});