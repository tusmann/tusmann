//SCRIPT ORIGINARIO DELLA FRANCI di chiamata articolo
import {parseArticle} from "./article-parser"

//funzione che serve per agg i doc al dom della pagina
async function addArticle(){
    var article = await parseArticle("./articles/Bloomberg/ShihoFukada.html")

    console.log(article)
    
    //before adding the article, clear the page from jumbotron etc (they get hidden) to show only the reader
    const elementsToDelete = document.querySelectorAll(".jumbo, .tutorial")
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
    
}

const readerActivation = document.querySelector('.reader-activator');
readerActivation.addEventListener('click', addArticle);
//FINE SCRIPT ORIGINARIO FRANCI


//selezione stili
//funzione stile 1
document.querySelector('.style-selector-first').onclick = function () { 
    document.querySelector("link.secondSheet").href = './first.css';
};

document.querySelector('.style-selector-second').onclick = function () { 
    document.querySelector("link.secondSheet").href = './second.css';
};

document.querySelector('.style-selector-third').onclick = function () { 
    document.querySelector("link.secondSheet").href = './third.css';
};

document.querySelector('.style-selector-fourth').onclick = function () { 
    document.querySelector("link.secondSheet").href = './fourth.css';
};

document.querySelector('.style-selector-fifth').onclick = function () { 
    document.querySelector("link.secondSheet").href = './fifth.css';
};

document.querySelector('.style-selector-sixth').onclick = function () { 
    document.querySelector("link.secondSheet").href = './sixth.css';
};

// Script lista documenti
/* docs selection script: quando clicchi l'elemento con classe .doc-sel ti rivela togliendo 'hidden' la nav-list, 
dove è contenuta la lista documenti. */

function docsList() {
    document.querySelector(".nav-list").className = document.querySelector(".nav-list").className.replace(/(?:^|\s)hidden(?!\S)/g, '');
}

const docsSelection = document.querySelectorAll('.doc-sel');
docsSelection.forEach(node => {
    node.addEventListener('click', docsList);
}) 

// Script chiusura lista documenti
/*stessa cosa di sopra ma nasconde i documenti quando si richiude la sidebar*/
function closeDocs() {
    var v = document.querySelector(".nav-list"); 
    v.classList.add("hidden"); 
}

const docsHidden = document.querySelector('.doc-close');
docsHidden.addEventListener('click', closeDocs);

/*stessa cosa di sopra ma si attiva quando clicchi un documento */
const docsHiddenFromMenu = document.querySelectorAll('.close-menu-doc');
docsHiddenFromMenu.forEach(node => {
    node.addEventListener('click', closeDocs);
})

/* sidebar drawer script */
const mainElement = document.querySelector('.container');
const openMenu = document.querySelectorAll('.opened-doc-list');
const closeMenu = document.querySelector('.close-menu');
const closeDocMenu = document.querySelectorAll('.close-menu-doc');
const toggleNavBar = () => {
    mainElement.classList.toggle('opened-nav');
};
        
openMenu.forEach(node => {
    node.addEventListener('click', toggleNavBar, false);
}) 
closeMenu.addEventListener('click', toggleNavBar, false);
closeDocMenu.forEach(node => {
    node.addEventListener('click', toggleNavBar, false);
}) 