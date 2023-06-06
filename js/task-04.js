let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueNumber = document.querySelector("#value");

const clickDown = (e) => {
    counterValue -= 1;
    valueNumber.textContent = counterValue;
};

const clickUp = (e) => {
    counterValue += 1;
    valueNumber.textContent = counterValue;
};

decrementBtn.addEventListener("click", clickDown);
incrementBtn.addEventListener("click", clickUp);