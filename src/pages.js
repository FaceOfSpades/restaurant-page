const content = document.querySelector("#content");

function populateHome() {
    const title = document.createElement("div");
    title.textContent = "HOME PAGE";
    content.appendChild(title);
}

function populateMenu() {
    const title = document.createElement("div");
    title.textContent = "MENU PAGE";
    content.appendChild(title);
}

function populateAbout() {
    const title = document.createElement("div");
    title.textContent = "ABOUT PAGE";
    content.appendChild(title);
}

export {populateHome, populateMenu, populateAbout};