const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const listElem = document.querySelector("#ingredients");

const ingredient = ingredients.map((el) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = el;
    return itemEl;
});
listElem.append(...ingredient);