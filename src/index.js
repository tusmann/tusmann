console.log('hello world')
//importiamo il modulo che voglio in questo caso da file locale ma potrebbe anche essere libreria npm per poi utilizzarlo//
import {parseArticle} from "./article-parser"

//funzione che serve per agg i doc al dom della pagina
async function addArticle(){
    var article = await parseArticle("./articles/Bloomberg/ShihoFukada.html") 

    console.log(article)
    
    //before adding the article, clear the page from jumbotron etc (they get hidden) to show only the reader
    const elementsToDelete = document.querySelectorAll(".header, .tutorial")
    elementsToDelete.forEach(node => {
        node.classList.add("hidden");
    }) 

    document.querySelector(".reader").className = document.querySelector(".reader").className.replace(/(?:^|\s)hidden(?!\S)/g, '')

    //actually insert the new document
    const container = document.querySelector(".reader")
    const nodes = Array.from(article.body.childNodes)
    nodes.forEach(node => {
        container.appendChild(node)
    })
    
    //TODO: insert dom into container
}
//chiamata funzione addDoc

var widget = document.querySelector('.try');
widget.addEventListener('click', addArticle);

// mia funzione per chiamare lo stile//
/*function callStyle() {
    document.querySelector('head').innerHTML += '<link rel="stylesheet" href="/griffo.235af7c4.css" type="text/css"/>';
}

var stylist = document.querySelector('.sty');
stylist.addEventListener('click', callStyle);*/

//funzione di andre per chiamare lo stile//


