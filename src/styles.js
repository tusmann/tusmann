import bauhaus from "./images/bauhaus.svg";
import aldus_leaf from "./images/aldus_leaf.svg";
import sakura from "./images/sakura.svg";
<<<<<<< HEAD
import manuzioLogic from "./manuzio"
import rimpaLogic from "./rimpa"
=======
import manuzioLogic from "./manuzio";
import twentyLogic from "./2020";
import rollingDom from "./rollingDom"
>>>>>>> 8d2b8db6cfc5f56121df9926184b22cb026ab1f0

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
      name: "fourth",
      icon: ""
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