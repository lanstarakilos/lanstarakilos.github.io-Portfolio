const Work = document.querySelectorAll(".work-grid .work .work-presentation");

let LeftSideCount = document.querySelector(".left-side .count");
let LeftSideCourse = document.querySelector(".left-side .work-course");
let LeftSideTitle = document.querySelector(".left-side .title");
let LeftSideProjectType = document.querySelector(".left-side .project-type");
let LeftSideDescription = document.querySelector(
  ".left-side .project-description"
);

let WorkParent = document.querySelectorAll(".work-grid .work");
console.log(WorkParent);
let Activated = "";

const HandleProJectInformation = (Element) => {
  let FirstElement = Element.firstElementChild;
  let Count = FirstElement.firstElementChild;
  let type = Count.nextElementSibling;
  let title = type.nextElementSibling;
  let description = title.nextElementSibling;

  LeftSideCount.textContent = Count.textContent;
  LeftSideCourse.textContent = type.textContent;
  LeftSideTitle.textContent = title.textContent;
  LeftSideDescription.textContent = description.textContent;
};

window.addEventListener("scroll", (e) => {
  WorkParent.forEach((EachWork) => {
    let ElementDistanceFromTop = EachWork.getBoundingClientRect().top;
    let ElementDistanceFromBottom = EachWork.getBoundingClientRect().bottom;
    if (
      (ElementDistanceFromTop < 300 && ElementDistanceFromTop > 0) ||
      (ElementDistanceFromBottom < 150 && ElementDistanceFromBottom > 0)
    ) {
      if (Activated != EachWork.id) {
        HandleProJectInformation(EachWork);
      }
      Activated = EachWork.id;
    }
  });

  if (window.innerWidth < 1100) {
    Work.forEach((EachWork) => {
      EachWork.addEventListener("click", (e) => {
        EachWork.style.opacity = 1;
      });
    });
  }
});
