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
        var childWidth = sectionChildren[i].clientWidth;
        if (sectionChildren[i].tagName == "P") {
          countP++;
        }
        checkChildren = Boolean(
          countP >= 2 &&
            childHeigt > 300 &&
            sectionChildren[i].tagName !== "FIGURE" &&
            sectionChildren[i].tagName !== "TABLE"
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

        leftTriangle.style.height = Math.min(childHeigt, 3 * childWidth) + "px";
        rightTriangle.style.height =
          Math.min(childHeigt, 3 * childWidth) + "px";
      }
    });
  }
  insertTriangles();

  function addCapital() {
    var sectionList = document.querySelectorAll(".reader section");

    sectionList.forEach(section => {
      var i = 0;
      var checkParagraph = false;
      var paragraphList = Array.from(section.children);

      while (i < paragraphList.length && !checkParagraph) {
        var pHeight = paragraphList[i].clientHeight;
        checkParagraph = Boolean(paragraphList[i].tagName == "P" && pHeight > 80);
        i++;
      }
      if (checkParagraph) {
        i--;
        paragraphList[i].classList.add("capital");
      }
    });
  }
  addCapital();
}

export default manuzioLogic;
