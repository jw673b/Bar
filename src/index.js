import loadInitial from "./loadInitial";
import loadMenu from "./loadMenu";
import loadAbout from "./loadAbout";
import loadMain from "./loadMain";
import css from "./style.css";

loadInitial();
loadMain();

function tabListeners() {
    const tabs = [];
    const main = document.querySelector("#main");
    const menu = document.querySelector("#menu");
    const about = document.querySelector("#about");
    tabs.push(main, menu, about);
    main.addEventListener("click",loadMain);
    menu.addEventListener("click",loadMenu);
    about.addEventListener("click",loadAbout);
}

tabListeners();
