// const isMobile = () => {
//   let hasTouchScreen = false;
//   if ("maxTouchPoints" in navigator) {
//     hasTouchScreen = navigator.maxTouchPoints > 0;
//   } else if ("msMaxTouchPoints" in navigator) {
//     hasTouchScreen = navigator["msMaxTouchPoints"] > 0;
//   } else {
//     let mQ = window.matchMedia && matchMedia("(pointer:coarse)");
//     if (mQ && mQ.media === "(pointer:coarse)") {
//       hasTouchScreen = !!mQ.matches;
//     } else if ("orientation" in window) {
//       hasTouchScreen = true; // deprecated, but good fallback
//     }
//   }

//   const md = new MobileDetect(window.navigator.userAgent);
//   const isMobileDetected =
//     Object.isNotNull(md.mobile()) ||
//     Object.isNotNull(md.phone()) ||
//     Object.isNotNull(md.tablet());

//   return (hasTouchScreen && md.isPhoneSized(600)) || isMobileDetected;
// };

// const isTouch = () => {
//   // eslint-disable-next-line no-console
//   console.log(window.innerWidth);

//   if (window.innerWidth <= 960) {
//     return true;
//   } else return false;
// };

// let body = document.querySelector("body");
// if (isTouch()) {
//   // eslint-disable-next-line no-console
//   console.log(1);

//   body.classList.add("touch");
// } else {
//   body.classList.add("pc");
// }

const dropdowns = document.getElementsByClassName("dropdown-menu");
// eslint-disable-next-line no-console
console.log(dropdowns);

if (dropdowns.length > 0) {
  for (let i = 0; i < dropdowns.length; i++) {
    const element = dropdowns[i];
    element.parentElement.addEventListener("click", () => {
      element.classList.toggle("open");
    });
  }
  for (let i = 0; i < dropdowns.length; i++) {
    const element = dropdowns[i];
    // // eslint-disable-next-line no-console
    // console.log(element.parentElement, element);
    element.addEventListener("mouseleave", () => {
      // eslint-disable-next-line no-console
      console.log(element);
      element.classList.remove("open");
      // element.classList.remove("open");
    });
  }
}

const menuElems = document.getElementsByClassName("menu-link");

for (let i = 0; i < menuElems.length; i++) {
  const elem = menuElems[i];

  elem.addEventListener("click", () => {
    elem.classList.toggle("show");
  });
  elem.addEventListener("mouseout", () => {
    // eslint-disable-next-line no-console
    // console.log(elem.parentElement);
    elem.classList.remove("show");
  });
}

const burgerIcon = document.getElementById("burger");
const menuContainer = document.getElementById("nav-container");

burgerIcon.addEventListener("click", () => {
  menuContainer.classList.toggle("show");
  burgerIcon.classList.toggle("open");
});

const seach = document.getElementById("seach");
const input = seach.previousElementSibling;

seach.addEventListener("click", () => {
  input.classList.toggle("active");
});
input.addEventListener("mouseout", () => {
  input.classList.remove("active");
});
