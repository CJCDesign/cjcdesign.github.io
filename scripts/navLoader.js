var menuOptions = [
  "home",
  "current",
  "photography",
  "graphics",
  "drawings",
  "jewelery",
  "the tacky bee",
  "blog"
];

loadMenu();

function loadMenu() {
  if (document.getElementById("nav") == null) {
    var boxes = document.getElementById("boxes");

    for (var i = 0; i < menuOptions.length; i++) {
      if (i >= 1) {
        var anchor = document.createElement("A");
        anchor.setAttribute("href", "\\pages/" + menuOptions[i] + ".html");
        boxes.appendChild(anchor);
        var fig = document.createElement("FIGURE");
        anchor.appendChild(fig);
        var title = document.createElement("H2");
        title.innerHTML = menuOptions[i];
        fig.appendChild(title);
        var box = document.createElement("IMG");
        box.src = "images/" + menuOptions[i] + ".jpg";
        box.alt = "[" + menuOptions[i] + "]";
        fig.appendChild(box);

        if (i == 1) {
          fig.setAttribute("id", "mainImage");
        }
      }
    }
  }
  else {
    var nav = document.getElementById("nav");

    for (var i = 0; i < menuOptions.length; i++) {
      var anchor = document.createElement("A");
      anchor.setAttribute("class", "navAnchor");
      nav.appendChild(anchor);

      anchor.innerHTML = menuOptions[i];

      if (i == 0) {
        anchor.setAttribute("href", "\\");
      }
      else {
        anchor.setAttribute("href", "\\pages/" + menuOptions[i] + ".html");
      }
    }
  }
}
