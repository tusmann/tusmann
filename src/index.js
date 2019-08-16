console.log('hello world')
//importiamo il modulo che voglio in questo caso da file locale ma potrebbe anche essere libreria npm per poi utilizzarlo//
import {parseArticle} from "./article-parser"

//funzione che serve per agg i doc al dom della pagina
async function addArticle(){
    var article = await parseArticle("./articles/Bloomberg/ShihoFukada.html") 

    console.log(article)
    const container = document.querySelector(".reader")
    const nodes = Array.from(article.body.childNodes)
    nodes.forEach(node => {
        container.appendChild(node)
    })
    
    //TODO: insert dom into container
}
//chiamata funzione addDoc
addArticle()