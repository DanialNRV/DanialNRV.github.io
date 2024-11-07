// Select the menu button and the navigation list
let menu = document.querySelector("#menu-list"); // Changed to #menu-list
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x"); // Toggles bx class on the button (optional)
  navlist.classList.toggle("open"); // Toggles open class on navlist
};
