function rimpaLogic() {
  const image = document.querySelectorAll(".reader figure img");

  image.forEach(node => {
    const imageParent = node.parentNode
    const backgroundColorDiv = document.createElement("div");
    backgroundColorDiv.classList.add("image-background-color");
    imageParent.replaceChild(backgroundColorDiv, node)
    backgroundColorDiv.appendChild(node)
        // node.insertAdjacentElement("beforebegin", backgroundColorDiv);
  });
}

export default rimpaLogic;
