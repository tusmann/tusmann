import { parseArticle } from "./article-parser";
import { addArticle } from "./addArticle.js";
import { addSpecialArticle } from "./addArticle.js";
import { articlesSidebarSelection } from "./articlesSelectionButtons";
import { specialArticleSidebarSelection } from "./articlesSelectionButtons";
import {stylesSidebarSelection} from "./createThemeButtons"
import {sidebar} from "./sidebar"
import {addDocumentationPages} from "./addDocumentationPages"
import {overlayMenu} from "./overlayMenu"

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

//creation of sidebar with applied styles
stylesSidebarSelection();

//creation of articles sidebar-list with links
articlesSidebarSelection();
specialArticleSidebarSelection(
  "EUR-Lex",
  "./articles/EUDirective/L125-75.html",
  "./articles/EUDirective/EUDirectiveItalian.html"
);

// sidebar functioning
sidebar()

//documentation pages
addDocumentationPages()

//
overlayMenu()

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

