(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const BACKGROUNDPIC = {
  displayPic () {
    let backgroundImage = document.createElement("img");
    backgroundImage.setAttribute("src", "../images/profilePicBlackBkgrnd.jpg");
    backgroundImage.setAttribute("id", "backgroundImage");
    document.body.appendChild(backgroundImage);
  }
};

module.exports = BACKGROUNDPIC;
},{}],2:[function(require,module,exports){
const ALERT = {
  message () {
    alert("This link is currently being redesigned. Please check out my github page for development examples.");
  }
};

module.exports = ALERT;
},{}],3:[function(require,module,exports){
const BACKGROUNDPIC = require("./backgroundPic");
const NAVBAR = require("./navBar");
const PRINTINFO = require("./printToDom");

BACKGROUNDPIC.displayPic();
NAVBAR.create();
PRINTINFO.nameBlock();
PRINTINFO.jobTitle();
},{"./backgroundPic":1,"./navBar":4,"./printToDom":6}],4:[function(require,module,exports){
const NAVBAR = {
  create () {
    let placeHolder = document.querySelector("#navBar");
    placeHolder.innerHTML = `
    <a href="mailto:brad@braddavistech.com" class="navbarA"><img src="../images/email.png" class="navButton" alt="Email Brad"></a>
    <a href="https://www.linkedin.com/in/braddavistech/" target="_blank" class="navbarA"><img src="../images/linkedIn.png" class="navButton" alt="LikedIn"></a>
    <a href="https://github.com/braddavistech" target="_blank" class="navbarA"><img src="../images/github.png" class="navButton" alt="GitHub"></a>
    <a href="https://www.facebook.com/brad.davis.54379236" target="_blank" class="navbarA"><img src="../images/facebook.png" class="navButton" alt="Facebook"></a>
    `;
  }
};

module.exports = NAVBAR;
},{}],5:[function(require,module,exports){
const portfolioItems = [
  {
    name: "Daily Journal",
    text: "This was a project that I created at Nashville Software School. It allows the user to input journal entries and select an instructor, a mood, and tag names. It saves the entries through an API Post call and then uses Fetch to grab all entries and render to the page. It also allows the user to sort their entries through the moods input.",
    github: "https://github.com/braddavistech/NSS_Daily_Journal",
    languages: ["JavaScript", "jQuery", "HTML", "CSS", "Github", "Git", "Grunt", "Node", "Slack", "VS"],
    img: ["../images/dj1.jpg", "../images/dj2.jpg"]
  },
  {
    name: "Welcome to Nashville",
    text: "This was a project that my team created at Nashville Software School. It allows the user to search for restaurants, Ticketmaster events, Metro-Nashville parks, and Eventbrite events. This application uses continuous API calls to the different databases to get up-to-date information. It also has the ability to save your created itineraries and display past itineraries through a local json file.",
    github: "https://github.com/braddavistech/Welcome_To_Nashville",
    languages: ["JavaScript", "HTML", "CSS", "Github", "Git", "Grunt", "Node", "Slack", "VS"],
    img: ["../images/nashville1.jpg", "../images/nashville2.jpg"]
  },
  {
    name: "Lift Calculator",
    text: "This was a project that was my first experience with JavaScript. It allows a user to input data related to an aircraft's flight properties and atmospheric conditions to return the amount of lift that this aircraft would have. This application is a single-file application with stylings and script inside of the HTML.",
    github: "https://github.com/braddavistech/AerodynamicsAndLiftCalculator",
    languages: ["JavaScript", "HTML", "CSS", "Github", "Atom"],
    img: ["../images/liftCalc.jpg"]
  }
];

const PORTFOLIO = {
  printItems() {
    $("#nameBlock").hide();
    $("#backgroundImage").hide();
    let homeLink = document.createElement("a");
    homeLink.setAttribute("href", "https://www.braddavistech.com");
    homeLink.innerHTML = "<img src=\"../images/BDTechLogo.jpg\" id=\"homeIcon\">";
    document.getElementById("navBar").appendChild(homeLink);
    let placeHolder = document.body;
    portfolioItems.forEach(item => {
      let portfolioEntry = `
        <div class="indivPort">
        <h1 class="portfolioTitle">${item.name}</h1>`;
      item.img.forEach(pic => {
        portfolioEntry += `
        <img class="portfolioPic" src="${pic}">`;
      });
      portfolioEntry += `
        <p class="itemDescription">${item.text}</p>
        <h3 class="languageTitle">TECHNOLOGIES</h3>`;
      item.languages.forEach(language => {
        switch (language) {
          case "JavaScript":
            portfolioEntry += `<img src="../images/jsimage.jpg" class="languagePic" alt="${language}">`;
            break;
          case "CSS":
            portfolioEntry += `<img src="../images/css3image.jpg" class="languagePic" alt="${language}">`;
            break;
          case "Github":
            portfolioEntry += `<img src="../images/githubimage.jpg" class="languagePic" alt="${language}">`;
            break;
          case "Git":
            portfolioEntry += `<img src="../images/gitimage.jpg" class="languagePic" alt="${language}">`;
            break;
          case "Grunt":
            portfolioEntry += `<img src="../images/gruntimage.jpg" class="languagePic" alt="${language}">`;
            break;
          case "HTML":
            portfolioEntry += `<img src="../images/html5image.jpg" class="languagePic" alt="${language}">`;
            break;
          case "jQuery":
            portfolioEntry += `<img src="../images/jQueryimage.jpg" class="languagePic" alt="${language}">`;
            break;
          case "Node":
            portfolioEntry += `<img src="../images/nodeimage.jpg" class="languagePic" alt="${language}">`;
            break;
          case "React":
            portfolioEntry += `<img src="../images/reactimage.jpg" class="languagePic" alt="${language}">`;
            break;
          case "Slack":
            portfolioEntry += `<img src="../images/slackimage.jpg" class="languagePic" alt="${language}">`;
            break;
          case "VS":
            portfolioEntry += `<img src="../images/vsimage.jpg" class="languagePic" alt="${language}">`;
            break;
          case "Atom":
            portfolioEntry += `<img src="../images/atomimage.jpg" class="languagePic" alt="${language}">`;
            break;
        }

      });
      portfolioEntry += `<a href="${item.github}" class="github" target="blank">See Github Code</a></div>`;
      placeHolder.innerHTML += portfolioEntry;
    });
  }
};

module.exports = PORTFOLIO;
},{}],6:[function(require,module,exports){
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
},{"./construction":2,"./personalPortfolio":5}]},{},[3]);
