// Get the nav toggler element and the nav element
const navToggler = document.getElementById("navToggler");
const dropdown = document.getElementById("menu");
const nav = document.getElementsByTagName("nav")[0];

const menuItems = document.querySelectorAll(".menu-item");

// Add a click event listener to the nav toggler element
navToggler.addEventListener("click", () => {
  // Toggle the opened class on the nav toggler element
  navToggler.classList.toggle("opened");

  if (dropdown.classList.contains("open")) {
    dropdown.classList.remove("open");
    nav.style.height = "65px";
  } else {
    dropdown.classList.add("open");
    nav.style.height = "250px";

    if (dropdown.classList.contains("open")) {
      menuItems.forEach((menuItems) => {
        menuItems.style.display = "block";
        menuItems.style.opacity = "1";
      });
      

      dropdown.addEventListener("transitionend", () => {
        if (!dropdown.classList.contains("open")) {
          nav.style.height = "65px";
        }
      });
    }
  }
});
