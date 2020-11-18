import {content, contentBody, header, renderFooter, rmChildNodes} from "./loadInitial";

function loadMenu() {
    rmChildNodes(contentBody);
    const drinks = {
        "Manhattan Love Story": ["Widow Jane Bourbon", "Gekkeikan", "Domain de Canton", "Peychaud's Bitters", "Orange Peel"],
        "Canal Street": ["Arberg Uigeadail", "Jägermeister", "The Bræmble", "Vanilla Syrup", "Lemon Juice", "Egg White"],
        "The Declaration": ["Redbreast 12", "Honey Syrup", "Noilly Prat Dry Vermouth", "Lemon Juice", "Angostura bitters", "Orange Bitters"],
        "Nail in The Coffin": ["Yamazaki 12", "Maderia Wine", "Licor 43", "Fernet", "Shaved Cardomom", "Orange Twist"],
        "Ragtime": ["Whistlepig 10", "La Fee Parisienne", "Amer Picon", "Aperol", "Peychaud Bitters", "Orange Twist"],
        "Old Fashioned": ["Old Van Winkle 10", "Muddled Sugar Cube", "Angostrua Bitters", "Orange Peel"]
    };
    const drinkNames = Object.keys(drinks);
    const menu = document.createElement("ul");
    const title = document.createElement("h1");
    contentBody.appendChild(title);
    contentBody.appendChild(menu);
    title.innerText = "Libations"
    for (let i = 0;i < drinkNames.length;i++) {
        const menuItem = document.createElement("ul");
        const drinkImg = document.createElement("li");
        const drinkIngs = document.createElement("ul");
        const currentDrink = drinks[drinkNames[i]];
        const drinkName = document.createElement("li");
            drinkName.innerText = drinkNames[i];
        menuItem.appendChild(drinkName);
        menuItem.appendChild(drinkImg);
        menuItem.appendChild(drinkIngs);

        for (let i = 0;i < currentDrink.length;i++) {
            const drinkIng = document.createElement("li");
            drinkIng.innerText = currentDrink[i];
            drinkIngs.appendChild(drinkIng);
        }

        menu.appendChild(menuItem);
    }

    contentBody.appendChild(renderFooter());
};


export default loadMenu;