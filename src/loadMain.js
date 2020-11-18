import {content, contentBody, header, renderFooter, rmChildNodes} from "./loadInitial";
import whiskey from "./img/whiskey.jpg";
function loadMain() {
    rmChildNodes(contentBody);
    const heading = document.createElement("h1");
        heading.textContent = "eastWill";
    const mission = document.createElement("p");
        mission.textContent = "The mission of eastWill is to curate a beautiful collection of unique drinks that speak to the palate of a whisky lover. We serve a rotating menu of 6 seasonal whisky based cocktails; scotch, bourbon, rye, irish, japanese, and one specialty cocktail as available. Seating is first come first serve. Climb the stairs and let us pour you a libation.";
    const secondText = document.createElement("p");
        secondText.textContent = "eastWill has been serving cocktails since October 2019 - your patronage is greatly appreciated. If you also love Gin, give our sister establishment Bar Cart a visit.";
    const img = new Image();
        img.alt = "whiskey barrels";
        img.src = whiskey;
    let cbChildren = [heading, mission, secondText, img, renderFooter()];
    cbChildren.forEach(child => {
        contentBody.appendChild(child);
    })
}

export default loadMain;