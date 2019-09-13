import {parseArticle} from "./article-parser"
import {applyCustomStyleLogic} from "./customStyleLogic.js"

async function addSpecialArticle(leftArticleUrl, rightArticleUrl) {
    var leftArticle = await parseArticle(leftArticleUrl)
    var rightArticle = await parseArticle(rightArticleUrl) 

    //before adding the article, clear the page from jumbotron etc (they get hidden) to show only the reader
    const elementsToDelete = document.querySelectorAll(".jumbo, .tutorialPageSection, .aboutPageSection, .documentationPageSection, .disclaimerPageSection")
    elementsToDelete.forEach(node => {
        node.classList.add("hidden");
    }) 

    document.querySelector(".reader").className = document.querySelector(".reader").className.replace(/(?:^|\s)hidden(?!\S)/g, '')

    //clear the reader from previous text, add another text in the middle page, remove link btn in footer
    document.querySelector(".reader").innerHTML = ""
    document.querySelector(".changeTheme").classList.add("hidden")

    // create a container for the articles
    var gridContainer = document.createElement("section")
    gridContainer.className = "grid-container"
    var locationGridContainer = document.querySelector(".reader")
    locationGridContainer.insertAdjacentElement("afterbegin", gridContainer)

    //create 2 containers for the documents
    var rightReader = document.createElement("section");
    var leftReader = document.createElement("section");
    rightReader.className = "reader right";
    leftReader.className = "reader left";
    var location = document.querySelector("section.grid-container");
    location.insertAdjacentElement("afterbegin", rightReader);
    location.insertAdjacentElement("afterbegin", leftReader);

    const leftContainer = document.querySelector("section.reader.left")
    const leftNodes = Array.from(leftArticle.body.childNodes)
    leftNodes.forEach(node => {
        leftContainer.appendChild(node)
    })
    const rightContainer = document.querySelector("section.reader.right")
    const rightNodes = Array.from(rightArticle.body.childNodes)
    rightNodes.forEach(node => {
        rightContainer.appendChild(node)
    }) 
    //this function allows for using js on articles dom 
    applyCustomStyleLogic()
}

//add articles to dom
async function addArticle(articleUrl){
    var article = await parseArticle(articleUrl)
    
    //before adding the article, clear the page from jumbotron etc (they get hidden) to show only the reader
    const elementsToDelete = document.querySelectorAll(".jumbo, .tutorialPageSection, .aboutPageSection, .documentationPageSection, .disclaimerPageSection")
    elementsToDelete.forEach(node => {
        node.classList.add("hidden");
    }) 

    document.querySelector(".reader").className = document.querySelector(".reader").className.replace(/(?:^|\s)hidden(?!\S)/g, '')

    var gridReader = document.querySelector("section.grid-container")
    if (document.body.contains(gridReader)) {
        gridReader.classList.add("reader")
        gridReader.classList.remove("grid-container")
        const gridNodes = Array.from(gridReader.childNodes)
        gridNodes.forEach(node => {
        gridReader.removeChild(node)
    })

    } 
    document.querySelector(".reader").innerHTML = ""
    document.querySelector(".changeTheme").classList.add("hidden")

    //actually insert the new document
    const container = document.querySelector(".reader")
    const nodes = Array.from(article.body.childNodes)
    nodes.forEach(node => {
        container.appendChild(node)
    })

    applyCustomStyleLogic()
}

export {addSpecialArticle}
export {addArticle}