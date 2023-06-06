const listEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${listEl.length}`);

listEl.forEach((el) => {
    const itemName = el.firstElementChild;
    const itemLength = el.lastElementChild.children;
    console.log(
        `Category: ${itemName.textContent}`,
        `Elements: ${itemLength.length}`
    );
});