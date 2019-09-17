
function rollingDom(article){
    /*const div = document.createElement("div");
    const location = document.querySelectorAll(".reader section");
    location.insertAdjacentElement("afterbegin", div);*/
    
    var div = document.createElement('div');
    document.getElementsByTagName("article")[0].appendChild(div);
    div.setAttribute('class', 'publisher');
    div.textContent = article.publisher
    
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