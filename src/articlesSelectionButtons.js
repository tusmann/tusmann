import {parseArticle} from "./article-parser"
import {addArticle} from "./addArticle.js"
import {addSpecialArticle} from "./addArticle.js"

//article dictionary with title=key and url=value

var articlesDict = { 
    "Japan's Prisons Are a Haven for Elderly Women": "./articles/Bloomberg/ShihoFukada.html", 
    "As Goes the South, so Goes the Nation": "./articles/Harpers/ImaniPerry.html", 
    "Jerry And Marge Go Large": "./articles/HuffingtonPost/JasonFagone.html",
    "How Anna Delvey Tricked New York’s Party People": "./articles/TheCut/JessicaPresler.html",
    "God is in the machine": "./articles/Times Literary Supplement/CarlMiller.html",
    };

//dynamically creates buttons for selecting articles in the sidebar
function articlesSidebarSelection(){
    
    articlesDict.forEach(function (item, key) {
        var articleTitle = key;
        var articleUrl = item;
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.className = "close-menu-doc";
        a.appendChild(document.createTextNode(articleTitle));
        li.appendChild(a);

        
        a.addEventListener("click", () => addArticle(articleUrl));
        //var newButton = document.createElement("button");
        //newButton.className = "close-menu-doc";
        //var buttonContent = document.createTextNode(articleTitle)
        //newButton.appendChild(buttonContent)
        //newButton.addEventListener("click", () => addArticle(articleUrl))
        //console.log(key, articleUrl)
        var location = document.querySelector(".placeholder");
        //console.log(location)
        //location.insertAdjacentElement("afterbegin", a);
        location.insertAdjacentElement("afterbegin", li);
    }) 
}

//same but for the european translated article
function specialArticleSidebarSelection(articleTitle, leftArticleUrl, rightArticleUrl) {

    var li = document.createElement('li');
    var a = document.createElement('a');
    a.className = "close-menu-doc";
    a.appendChild(document.createTextNode(articleTitle));
    li.appendChild(a);
    a.addEventListener("click", () => addSpecialArticle(leftArticleUrl, rightArticleUrl));
        var location = document.querySelector(".placeholder");
        //location.insertAdjacentElement("afterbegin", a);
        location.insertAdjacentElement("afterbegin", li);
}

export {articlesSidebarSelection}
export {specialArticleSidebarSelection}