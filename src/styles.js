import bauhaus from "./images/bauhaus.svg";
import aldus_leaf from "./images/aldus_leaf.svg";
import sakura from "./images/sakura.svg";
<<<<<<< HEAD
import die from "./images/die.svg";
import manuzioLogic from "./manuzio";
import dungeonLogic from "./dungeon";
=======
import manuzioLogic from "./manuzio"
import rimpaLogic from "./rimpa"
import twentyLogic from "./2020";
import rollingDom from "./rollingDom"
>>>>>>> fb70e025dd78836fee2e0d9e5224274f3dc6f362

const styles = [
    {
      name: "manuzio",
      icon: aldus_leaf,
      logic: manuzioLogic
    },
    {
      name: "rimpa",
      icon: sakura,
      logic: rimpaLogic
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
      icon: "",
      logic: rollingDom
    },
    {
      name: "sixth",
      icon: "",
      logic: twentyLogic
    }
  ];

export default styles;