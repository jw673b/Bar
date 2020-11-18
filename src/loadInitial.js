import background from "./img/background.png";
let content = document.querySelector("#content");
let header;
let contentBody;
function loadInitial() {
    function renderInitial() {
        let title = document.createElement("div");
            title.id = "title";
            title.innerText = "eastWill";
        contentBody = document.createElement("div");
        contentBody.id = "contentBody";
        header = document.createElement("div");
        header.id = "header";
        content.appendChild(title);
        content.appendChild(header);
        content.appendChild(contentBody);
        for (let i = 0;i < 3;i++) {
            const tab = document.createElement("div");
            header.appendChild(tab);
        }

    };
    function nameTabs () {
        let tabNames = ["Main","Menu","About"]
        let children = header.childNodes;
        let childList = Array.from(children);
        for (let i = 0;i < 3;i++) {
            childList[i].innerText = tabNames[i];
            childList[i].id = tabNames[i].toLowerCase();
            childList[i].className = "tab";
        }
    };
    renderInitial();
    nameTabs();
};

function renderFooter() {
    const footer = document.createElement("div");
        footer.innerText = "footer stuff to be added";
        footer.id = "footer";
    return footer;
};

function rmChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

export { loadInitial as default, header, content, contentBody ,renderFooter, rmChildNodes};