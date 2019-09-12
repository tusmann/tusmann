function addDocumentationPages() {
    //add about page
document.querySelector(".aboutPageButton").onclick = function() {
    document.querySelector(".footerRights").classList.remove("hidden");
    document.querySelector(".footerArticleLink").classList.add("hidden");
    document.querySelector(".aboutPageSection").classList.remove("hidden");
    var elementsToDelete = document.querySelectorAll(
      ".jumbo, .tutorialPageSection, .disclaimerPageSection, .reader, .documentationPageSection, .changeTheme"
    );
    elementsToDelete.forEach(node => {
      node.classList.add("hidden");
    });
  };
  
  //add disclaimer page
  document.querySelector(".disclaimerPageButton").onclick = function() {
    document.querySelector(".footerRights").classList.remove("hidden");
    document.querySelector(".footerArticleLink").classList.add("hidden");
    document.querySelector(".disclaimerPageSection").classList.remove("hidden");
    var elementsToDelete = document.querySelectorAll(
      ".jumbo, .tutorialPageSection, .aboutPageSection, .reader, .documentationPageSection, .changeTheme"
    );
    elementsToDelete.forEach(node => {
      node.classList.add("hidden");
    });
  };
  
  //add documentation page
  document.querySelector(".documentationPageButton").onclick = function() {
    document.querySelector(".footerRights").classList.remove("hidden");
    document.querySelector(".footerArticleLink").classList.add("hidden");
    document
      .querySelector(".documentationPageSection")
      .classList.remove("hidden");
    var elementsToDelete = document.querySelectorAll(
      ".jumbo, .tutorialPageSection, .aboutPageSection, .reader, .disclaimerPageSection, .changeTheme"
    );
    elementsToDelete.forEach(node => {
      node.classList.add("hidden");
    });
  };
  
  //add tutorial page
  document.querySelector(".tutorialPageButton").onclick = function() {
  
    document.querySelector(".tutorialPageSection").classList.remove("hidden");
    var elementsToDelete = document.querySelectorAll(
      ".jumbo, .aboutPageSection, .reader, .disclaimerPageSection, .changeTheme"
    );
    elementsToDelete.forEach(node => {
      node.classList.add("hidden");
    });
  };
  
  //documentation page animation
  //theme 1
  //document.querySelector(".card-theme1").onclick = function () {
  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
  
}
export {addDocumentationPages}