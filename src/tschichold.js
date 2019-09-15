function tschicholdLogic(){
    var element = document.querySelector('meta[property~="dc:publisher"]');
    var content = element && element.getAttribute("content");
    console.log(content);
}

export default tschicholdLogic;