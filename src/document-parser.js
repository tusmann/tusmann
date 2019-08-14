
//definire funzioni da esportare. creo un modulo con certe funzioni. un modulo è un contenitore di cose (funzioni e/o variabili
//questo modulo farà -fetch documento: prendere il doc e -parsing che significa prendere html e trasformarlo in dom

async function parseDocument(article){
    //fetch of the article will give a complex object not only the text
    //returns a Promise of Response obj
    let articleResponse = await fetch(article)
    //returns a Promise of String
    let articleHtml = await articleResponse.text()
    
    console.log(articleHtml)

}

export {parseDocument}

//this module will call this function and put in the general dom the one that we just generated with the previous module
