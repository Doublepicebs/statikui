var sjsMenu = document.getElementById("sjs-menu");
var sjsMain = document.getElementById("sjs-main");

sjsMenu.style.width = "0";
sjsMenu.style.margin = "0";
sjsMain.style.width = "100%";
sjsMain.style.paddingLeft = "0";
var sjsNavOpen = false;

function sjsNav() {
  if (sjsNavOpen === false) {
    if (sjsMenu.getAttribute('data-sjs') == "width") {
      sjsMenu.style.width = "100%";
    }
    sjsNavOpen = true;
  } else {
    if (sjsMenu.getAttribute('data-sjs') == "width") {
      sjsMenu.style.width = "0";
    }
    sjsNavOpen = false;
  }
}