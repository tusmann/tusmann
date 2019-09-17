import styles from "./styles";

function applyCustomStyleLogic(article){
    styles.forEach(style => {
        if (document.querySelector(".reader").classList.contains(style.name)){
            if (typeof style.logic !== 'undefined')
                style.logic(article);
        }
    })
}

export {applyCustomStyleLogic}