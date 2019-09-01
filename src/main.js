import {parseArticle} from "./article-parser"


// polyfill needed for using for loop on a dictionary
  /*
 * Object.prototype.forEach() polyfill
 * https://gomakethings.com/looping-through-objects-with-es6/
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!Object.prototype.forEach) {
	Object.defineProperty(Object.prototype, 'forEach', {
		value: function (callback, thisArg) {
			if (this == null) {
				throw new TypeError('Not an object');
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


//article dictionary with title=key and url=value

  var articlesDict = { 
                    A: "./articles/Bloomberg/ShihoFukada.html", 
                    B: "./articles/Harpers/ImaniPerry.html", 
                    C: "./articles/HuffingtonPost/JasonFagone.html",
                    D: "./articles/TheCut/JessicaPresler.html",
                    E: "./articles/Times Literary Supplement/CarlMiller.html",
                    F: "./articles/EUDirective/L125-75.html", 
    };

//dynamically creates buttons for selecting articles in the sidebar
function articlesSidebarSelection(){
    
    articlesDict.forEach(function (item, key) {
        var articleTitle = key;
        var articleUrl = item;
        console.log(articleUrl);
        console.log(articleTitle);
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
        location.insertAdjacentElement("afterbegin", a);
        location.insertAdjacentElement("afterbegin", li);
    }) 
}
articlesSidebarSelection()

//SCRIPT ORIGINARIO DELLA FRANCI di chiamata articolo
//funzione che serve per agg i doc al dom della pagina
async function addArticle(cacca){
    var article = await parseArticle(cacca)

    console.log(cacca)
    
    //before adding the article, clear the page from jumbotron etc (they get hidden) to show only the reader
    const elementsToDelete = document.querySelectorAll(".jumbo, .tutorial")
    elementsToDelete.forEach(node => {
        node.classList.add("hidden");
    }) 

    document.querySelector(".reader").className = document.querySelector(".reader").className.replace(/(?:^|\s)hidden(?!\S)/g, '')

    document.querySelector(".reader").innerHTML = ""

    //actually insert the new document
    const container = document.querySelector(".reader")
    const nodes = Array.from(article.body.childNodes)
    nodes.forEach(node => {
        container.appendChild(node)
    })
    
}

//const readerActivation = document.querySelector('.reader-activator');
//readerActivation.addEventListener('click', addArticle);
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