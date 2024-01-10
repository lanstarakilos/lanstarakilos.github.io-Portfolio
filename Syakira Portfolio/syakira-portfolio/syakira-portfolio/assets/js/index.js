let firstStep = false;
let SecondStep = false;
let ThirdStep = false;
let fourthStep = false;

window.addEventListener("load", () => {
  //   window.scrollTo(0, 0);
  document.querySelector("header").classList.add("active");
  document.querySelector("#home").classList.add("active");
  setTimeout(() => {
    document.querySelector("header").style.backgroundColor = "transparent";
  }, 3000);
});

const Query = (Element) => {
  return document.querySelector(Element);
};
