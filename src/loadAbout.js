import {contentBody, renderFooter, rmChildNodes} from "./loadInitial";

function loadAbout() {
    rmChildNodes(contentBody);
    const temp = document.createElement("div");
    contentBody.appendChild(temp);
    temp.backgroundSize = "100% 100%";
    temp.innerText = "hello";

};

export default loadAbout;