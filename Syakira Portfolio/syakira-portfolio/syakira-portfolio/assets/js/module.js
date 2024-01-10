const HandleNavBar = (e) => {
  document.querySelector("header nav").classList.toggle("active");
};
const HandleColorMode = (e) => {
  let Element = e.target;
  let Refink = document.querySelector(".color-change-ref");
  Element.classList.toggle("active");

  if (Element.classList.contains("active")) {
    Refink.setAttribute("href", "../assets/css/NightMode.css");
    window.localStorage.setItem("mode", "dark");
    document.querySelectorAll(".shape").forEach((Each) => {
      Each.classList.add("dark");
    });
    document.querySelectorAll(".text").forEach((Each) => {
      Each.classList.add("dark");
    });
  } else {
    window.localStorage.setItem("mode", "bright");
    document.querySelectorAll(".shape").forEach((Each) => {
      Each.classList.remove("dark");
    });
    document.querySelectorAll(".text").forEach((Each) => {
      Each.classList.remove("dark");
    });
    Refink.setAttribute("href", "");
  }
};
// import { Stagger } from "./Stagger.js";
const burgerIcon = document.querySelector(".burger-icon");
const ToggleButton = document.querySelector(".toggle-button");
let Refink = document.querySelector(".color-change-ref");

ToggleButton.addEventListener("click", HandleColorMode);
burgerIcon.addEventListener("click", HandleNavBar);

window.addEventListener("load", () => {
  if (window.localStorage.getItem("mode") == "dark") {
    ToggleButton.classList.add("active");

    document.querySelectorAll(".shape").forEach((Each) => {
      Each.classList.add("dark");
    });
    document.querySelectorAll(".text").forEach((Each) => {
      Each.classList.add("dark");
    });
    Refink.setAttribute("href", "../assets/css/NightMode.css");
  } else {
    Refink.setAttribute("href", " ");
  }
});
