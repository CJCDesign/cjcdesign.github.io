// List of main menu elements
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

// Lists of main page sub pages
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

window.onload = function() {
  var nav = document.getElementById("nav");

  // If the page is the index, just load the main page grid elements
  if (nav == null) {
    loadBoxes("boxes", menuOptions);
  }
  // If the page is not the index, ...
  else {

    // Loading the menu banner
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

    // Loading the sub page grid elements, if there is an available target

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

// Method that loads page grid elements from an array to a target
function loadBoxes(target, arrayName) {
  var boxes = document.getElementById(target);

  for (var i = 0; i < arrayName.length; i++) {
    // Because menuOptions is also used to load the menu banner, when it is used to load main page grid elements, it must start reading from 1 instead of 0
    if (i >= 1 || arrayName != menuOptions) {
      // Creating the link
      var anchor = document.createElement("A");
      anchor.setAttribute("href", "\\pages/" + arrayName[i] + ".html");
      boxes.appendChild(anchor);
      // Creating the container to go in the link
      var fig = document.createElement("FIGURE");
      anchor.appendChild(fig);
      // Creating the text to go into the container
      var title = document.createElement("H2");
      title.innerHTML = arrayName[i];
      fig.appendChild(title);
      // Creating the image to go into the container
      var box = document.createElement("IMG");
      box.src = "\\images/" + arrayName[i] + ".jpg";
      box.alt = "[" + arrayName[i] + "]";
      fig.appendChild(box);

      // Setting the first index main page grid element (usually 'Current'), make it bigger
      if (i == 1 && arrayName == menuOptions) {
        fig.setAttribute("id", "mainImage");
      }
    }
  }
}
