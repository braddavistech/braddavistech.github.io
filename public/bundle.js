(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

const BACKGROUNDPIC = {
  displayPic() {
    let backgroundImage = document.createElement("img");
    backgroundImage.setAttribute("src", "../images/profilePicBlackBkgrnd.jpg");
    backgroundImage.setAttribute("id", "backgroundImage");
    document.body.appendChild(backgroundImage);
  }

};
module.exports = BACKGROUNDPIC;

},{}],2:[function(require,module,exports){
"use strict";

const ALERT = {
  message() {
    alert("This link is currently being redesigned and should be running shortly. Please check out my github page for development examples.");
  }

};
module.exports = ALERT;

},{}],3:[function(require,module,exports){
"use strict";

const BACKGROUNDPIC = require("./backgroundPic");

const NAVBAR = require("./navBar");

const PRINTINFO = require("./printToDom");

BACKGROUNDPIC.displayPic();
NAVBAR.create();
PRINTINFO.nameBlock();
PRINTINFO.jobTitle();

},{"./backgroundPic":1,"./navBar":4,"./printToDom":6}],4:[function(require,module,exports){
"use strict";

const NAVBAR = {
  create() {
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
"use strict";

const portfolioItems = [{
  name: "Daily Journal",
  text: "This was a project that I created at Nashville Software School. It allows the user to input journal entries and select an instructor, a mood, and tag names. It saves the entries through an API Post call and then uses Fetch to grab all entries and render to the page. It also allows the user to sort their entries through the moods input.",
  github: "https://github.com/braddavistech/NSS_Daily_Journal",
  languages: ["JavaScript", "jQuery", "HTML", "CSS", "Github", "Browserify", "Git", "Grunt", "Node", "Slack", "VS"],
  img: ["../images/dj1.jpg", "../images/dj2.jpg"]
}, {
  name: "Welcome to Nashville",
  text: "This was a project that my team created at Nashville Software School. It allows the user to search for restaurants, Ticketmaster events, Metro-Nashville parks, and Eventbrite events. This application uses continuous API calls to the different databases to get up-to-date information. It also has the ability to save your created itineraries and display past itineraries through a local json file.",
  github: "https://github.com/braddavistech/Welcome_To_Nashville",
  languages: ["JavaScript", "HTML", "CSS", "Github", "Browserify", "Git", "Grunt", "Node", "Slack", "VS"],
  img: ["../images/nashville1.jpg", "../images/nashville2.jpg"]
}, {
  name: "Lift Calculator",
  text: "This was a project that was my first experience with JavaScript. It allows a user to input data related to an aircraft's flight properties and atmospheric conditions to return the amount of lift that this aircraft would have. This application is a single-file application with stylings and script inside of the HTML.",
  github: "https://github.com/braddavistech/AerodynamicsAndLiftCalculator",
  languages: ["JavaScript", "HTML", "CSS", "Github", "Atom"],
  img: ["../images/liftCalc.jpg"]
}];
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

          case "Browserify":
            portfolioEntry += `<img src="../images/browserifyimage.jpg" class="languagePic" alt="${language}">`;
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
"use strict";

const PORTFOLIO = require("./personalPortfolio");

const ALERT = require("./construction");

const infoCategories = [{
  name: "Personal Test 2 Portfolio",
  id: "Portfolio"
}, {
  name: "Professional Websites",
  id: "Websites"
}, {
  name: "Personal Bio",
  id: "Bio"
}, {
  name: "Resume",
  id: "Resume"
}];
const PRINTINFO = {
  nameBlock() {
    $("#nameBlock").html("<p id=\"nameTitle\">Brad Davis</p>");
  },

  jobTitle() {
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
    let setTypeSpeed = 165;
    /* SET THE SPEED OF THE TEXT APPEARING*/

    function typeWriter() {
      if (runTypeWriter === true) {
        if (textPosition < jobTitleText.length) {
          let tempHolder = document.getElementById("jobTitle");
          tempHolder.innerHTML += jobTitleText.charAt(textPosition);
          textPosition++;
          setTimeout(typeWriter, setTypeSpeed);
          /* SETS THE DELAY TO RUN THE FUNCTION */
        } else {
          runTypeWriter = false;
          cursorEffect.innerHTML = "";
          PRINTINFO.optionsButton();
        }
      }
    }

    typeWriter();
  },

  optionsButton() {
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
          button.parentElement.removeChild(button);
        } else {
          button.setAttribute("value", "More Info");
          button.classList.remove("fadeOut");
          document.getElementById("mainInfo").removeEventListener("click", PRINTINFO.fadeOut);
        }
      });
      document.getElementById("mainInfo").addEventListener("click", PRINTINFO.moreInfo);
    }
  },

  fadeOut() {
    let deleteButtons = document.querySelectorAll(".mainMenuOptions");
    deleteButtons.forEach(button => {
      if (button.id !== "mainInfo") {
        button.classList.replace("fadeIn", "fadeOut");
      }
    });
    setTimeout(PRINTINFO.optionsButton, 700);
  },

  moreInfo() {
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

        case "Resume":
          document.getElementById("Resume").addEventListener("click", ALERT.message);
          break;
      }
    });
  }

};
module.exports = PRINTINFO;

},{"./construction":2,"./personalPortfolio":5}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2JhY2tncm91bmRQaWMuanMiLCIuLi9zY3JpcHRzL2NvbnN0cnVjdGlvbi5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvbmF2QmFyLmpzIiwiLi4vc2NyaXB0cy9wZXJzb25hbFBvcnRmb2xpby5qcyIsIi4uL3NjcmlwdHMvcHJpbnRUb0RvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsTUFBTSxhQUFhLEdBQUc7QUFDcEIsRUFBQSxVQUFVLEdBQUk7QUFDWixRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUF0QjtBQUNBLElBQUEsZUFBZSxDQUFDLFlBQWhCLENBQTZCLEtBQTdCLEVBQW9DLHFDQUFwQztBQUNBLElBQUEsZUFBZSxDQUFDLFlBQWhCLENBQTZCLElBQTdCLEVBQW1DLGlCQUFuQztBQUNBLElBQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxXQUFkLENBQTBCLGVBQTFCO0FBQ0Q7O0FBTm1CLENBQXRCO0FBU0EsTUFBTSxDQUFDLE9BQVAsR0FBaUIsYUFBakI7Ozs7O0FDVEEsTUFBTSxLQUFLLEdBQUc7QUFDWixFQUFBLE9BQU8sR0FBSTtBQUNULElBQUEsS0FBSyxDQUFDLGtJQUFELENBQUw7QUFDRDs7QUFIVyxDQUFkO0FBTUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsS0FBakI7Ozs7O0FDTkEsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGlCQUFELENBQTdCOztBQUNBLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUNBLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUVBLGFBQWEsQ0FBQyxVQUFkO0FBQ0EsTUFBTSxDQUFDLE1BQVA7QUFDQSxTQUFTLENBQUMsU0FBVjtBQUNBLFNBQVMsQ0FBQyxRQUFWOzs7OztBQ1BBLE1BQU0sTUFBTSxHQUFHO0FBQ2IsRUFBQSxNQUFNLEdBQUk7QUFDUixRQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFsQjtBQUNBLElBQUEsV0FBVyxDQUFDLFNBQVosR0FBeUI7Ozs7O0tBQXpCO0FBTUQ7O0FBVFksQ0FBZjtBQVlBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLE1BQWpCOzs7OztBQ1pBLE1BQU0sY0FBYyxHQUFHLENBQ3JCO0FBQ0UsRUFBQSxJQUFJLEVBQUUsZUFEUjtBQUVFLEVBQUEsSUFBSSxFQUFFLG1WQUZSO0FBR0UsRUFBQSxNQUFNLEVBQUUsb0RBSFY7QUFJRSxFQUFBLFNBQVMsRUFBRSxDQUFDLFlBQUQsRUFBZSxRQUFmLEVBQXlCLE1BQXpCLEVBQWlDLEtBQWpDLEVBQXdDLFFBQXhDLEVBQWtELFlBQWxELEVBQWdFLEtBQWhFLEVBQXVFLE9BQXZFLEVBQWdGLE1BQWhGLEVBQXdGLE9BQXhGLEVBQWlHLElBQWpHLENBSmI7QUFLRSxFQUFBLEdBQUcsRUFBRSxDQUFDLG1CQUFELEVBQXNCLG1CQUF0QjtBQUxQLENBRHFCLEVBUXJCO0FBQ0UsRUFBQSxJQUFJLEVBQUUsc0JBRFI7QUFFRSxFQUFBLElBQUksRUFBRSw4WUFGUjtBQUdFLEVBQUEsTUFBTSxFQUFFLHVEQUhWO0FBSUUsRUFBQSxTQUFTLEVBQUUsQ0FBQyxZQUFELEVBQWUsTUFBZixFQUF1QixLQUF2QixFQUE4QixRQUE5QixFQUF3QyxZQUF4QyxFQUFzRCxLQUF0RCxFQUE2RCxPQUE3RCxFQUFzRSxNQUF0RSxFQUE4RSxPQUE5RSxFQUF1RixJQUF2RixDQUpiO0FBS0UsRUFBQSxHQUFHLEVBQUUsQ0FBQywwQkFBRCxFQUE2QiwwQkFBN0I7QUFMUCxDQVJxQixFQWVyQjtBQUNFLEVBQUEsSUFBSSxFQUFFLGlCQURSO0FBRUUsRUFBQSxJQUFJLEVBQUUsOFRBRlI7QUFHRSxFQUFBLE1BQU0sRUFBRSxnRUFIVjtBQUlFLEVBQUEsU0FBUyxFQUFFLENBQUMsWUFBRCxFQUFlLE1BQWYsRUFBdUIsS0FBdkIsRUFBOEIsUUFBOUIsRUFBd0MsTUFBeEMsQ0FKYjtBQUtFLEVBQUEsR0FBRyxFQUFFLENBQUMsd0JBQUQ7QUFMUCxDQWZxQixDQUF2QjtBQXdCQSxNQUFNLFNBQVMsR0FBRztBQUNoQixFQUFBLFVBQVUsR0FBRztBQUNYLElBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixJQUFoQjtBQUNBLElBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0IsSUFBdEI7QUFDQSxRQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFmO0FBQ0EsSUFBQSxRQUFRLENBQUMsWUFBVCxDQUFzQixNQUF0QixFQUE4QiwrQkFBOUI7QUFDQSxJQUFBLFFBQVEsQ0FBQyxTQUFULEdBQXFCLHdEQUFyQjtBQUNBLElBQUEsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0MsV0FBbEMsQ0FBOEMsUUFBOUM7QUFDQSxRQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsSUFBM0I7QUFDQSxJQUFBLGNBQWMsQ0FBQyxPQUFmLENBQXVCLElBQUksSUFBSTtBQUM3QixVQUFJLGNBQWMsR0FBSTs7cUNBRVMsSUFBSSxDQUFDLElBQUssT0FGekM7QUFHQSxNQUFBLElBQUksQ0FBQyxHQUFMLENBQVMsT0FBVCxDQUFpQixHQUFHLElBQUk7QUFDdEIsUUFBQSxjQUFjLElBQUs7eUNBQ2MsR0FBSSxJQURyQztBQUVELE9BSEQ7QUFJQSxNQUFBLGNBQWMsSUFBSztxQ0FDWSxJQUFJLENBQUMsSUFBSztvREFEekM7QUFHQSxNQUFBLElBQUksQ0FBQyxTQUFMLENBQWUsT0FBZixDQUF1QixRQUFRLElBQUk7QUFDakMsZ0JBQVEsUUFBUjtBQUNFLGVBQUssWUFBTDtBQUNFLFlBQUEsY0FBYyxJQUFLLDZEQUE0RCxRQUFTLElBQXhGO0FBQ0E7O0FBQ0YsZUFBSyxLQUFMO0FBQ0UsWUFBQSxjQUFjLElBQUssK0RBQThELFFBQVMsSUFBMUY7QUFDQTs7QUFDRixlQUFLLFFBQUw7QUFDRSxZQUFBLGNBQWMsSUFBSyxpRUFBZ0UsUUFBUyxJQUE1RjtBQUNBOztBQUNGLGVBQUssS0FBTDtBQUNFLFlBQUEsY0FBYyxJQUFLLDhEQUE2RCxRQUFTLElBQXpGO0FBQ0E7O0FBQ0YsZUFBSyxPQUFMO0FBQ0UsWUFBQSxjQUFjLElBQUssZ0VBQStELFFBQVMsSUFBM0Y7QUFDQTs7QUFDRixlQUFLLE1BQUw7QUFDRSxZQUFBLGNBQWMsSUFBSyxnRUFBK0QsUUFBUyxJQUEzRjtBQUNBOztBQUNGLGVBQUssUUFBTDtBQUNFLFlBQUEsY0FBYyxJQUFLLGlFQUFnRSxRQUFTLElBQTVGO0FBQ0E7O0FBQ0YsZUFBSyxNQUFMO0FBQ0UsWUFBQSxjQUFjLElBQUssK0RBQThELFFBQVMsSUFBMUY7QUFDQTs7QUFDRixlQUFLLE9BQUw7QUFDRSxZQUFBLGNBQWMsSUFBSyxnRUFBK0QsUUFBUyxJQUEzRjtBQUNBOztBQUNGLGVBQUssT0FBTDtBQUNFLFlBQUEsY0FBYyxJQUFLLGdFQUErRCxRQUFTLElBQTNGO0FBQ0E7O0FBQ0YsZUFBSyxJQUFMO0FBQ0UsWUFBQSxjQUFjLElBQUssNkRBQTRELFFBQVMsSUFBeEY7QUFDQTs7QUFDRixlQUFLLE1BQUw7QUFDRSxZQUFBLGNBQWMsSUFBSywrREFBOEQsUUFBUyxJQUExRjtBQUNBOztBQUNGLGVBQUssWUFBTDtBQUNFLFlBQUEsY0FBYyxJQUFLLHFFQUFvRSxRQUFTLElBQWhHO0FBQ0E7QUF2Q0o7QUF5Q0QsT0ExQ0Q7QUEyQ0EsTUFBQSxjQUFjLElBQUssWUFBVyxJQUFJLENBQUMsTUFBTywyREFBMUM7QUFDQSxNQUFBLFdBQVcsQ0FBQyxTQUFaLElBQXlCLGNBQXpCO0FBQ0QsS0F4REQ7QUF5REQ7O0FBbEVlLENBQWxCO0FBcUVBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQWpCOzs7OztBQzdGQSxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMscUJBQUQsQ0FBekI7O0FBQ0EsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGdCQUFELENBQXJCOztBQUVBLE1BQU0sY0FBYyxHQUFHLENBQ3JCO0FBQ0UsRUFBQSxJQUFJLEVBQUUsMkJBRFI7QUFFRSxFQUFBLEVBQUUsRUFBRTtBQUZOLENBRHFCLEVBS3JCO0FBQ0UsRUFBQSxJQUFJLEVBQUUsdUJBRFI7QUFFRSxFQUFBLEVBQUUsRUFBRTtBQUZOLENBTHFCLEVBU3JCO0FBQ0UsRUFBQSxJQUFJLEVBQUUsY0FEUjtBQUVFLEVBQUEsRUFBRSxFQUFFO0FBRk4sQ0FUcUIsRUFhckI7QUFDRSxFQUFBLElBQUksRUFBRSxRQURSO0FBRUUsRUFBQSxFQUFFLEVBQUU7QUFGTixDQWJxQixDQUF2QjtBQW1CQSxNQUFNLFNBQVMsR0FBRztBQUNoQixFQUFBLFNBQVMsR0FBSTtBQUNYLElBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixJQUFoQixDQUFxQixvQ0FBckI7QUFDRCxHQUhlOztBQUloQixFQUFBLFFBQVEsR0FBSTtBQUNWLFFBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFdBQXhCLENBQWxCO0FBQ0EsUUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBakI7QUFDQSxJQUFBLFVBQVUsQ0FBQyxZQUFYLENBQXdCLElBQXhCLEVBQThCLFVBQTlCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixVQUF4QjtBQUNBLFFBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQW5CO0FBQ0EsSUFBQSxZQUFZLENBQUMsWUFBYixDQUEwQixJQUExQixFQUFnQyxRQUFoQztBQUNBLElBQUEsWUFBWSxDQUFDLFNBQWIsR0FBeUIsZ0JBQXpCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixZQUF4QjtBQUNBLFFBQUksYUFBYSxHQUFHLElBQXBCO0FBQ0EsUUFBSSxZQUFZLEdBQUcsQ0FBbkI7QUFDQSxRQUFJLFlBQVksR0FBRyxzQkFBbkI7QUFDQSxRQUFJLFlBQVksR0FBRyxHQUFuQjtBQUF3Qjs7QUFDeEIsYUFBUyxVQUFULEdBQXNCO0FBQ3BCLFVBQUksYUFBYSxLQUFLLElBQXRCLEVBQTRCO0FBQzFCLFlBQUksWUFBWSxHQUFHLFlBQVksQ0FBQyxNQUFoQyxFQUF3QztBQUN0QyxjQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixVQUF4QixDQUFqQjtBQUNBLFVBQUEsVUFBVSxDQUFDLFNBQVgsSUFBd0IsWUFBWSxDQUFDLE1BQWIsQ0FBb0IsWUFBcEIsQ0FBeEI7QUFDQSxVQUFBLFlBQVk7QUFDWixVQUFBLFVBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUFWO0FBQXNDO0FBQ3ZDLFNBTEQsTUFLTztBQUNMLFVBQUEsYUFBYSxHQUFHLEtBQWhCO0FBQ0EsVUFBQSxZQUFZLENBQUMsU0FBYixHQUF5QixFQUF6QjtBQUNBLFVBQUEsU0FBUyxDQUFDLGFBQVY7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0QsSUFBQSxVQUFVO0FBQ1gsR0FoQ2U7O0FBaUNoQixFQUFBLGFBQWEsR0FBSTtBQUNmLFFBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFdBQXhCLENBQWxCO0FBQ0EsUUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLGtCQUExQixDQUFwQjs7QUFDQSxRQUFJLGFBQWEsQ0FBQyxNQUFkLEtBQXlCLENBQTdCLEVBQWdDO0FBQ2hDLFVBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLENBQWpCO0FBQ0EsTUFBQSxVQUFVLENBQUMsWUFBWCxDQUF3QixNQUF4QixFQUFnQyxRQUFoQztBQUNBLE1BQUEsVUFBVSxDQUFDLFlBQVgsQ0FBd0IsT0FBeEIsRUFBaUMsd0JBQWpDO0FBQ0EsTUFBQSxVQUFVLENBQUMsWUFBWCxDQUF3QixJQUF4QixFQUE4QixVQUE5QjtBQUNBLE1BQUEsVUFBVSxDQUFDLFlBQVgsQ0FBd0IsT0FBeEIsRUFBaUMsV0FBakM7QUFDQSxNQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLFVBQXhCO0FBQ0EsTUFBQSxRQUFRLENBQUMsY0FBVCxDQUF3QixVQUF4QixFQUFvQyxnQkFBcEMsQ0FBcUQsT0FBckQsRUFBOEQsU0FBUyxDQUFDLFFBQXhFO0FBQ0MsS0FSRCxNQVFPO0FBQ1AsTUFBQSxhQUFhLENBQUMsT0FBZCxDQUFzQixNQUFNLElBQUk7QUFDOUIsWUFBSSxNQUFNLENBQUMsRUFBUCxLQUFjLFVBQWxCLEVBQThCO0FBQzVCLFVBQUEsTUFBTSxDQUFDLGFBQVAsQ0FBcUIsV0FBckIsQ0FBaUMsTUFBakM7QUFDRCxTQUZELE1BRU87QUFDTCxVQUFBLE1BQU0sQ0FBQyxZQUFQLENBQW9CLE9BQXBCLEVBQTZCLFdBQTdCO0FBQ0EsVUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixNQUFqQixDQUF3QixTQUF4QjtBQUNBLFVBQUEsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0MsbUJBQXBDLENBQXdELE9BQXhELEVBQWlFLFNBQVMsQ0FBQyxPQUEzRTtBQUNEO0FBQ0YsT0FSRDtBQVNBLE1BQUEsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0MsZ0JBQXBDLENBQXFELE9BQXJELEVBQThELFNBQVMsQ0FBQyxRQUF4RTtBQUNDO0FBQ0YsR0F4RGU7O0FBeURoQixFQUFBLE9BQU8sR0FBSTtBQUNULFFBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixrQkFBMUIsQ0FBcEI7QUFDQSxJQUFBLGFBQWEsQ0FBQyxPQUFkLENBQXNCLE1BQU0sSUFBSTtBQUM5QixVQUFJLE1BQU0sQ0FBQyxFQUFQLEtBQWMsVUFBbEIsRUFBOEI7QUFDNUIsUUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixPQUFqQixDQUF5QixRQUF6QixFQUFtQyxTQUFuQztBQUNEO0FBQ0YsS0FKRDtBQUtBLElBQUEsVUFBVSxDQUFDLFNBQVMsQ0FBQyxhQUFYLEVBQTBCLEdBQTFCLENBQVY7QUFDRCxHQWpFZTs7QUFrRWhCLEVBQUEsUUFBUSxHQUFJO0FBQ1YsUUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBbEI7QUFDQSxJQUFBLFFBQVEsQ0FBQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DLFlBQXBDLENBQWlELE9BQWpELEVBQTBELFdBQTFEO0FBQ0EsSUFBQSxRQUFRLENBQUMsY0FBVCxDQUF3QixVQUF4QixFQUFvQyxtQkFBcEMsQ0FBd0QsT0FBeEQsRUFBaUUsU0FBUyxDQUFDLFFBQTNFO0FBQ0EsSUFBQSxRQUFRLENBQUMsY0FBVCxDQUF3QixVQUF4QixFQUFvQyxnQkFBcEMsQ0FBcUQsT0FBckQsRUFBOEQsU0FBUyxDQUFDLE9BQXhFO0FBQ0EsSUFBQSxjQUFjLENBQUMsT0FBZixDQUF1QixRQUFRLElBQUk7QUFDakMsVUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbkI7QUFDQSxNQUFBLFlBQVksQ0FBQyxZQUFiLENBQTBCLE1BQTFCLEVBQWtDLFFBQWxDO0FBQ0EsTUFBQSxZQUFZLENBQUMsWUFBYixDQUEwQixJQUExQixFQUFnQyxRQUFRLENBQUMsRUFBekM7QUFDQSxNQUFBLFlBQVksQ0FBQyxZQUFiLENBQTBCLE9BQTFCLEVBQW1DLHdCQUFuQztBQUVBLE1BQUEsWUFBWSxDQUFDLFlBQWIsQ0FBMEIsT0FBMUIsRUFBbUMsUUFBUSxDQUFDLElBQTVDO0FBQ0EsTUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixZQUF4QjtBQUNELEtBUkQ7QUFTQSxJQUFBLGNBQWMsQ0FBQyxPQUFmLENBQXVCLE1BQU0sSUFBSTtBQUMvQixjQUFPLE1BQU0sQ0FBQyxFQUFkO0FBQ0UsYUFBSyxXQUFMO0FBQ0UsVUFBQSxRQUFRLENBQUMsY0FBVCxDQUF3QixXQUF4QixFQUFxQyxnQkFBckMsQ0FBc0QsT0FBdEQsRUFBK0QsU0FBUyxDQUFDLFVBQXpFO0FBQ0E7O0FBQ0YsYUFBSyxVQUFMO0FBQ0EsVUFBQSxRQUFRLENBQUMsY0FBVCxDQUF3QixVQUF4QixFQUFvQyxnQkFBcEMsQ0FBcUQsT0FBckQsRUFBOEQsS0FBSyxDQUFDLE9BQXBFO0FBQ0U7O0FBQ0YsYUFBSyxLQUFMO0FBQ0EsVUFBQSxRQUFRLENBQUMsY0FBVCxDQUF3QixLQUF4QixFQUErQixnQkFBL0IsQ0FBZ0QsT0FBaEQsRUFBeUQsS0FBSyxDQUFDLE9BQS9EO0FBQ0U7O0FBQ0YsYUFBSyxRQUFMO0FBQ0EsVUFBQSxRQUFRLENBQUMsY0FBVCxDQUF3QixRQUF4QixFQUFrQyxnQkFBbEMsQ0FBbUQsT0FBbkQsRUFBNEQsS0FBSyxDQUFDLE9BQWxFO0FBQ0U7QUFaSjtBQWNGLEtBZkE7QUFnQkQ7O0FBaEdlLENBQWxCO0FBbUdBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgQkFDS0dST1VORFBJQyA9IHtcbiAgZGlzcGxheVBpYyAoKSB7XG4gICAgbGV0IGJhY2tncm91bmRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYmFja2dyb3VuZEltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL2ltYWdlcy9wcm9maWxlUGljQmxhY2tCa2dybmQuanBnXCIpO1xuICAgIGJhY2tncm91bmRJbWFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJhY2tncm91bmRJbWFnZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhY2tncm91bmRJbWFnZSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQkFDS0dST1VORFBJQzsiLCJjb25zdCBBTEVSVCA9IHtcbiAgbWVzc2FnZSAoKSB7XG4gICAgYWxlcnQoXCJUaGlzIGxpbmsgaXMgY3VycmVudGx5IGJlaW5nIHJlZGVzaWduZWQgYW5kIHNob3VsZCBiZSBydW5uaW5nIHNob3J0bHkuIFBsZWFzZSBjaGVjayBvdXQgbXkgZ2l0aHViIHBhZ2UgZm9yIGRldmVsb3BtZW50IGV4YW1wbGVzLlwiKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBTEVSVDsiLCJjb25zdCBCQUNLR1JPVU5EUElDID0gcmVxdWlyZShcIi4vYmFja2dyb3VuZFBpY1wiKTtcbmNvbnN0IE5BVkJBUiA9IHJlcXVpcmUoXCIuL25hdkJhclwiKTtcbmNvbnN0IFBSSU5USU5GTyA9IHJlcXVpcmUoXCIuL3ByaW50VG9Eb21cIik7XG5cbkJBQ0tHUk9VTkRQSUMuZGlzcGxheVBpYygpO1xuTkFWQkFSLmNyZWF0ZSgpO1xuUFJJTlRJTkZPLm5hbWVCbG9jaygpO1xuUFJJTlRJTkZPLmpvYlRpdGxlKCk7IiwiY29uc3QgTkFWQkFSID0ge1xuICBjcmVhdGUgKCkge1xuICAgIGxldCBwbGFjZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2QmFyXCIpO1xuICAgIHBsYWNlSG9sZGVyLmlubmVySFRNTCA9IGBcbiAgICA8YSBocmVmPVwibWFpbHRvOmJyYWRAYnJhZGRhdmlzdGVjaC5jb21cIiBjbGFzcz1cIm5hdmJhckFcIj48aW1nIHNyYz1cIi4uL2ltYWdlcy9lbWFpbC5wbmdcIiBjbGFzcz1cIm5hdkJ1dHRvblwiIGFsdD1cIkVtYWlsIEJyYWRcIj48L2E+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9icmFkZGF2aXN0ZWNoL1wiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwibmF2YmFyQVwiPjxpbWcgc3JjPVwiLi4vaW1hZ2VzL2xpbmtlZEluLnBuZ1wiIGNsYXNzPVwibmF2QnV0dG9uXCIgYWx0PVwiTGlrZWRJblwiPjwvYT5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2JyYWRkYXZpc3RlY2hcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cIm5hdmJhckFcIj48aW1nIHNyYz1cIi4uL2ltYWdlcy9naXRodWIucG5nXCIgY2xhc3M9XCJuYXZCdXR0b25cIiBhbHQ9XCJHaXRIdWJcIj48L2E+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9icmFkLmRhdmlzLjU0Mzc5MjM2XCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJuYXZiYXJBXCI+PGltZyBzcmM9XCIuLi9pbWFnZXMvZmFjZWJvb2sucG5nXCIgY2xhc3M9XCJuYXZCdXR0b25cIiBhbHQ9XCJGYWNlYm9va1wiPjwvYT5cbiAgICBgO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVkJBUjsiLCJjb25zdCBwb3J0Zm9saW9JdGVtcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiRGFpbHkgSm91cm5hbFwiLFxuICAgIHRleHQ6IFwiVGhpcyB3YXMgYSBwcm9qZWN0IHRoYXQgSSBjcmVhdGVkIGF0IE5hc2h2aWxsZSBTb2Z0d2FyZSBTY2hvb2wuIEl0IGFsbG93cyB0aGUgdXNlciB0byBpbnB1dCBqb3VybmFsIGVudHJpZXMgYW5kIHNlbGVjdCBhbiBpbnN0cnVjdG9yLCBhIG1vb2QsIGFuZCB0YWcgbmFtZXMuIEl0IHNhdmVzIHRoZSBlbnRyaWVzIHRocm91Z2ggYW4gQVBJIFBvc3QgY2FsbCBhbmQgdGhlbiB1c2VzIEZldGNoIHRvIGdyYWIgYWxsIGVudHJpZXMgYW5kIHJlbmRlciB0byB0aGUgcGFnZS4gSXQgYWxzbyBhbGxvd3MgdGhlIHVzZXIgdG8gc29ydCB0aGVpciBlbnRyaWVzIHRocm91Z2ggdGhlIG1vb2RzIGlucHV0LlwiLFxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vYnJhZGRhdmlzdGVjaC9OU1NfRGFpbHlfSm91cm5hbFwiLFxuICAgIGxhbmd1YWdlczogW1wiSmF2YVNjcmlwdFwiLCBcImpRdWVyeVwiLCBcIkhUTUxcIiwgXCJDU1NcIiwgXCJHaXRodWJcIiwgXCJCcm93c2VyaWZ5XCIsIFwiR2l0XCIsIFwiR3J1bnRcIiwgXCJOb2RlXCIsIFwiU2xhY2tcIiwgXCJWU1wiXSxcbiAgICBpbWc6IFtcIi4uL2ltYWdlcy9kajEuanBnXCIsIFwiLi4vaW1hZ2VzL2RqMi5qcGdcIl1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiV2VsY29tZSB0byBOYXNodmlsbGVcIixcbiAgICB0ZXh0OiBcIlRoaXMgd2FzIGEgcHJvamVjdCB0aGF0IG15IHRlYW0gY3JlYXRlZCBhdCBOYXNodmlsbGUgU29mdHdhcmUgU2Nob29sLiBJdCBhbGxvd3MgdGhlIHVzZXIgdG8gc2VhcmNoIGZvciByZXN0YXVyYW50cywgVGlja2V0bWFzdGVyIGV2ZW50cywgTWV0cm8tTmFzaHZpbGxlIHBhcmtzLCBhbmQgRXZlbnRicml0ZSBldmVudHMuIFRoaXMgYXBwbGljYXRpb24gdXNlcyBjb250aW51b3VzIEFQSSBjYWxscyB0byB0aGUgZGlmZmVyZW50IGRhdGFiYXNlcyB0byBnZXQgdXAtdG8tZGF0ZSBpbmZvcm1hdGlvbi4gSXQgYWxzbyBoYXMgdGhlIGFiaWxpdHkgdG8gc2F2ZSB5b3VyIGNyZWF0ZWQgaXRpbmVyYXJpZXMgYW5kIGRpc3BsYXkgcGFzdCBpdGluZXJhcmllcyB0aHJvdWdoIGEgbG9jYWwganNvbiBmaWxlLlwiLFxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vYnJhZGRhdmlzdGVjaC9XZWxjb21lX1RvX05hc2h2aWxsZVwiLFxuICAgIGxhbmd1YWdlczogW1wiSmF2YVNjcmlwdFwiLCBcIkhUTUxcIiwgXCJDU1NcIiwgXCJHaXRodWJcIiwgXCJCcm93c2VyaWZ5XCIsIFwiR2l0XCIsIFwiR3J1bnRcIiwgXCJOb2RlXCIsIFwiU2xhY2tcIiwgXCJWU1wiXSxcbiAgICBpbWc6IFtcIi4uL2ltYWdlcy9uYXNodmlsbGUxLmpwZ1wiLCBcIi4uL2ltYWdlcy9uYXNodmlsbGUyLmpwZ1wiXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMaWZ0IENhbGN1bGF0b3JcIixcbiAgICB0ZXh0OiBcIlRoaXMgd2FzIGEgcHJvamVjdCB0aGF0IHdhcyBteSBmaXJzdCBleHBlcmllbmNlIHdpdGggSmF2YVNjcmlwdC4gSXQgYWxsb3dzIGEgdXNlciB0byBpbnB1dCBkYXRhIHJlbGF0ZWQgdG8gYW4gYWlyY3JhZnQncyBmbGlnaHQgcHJvcGVydGllcyBhbmQgYXRtb3NwaGVyaWMgY29uZGl0aW9ucyB0byByZXR1cm4gdGhlIGFtb3VudCBvZiBsaWZ0IHRoYXQgdGhpcyBhaXJjcmFmdCB3b3VsZCBoYXZlLiBUaGlzIGFwcGxpY2F0aW9uIGlzIGEgc2luZ2xlLWZpbGUgYXBwbGljYXRpb24gd2l0aCBzdHlsaW5ncyBhbmQgc2NyaXB0IGluc2lkZSBvZiB0aGUgSFRNTC5cIixcbiAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2JyYWRkYXZpc3RlY2gvQWVyb2R5bmFtaWNzQW5kTGlmdENhbGN1bGF0b3JcIixcbiAgICBsYW5ndWFnZXM6IFtcIkphdmFTY3JpcHRcIiwgXCJIVE1MXCIsIFwiQ1NTXCIsIFwiR2l0aHViXCIsIFwiQXRvbVwiXSxcbiAgICBpbWc6IFtcIi4uL2ltYWdlcy9saWZ0Q2FsYy5qcGdcIl1cbiAgfVxuXTtcblxuY29uc3QgUE9SVEZPTElPID0ge1xuICBwcmludEl0ZW1zKCkge1xuICAgICQoXCIjbmFtZUJsb2NrXCIpLmhpZGUoKTtcbiAgICAkKFwiI2JhY2tncm91bmRJbWFnZVwiKS5oaWRlKCk7XG4gICAgbGV0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgaG9tZUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vd3d3LmJyYWRkYXZpc3RlY2guY29tXCIpO1xuICAgIGhvbWVMaW5rLmlubmVySFRNTCA9IFwiPGltZyBzcmM9XFxcIi4uL2ltYWdlcy9CRFRlY2hMb2dvLmpwZ1xcXCIgaWQ9XFxcImhvbWVJY29uXFxcIj5cIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdkJhclwiKS5hcHBlbmRDaGlsZChob21lTGluayk7XG4gICAgbGV0IHBsYWNlSG9sZGVyID0gZG9jdW1lbnQuYm9keTtcbiAgICBwb3J0Zm9saW9JdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgbGV0IHBvcnRmb2xpb0VudHJ5ID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5kaXZQb3J0XCI+XG4gICAgICAgIDxoMSBjbGFzcz1cInBvcnRmb2xpb1RpdGxlXCI+JHtpdGVtLm5hbWV9PC9oMT5gO1xuICAgICAgaXRlbS5pbWcuZm9yRWFjaChwaWMgPT4ge1xuICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgXG4gICAgICAgIDxpbWcgY2xhc3M9XCJwb3J0Zm9saW9QaWNcIiBzcmM9XCIke3BpY31cIj5gO1xuICAgICAgfSk7XG4gICAgICBwb3J0Zm9saW9FbnRyeSArPSBgXG4gICAgICAgIDxwIGNsYXNzPVwiaXRlbURlc2NyaXB0aW9uXCI+JHtpdGVtLnRleHR9PC9wPlxuICAgICAgICA8aDMgY2xhc3M9XCJsYW5ndWFnZVRpdGxlXCI+VEVDSE5PTE9HSUVTPC9oMz5gO1xuICAgICAgaXRlbS5sYW5ndWFnZXMuZm9yRWFjaChsYW5ndWFnZSA9PiB7XG4gICAgICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgICAgICBjYXNlIFwiSmF2YVNjcmlwdFwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2pzaW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJDU1NcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9jc3MzaW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJHaXRodWJcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9naXRodWJpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkdpdFwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2dpdGltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiR3J1bnRcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9ncnVudGltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiSFRNTFwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2h0bWw1aW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJqUXVlcnlcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9qUXVlcnlpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIk5vZGVcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9ub2RlaW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJSZWFjdFwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL3JlYWN0aW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJTbGFja1wiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL3NsYWNraW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJWU1wiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL3ZzaW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJBdG9tXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvYXRvbWltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQnJvd3NlcmlmeVwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2Jyb3dzZXJpZnlpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxhIGhyZWY9XCIke2l0ZW0uZ2l0aHVifVwiIGNsYXNzPVwiZ2l0aHViXCIgdGFyZ2V0PVwiYmxhbmtcIj5TZWUgR2l0aHViIENvZGU8L2E+PC9kaXY+YDtcbiAgICAgIHBsYWNlSG9sZGVyLmlubmVySFRNTCArPSBwb3J0Zm9saW9FbnRyeTtcbiAgICB9KTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQT1JURk9MSU87IiwiY29uc3QgUE9SVEZPTElPID0gcmVxdWlyZShcIi4vcGVyc29uYWxQb3J0Zm9saW9cIik7XG5jb25zdCBBTEVSVCA9IHJlcXVpcmUoXCIuL2NvbnN0cnVjdGlvblwiKTtcblxuY29uc3QgaW5mb0NhdGVnb3JpZXMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlBlcnNvbmFsIFRlc3QgMiBQb3J0Zm9saW9cIixcbiAgICBpZDogXCJQb3J0Zm9saW9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUHJvZmVzc2lvbmFsIFdlYnNpdGVzXCIsXG4gICAgaWQ6IFwiV2Vic2l0ZXNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUGVyc29uYWwgQmlvXCIsXG4gICAgaWQ6IFwiQmlvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJlc3VtZVwiLFxuICAgIGlkOiBcIlJlc3VtZVwiLFxuICB9XG5dO1xuXG5jb25zdCBQUklOVElORk8gPSB7XG4gIG5hbWVCbG9jayAoKSB7XG4gICAgJChcIiNuYW1lQmxvY2tcIikuaHRtbChcIjxwIGlkPVxcXCJuYW1lVGl0bGVcXFwiPkJyYWQgRGF2aXM8L3A+XCIpXG4gIH0sXG4gIGpvYlRpdGxlICgpIHtcbiAgICBsZXQgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVCbG9ja1wiKTtcbiAgICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJqb2JUaXRsZVwiKTtcbiAgICBwbGFjZUhvbGRlci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICBsZXQgY3Vyc29yRWZmZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY3Vyc29yRWZmZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY3Vyc29yXCIpO1xuICAgIGN1cnNvckVmZmVjdC5pbm5lckhUTUwgPSBcIiZVbmRlckJyYWNrZXQ7XCI7XG4gICAgcGxhY2VIb2xkZXIuYXBwZW5kQ2hpbGQoY3Vyc29yRWZmZWN0KTtcbiAgICBsZXQgcnVuVHlwZVdyaXRlciA9IHRydWU7XG4gICAgbGV0IHRleHRQb3NpdGlvbiA9IDA7XG4gICAgbGV0IGpvYlRpdGxlVGV4dCA9IFwiSnVuaW9yIFdlYiBEZXZlbG9wZXJcIjtcbiAgICBsZXQgc2V0VHlwZVNwZWVkID0gMTY1OyAvKiBTRVQgVEhFIFNQRUVEIE9GIFRIRSBURVhUIEFQUEVBUklORyovXG4gICAgZnVuY3Rpb24gdHlwZVdyaXRlcigpIHtcbiAgICAgIGlmIChydW5UeXBlV3JpdGVyID09PSB0cnVlKSB7XG4gICAgICAgIGlmICh0ZXh0UG9zaXRpb24gPCBqb2JUaXRsZVRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgbGV0IHRlbXBIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpvYlRpdGxlXCIpO1xuICAgICAgICAgIHRlbXBIb2xkZXIuaW5uZXJIVE1MICs9IGpvYlRpdGxlVGV4dC5jaGFyQXQodGV4dFBvc2l0aW9uKTtcbiAgICAgICAgICB0ZXh0UG9zaXRpb24rKztcbiAgICAgICAgICBzZXRUaW1lb3V0KHR5cGVXcml0ZXIsIHNldFR5cGVTcGVlZCk7IC8qIFNFVFMgVEhFIERFTEFZIFRPIFJVTiBUSEUgRlVOQ1RJT04gKi9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBydW5UeXBlV3JpdGVyID0gZmFsc2U7XG4gICAgICAgICAgY3Vyc29yRWZmZWN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgUFJJTlRJTkZPLm9wdGlvbnNCdXR0b24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0eXBlV3JpdGVyICgpO1xuICB9LFxuICBvcHRpb25zQnV0dG9uICgpIHtcbiAgICBsZXQgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVCbG9ja1wiKTtcbiAgICBsZXQgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbk1lbnVPcHRpb25zXCIpO1xuICAgIGlmIChkZWxldGVCdXR0b25zLmxlbmd0aCA9PT0gMCkge1xuICAgIGxldCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbk1lbnVPcHRpb25zIGZhZGVJblwiKTtcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbkluZm9cIik7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk1vcmUgSW5mb1wiKTtcbiAgICBwbGFjZUhvbGRlci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5JbmZvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBQUklOVElORk8ubW9yZUluZm8pO1xuICAgIH0gZWxzZSB7XG4gICAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBpZiAoYnV0dG9uLmlkICE9PSBcIm1haW5JbmZvXCIpIHtcbiAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYnV0dG9uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTW9yZSBJbmZvXCIpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImZhZGVPdXRcIik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkluZm9cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFBSSU5USU5GTy5mYWRlT3V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5JbmZvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBQUklOVElORk8ubW9yZUluZm8pO1xuICAgIH1cbiAgfSxcbiAgZmFkZU91dCAoKSB7XG4gICAgbGV0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW5NZW51T3B0aW9uc1wiKTtcbiAgICBkZWxldGVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGlmIChidXR0b24uaWQgIT09IFwibWFpbkluZm9cIikge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlcGxhY2UoXCJmYWRlSW5cIiwgXCJmYWRlT3V0XCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoUFJJTlRJTkZPLm9wdGlvbnNCdXR0b24sIDcwMCk7XG4gIH0sXG4gIG1vcmVJbmZvICgpIHtcbiAgICBsZXQgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVCbG9ja1wiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5JbmZvXCIpLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSGlkZSBNZW51XCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkluZm9cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFBSSU5USU5GTy5tb3JlSW5mbyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluSW5mb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgUFJJTlRJTkZPLmZhZGVPdXQpO1xuICAgIGluZm9DYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgbGV0IGluZm9DYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGluZm9DYXRlZ29yeS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgaW5mb0NhdGVnb3J5LnNldEF0dHJpYnV0ZShcImlkXCIsIGNhdGVnb3J5LmlkKTtcbiAgICAgIGluZm9DYXRlZ29yeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5NZW51T3B0aW9ucyBmYWRlSW5cIik7XG5cbiAgICAgIGluZm9DYXRlZ29yeS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBjYXRlZ29yeS5uYW1lKTtcbiAgICAgIHBsYWNlSG9sZGVyLmFwcGVuZENoaWxkKGluZm9DYXRlZ29yeSk7XG4gICAgfSk7XG4gICAgaW5mb0NhdGVnb3JpZXMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgc3dpdGNoKGJ1dHRvbi5pZCkge1xuICAgICAgICBjYXNlIFwiUG9ydGZvbGlvXCI6XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQb3J0Zm9saW9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFBPUlRGT0xJTy5wcmludEl0ZW1zKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIldlYnNpdGVzXCI6XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiV2Vic2l0ZXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEFMRVJULm1lc3NhZ2UpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQmlvXCI6XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQmlvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBBTEVSVC5tZXNzYWdlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlJlc3VtZVwiOlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlJlc3VtZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgQUxFUlQubWVzc2FnZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICB9KTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQUklOVElORk87Il19
