var menuOptions = [
  "home",
  "about",
  "photography",
  "graphics",
  "jewelry",
  "drawings",
  "blog",
  "contact"
];

loadMenu();

function loadMenu() {
  var newNav = document.createElement("NAV");
  document.getElementById("menuHere").appendChild(newNav);

  var newMenu = document.createElement("UL");
  newNav.appendChild(newMenu);

  for (var i = 0; i < menuOptions.length; i++) {
    var newItem = document.createElement("LI");
    newMenu.appendChild(newItem);

    var newAnchor = document.createElement("A");
    newItem.appendChild(newAnchor);

    newAnchor.innerHTML = menuOptions[i];

    if (i == 0) {
      newAnchor.setAttribute("href", "\\");
    }
    else {
      newAnchor.setAttribute("href", menuOptions[i] + ".html");
    }
  }
}
