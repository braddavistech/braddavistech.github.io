const PORTFOLIO = require("./personalPortfolio");
const ALERT = require("./construction");

infoCategories = [
  {
    name: "Personal Portfolio",
    id: "Portfolio",
  },
  {
    name: "Professional Websites",
    id: "Websites",
  },
  {
    name: "Personal Bio",
    id: "Bio",
  },
  {
    name: "Resume",
    id: "Resume",
  }
];

const PRINTINFO = {
  nameBlock () {
    $("#nameBlock").html("<p id=\"nameTitle\">Brad Davis</p>")
  },
  jobTitle () {
    let placeHolder = document.getElementById("nameBlock");
    let newElement = document.createElement("p");
    newElement.setAttribute("id", "jobTitle");
    placeHolder.appendChild(newElement);
    let cursorEffect = document.createElement("p");
    cursorEffect.setAttribute("id", "cursor");
    cursorEffect.innerHTML = "&UnderBracket;";
    placeHolder.appendChild(cursorEffect);
    let runTypeWriter = true;
    let textPosition = 0;
    let jobTitleText = "Junior Web Developer";
    let setTypeSpeed = 165; /* SET THE SPEED OF THE TEXT APPEARING*/
    function typeWriter() {
      if (runTypeWriter === true) {
        if (textPosition < jobTitleText.length) {
          let tempHolder = document.getElementById("jobTitle");
          tempHolder.innerHTML += jobTitleText.charAt(textPosition);
          textPosition++;
          setTimeout(typeWriter, setTypeSpeed); /* SETS THE DELAY TO RUN THE FUNCTION */
        } else {
          runtTypeWriter = false;
          cursorEffect.innerHTML = "";
          PRINTINFO.optionsButton();
        }
      }
    }
    typeWriter ();
  },
  optionsButton () {
    let placeHolder = document.getElementById("nameBlock");
    let deleteButtons = document.querySelectorAll(".mainMenuOptions");
    if (deleteButtons.length === 0) {
    let newElement = document.createElement("input");
    newElement.setAttribute("type", "button");
    newElement.setAttribute("class", "mainMenuOptions fadeIn");
    newElement.setAttribute("id", "mainInfo");
    newElement.setAttribute("value", "More Info");
    placeHolder.appendChild(newElement);
    document.getElementById("mainInfo").addEventListener("click", PRINTINFO.moreInfo);
    } else {
    deleteButtons.forEach(button => {
      if (button.id !== "mainInfo") {
        button.parentElement.removeChild(button)
      } else {
        button.setAttribute("value", "More Info");
        button.classList.remove("fadeOut");
        document.getElementById("mainInfo").removeEventListener("click", PRINTINFO.fadeOut);
      }
    });
    document.getElementById("mainInfo").addEventListener("click", PRINTINFO.moreInfo);
    }
  },
  fadeOut () {
    let deleteButtons = document.querySelectorAll(".mainMenuOptions");
    deleteButtons.forEach(button => {
      if (button.id !== "mainInfo") {
        button.classList.replace("fadeIn", "fadeOut");
      }
    });
    setTimeout(PRINTINFO.optionsButton, 700);
  },
  moreInfo () {
    let placeHolder = document.getElementById("nameBlock");
    document.getElementById("mainInfo").setAttribute("value", "Hide Menu");
    document.getElementById("mainInfo").removeEventListener("click", PRINTINFO.moreInfo);
    document.getElementById("mainInfo").addEventListener("click", PRINTINFO.fadeOut);
    infoCategories.forEach(category => {
      let infoCategory = document.createElement("input");
      infoCategory.setAttribute("type", "button");
      infoCategory.setAttribute("id", category.id);
      infoCategory.setAttribute("class", "mainMenuOptions fadeIn");

      infoCategory.setAttribute("value", category.name);
      placeHolder.appendChild(infoCategory);
    });
    infoCategories.forEach(button => {
      switch(button.id) {
        case "Portfolio":
          document.getElementById("Portfolio").addEventListener("click", PORTFOLIO.printItems);
          break;
        case "Websites":
        document.getElementById("Websites").addEventListener("click", ALERT.message);
          break;
        case "Bio":
        document.getElementById("Bio").addEventListener("click", ALERT.message);
          break;
        case "Resume":
        document.getElementById("Resume").addEventListener("click", ALERT.message);
          break;
      }
   });
  }
};

module.exports = PRINTINFO;