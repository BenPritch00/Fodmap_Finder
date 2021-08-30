// write a function, that given a list of fodmaps and a string containing a list of ingredients seperated by a comma, determines whether the recipe has any high fodmap ingredients
const sampleRecipe = "garlic, potatoes, cherries, butter" 

const sampleFodmaps = ["garlic", "onion", "milk"]

function recipeChecker(recipe, fodmaps) {
    // convert our recipe to a list of words
    // Check each ingredient in our recipe to see if it's a fodmap
    const recipeArr = recipe.split(',');
    for (let i = 0; i < recipeArr.length; i++) {
        if (fodmaps.includes(recipeArr[i])) {
            console.log(recipeArr[i]);
          }
    }
}

function checkTextBoxRecipe() {
    const recipeInput = document.getElementById('recipeInput').value;
    recipeChecker(recipeInput, sampleFodmaps)
}

const submitButton = document.getElementById("submit").onclick = checkTextBoxRecipe
