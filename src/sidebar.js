// Script lista documenti
/* docs selection script: quando clicchi l'elemento con classe .doc-sel ti rivela togliendo 'hidden' la nav-list, 
dove è contenuta la lista documenti. */
function sidebar(){

function docsList() {
    document.querySelector(".nav-list").className = document
      .querySelector(".nav-list")
      .className.replace(/(?:^|\s)hidden(?!\S)/g, "");
  }
  
  const docsSelection = document.querySelectorAll(".doc-sel");
  docsSelection.forEach(node => {
    node.addEventListener("click", docsList);
  });
  
  // Script chiusura lista documenti
  /*stessa cosa di sopra ma nasconde i documenti quando si richiude la sidebar*/
  function closeDocs() {
    var v = document.querySelector(".nav-list");
    v.classList.add("hidden");
  }
  
  const docsHidden = document.querySelector(".doc-close");
  docsHidden.addEventListener("click", closeDocs);
  
  /*stessa cosa di sopra ma si attiva quando clicchi un documento */
  const docsHiddenFromMenu = document.querySelectorAll(".close-menu-doc");
  docsHiddenFromMenu.forEach(node => {
    node.addEventListener("click", closeDocs);
  });
  
  /* sidebar drawer script */
  const mainElement = document.querySelector(".container");
  const openMenu = document.querySelectorAll(".opened-doc-list");
  const closeMenu = document.querySelector(".close-menu");
  const closeDocMenu = document.querySelectorAll(".close-menu-doc");
  const toggleNavBar = () => {
    mainElement.classList.toggle("opened-nav");
  };
  
  openMenu.forEach(node => {
    node.addEventListener("click", toggleNavBar, false);
  });
  
  closeMenu.addEventListener("click", toggleNavBar, false);
  
  closeDocMenu.forEach(node => {
    node.addEventListener("click", toggleNavBar, false);
  });
}
export {sidebar}