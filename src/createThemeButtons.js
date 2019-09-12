import styles from "./styles";
//dynamically creates buttons for styles in the sidebar
function stylesSidebarSelection() {
    styles.forEach(function(style) {
      //aggiungo pulsante stile
      var div = document.createElement("div");
      div.className = "opened-doc-list doc-sel";
      div.href = "#";
  
      //agg icona stile
      var embed = document.createElement("embed");
      embed.className = "icn";
      embed.src = style.icon;
      div.appendChild(embed);
  
      // add to dom
      var location = document.querySelector("nav");
      location.insertAdjacentElement("afterbegin", div);
  
      div.addEventListener("click", () => {
        styles.forEach(function(style) {
          document.querySelector(".reader").classList.remove(style.name);
        });
        document.querySelector(".reader").classList.add(style.name);
        
        document.querySelector(".reader").innerHTML = "";
        document.querySelector(".changeTheme").classList.remove("hidden");
  //PULITURA READER
        var elementsToDelete = document.querySelectorAll(
          ".jumbo, .tutorialPageSection, .disclaimerPageSection, .reader, .documentationPageSection, .aboutPageSection"
        );
        elementsToDelete.forEach(node => {
          node.classList.add("hidden");
        });
  
        document.querySelector(".footerRights").classList.remove("hidden");
    document.querySelector(".footerArticleLink").classList.add("hidden");
  
        document.querySelector(".jumbo").classList.add("hidden");
      });
    });
  }

  export {stylesSidebarSelection}