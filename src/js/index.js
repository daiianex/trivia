import home from "../pages/home.js";

const main = document.querySelector("#root");

window.addEventListener("load", () => {
    main.appendChild(home());
})