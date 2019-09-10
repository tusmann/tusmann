import {parseArticle} from "./article-parser"
import {addArticle} from "./addArticle.js"
import {addSpecialArticle} from "./addArticle.js"

//article dictionary with title=key and url=value
const articles = [
    {
        title: "Japan's Prisons Are a Haven for Elderly Women",
        url: "./articles/Bloomberg/ShihoFukada.html"
    },
    {
        title: "As Goes the South, so Goes the Nation",
        url: "./articles/Harpers/ImaniPerry.html"
    },
    {
        title: "Jerry And Marge Go Large",
        url: "./articles/HuffingtonPost/JasonFagone.html"
    },
    {
        title: "How Anna Delvey Tricked New York’s Party People",
        url: "./articles/TheCut/JessicaPresler.html"
    },
    {
        title: "God is in the machine",
        url: "./articles/Times Literary Supplement/CarlMiller.html"
    }
]

//dynamically creates buttons for selecting articles in the sidebar
function articlesSidebarSelection(){
    
    articles.forEach(function (article) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.className = "close-menu-doc";
        a.appendChild(document.createTextNode(article.title));
        li.appendChild(a);

        
        a.addEventListener("click", () => addArticle(article.url));

        var location = document.querySelector(".placeholder");

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