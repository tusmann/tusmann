import styles from "./styles";

function applyCustomStyleLogic(){
    styles.forEach(style => {
        if (document.querySelector(".reader").classList.contains(style.name)){
            if (typeof style.logic !== 'undefined')
                style.logic();
        }
    })
}

export {applyCustomStyleLogic}