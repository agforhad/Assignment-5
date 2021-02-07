const SearchBtn = document.getElementById("Search_btn");
SearchBtn.addEventListener("click", function () {

    const inputValue = document.getElementById('input').value;

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputValue)
        .then(res => res.json())
        .then(res => displayFoods(res.meals));

    const inputBtnArea = document.getElementById("input_Btn_Area");
    inputBtnArea.style.display = "none";
    const containerArea = document.getElementById("container");
    containerArea.style.display = "block";

});


const displayFoods = foodName => {
    const foodsDiv = document.getElementById('foodName')

    foodName.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food';
        const foodInfo = `
            <img onclick="displayFoodDetail('${food.idMeal}')" src="${food.strMealThumb}"></img>
            <h3 class ="meal-name">${food.strMeal}</h3>
        `;
        foodDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);
    });
}

const displayFoodDetail = id =>{
    const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderFoodInfo(data.meals[0]));

}

const renderFoodInfo = food => {
    const foodDiv = document.getElementById('foodDetail');
    foodDiv.innerHTML = `
    <img src="${food.strMealThumb}"></img>
    <h3>${food.strMeal}</h3>
        <p>Ingredients:</p>
        <ul>${food.strIngredient1}</ul>
        <ul>${food.strIngredient2}</ul>
        <ul>${food.strIngredient3}</ul>
        <ul>${food.strIngredient4}</ul>
        <ul>${food.strIngredient5}</ul>
        <ul>${food.strIngredient6}</ul>
        <ul>${food.strIngredient7}</ul>
        <ul>${food.strIngredient8}</ul>
        <ul>${food.strIngredient9}</ul>
        <ul>${food.strIngredient11}</ul>
        <ul>${food.strIngredient12}</ul>
        <ul>${food.strIngredient13}</ul>
        <ul>${food.strIngredient14}</ul>
        <ul>${food.strIngredient15}</ul>
    `
}