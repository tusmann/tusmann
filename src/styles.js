import bauhaus from "./images/bauhaus.svg";
import aldus_leaf from "./images/aldus_leaf.svg";
import sakura from "./images/sakura.svg";
import die from "./images/die.svg";
import manuzioLogic from "./manuzio";
import dungeonLogic from "./dungeon";

const styles = [
    {
      name: "manuzio",
      icon: aldus_leaf,
      logic: manuzioLogic
    },
    {
      name: "rimpa",
      icon: sakura
    },
    {
      name: "third",
      icon: bauhaus
    },
    {
      name: "dungeon",
      icon: die,
      logic: dungeonLogic
    },
    {
      name: "fifth",
      icon: ""
    },
    {
      name: "sixth",
      icon: ""
    }
  ];

export default styles;