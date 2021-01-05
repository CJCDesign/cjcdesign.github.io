var menuOptions = [
  "home",
  "current",
  "photography",
  "graphics",
  "drawings and paintings",
  "jewelery",
  "the tacky bee",
  "blog"
];

var photogOptions = [
  "portraits",
  "art",
  "nature",
  "interiors",
  "events"
];

var graphOptions = [
  "infographics",
  "maps",
  "tables",
  "animations"
];

var drawpaintOptions = [
  "drawings",
  "paintings"
];

var jeweleryOptions = [
  "necklaces",
  "earrings",
  "bracelets",
  "rings"
];

var beeOptions = [
  "wraps",
  "breadbags"
];

loadMenu();

function loadMenu() {
  if (document.getElementById("nav") == null) {
    loadBoxes("boxes", menuOptions);
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

    if (document.getElementById("photog") != null) {
      loadBoxes("photog", photogOptions);
    }
    else if (document.getElementById("graph") != null) {
      loadBoxes("graph", graphOptions);
    }
    else if (document.getElementById("drawpaint") != null) {
      loadBoxes("drawpaint", drawpaintOptions);
    }
    else if (document.getElementById("jewelery") != null) {
      loadBoxes("jewelery", jeweleryOptions);
    }
    else if (document.getElementById("bee") != null) {
      loadBoxes("bee", beeOptions);
    }
  }
}

function loadBoxes(target, arrayName) {
  var boxes = document.getElementById(target);

  for (var i = 0; i < arrayName.length; i++) {
    if (i >= 1 || arrayName != menuOptions) {
      var anchor = document.createElement("A");
      anchor.setAttribute("href", "\\pages/" + arrayName[i] + ".html");
      boxes.appendChild(anchor);
      var fig = document.createElement("FIGURE");
      anchor.appendChild(fig);
      var title = document.createElement("H2");
      title.innerHTML = arrayName[i];
      fig.appendChild(title);
      var box = document.createElement("IMG");
      box.src = "\\images/" + arrayName[i] + ".jpg";
      box.alt = "[" + arrayName[i] + "]";
      fig.appendChild(box);

      if (i == 1 && arrayName == menuOptions) {
        fig.setAttribute("id", "mainImage");
      }
    }
  }
}
