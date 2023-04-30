/* const recipeList = document.querySelector('#recipe-list'); 
const recipeIframe = document.querySelector('#recipe-iframe'); 



recipeList.addEventListener('change', function () {
    const selectedRecipe = recipeList.value;
    recipeIframe.src = selectedRecipe;
});
 */

const recipeIframe = document.querySelector('#recipeIframe')

let activeCategory = 'meat';
let subCat = 'soup';
let lastSelection = activeCategory + subCat;

const categorySelector = document.querySelector('#categoryNav');
const catButtons = categorySelector.querySelectorAll('.nav-link');

const recipeSelector = document.querySelector('#recipeSelector');
const recipeButtons = recipeSelector.querySelectorAll('.nav-link');
function hideAll() {
  const navs = recipeSelector.querySelectorAll('.nav');
  navs.forEach(btn => {
    btn.hidden = true;
  });

};


hideAll();

catButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    activeCategory = btn.value;
    console.log(btn.value);
  });
});

const selectionNav = document.querySelector('#selectionNav');
const elements = selectionNav.querySelectorAll('.nav-item');
console.log(elements)
const buttons = selectionNav.querySelectorAll('.nav-link')
console.log(buttons)

// Click on Subcategory
function hideRecepies(hide) {
  console.log(hide);
  let helper = document.getElementById(hide);
  helper.hidden = true;
  console.log('after true')


};

buttons.forEach(btn => {
  btn.addEventListener('click', function () {
    console.log(btn.value);

    hideRecepies(lastSelection);
    subCat = btn.value;
    const activate = activeCategory + subCat;
    console.log(activate);
    let helper = document.getElementById(activate);
    helper.hidden = false;
    lastSelection = activate;
  })
});


function changeIframe(cat, subCat, value) {
  console.log(cat)
  const path = "./recepies/" + cat + "/" + subCat + "/" + value;

  recipeIframe.src = path;
}

recipeButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    changeIframe(activeCategory, subCat, btn.value);
  });
});