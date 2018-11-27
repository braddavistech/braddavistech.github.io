const PORTFOLIO = require("./personalPortfolio");
const ALERT = require("./construction");

const infoCategories = [
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
    location: "../images/Brad Davis 2019.pdf"
  }
];

const PRINTINFO = {
  nameBlock() {
    $("#nameBlock").html("<p id=\"nameTitle\">Brad Davis</p>")
  },
  jobTitle() {
    let placeHolder = document.getElementById("nameBlock");
    let newElement = document.createElement("p");
    newElement.setAttribute("id", "jobTitle");
    placeHolder.appendChild(newElement);
    let cursorEffect = document.createElement("p");
    cursorEffect.setAttribute("id", "cursor");
    cursorEffect.innerHTML = "&lowbar;";
    placeHolder.appendChild(cursorEffect);
    let runTypeWriter = true;
    let textPosition = 0;
    let jobTitleText = "Software Developer";
    let setTypeSpeed = 165; /* SET THE SPEED OF THE TEXT APPEARING*/
    function typeWriter() {
      if (runTypeWriter === true) {
        if (textPosition < jobTitleText.length) {
          let tempHolder = document.getElementById("jobTitle");
          tempHolder.innerHTML += jobTitleText.charAt(textPosition);
          textPosition++;
          setTimeout(typeWriter, setTypeSpeed); /* SETS THE DELAY TO RUN THE FUNCTION */
        } else {
          runTypeWriter = false;
          cursorEffect.innerHTML = "";
          PRINTINFO.optionsButton();
        }
      }
    }
    typeWriter();
  },
  optionsButton() {                               //sets more info button
    let placeHolder = document.getElementById("nameBlock");
    let deleteButtons = document.querySelectorAll(".mainMenuOptions");
    if (deleteButtons.length === 0) {               //checks to see if more info button is the only button
      let newElement = document.createElement("input");
      newElement.setAttribute("type", "button");
      newElement.setAttribute("class", "mainMenuOptions fadeIn");
      newElement.setAttribute("id", "mainInfo");
      newElement.setAttribute("value", "More Info");
      placeHolder.appendChild(newElement);
      document.getElementById("mainInfo").addEventListener("click", PRINTINFO.moreInfo);
    } else {                                      //removes all buttons and resume anchor from DOM
      let resume = document.getElementById("Resume");
      resume.parentNode.removeChild(resume);
      deleteButtons.forEach(button => {
        if (button.id === "Resume") {
          return ;
        } else if (button.id !== "mainInfo") {
          button.parentElement.removeChild(button);
        } else if (button.id === "mainInfo") {
          button.classList.remove("fadeOut");  //removes fadeOut animation from mainInfo button
          document.getElementById("mainInfo").removeEventListener("click", PRINTINFO.fadeOut);
        }
      });
      document.getElementById("mainInfo").addEventListener("click", PRINTINFO.moreInfo);
    }
  },
  fadeOut() {         //fades out all buttons and anchor except more info
    document.getElementById("mainInfo").setAttribute("value", "More Info");
    let resume = document.getElementById("Resume");
    resume.classList.replace("fadeIn", "fadeOut");
    let deleteButtons = document.querySelectorAll(".mainMenuOptions");
    deleteButtons.forEach(button => {
      if (button.id !== "mainInfo") {
        button.classList.replace("fadeIn", "fadeOut");
      }
    });
    setTimeout(PRINTINFO.optionsButton, 700); //sets pause to allow fadeOut animation to finish
  },
  moreInfo() {      //creates link buttons and anchor
    let placeHolder = document.getElementById("nameBlock");
    document.getElementById("mainInfo").setAttribute("value", "Hide Menu");
    document.getElementById("mainInfo").removeEventListener("click", PRINTINFO.moreInfo);
    document.getElementById("mainInfo").addEventListener("click", PRINTINFO.fadeOut);
    infoCategories.forEach(category => {
      if (category.id !== "Resume") {
        let infoCategory = document.createElement("input");
        infoCategory.setAttribute("type", "button");
        infoCategory.setAttribute("id", category.id);
        infoCategory.setAttribute("class", "mainMenuOptions fadeIn");
        infoCategory.setAttribute("value", category.name);
        placeHolder.appendChild(infoCategory);
      } else if (category.id === "Resume") {
        let infoCategory = document.createElement("a");
        infoCategory.setAttribute("id", category.id);
        infoCategory.setAttribute("class", "mainMenuOptions fadeIn");
        infoCategory.setAttribute("href", category.location);
        infoCategory.setAttribute("target", "blank");
        infoCategory.innerHTML = "View Resume";
        placeHolder.appendChild(infoCategory);
      }
    });
    infoCategories.forEach(button => {  //adds event listeners to buttons
      switch (button.id) {
        case "Portfolio":
          document.getElementById("Portfolio").addEventListener("click", PORTFOLIO.printItems);
          break;
        case "Websites":
          document.getElementById("Websites").addEventListener("click", ALERT.message);
          break;
        case "Bio":
          document.getElementById("Bio").addEventListener("click", ALERT.message);
          break;
      }
    });
  }
};

module.exports = PRINTINFO;