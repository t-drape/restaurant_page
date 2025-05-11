import { getHomePage } from "./home.js";
import { getMenuPage } from "./menu.js";
import { getAboutPage } from "./about.js";

const container = document.getElementById("content");

const wipeout = () => {
  container.innerHTML = "";
}

const loadHomePage = () => {
  wipeout();
 container.appendChild(getHomePage());
}

const loadMenuPage = () => {
  wipeout();
  container.appendChild(getMenuPage());
}

const loadAboutPage = () => {
  wipeout();
  container.appendChild(getAboutPage())
}

const startWebsite = () => {
  container.appendChild(getHomePage());
    // Create button functionality to load correct pages on click
  document.getElementById("home-btn").addEventListener("click", loadHomePage);
  document.getElementById("menu-btn").addEventListener("click", loadMenuPage);
  document.getElementById("about-btn").addEventListener("click", loadAboutPage);
}

export { startWebsite };