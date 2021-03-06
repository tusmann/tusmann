function rimpaLogic() {
  addColors();
  addBird();
}
function addColors() {
  const image = document.querySelectorAll(".reader figure img");
  const colorsArray = ["image-background-color-green", "image-background-color-blue", "image-background-color-red"]

  for (var i = 0; i < image.length; i++) {
    var currentImageElement = image[i]
    const imageParent = currentImageElement.parentNode
    const backgroundColorDiv = document.createElement("div");

    var currentColor = colorsArray[i % colorsArray.length]
    backgroundColorDiv.classList.add(currentColor);
    imageParent.replaceChild(backgroundColorDiv, currentImageElement)
    backgroundColorDiv.appendChild(currentImageElement)
  }
}
function addBird() {
  const header = document.querySelector(".reader header")
  const headerChildren = Array.from(header.children)
  if (headerChildren.every(threshold)) {
    header.classList.add("bird")
  }
}


function threshold(element, index, array) {
  if (element.tagName !== "FIGURE" && element.tagName !== "IMG" && element.tagName !== "TABLE") {
    return element.tagName 
  }
}

export default rimpaLogic;
