function manuzioLogic() {
  function insertTriangles() {
    const sectionElement = document.querySelectorAll(".reader section");

    sectionElement.forEach(node => {
      //quando vera ho trovato figlio idoneo
      var checkChildren = false;
      // quando falso ho trovato il secondo type
      var countP = 0;
      var i = 0;
      var sectionChildren = Array.from(node.children);

      while (i < sectionChildren.length && !checkChildren) {
        var childHeigt = sectionChildren[i].clientHeight;
        console.log(sectionChildren[i])
        console.log(childHeigt)
        if (sectionChildren[i].tagName == "P") {
          countP++;
        }
        checkChildren = Boolean(
          countP >= 2 &&
            childHeigt > 300 &&
            sectionChildren[i].tagName !== "FIGURE" &&
            "TABLE"
        );
        i++;
      }
      if (checkChildren) {
        i--;
       
        
        const leftTriangle = document.createElement("div");
        leftTriangle.classList.add("left-triangle-shape");
        const rightTriangle = document.createElement("div");
        rightTriangle.classList.add("right-triangle-shape");
        sectionChildren[i].insertAdjacentElement("beforebegin", leftTriangle);
        sectionChildren[i].insertAdjacentElement("beforebegin", rightTriangle);

        leftTriangle.style.height = childHeigt + "px";
        rightTriangle.style.height = childHeigt + "px";
      }
    });
  }
  insertTriangles();
}
export default manuzioLogic;
