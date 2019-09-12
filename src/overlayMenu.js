function overlayMenu() {
    //OVERLAY MENU
/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  const openOverlay = document.querySelector(".navMenu");
  openOverlay.addEventListener("click", openNav);
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  
  const closeOverlay = document.querySelector(".closebtn");
  closeOverlay.addEventListener("click", closeNav);
  
  const closeOverlayAbout = document.querySelector(".aboutPageButton");
  closeOverlayAbout.addEventListener("click", closeNav);
  
  const closeOverlayDoc = document.querySelector(".documentationPageButton");
  closeOverlayDoc.addEventListener("click", closeNav);
  
  const closeOverlayDisc = document.querySelector(".disclaimerPageButton");
  closeOverlayDisc.addEventListener("click", closeNav);
  //
  
  
}
export {overlayMenu}