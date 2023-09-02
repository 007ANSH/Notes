let h1 = document.querySelector("h1");
function changeColour(color, delay, change) {
    setTimeout(() => {
        h1.style.color = color;
        if (change) change();
    }, delay);

}
changeColour("red", 1000, () => {
    changeColour("orange", 1000, () => {
        changeColour("black", 1000, () => { });
    });
});
// this is called as callback hell 