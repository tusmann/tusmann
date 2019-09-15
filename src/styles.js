import bauhaus from "./images/bauhaus.svg";
import aldus_leaf from "./images/aldus_leaf.svg";
import sakura from "./images/sakura.svg";
import die from "./images/die.svg";
import rolling from "./images/rollingstones.svg";
import manuzioLogic from "./manuzio";
import dungeonLogic from "./dungeon";
import rimpaLogic from "./rimpa";
import twentyLogic from "./2020";
import rollingDom from "./rollingDom";

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
      icon: rolling,
      logic: rollingDom
    },
    {
      name: "sixth",
      icon: "",
      logic: twentyLogic
    }
  ];

export default styles;