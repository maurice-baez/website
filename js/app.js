document.querySelector(".header__moon").onclick = function () {
  document.querySelector("body").classList.toggle("is-black");
  //   localStorage.setItem("theme", "dark");
};

document.querySelector(".header__mob-menu").onclick = function () {
  document.querySelector(".header-menu").classList.toggle("is-active");
};

// function rememberDarkMode() {
//   if (localStorage.theme === "dark") {
//     document.querySelector("body").classList.toggle("is-black");
//   }
// }
