
//definire funzioni da esportare. creo un modulo con certe funzioni. un modulo è un contenitore di cose (funzioni e/o variabili
//questo modulo farà -fetch documento: prendere il doc e -parsing che significa prendere html e trasformarlo in dom

async function parseArticle(article){
    //fetch of the article will give a complex object not only the text
    //returns a Promise of Response obj
    const articleResponse = await fetch(article)
    //returns a Promise of String
    const articleHtml = await articleResponse.text()
    //trasformato il text in dom
    const parser = new DOMParser();
    const articleDocument = parser.parseFromString(articleHtml, "text/html");
    //preso solo body
    const body = articleDocument.querySelector("body");
    //create url from current article
    const articleURL = new URL(article, window.location.href)
    const pageURL = new URL(window.location.href)
    //get article path (without file name)
    const articlePath = articleURL.pathname.substring(0, articleURL.pathname.lastIndexOf("/"))
    body.querySelectorAll("img").forEach(image => {
        //Edit image src by appending the current article path
        const url = new URL(image.src)
        const imageSplitUrl = url.pathname.split("/")
        const imageName = imageSplitUrl[imageSplitUrl.length-1]
        image.src = url.origin + articlePath + "/" + imageName
    })

    const element = articleDocument.querySelector('meta[property~="dc:publisher"]')

    return {
        body: body,
        title: articleDocument.querySelector("title").text,
        publisher: element && element.getAttribute("content")
    }
}

export {parseArticle}

//this module will call this function and put in the general dom the one that we just generated with the previous module
