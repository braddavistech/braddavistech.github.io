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
  name: "Mission Control",
  text: "This was a project that I created with a group of 3 other students at Nashville Software School. It allows users to log in or create new user and queries the database to check for current user matches. I am particularly proud of the logic behind user validation during login, user creation, and profile editing. I also created an epic ReadMe file on Github, which was my fist exposure to markdown language.",
  github: "https://github.com/braddavistech/Mission_Control",
  languages: ["Node", "JavaScript", "jQuery", "Moment", "Restful", "NSS", "HTML", "CSS", "ESLint", "Github", "Browserify", "Lucid Charts", "Babel", "Git", "Grunt", "Slack", "VS"],
  img: ["../images/missionControl1.png", "../images/missionControl2.png"]
}, {
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

          case "Babel":
            portfolioEntry += `<img src="../images/babeljs.png" class="languagePic" alt="${language}">`;
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

          case "Moment":
            portfolioEntry += `<img src="../images/momentjs.jpg" class="languagePic" alt="${language}">`;
            break;

          case "ESLint":
            portfolioEntry += `<img src="../images/eslint.png" class="languagePic" alt="${language}">`;
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

          case "Lucid Charts":
            portfolioEntry += `<img src="../images/lucidchart.png" class="languagePic" alt="${language}">`;
            break;

          case "Node":
            portfolioEntry += `<img src="../images/nodeimage.jpg" class="languagePic" alt="${language}">`;
            break;

          case "NSS":
            portfolioEntry += `<img src="../images/nssjs.jpg" class="languagePic" alt="${language}">`;
            break;

          case "React":
            portfolioEntry += `<img src="../images/reactimage.jpg" class="languagePic" alt="${language}">`;
            break;

          case "Restful":
            portfolioEntry += `<img src="../images/RESTfil-API.png" class="languagePic" alt="${language}">`;
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
  name: "Personal Portfolio",
  id: "Portfolio"
}, {
  name: "Professional Websites",
  id: "Websites"
}, {
  name: "Personal Bio",
  id: "Bio"
}, {
  name: "Resume",
  id: "Resume",
  location: "../images/Brad Davis 2019.pdf"
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
    cursorEffect.innerHTML = "&lowbar;";
    placeHolder.appendChild(cursorEffect);
    let runTypeWriter = true;
    let textPosition = 0;
    let jobTitleText = "Software Developer";
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
    //sets more info button
    let placeHolder = document.getElementById("nameBlock");
    let deleteButtons = document.querySelectorAll(".mainMenuOptions");

    if (deleteButtons.length === 0) {
      //checks to see if more info button is the only button
      let newElement = document.createElement("input");
      newElement.setAttribute("type", "button");
      newElement.setAttribute("class", "mainMenuOptions fadeIn");
      newElement.setAttribute("id", "mainInfo");
      newElement.setAttribute("value", "More Info");
      placeHolder.appendChild(newElement);
      document.getElementById("mainInfo").addEventListener("click", PRINTINFO.moreInfo);
    } else {
      //removes all buttons and resume anchor from DOM
      let resume = document.getElementById("Resume");
      resume.parentNode.removeChild(resume);
      deleteButtons.forEach(button => {
        if (button.id === "Resume") {
          return;
        } else if (button.id !== "mainInfo") {
          button.parentElement.removeChild(button);
        } else if (button.id === "mainInfo") {
          button.classList.remove("fadeOut"); //removes fadeOut animation from mainInfo button

          document.getElementById("mainInfo").removeEventListener("click", PRINTINFO.fadeOut);
        }
      });
      document.getElementById("mainInfo").addEventListener("click", PRINTINFO.moreInfo);
    }
  },

  fadeOut() {
    //fades out all buttons and anchor except more info
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

  moreInfo() {
    //creates link buttons and anchor
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
    infoCategories.forEach(button => {
      //adds event listeners to buttons
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

},{"./construction":2,"./personalPortfolio":5}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2JhY2tncm91bmRQaWMuanMiLCIuLi9zY3JpcHRzL2NvbnN0cnVjdGlvbi5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvbmF2QmFyLmpzIiwiLi4vc2NyaXB0cy9wZXJzb25hbFBvcnRmb2xpby5qcyIsIi4uL3NjcmlwdHMvcHJpbnRUb0RvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsTUFBTSxhQUFhLEdBQUc7QUFDcEIsRUFBQSxVQUFVLEdBQUk7QUFDWixRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUF0QjtBQUNBLElBQUEsZUFBZSxDQUFDLFlBQWhCLENBQTZCLEtBQTdCLEVBQW9DLHFDQUFwQztBQUNBLElBQUEsZUFBZSxDQUFDLFlBQWhCLENBQTZCLElBQTdCLEVBQW1DLGlCQUFuQztBQUNBLElBQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxXQUFkLENBQTBCLGVBQTFCO0FBQ0Q7O0FBTm1CLENBQXRCO0FBU0EsTUFBTSxDQUFDLE9BQVAsR0FBaUIsYUFBakI7Ozs7O0FDVEEsTUFBTSxLQUFLLEdBQUc7QUFDWixFQUFBLE9BQU8sR0FBSTtBQUNULElBQUEsS0FBSyxDQUFDLGtJQUFELENBQUw7QUFDRDs7QUFIVyxDQUFkO0FBTUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsS0FBakI7Ozs7O0FDTkEsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGlCQUFELENBQTdCOztBQUNBLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUNBLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUVBLGFBQWEsQ0FBQyxVQUFkO0FBQ0EsTUFBTSxDQUFDLE1BQVA7QUFDQSxTQUFTLENBQUMsU0FBVjtBQUNBLFNBQVMsQ0FBQyxRQUFWOzs7OztBQ1BBLE1BQU0s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WUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQW5CO0FBQ0EsUUFBQSxZQUFZLENBQUMsWUFBYixDQUEwQixJQUExQixFQUFnQyxRQUFRLENBQUMsRUFBekM7QUFDQSxRQUFBLFlBQVksQ0FBQyxZQUFiLENBQTBCLE9BQTFCLEVBQW1DLHdCQUFuQztBQUNBLFFBQUEsWUFBWSxDQUFDLFlBQWIsQ0FBMEIsTUFBMUIsRUFBa0MsUUFBUSxDQUFDLFFBQTNDO0FBQ0EsUUFBQSxZQUFZLENBQUMsWUFBYixDQUEwQixRQUExQixFQUFvQyxPQUFwQztBQUNBLFFBQUEsWUFBWSxDQUFDLFNBQWIsR0FBeUIsYUFBekI7QUFDQSxRQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLFlBQXhCO0FBQ0Q7QUFDRixLQWpCRDtBQWtCQSxJQUFBLGNBQWMsQ0FBQyxPQUFmLENBQXVCLE1BQU0sSUFBSTtBQUFHO0FBQ2xDLGNBQVEsTUFBTSxDQUFDLEVBQWY7QUFDRSxhQUFLLFdBQUw7QUFDRSxVQUFBLFFBQVEsQ0FBQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDLGdCQUFyQyxDQUFzRCxPQUF0RCxFQUErRCxTQUFTLENBQUMsVUFBekU7QUFDQTs7QUFDRixhQUFLLFVBQUw7QUFDRSxVQUFBLFFBQVEsQ0FBQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DLGdCQUFwQyxDQUFxRCxPQUFyRCxFQUE4RCxLQUFLLENBQUMsT0FBcEU7QUFDQTs7QUFDRixhQUFLLEtBQUw7QUFDRSxVQUFBLFFBQVEsQ0FBQyxjQUFULENBQXdCLEtBQXhCLEVBQStCLGdCQUEvQixDQUFnRCxPQUFoRCxFQUF5RCxLQUFLLENBQUMsT0FBL0Q7QUFDQTtBQVRKO0FBV0QsS0FaRDtBQWFEOztBQTVHZSxDQUFsQjtBQStHQSxNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IEJBQ0tHUk9VTkRQSUMgPSB7XG4gIGRpc3BsYXlQaWMgKCkge1xuICAgIGxldCBiYWNrZ3JvdW5kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGJhY2tncm91bmRJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9pbWFnZXMvcHJvZmlsZVBpY0JsYWNrQmtncm5kLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kSW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJiYWNrZ3JvdW5kSW1hZ2VcIik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kSW1hZ2UpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJBQ0tHUk9VTkRQSUM7IiwiY29uc3QgQUxFUlQgPSB7XG4gIG1lc3NhZ2UgKCkge1xuICAgIGFsZXJ0KFwiVGhpcyBsaW5rIGlzIGN1cnJlbnRseSBiZWluZyByZWRlc2lnbmVkIGFuZCBzaG91bGQgYmUgcnVubmluZyBzaG9ydGx5LiBQbGVhc2UgY2hlY2sgb3V0IG15IGdpdGh1YiBwYWdlIGZvciBkZXZlbG9wbWVudCBleGFtcGxlcy5cIik7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQUxFUlQ7IiwiY29uc3QgQkFDS0dST1VORFBJQyA9IHJlcXVpcmUoXCIuL2JhY2tncm91bmRQaWNcIik7XG5jb25zdCBOQVZCQVIgPSByZXF1aXJlKFwiLi9uYXZCYXJcIik7XG5jb25zdCBQUklOVElORk8gPSByZXF1aXJlKFwiLi9wcmludFRvRG9tXCIpO1xuXG5CQUNLR1JPVU5EUElDLmRpc3BsYXlQaWMoKTtcbk5BVkJBUi5jcmVhdGUoKTtcblBSSU5USU5GTy5uYW1lQmxvY2soKTtcblBSSU5USU5GTy5qb2JUaXRsZSgpOyIsImNvbnN0IE5BVkJBUiA9IHtcbiAgY3JlYXRlICgpIHtcbiAgICBsZXQgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdkJhclwiKTtcbiAgICBwbGFjZUhvbGRlci5pbm5lckhUTUwgPSBgXG4gICAgPGEgaHJlZj1cIm1haWx0bzpicmFkQGJyYWRkYXZpc3RlY2guY29tXCIgY2xhc3M9XCJuYXZiYXJBXCI+PGltZyBzcmM9XCIuLi9pbWFnZXMvZW1haWwucG5nXCIgY2xhc3M9XCJuYXZCdXR0b25cIiBhbHQ9XCJFbWFpbCBCcmFkXCI+PC9hPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYnJhZGRhdmlzdGVjaC9cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cIm5hdmJhckFcIj48aW1nIHNyYz1cIi4uL2ltYWdlcy9saW5rZWRJbi5wbmdcIiBjbGFzcz1cIm5hdkJ1dHRvblwiIGFsdD1cIkxpa2VkSW5cIj48L2E+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9icmFkZGF2aXN0ZWNoXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJuYXZiYXJBXCI+PGltZyBzcmM9XCIuLi9pbWFnZXMvZ2l0aHViLnBuZ1wiIGNsYXNzPVwibmF2QnV0dG9uXCIgYWx0PVwiR2l0SHViXCI+PC9hPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vYnJhZC5kYXZpcy41NDM3OTIzNlwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwibmF2YmFyQVwiPjxpbWcgc3JjPVwiLi4vaW1hZ2VzL2ZhY2Vib29rLnBuZ1wiIGNsYXNzPVwibmF2QnV0dG9uXCIgYWx0PVwiRmFjZWJvb2tcIj48L2E+XG4gICAgYDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVZCQVI7IiwiY29uc3QgcG9ydGZvbGlvSXRlbXMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIk1pc3Npb24gQ29udHJvbFwiLFxuICAgIHRleHQ6IFwiVGhpcyB3YXMgYSBwcm9qZWN0IHRoYXQgSSBjcmVhdGVkIHdpdGggYSBncm91cCBvZiAzIG90aGVyIHN0dWRlbnRzIGF0IE5hc2h2aWxsZSBTb2Z0d2FyZSBTY2hvb2wuIEl0IGFsbG93cyB1c2VycyB0byBsb2cgaW4gb3IgY3JlYXRlIG5ldyB1c2VyIGFuZCBxdWVyaWVzIHRoZSBkYXRhYmFzZSB0byBjaGVjayBmb3IgY3VycmVudCB1c2VyIG1hdGNoZXMuIEkgYW0gcGFydGljdWxhcmx5IHByb3VkIG9mIHRoZSBsb2dpYyBiZWhpbmQgdXNlciB2YWxpZGF0aW9uIGR1cmluZyBsb2dpbiwgdXNlciBjcmVhdGlvbiwgYW5kIHByb2ZpbGUgZWRpdGluZy4gSSBhbHNvIGNyZWF0ZWQgYW4gZXBpYyBSZWFkTWUgZmlsZSBvbiBHaXRodWIsIHdoaWNoIHdhcyBteSBmaXN0IGV4cG9zdXJlIHRvIG1hcmtkb3duIGxhbmd1YWdlLlwiLFxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vYnJhZGRhdmlzdGVjaC9NaXNzaW9uX0NvbnRyb2xcIixcbiAgICBsYW5ndWFnZXM6IFtcIk5vZGVcIiwgXCJKYXZhU2NyaXB0XCIsIFwialF1ZXJ5XCIsIFwiTW9tZW50XCIsIFwiUmVzdGZ1bFwiLCBcIk5TU1wiLCBcIkhUTUxcIiwgXCJDU1NcIiwgXCJFU0xpbnRcIiwgXCJHaXRodWJcIiwgXCJCcm93c2VyaWZ5XCIsIFwiTHVjaWQgQ2hhcnRzXCIsIFwiQmFiZWxcIiwgXCJHaXRcIiwgXCJHcnVudFwiLCBcIlNsYWNrXCIsIFwiVlNcIl0sXG4gICAgaW1nOiBbXCIuLi9pbWFnZXMvbWlzc2lvbkNvbnRyb2wxLnBuZ1wiLCBcIi4uL2ltYWdlcy9taXNzaW9uQ29udHJvbDIucG5nXCJdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkRhaWx5IEpvdXJuYWxcIixcbiAgICB0ZXh0OiBcIlRoaXMgd2FzIGEgcHJvamVjdCB0aGF0IEkgY3JlYXRlZCBhdCBOYXNodmlsbGUgU29mdHdhcmUgU2Nob29sLiBJdCBhbGxvd3MgdGhlIHVzZXIgdG8gaW5wdXQgam91cm5hbCBlbnRyaWVzIGFuZCBzZWxlY3QgYW4gaW5zdHJ1Y3RvciwgYSBtb29kLCBhbmQgdGFnIG5hbWVzLiBJdCBzYXZlcyB0aGUgZW50cmllcyB0aHJvdWdoIGFuIEFQSSBQb3N0IGNhbGwgYW5kIHRoZW4gdXNlcyBGZXRjaCB0byBncmFiIGFsbCBlbnRyaWVzIGFuZCByZW5kZXIgdG8gdGhlIHBhZ2UuIEl0IGFsc28gYWxsb3dzIHRoZSB1c2VyIHRvIHNvcnQgdGhlaXIgZW50cmllcyB0aHJvdWdoIHRoZSBtb29kcyBpbnB1dC5cIixcbiAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2JyYWRkYXZpc3RlY2gvTlNTX0RhaWx5X0pvdXJuYWxcIixcbiAgICBsYW5ndWFnZXM6IFtcIkphdmFTY3JpcHRcIiwgXCJqUXVlcnlcIiwgXCJIVE1MXCIsIFwiQ1NTXCIsIFwiR2l0aHViXCIsIFwiQnJvd3NlcmlmeVwiLCBcIkdpdFwiLCBcIkdydW50XCIsIFwiTm9kZVwiLCBcIlNsYWNrXCIsIFwiVlNcIl0sXG4gICAgaW1nOiBbXCIuLi9pbWFnZXMvZGoxLmpwZ1wiLCBcIi4uL2ltYWdlcy9kajIuanBnXCJdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIldlbGNvbWUgdG8gTmFzaHZpbGxlXCIsXG4gICAgdGV4dDogXCJUaGlzIHdhcyBhIHByb2plY3QgdGhhdCBteSB0ZWFtIGNyZWF0ZWQgYXQgTmFzaHZpbGxlIFNvZnR3YXJlIFNjaG9vbC4gSXQgYWxsb3dzIHRoZSB1c2VyIHRvIHNlYXJjaCBmb3IgcmVzdGF1cmFudHMsIFRpY2tldG1hc3RlciBldmVudHMsIE1ldHJvLU5hc2h2aWxsZSBwYXJrcywgYW5kIEV2ZW50YnJpdGUgZXZlbnRzLiBUaGlzIGFwcGxpY2F0aW9uIHVzZXMgY29udGludW91cyBBUEkgY2FsbHMgdG8gdGhlIGRpZmZlcmVudCBkYXRhYmFzZXMgdG8gZ2V0IHVwLXRvLWRhdGUgaW5mb3JtYXRpb24uIEl0IGFsc28gaGFzIHRoZSBhYmlsaXR5IHRvIHNhdmUgeW91ciBjcmVhdGVkIGl0aW5lcmFyaWVzIGFuZCBkaXNwbGF5IHBhc3QgaXRpbmVyYXJpZXMgdGhyb3VnaCBhIGxvY2FsIGpzb24gZmlsZS5cIixcbiAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2JyYWRkYXZpc3RlY2gvV2VsY29tZV9Ub19OYXNodmlsbGVcIixcbiAgICBsYW5ndWFnZXM6IFtcIkphdmFTY3JpcHRcIiwgXCJIVE1MXCIsIFwiQ1NTXCIsIFwiR2l0aHViXCIsIFwiQnJvd3NlcmlmeVwiLCBcIkdpdFwiLCBcIkdydW50XCIsIFwiTm9kZVwiLCBcIlNsYWNrXCIsIFwiVlNcIl0sXG4gICAgaW1nOiBbXCIuLi9pbWFnZXMvbmFzaHZpbGxlMS5qcGdcIiwgXCIuLi9pbWFnZXMvbmFzaHZpbGxlMi5qcGdcIl1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGlmdCBDYWxjdWxhdG9yXCIsXG4gICAgdGV4dDogXCJUaGlzIHdhcyBhIHByb2plY3QgdGhhdCB3YXMgbXkgZmlyc3QgZXhwZXJpZW5jZSB3aXRoIEphdmFTY3JpcHQuIEl0IGFsbG93cyBhIHVzZXIgdG8gaW5wdXQgZGF0YSByZWxhdGVkIHRvIGFuIGFpcmNyYWZ0J3MgZmxpZ2h0IHByb3BlcnRpZXMgYW5kIGF0bW9zcGhlcmljIGNvbmRpdGlvbnMgdG8gcmV0dXJuIHRoZSBhbW91bnQgb2YgbGlmdCB0aGF0IHRoaXMgYWlyY3JhZnQgd291bGQgaGF2ZS4gVGhpcyBhcHBsaWNhdGlvbiBpcyBhIHNpbmdsZS1maWxlIGFwcGxpY2F0aW9uIHdpdGggc3R5bGluZ3MgYW5kIHNjcmlwdCBpbnNpZGUgb2YgdGhlIEhUTUwuXCIsXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9icmFkZGF2aXN0ZWNoL0Flcm9keW5hbWljc0FuZExpZnRDYWxjdWxhdG9yXCIsXG4gICAgbGFuZ3VhZ2VzOiBbXCJKYXZhU2NyaXB0XCIsIFwiSFRNTFwiLCBcIkNTU1wiLCBcIkdpdGh1YlwiLCBcIkF0b21cIl0sXG4gICAgaW1nOiBbXCIuLi9pbWFnZXMvbGlmdENhbGMuanBnXCJdXG4gIH1cbl07XG5cbmNvbnN0IFBPUlRGT0xJTyA9IHtcbiAgcHJpbnRJdGVtcygpIHtcbiAgICAkKFwiI25hbWVCbG9ja1wiKS5oaWRlKCk7XG4gICAgJChcIiNiYWNrZ3JvdW5kSW1hZ2VcIikuaGlkZSgpO1xuICAgIGxldCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGhvbWVMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3d3dy5icmFkZGF2aXN0ZWNoLmNvbVwiKTtcbiAgICBob21lTGluay5pbm5lckhUTUwgPSBcIjxpbWcgc3JjPVxcXCIuLi9pbWFnZXMvQkRUZWNoTG9nby5qcGdcXFwiIGlkPVxcXCJob21lSWNvblxcXCI+XCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZCYXJcIikuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuICAgIGxldCBwbGFjZUhvbGRlciA9IGRvY3VtZW50LmJvZHk7XG4gICAgcG9ydGZvbGlvSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGxldCBwb3J0Zm9saW9FbnRyeSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImluZGl2UG9ydFwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJwb3J0Zm9saW9UaXRsZVwiPiR7aXRlbS5uYW1lfTwvaDE+YDtcbiAgICAgIGl0ZW0uaW1nLmZvckVhY2gocGljID0+IHtcbiAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYFxuICAgICAgICA8aW1nIGNsYXNzPVwicG9ydGZvbGlvUGljXCIgc3JjPVwiJHtwaWN9XCI+YDtcbiAgICAgIH0pO1xuICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYFxuICAgICAgICA8cCBjbGFzcz1cIml0ZW1EZXNjcmlwdGlvblwiPiR7aXRlbS50ZXh0fTwvcD5cbiAgICAgICAgPGgzIGNsYXNzPVwibGFuZ3VhZ2VUaXRsZVwiPlRFQ0hOT0xPR0lFUzwvaDM+YDtcbiAgICAgIGl0ZW0ubGFuZ3VhZ2VzLmZvckVhY2gobGFuZ3VhZ2UgPT4ge1xuICAgICAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgICAgY2FzZSBcIkphdmFTY3JpcHRcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9qc2ltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQmFiZWxcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9iYWJlbGpzLnBuZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQ1NTXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvY3NzM2ltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiR2l0aHViXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvZ2l0aHViaW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJHaXRcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9naXRpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIk1vbWVudFwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL21vbWVudGpzLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiRVNMaW50XCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvZXNsaW50LnBuZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiR3J1bnRcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9ncnVudGltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiSFRNTFwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2h0bWw1aW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJqUXVlcnlcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9qUXVlcnlpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkx1Y2lkIENoYXJ0c1wiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2x1Y2lkY2hhcnQucG5nXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJOb2RlXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvbm9kZWltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiTlNTXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvbnNzanMuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJSZWFjdFwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL3JlYWN0aW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJSZXN0ZnVsXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvUkVTVGZpbC1BUEkucG5nXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJTbGFja1wiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL3NsYWNraW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJWU1wiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL3ZzaW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJBdG9tXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvYXRvbWltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQnJvd3NlcmlmeVwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2Jyb3dzZXJpZnlpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxhIGhyZWY9XCIke2l0ZW0uZ2l0aHVifVwiIGNsYXNzPVwiZ2l0aHViXCIgdGFyZ2V0PVwiYmxhbmtcIj5TZWUgR2l0aHViIENvZGU8L2E+PC9kaXY+YDtcbiAgICAgIHBsYWNlSG9sZGVyLmlubmVySFRNTCArPSBwb3J0Zm9saW9FbnRyeTtcbiAgICB9KTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQT1JURk9MSU87IiwiY29uc3QgUE9SVEZPTElPID0gcmVxdWlyZShcIi4vcGVyc29uYWxQb3J0Zm9saW9cIik7XG5jb25zdCBBTEVSVCA9IHJlcXVpcmUoXCIuL2NvbnN0cnVjdGlvblwiKTtcblxuY29uc3QgaW5mb0NhdGVnb3JpZXMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlBlcnNvbmFsIFBvcnRmb2xpb1wiLFxuICAgIGlkOiBcIlBvcnRmb2xpb1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQcm9mZXNzaW9uYWwgV2Vic2l0ZXNcIixcbiAgICBpZDogXCJXZWJzaXRlc1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQZXJzb25hbCBCaW9cIixcbiAgICBpZDogXCJCaW9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUmVzdW1lXCIsXG4gICAgaWQ6IFwiUmVzdW1lXCIsXG4gICAgbG9jYXRpb246IFwiLi4vaW1hZ2VzL0JyYWQgRGF2aXMgMjAxOS5wZGZcIlxuICB9XG5dO1xuXG5jb25zdCBQUklOVElORk8gPSB7XG4gIG5hbWVCbG9jaygpIHtcbiAgICAkKFwiI25hbWVCbG9ja1wiKS5odG1sKFwiPHAgaWQ9XFxcIm5hbWVUaXRsZVxcXCI+QnJhZCBEYXZpczwvcD5cIilcbiAgfSxcbiAgam9iVGl0bGUoKSB7XG4gICAgbGV0IHBsYWNlSG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lQmxvY2tcIik7XG4gICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiam9iVGl0bGVcIik7XG4gICAgcGxhY2VIb2xkZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gICAgbGV0IGN1cnNvckVmZmVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGN1cnNvckVmZmVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImN1cnNvclwiKTtcbiAgICBjdXJzb3JFZmZlY3QuaW5uZXJIVE1MID0gXCImbG93YmFyO1wiO1xuICAgIHBsYWNlSG9sZGVyLmFwcGVuZENoaWxkKGN1cnNvckVmZmVjdCk7XG4gICAgbGV0IHJ1blR5cGVXcml0ZXIgPSB0cnVlO1xuICAgIGxldCB0ZXh0UG9zaXRpb24gPSAwO1xuICAgIGxldCBqb2JUaXRsZVRleHQgPSBcIlNvZnR3YXJlIERldmVsb3BlclwiO1xuICAgIGxldCBzZXRUeXBlU3BlZWQgPSAxNjU7IC8qIFNFVCBUSEUgU1BFRUQgT0YgVEhFIFRFWFQgQVBQRUFSSU5HKi9cbiAgICBmdW5jdGlvbiB0eXBlV3JpdGVyKCkge1xuICAgICAgaWYgKHJ1blR5cGVXcml0ZXIgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKHRleHRQb3NpdGlvbiA8IGpvYlRpdGxlVGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICBsZXQgdGVtcEhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiam9iVGl0bGVcIik7XG4gICAgICAgICAgdGVtcEhvbGRlci5pbm5lckhUTUwgKz0gam9iVGl0bGVUZXh0LmNoYXJBdCh0ZXh0UG9zaXRpb24pO1xuICAgICAgICAgIHRleHRQb3NpdGlvbisrO1xuICAgICAgICAgIHNldFRpbWVvdXQodHlwZVdyaXRlciwgc2V0VHlwZVNwZWVkKTsgLyogU0VUUyBUSEUgREVMQVkgVE8gUlVOIFRIRSBGVU5DVElPTiAqL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJ1blR5cGVXcml0ZXIgPSBmYWxzZTtcbiAgICAgICAgICBjdXJzb3JFZmZlY3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICBQUklOVElORk8ub3B0aW9uc0J1dHRvbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHR5cGVXcml0ZXIoKTtcbiAgfSxcbiAgb3B0aW9uc0J1dHRvbigpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXRzIG1vcmUgaW5mbyBidXR0b25cbiAgICBsZXQgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVCbG9ja1wiKTtcbiAgICBsZXQgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbk1lbnVPcHRpb25zXCIpO1xuICAgIGlmIChkZWxldGVCdXR0b25zLmxlbmd0aCA9PT0gMCkgeyAgICAgICAgICAgICAgIC8vY2hlY2tzIHRvIHNlZSBpZiBtb3JlIGluZm8gYnV0dG9uIGlzIHRoZSBvbmx5IGJ1dHRvblxuICAgICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbk1lbnVPcHRpb25zIGZhZGVJblwiKTtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluSW5mb1wiKTtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJNb3JlIEluZm9cIik7XG4gICAgICBwbGFjZUhvbGRlci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkluZm9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFBSSU5USU5GTy5tb3JlSW5mbyk7XG4gICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcmVtb3ZlcyBhbGwgYnV0dG9ucyBhbmQgcmVzdW1lIGFuY2hvciBmcm9tIERPTVxuICAgICAgbGV0IHJlc3VtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUmVzdW1lXCIpO1xuICAgICAgcmVzdW1lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVzdW1lKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBpZiAoYnV0dG9uLmlkID09PSBcIlJlc3VtZVwiKSB7XG4gICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfSBlbHNlIGlmIChidXR0b24uaWQgIT09IFwibWFpbkluZm9cIikge1xuICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGJ1dHRvbik7XG4gICAgICAgIH0gZWxzZSBpZiAoYnV0dG9uLmlkID09PSBcIm1haW5JbmZvXCIpIHtcbiAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImZhZGVPdXRcIik7ICAvL3JlbW92ZXMgZmFkZU91dCBhbmltYXRpb24gZnJvbSBtYWluSW5mbyBidXR0b25cbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5JbmZvXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBQUklOVElORk8uZmFkZU91dCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluSW5mb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgUFJJTlRJTkZPLm1vcmVJbmZvKTtcbiAgICB9XG4gIH0sXG4gIGZhZGVPdXQoKSB7ICAgICAgICAgLy9mYWRlcyBvdXQgYWxsIGJ1dHRvbnMgYW5kIGFuY2hvciBleGNlcHQgbW9yZSBpbmZvXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluSW5mb1wiKS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk1vcmUgSW5mb1wiKTtcbiAgICBsZXQgcmVzdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJSZXN1bWVcIik7XG4gICAgcmVzdW1lLmNsYXNzTGlzdC5yZXBsYWNlKFwiZmFkZUluXCIsIFwiZmFkZU91dFwiKTtcbiAgICBsZXQgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbk1lbnVPcHRpb25zXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgaWYgKGJ1dHRvbi5pZCAhPT0gXCJtYWluSW5mb1wiKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVwbGFjZShcImZhZGVJblwiLCBcImZhZGVPdXRcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2V0VGltZW91dChQUklOVElORk8ub3B0aW9uc0J1dHRvbiwgNzAwKTsgLy9zZXRzIHBhdXNlIHRvIGFsbG93IGZhZGVPdXQgYW5pbWF0aW9uIHRvIGZpbmlzaFxuICB9LFxuICBtb3JlSW5mbygpIHsgICAgICAvL2NyZWF0ZXMgbGluayBidXR0b25zIGFuZCBhbmNob3JcbiAgICBsZXQgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVCbG9ja1wiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5JbmZvXCIpLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSGlkZSBNZW51XCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkluZm9cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFBSSU5USU5GTy5tb3JlSW5mbyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluSW5mb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgUFJJTlRJTkZPLmZhZGVPdXQpO1xuICAgIGluZm9DYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgaWYgKGNhdGVnb3J5LmlkICE9PSBcIlJlc3VtZVwiKSB7XG4gICAgICAgIGxldCBpbmZvQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGluZm9DYXRlZ29yeS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICBpbmZvQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwiaWRcIiwgY2F0ZWdvcnkuaWQpO1xuICAgICAgICBpbmZvQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluTWVudU9wdGlvbnMgZmFkZUluXCIpO1xuICAgICAgICBpbmZvQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgY2F0ZWdvcnkubmFtZSk7XG4gICAgICAgIHBsYWNlSG9sZGVyLmFwcGVuZENoaWxkKGluZm9DYXRlZ29yeSk7XG4gICAgICB9IGVsc2UgaWYgKGNhdGVnb3J5LmlkID09PSBcIlJlc3VtZVwiKSB7XG4gICAgICAgIGxldCBpbmZvQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgaW5mb0NhdGVnb3J5LnNldEF0dHJpYnV0ZShcImlkXCIsIGNhdGVnb3J5LmlkKTtcbiAgICAgICAgaW5mb0NhdGVnb3J5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbk1lbnVPcHRpb25zIGZhZGVJblwiKTtcbiAgICAgICAgaW5mb0NhdGVnb3J5LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgY2F0ZWdvcnkubG9jYXRpb24pO1xuICAgICAgICBpbmZvQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiYmxhbmtcIik7XG4gICAgICAgIGluZm9DYXRlZ29yeS5pbm5lckhUTUwgPSBcIlZpZXcgUmVzdW1lXCI7XG4gICAgICAgIHBsYWNlSG9sZGVyLmFwcGVuZENoaWxkKGluZm9DYXRlZ29yeSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaW5mb0NhdGVnb3JpZXMuZm9yRWFjaChidXR0b24gPT4geyAgLy9hZGRzIGV2ZW50IGxpc3RlbmVycyB0byBidXR0b25zXG4gICAgICBzd2l0Y2ggKGJ1dHRvbi5pZCkge1xuICAgICAgICBjYXNlIFwiUG9ydGZvbGlvXCI6XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQb3J0Zm9saW9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFBPUlRGT0xJTy5wcmludEl0ZW1zKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIldlYnNpdGVzXCI6XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJXZWJzaXRlc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgQUxFUlQubWVzc2FnZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJCaW9cIjpcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkJpb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgQUxFUlQubWVzc2FnZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUFJJTlRJTkZPOyJdfQ==
