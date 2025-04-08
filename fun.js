let h1 = document.querySelector("h1");
h1.addEventListener("mouseover", () => {
    h1.style.color = "rgb(234, 209, 106)";
    h1.style.cursor = "pointer";
});
h1.addEventListener("mouseleave", () => {
    h1.style.color = "black";
})