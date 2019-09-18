
function rollingDom(article){
  /*const div = document.createElement("div");
  const location = document.querySelectorAll(".reader section");
  location.insertAdjacentElement("afterbegin", div);*/
  
  const articles = document.querySelectorAll("article");
  articles.forEach(node => {
    const div = document.createElement('div');
    div.setAttribute('class', 'publisher');
    div.textContent = article.publisher;
    console.log(article.publisher)
    if (!node.querySelector("div.publisher"))
      node.appendChild(div);
  })
  
}


export default rollingDom;
/*
function getMeta(metaName) {
    const metas = document.getElementsByTagName('meta');
  
    for (let i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('name') === metaName) {
        return metas[i].getAttribute('content');
      }
    }
  
    return '';
  }
  
  console.log(getMeta('video'));

*/