import { populateHome, populateMenu, populateAbout } from "./pages";

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#aboutBtn");
const content  = document.querySelector("#content");

homeBtn.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    };
    populateHome();
});
aboutBtn.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    };
    populateAbout();
});
menuBtn.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    };
    populateMenu();
});

populateHome();