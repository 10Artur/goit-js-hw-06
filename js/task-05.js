const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const getValue = ({ currentTarget }) => {
    if (currentTarget.value.trim() !== "") {
        outputEl.textContent = currentTarget.value.trim();
    } else {
        outputEl.textContent = "Anonymous";
    }
};

inputEl.addEventListener("input", getValue);