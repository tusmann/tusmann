import { parseArticle } from "./article-parser";
import { addArticle } from "./addArticle.js";
import { addSpecialArticle } from "./addArticle.js";
import { articlesSidebarSelection } from "./articlesSelectionButtons";
import { specialArticleSidebarSelection } from "./articlesSelectionButtons";
import bauhaus from "./images/bauhaus.svg";
import aldus_leaf from "./images/aldus_leaf.svg";
import sakura from "./images/sakura.svg";

// polyfill needed for using for loop on a dictionary
/*
 * Object.prototype.forEach() polyfill
 * https://gomakethings.com/looping-through-objects-with-es6/
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!Object.prototype.forEach) {
  Object.defineProperty(Object.prototype, "forEach", {
    value: function(callback, thisArg) {
      if (this == null) {
        throw new TypeError("Not an object");
      }
      thisArg = thisArg || window;
      for (var key in this) {
        if (this.hasOwnProperty(key)) {
          callback.call(thisArg, this[key], key, this);
        }
      }
    }
  });
}

//selezione stili

//styles dictionary with style name=key and icon=value
const styles = [
  {
    name: "manuzio",
    icon: aldus_leaf
  },
  {
    name: "rimpa",
    icon: sakura
  },
  {
    name: "third",
    icon: bauhaus
  },
  {
    name: "fourth",
    icon: ""
  },
  {
    name: "fifth",
    icon: ""
  },
  {
    name: "sixth",
    icon: ""
  }
];

//dynamically creates buttons for styles in the sidebar
function stylesSidebarSelection() {
  styles.forEach(function(style) {
    //aggiungo pulsante stile
    var div = document.createElement("div");
    div.className = "opened-doc-list doc-sel";
    div.href = "#";

    //agg icona stile
    var embed = document.createElement("embed");
    embed.className = "icn";
    embed.src = style.icon;
    div.appendChild(embed);

    // add to dom
    var location = document.querySelector("nav");
    location.insertAdjacentElement("afterbegin", div);

    div.addEventListener("click", () => {
      console.log("hello");
      styles.forEach(function(style) {
        document.querySelector(".reader").classList.remove(style.name);
      });
      document.querySelector(".reader").classList.add(style.name);
      //PULITURA READER
      document.querySelector(".reader").innerHTML = "";
      document.querySelector(".changeTheme").classList.remove("hidden");
      document.querySelector(".footerRights").classList.remove("hidden");
  document.querySelector(".footerArticleLink").classList.add("hidden");

      document.querySelector(".jumbo").classList.add("hidden");
    });
  });
}
stylesSidebarSelection();

//creation of article, buttons and links
articlesSidebarSelection();
specialArticleSidebarSelection(
  "EUR-Lex",
  "./articles/EUDirective/L125-75.html",
  "./articles/EUDirective/EUDirectiveItalian.html"
);


// Script lista documenti
/* docs selection script: quando clicchi l'elemento con classe .doc-sel ti rivela togliendo 'hidden' la nav-list, 
dove è contenuta la lista documenti. */

function docsList() {
  document.querySelector(".nav-list").className = document
    .querySelector(".nav-list")
    .className.replace(/(?:^|\s)hidden(?!\S)/g, "");
}

const docsSelection = document.querySelectorAll(".doc-sel");
docsSelection.forEach(node => {
  node.addEventListener("click", docsList);
});

// Script chiusura lista documenti
/*stessa cosa di sopra ma nasconde i documenti quando si richiude la sidebar*/
function closeDocs() {
  var v = document.querySelector(".nav-list");
  v.classList.add("hidden");
}

const docsHidden = document.querySelector(".doc-close");
docsHidden.addEventListener("click", closeDocs);

/*stessa cosa di sopra ma si attiva quando clicchi un documento */
const docsHiddenFromMenu = document.querySelectorAll(".close-menu-doc");
docsHiddenFromMenu.forEach(node => {
  node.addEventListener("click", closeDocs);
});

/* sidebar drawer script */
const mainElement = document.querySelector(".container");
const openMenu = document.querySelectorAll(".opened-doc-list");
const closeMenu = document.querySelector(".close-menu");
const closeDocMenu = document.querySelectorAll(".close-menu-doc");
const toggleNavBar = () => {
  mainElement.classList.toggle("opened-nav");
};

openMenu.forEach(node => {
  node.addEventListener("click", toggleNavBar, false);
});

closeMenu.addEventListener("click", toggleNavBar, false);

closeDocMenu.forEach(node => {
  node.addEventListener("click", toggleNavBar, false);
});

//add about page
document.querySelector(".aboutPageButton").onclick = function() {
  document.querySelector(".footerRights").classList.remove("hidden");
  document.querySelector(".footerArticleLink").classList.add("hidden");
  document.querySelector(".aboutPageSection").classList.remove("hidden");
  var elementsToDelete = document.querySelectorAll(
    ".jumbo, .tutorialPageSection, .disclaimerPageSection, .reader, .documentationPageSection, .changeTheme"
  );
  elementsToDelete.forEach(node => {
    node.classList.add("hidden");
  });
};

//add disclaimer page
document.querySelector(".disclaimerPageButton").onclick = function() {
  document.querySelector(".footerRights").classList.remove("hidden");
  document.querySelector(".footerArticleLink").classList.add("hidden");
  document.querySelector(".disclaimerPageSection").classList.remove("hidden");
  var elementsToDelete = document.querySelectorAll(
    ".jumbo, .tutorialPageSection, .aboutPageSection, .reader, .documentationPageSection, .changeTheme"
  );
  elementsToDelete.forEach(node => {
    node.classList.add("hidden");
  });
};

//add documentation page
document.querySelector(".documentationPageButton").onclick = function() {
  document.querySelector(".footerRights").classList.remove("hidden");
  document.querySelector(".footerArticleLink").classList.add("hidden");
  document
    .querySelector(".documentationPageSection")
    .classList.remove("hidden");
  var elementsToDelete = document.querySelectorAll(
    ".jumbo, .tutorialPageSection, .aboutPageSection, .reader, .disclaimerPageSection, .changeTheme"
  );
  elementsToDelete.forEach(node => {
    node.classList.add("hidden");
  });
};

//add tutorial page
document.querySelector(".tutorialPageButton").onclick = function() {

  document.querySelector(".tutorialPageSection").classList.remove("hidden");
  var elementsToDelete = document.querySelectorAll(
    ".jumbo, .aboutPageSection, .reader, .disclaimerPageSection, .changeTheme"
  );
  elementsToDelete.forEach(node => {
    node.classList.add("hidden");
  });
};

//documentation page animation
//theme 1
//document.querySelector(".card-theme1").onclick = function () {
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//function to add the link button with ref to the original articles urls
var articlesLinkDict = {
  "EUR-Lex":
    "https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1552167424995&uri=CELEX:32009L0041",
  "Japan's Prisons Are a Haven for Elderly Women":
    "https://www.bloomberg.com/news/features/2018-03-16/japan-s-prisons-are-a-haven-for-elderly-women",
  "As Goes the South, so Goes the Nation":
    "https://harpers.org/archive/2018/07/as-goes-the-south-so-goes-the-nation/",
  "Jerry And Marge Go Large":
    "https://highline.huffingtonpost.com/articles/en/lotto-winners/",
  "How Anna Delvey Tricked New York’s Party People":
    "https://www.thecut.com/2018/05/how-anna-delvey-tricked-new-york.html",
  "God is in the machine":
    "https://www.the-tls.co.uk/articles/public/ridiculously-complicated-algorithms/"
};

function addArticleGlobalUrl() {
  articlesLinkDict.forEach(function(item, key) {
    var articleTitle = key;
    var articleLinkUrl = item;
    var articlesNavbar = document.querySelectorAll("a.close-menu-doc");
    articlesNavbar.forEach(node => {
      if (node.textContent == articleTitle) {
        node.addEventListener("click", function() {
          document.querySelector("a.footerLink").href = articleLinkUrl;
          document.querySelector(".footerRights").classList.add("hidden");
          document.querySelector(".footerArticleLink").classList.remove("hidden");
        });
      }
    });
  });
}
addArticleGlobalUrl();

//OVERLAY MENU
/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

const openOverlay = document.querySelector(".navMenu");
openOverlay.addEventListener("click", openNav);

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

const closeOverlay = document.querySelector(".closebtn");
closeOverlay.addEventListener("click", closeNav);

const closeOverlayAbout = document.querySelector(".aboutPageButton");
closeOverlayAbout.addEventListener("click", closeNav);

const closeOverlayDoc = document.querySelector(".documentationPageButton");
closeOverlayDoc.addEventListener("click", closeNav);

const closeOverlayDisc = document.querySelector(".disclaimerPageButton");
closeOverlayDisc.addEventListener("click", closeNav);
//
