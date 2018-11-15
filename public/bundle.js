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
  github: "https://github.com/nss-mission-control/nutshell",
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
        if (button.id !== "mainInfo") {
          button.parentElement.removeChild(button);
        } else {
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
        infoCategory.setAttribute("class", "fadeIn");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2JhY2tncm91bmRQaWMuanMiLCIuLi9zY3JpcHRzL2NvbnN0cnVjdGlvbi5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvbmF2QmFyLmpzIiwiLi4vc2NyaXB0cy9wZXJzb25hbFBvcnRmb2xpby5qcyIsIi4uL3NjcmlwdHMvcHJpbnRUb0RvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsTUFBTSxhQUFhLEdBQUc7QUFDcEIsRUFBQSxVQUFVLEdBQUk7QUFDWixRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUF0QjtBQUNBLElBQUEsZUFBZSxDQUFDLFlBQWhCLENBQTZCLEtBQTdCLEVBQW9DLHFDQUFwQztBQUNBLElBQUEsZUFBZSxDQUFDLFlBQWhCLENBQTZCLElBQTdCLEVBQW1DLGlCQUFuQztBQUNBLElBQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxXQUFkLENBQTBCLGVBQTFCO0FBQ0Q7O0FBTm1CLENBQXRCO0FBU0EsTUFBTSxDQUFDLE9BQVAsR0FBaUIsYUFBakI7Ozs7O0FDVEEsTUFBTSxLQUFLLEdBQUc7QUFDWixFQUFBLE9BQU8sR0FBSTtBQUNULElBQUEsS0FBSyxDQUFDLGtJQUFELENBQUw7QUFDRDs7QUFIVyxDQUFkO0FBTUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsS0FBakI7Ozs7O0FDTkEsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGlCQUFELENBQTdCOztBQUNBLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUNBLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUVBLGFBQWEsQ0FBQyxVQUFkO0FBQ0EsTUFBTSxDQUFDLE1BQVA7QUFDQSxTQUFTLENBQUMsU0FBVjtBQUNBLFNBQVMsQ0FBQyxRQUFWOzs7OztBQ1BBLE1BQU0s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RUFBekM7QUFDQSxRQUFBLFlBQVksQ0FBQyxZQUFiLENBQTBCLE9BQTFCLEVBQW1DLFFBQW5DO0FBQ0EsUUFBQSxZQUFZLENBQUMsWUFBYixDQUEwQixNQUExQixFQUFrQyxRQUFRLENBQUMsUUFBM0M7QUFDQSxRQUFBLFlBQVksQ0FBQyxZQUFiLENBQTBCLFFBQTFCLEVBQW9DLE9BQXBDO0FBQ0EsUUFBQSxZQUFZLENBQUMsU0FBYixHQUF5QixhQUF6QjtBQUNBLFFBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsWUFBeEI7QUFDRDtBQUNGLEtBakJEO0FBa0JBLElBQUEsY0FBYyxDQUFDLE9BQWYsQ0FBdUIsTUFBTSxJQUFJO0FBQUc7QUFDbEMsY0FBUSxNQUFNLENBQUMsRUFBZjtBQUNFLGFBQUssV0FBTDtBQUNFLFVBQUEsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUMsZ0JBQXJDLENBQXNELE9BQXRELEVBQStELFNBQVMsQ0FBQyxVQUF6RTtBQUNBOztBQUNGLGFBQUssVUFBTDtBQUNFLFVBQUEsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0MsZ0JBQXBDLENBQXFELE9BQXJELEVBQThELEtBQUssQ0FBQyxPQUFwRTtBQUNBOztBQUNGLGFBQUssS0FBTDtBQUNFLFVBQUEsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0IsZ0JBQS9CLENBQWdELE9BQWhELEVBQXlELEtBQUssQ0FBQyxPQUEvRDtBQUNBO0FBVEo7QUFXRCxLQVpEO0FBYUQ7O0FBMUdlLENBQWxCO0FBNkdBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgQkFDS0dST1VORFBJQyA9IHtcbiAgZGlzcGxheVBpYyAoKSB7XG4gICAgbGV0IGJhY2tncm91bmRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYmFja2dyb3VuZEltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL2ltYWdlcy9wcm9maWxlUGljQmxhY2tCa2dybmQuanBnXCIpO1xuICAgIGJhY2tncm91bmRJbWFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJhY2tncm91bmRJbWFnZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhY2tncm91bmRJbWFnZSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQkFDS0dST1VORFBJQzsiLCJjb25zdCBBTEVSVCA9IHtcbiAgbWVzc2FnZSAoKSB7XG4gICAgYWxlcnQoXCJUaGlzIGxpbmsgaXMgY3VycmVudGx5IGJlaW5nIHJlZGVzaWduZWQgYW5kIHNob3VsZCBiZSBydW5uaW5nIHNob3J0bHkuIFBsZWFzZSBjaGVjayBvdXQgbXkgZ2l0aHViIHBhZ2UgZm9yIGRldmVsb3BtZW50IGV4YW1wbGVzLlwiKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBTEVSVDsiLCJjb25zdCBCQUNLR1JPVU5EUElDID0gcmVxdWlyZShcIi4vYmFja2dyb3VuZFBpY1wiKTtcbmNvbnN0IE5BVkJBUiA9IHJlcXVpcmUoXCIuL25hdkJhclwiKTtcbmNvbnN0IFBSSU5USU5GTyA9IHJlcXVpcmUoXCIuL3ByaW50VG9Eb21cIik7XG5cbkJBQ0tHUk9VTkRQSUMuZGlzcGxheVBpYygpO1xuTkFWQkFSLmNyZWF0ZSgpO1xuUFJJTlRJTkZPLm5hbWVCbG9jaygpO1xuUFJJTlRJTkZPLmpvYlRpdGxlKCk7IiwiY29uc3QgTkFWQkFSID0ge1xuICBjcmVhdGUgKCkge1xuICAgIGxldCBwbGFjZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2QmFyXCIpO1xuICAgIHBsYWNlSG9sZGVyLmlubmVySFRNTCA9IGBcbiAgICA8YSBocmVmPVwibWFpbHRvOmJyYWRAYnJhZGRhdmlzdGVjaC5jb21cIiBjbGFzcz1cIm5hdmJhckFcIj48aW1nIHNyYz1cIi4uL2ltYWdlcy9lbWFpbC5wbmdcIiBjbGFzcz1cIm5hdkJ1dHRvblwiIGFsdD1cIkVtYWlsIEJyYWRcIj48L2E+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9icmFkZGF2aXN0ZWNoL1wiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwibmF2YmFyQVwiPjxpbWcgc3JjPVwiLi4vaW1hZ2VzL2xpbmtlZEluLnBuZ1wiIGNsYXNzPVwibmF2QnV0dG9uXCIgYWx0PVwiTGlrZWRJblwiPjwvYT5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2JyYWRkYXZpc3RlY2hcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cIm5hdmJhckFcIj48aW1nIHNyYz1cIi4uL2ltYWdlcy9naXRodWIucG5nXCIgY2xhc3M9XCJuYXZCdXR0b25cIiBhbHQ9XCJHaXRIdWJcIj48L2E+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9icmFkLmRhdmlzLjU0Mzc5MjM2XCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJuYXZiYXJBXCI+PGltZyBzcmM9XCIuLi9pbWFnZXMvZmFjZWJvb2sucG5nXCIgY2xhc3M9XCJuYXZCdXR0b25cIiBhbHQ9XCJGYWNlYm9va1wiPjwvYT5cbiAgICBgO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVkJBUjsiLCJjb25zdCBwb3J0Zm9saW9JdGVtcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiTWlzc2lvbiBDb250cm9sXCIsXG4gICAgdGV4dDogXCJUaGlzIHdhcyBhIHByb2plY3QgdGhhdCBJIGNyZWF0ZWQgd2l0aCBhIGdyb3VwIG9mIDMgb3RoZXIgc3R1ZGVudHMgYXQgTmFzaHZpbGxlIFNvZnR3YXJlIFNjaG9vbC4gSXQgYWxsb3dzIHVzZXJzIHRvIGxvZyBpbiBvciBjcmVhdGUgbmV3IHVzZXIgYW5kIHF1ZXJpZXMgdGhlIGRhdGFiYXNlIHRvIGNoZWNrIGZvciBjdXJyZW50IHVzZXIgbWF0Y2hlcy4gSSBhbSBwYXJ0aWN1bGFybHkgcHJvdWQgb2YgdGhlIGxvZ2ljIGJlaGluZCB1c2VyIHZhbGlkYXRpb24gZHVyaW5nIGxvZ2luLCB1c2VyIGNyZWF0aW9uLCBhbmQgcHJvZmlsZSBlZGl0aW5nLiBJIGFsc28gY3JlYXRlZCBhbiBlcGljIFJlYWRNZSBmaWxlIG9uIEdpdGh1Yiwgd2hpY2ggd2FzIG15IGZpc3QgZXhwb3N1cmUgdG8gbWFya2Rvd24gbGFuZ3VhZ2UuXCIsXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9uc3MtbWlzc2lvbi1jb250cm9sL251dHNoZWxsXCIsXG4gICAgbGFuZ3VhZ2VzOiBbXCJOb2RlXCIsIFwiSmF2YVNjcmlwdFwiLCBcImpRdWVyeVwiLCBcIk1vbWVudFwiLCBcIlJlc3RmdWxcIiwgXCJOU1NcIiwgXCJIVE1MXCIsIFwiQ1NTXCIsIFwiRVNMaW50XCIsIFwiR2l0aHViXCIsIFwiQnJvd3NlcmlmeVwiLCBcIkx1Y2lkIENoYXJ0c1wiLCBcIkJhYmVsXCIsIFwiR2l0XCIsIFwiR3J1bnRcIiwgXCJTbGFja1wiLCBcIlZTXCJdLFxuICAgIGltZzogW1wiLi4vaW1hZ2VzL21pc3Npb25Db250cm9sMS5wbmdcIiwgXCIuLi9pbWFnZXMvbWlzc2lvbkNvbnRyb2wyLnBuZ1wiXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEYWlseSBKb3VybmFsXCIsXG4gICAgdGV4dDogXCJUaGlzIHdhcyBhIHByb2plY3QgdGhhdCBJIGNyZWF0ZWQgYXQgTmFzaHZpbGxlIFNvZnR3YXJlIFNjaG9vbC4gSXQgYWxsb3dzIHRoZSB1c2VyIHRvIGlucHV0IGpvdXJuYWwgZW50cmllcyBhbmQgc2VsZWN0IGFuIGluc3RydWN0b3IsIGEgbW9vZCwgYW5kIHRhZyBuYW1lcy4gSXQgc2F2ZXMgdGhlIGVudHJpZXMgdGhyb3VnaCBhbiBBUEkgUG9zdCBjYWxsIGFuZCB0aGVuIHVzZXMgRmV0Y2ggdG8gZ3JhYiBhbGwgZW50cmllcyBhbmQgcmVuZGVyIHRvIHRoZSBwYWdlLiBJdCBhbHNvIGFsbG93cyB0aGUgdXNlciB0byBzb3J0IHRoZWlyIGVudHJpZXMgdGhyb3VnaCB0aGUgbW9vZHMgaW5wdXQuXCIsXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9icmFkZGF2aXN0ZWNoL05TU19EYWlseV9Kb3VybmFsXCIsXG4gICAgbGFuZ3VhZ2VzOiBbXCJKYXZhU2NyaXB0XCIsIFwialF1ZXJ5XCIsIFwiSFRNTFwiLCBcIkNTU1wiLCBcIkdpdGh1YlwiLCBcIkJyb3dzZXJpZnlcIiwgXCJHaXRcIiwgXCJHcnVudFwiLCBcIk5vZGVcIiwgXCJTbGFja1wiLCBcIlZTXCJdLFxuICAgIGltZzogW1wiLi4vaW1hZ2VzL2RqMS5qcGdcIiwgXCIuLi9pbWFnZXMvZGoyLmpwZ1wiXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJXZWxjb21lIHRvIE5hc2h2aWxsZVwiLFxuICAgIHRleHQ6IFwiVGhpcyB3YXMgYSBwcm9qZWN0IHRoYXQgbXkgdGVhbSBjcmVhdGVkIGF0IE5hc2h2aWxsZSBTb2Z0d2FyZSBTY2hvb2wuIEl0IGFsbG93cyB0aGUgdXNlciB0byBzZWFyY2ggZm9yIHJlc3RhdXJhbnRzLCBUaWNrZXRtYXN0ZXIgZXZlbnRzLCBNZXRyby1OYXNodmlsbGUgcGFya3MsIGFuZCBFdmVudGJyaXRlIGV2ZW50cy4gVGhpcyBhcHBsaWNhdGlvbiB1c2VzIGNvbnRpbnVvdXMgQVBJIGNhbGxzIHRvIHRoZSBkaWZmZXJlbnQgZGF0YWJhc2VzIHRvIGdldCB1cC10by1kYXRlIGluZm9ybWF0aW9uLiBJdCBhbHNvIGhhcyB0aGUgYWJpbGl0eSB0byBzYXZlIHlvdXIgY3JlYXRlZCBpdGluZXJhcmllcyBhbmQgZGlzcGxheSBwYXN0IGl0aW5lcmFyaWVzIHRocm91Z2ggYSBsb2NhbCBqc29uIGZpbGUuXCIsXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9icmFkZGF2aXN0ZWNoL1dlbGNvbWVfVG9fTmFzaHZpbGxlXCIsXG4gICAgbGFuZ3VhZ2VzOiBbXCJKYXZhU2NyaXB0XCIsIFwiSFRNTFwiLCBcIkNTU1wiLCBcIkdpdGh1YlwiLCBcIkJyb3dzZXJpZnlcIiwgXCJHaXRcIiwgXCJHcnVudFwiLCBcIk5vZGVcIiwgXCJTbGFja1wiLCBcIlZTXCJdLFxuICAgIGltZzogW1wiLi4vaW1hZ2VzL25hc2h2aWxsZTEuanBnXCIsIFwiLi4vaW1hZ2VzL25hc2h2aWxsZTIuanBnXCJdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxpZnQgQ2FsY3VsYXRvclwiLFxuICAgIHRleHQ6IFwiVGhpcyB3YXMgYSBwcm9qZWN0IHRoYXQgd2FzIG15IGZpcnN0IGV4cGVyaWVuY2Ugd2l0aCBKYXZhU2NyaXB0LiBJdCBhbGxvd3MgYSB1c2VyIHRvIGlucHV0IGRhdGEgcmVsYXRlZCB0byBhbiBhaXJjcmFmdCdzIGZsaWdodCBwcm9wZXJ0aWVzIGFuZCBhdG1vc3BoZXJpYyBjb25kaXRpb25zIHRvIHJldHVybiB0aGUgYW1vdW50IG9mIGxpZnQgdGhhdCB0aGlzIGFpcmNyYWZ0IHdvdWxkIGhhdmUuIFRoaXMgYXBwbGljYXRpb24gaXMgYSBzaW5nbGUtZmlsZSBhcHBsaWNhdGlvbiB3aXRoIHN0eWxpbmdzIGFuZCBzY3JpcHQgaW5zaWRlIG9mIHRoZSBIVE1MLlwiLFxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vYnJhZGRhdmlzdGVjaC9BZXJvZHluYW1pY3NBbmRMaWZ0Q2FsY3VsYXRvclwiLFxuICAgIGxhbmd1YWdlczogW1wiSmF2YVNjcmlwdFwiLCBcIkhUTUxcIiwgXCJDU1NcIiwgXCJHaXRodWJcIiwgXCJBdG9tXCJdLFxuICAgIGltZzogW1wiLi4vaW1hZ2VzL2xpZnRDYWxjLmpwZ1wiXVxuICB9XG5dO1xuXG5jb25zdCBQT1JURk9MSU8gPSB7XG4gIHByaW50SXRlbXMoKSB7XG4gICAgJChcIiNuYW1lQmxvY2tcIikuaGlkZSgpO1xuICAgICQoXCIjYmFja2dyb3VuZEltYWdlXCIpLmhpZGUoKTtcbiAgICBsZXQgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBob21lTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly93d3cuYnJhZGRhdmlzdGVjaC5jb21cIik7XG4gICAgaG9tZUxpbmsuaW5uZXJIVE1MID0gXCI8aW1nIHNyYz1cXFwiLi4vaW1hZ2VzL0JEVGVjaExvZ28uanBnXFxcIiBpZD1cXFwiaG9tZUljb25cXFwiPlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2QmFyXCIpLmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcbiAgICBsZXQgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5ib2R5O1xuICAgIHBvcnRmb2xpb0l0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBsZXQgcG9ydGZvbGlvRW50cnkgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmRpdlBvcnRcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwicG9ydGZvbGlvVGl0bGVcIj4ke2l0ZW0ubmFtZX08L2gxPmA7XG4gICAgICBpdGVtLmltZy5mb3JFYWNoKHBpYyA9PiB7XG4gICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGBcbiAgICAgICAgPGltZyBjbGFzcz1cInBvcnRmb2xpb1BpY1wiIHNyYz1cIiR7cGljfVwiPmA7XG4gICAgICB9KTtcbiAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGBcbiAgICAgICAgPHAgY2xhc3M9XCJpdGVtRGVzY3JpcHRpb25cIj4ke2l0ZW0udGV4dH08L3A+XG4gICAgICAgIDxoMyBjbGFzcz1cImxhbmd1YWdlVGl0bGVcIj5URUNITk9MT0dJRVM8L2gzPmA7XG4gICAgICBpdGVtLmxhbmd1YWdlcy5mb3JFYWNoKGxhbmd1YWdlID0+IHtcbiAgICAgICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgICAgIGNhc2UgXCJKYXZhU2NyaXB0XCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvanNpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkJhYmVsXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvYmFiZWxqcy5wbmdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkNTU1wiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2NzczNpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkdpdGh1YlwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2dpdGh1YmltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiR2l0XCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvZ2l0aW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJNb21lbnRcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9tb21lbnRqcy5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkVTTGludFwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2VzbGludC5wbmdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkdydW50XCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvZ3J1bnRpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkhUTUxcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9odG1sNWltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwialF1ZXJ5XCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvalF1ZXJ5aW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJMdWNpZCBDaGFydHNcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9sdWNpZGNoYXJ0LnBuZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiTm9kZVwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL25vZGVpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIk5TU1wiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL25zc2pzLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiUmVhY3RcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9yZWFjdGltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiUmVzdGZ1bFwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL1JFU1RmaWwtQVBJLnBuZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiU2xhY2tcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9zbGFja2ltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiVlNcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy92c2ltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQXRvbVwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2F0b21pbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkJyb3dzZXJpZnlcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9icm93c2VyaWZ5aW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8YSBocmVmPVwiJHtpdGVtLmdpdGh1Yn1cIiBjbGFzcz1cImdpdGh1YlwiIHRhcmdldD1cImJsYW5rXCI+U2VlIEdpdGh1YiBDb2RlPC9hPjwvZGl2PmA7XG4gICAgICBwbGFjZUhvbGRlci5pbm5lckhUTUwgKz0gcG9ydGZvbGlvRW50cnk7XG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUE9SVEZPTElPOyIsImNvbnN0IFBPUlRGT0xJTyA9IHJlcXVpcmUoXCIuL3BlcnNvbmFsUG9ydGZvbGlvXCIpO1xuY29uc3QgQUxFUlQgPSByZXF1aXJlKFwiLi9jb25zdHJ1Y3Rpb25cIik7XG5cbmNvbnN0IGluZm9DYXRlZ29yaWVzID0gW1xuICB7XG4gICAgbmFtZTogXCJQZXJzb25hbCBQb3J0Zm9saW9cIixcbiAgICBpZDogXCJQb3J0Zm9saW9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUHJvZmVzc2lvbmFsIFdlYnNpdGVzXCIsXG4gICAgaWQ6IFwiV2Vic2l0ZXNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUGVyc29uYWwgQmlvXCIsXG4gICAgaWQ6IFwiQmlvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJlc3VtZVwiLFxuICAgIGlkOiBcIlJlc3VtZVwiLFxuICAgIGxvY2F0aW9uOiBcIi4uL2ltYWdlcy9CcmFkIERhdmlzIDIwMTkucGRmXCJcbiAgfVxuXTtcblxuY29uc3QgUFJJTlRJTkZPID0ge1xuICBuYW1lQmxvY2soKSB7XG4gICAgJChcIiNuYW1lQmxvY2tcIikuaHRtbChcIjxwIGlkPVxcXCJuYW1lVGl0bGVcXFwiPkJyYWQgRGF2aXM8L3A+XCIpXG4gIH0sXG4gIGpvYlRpdGxlKCkge1xuICAgIGxldCBwbGFjZUhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZUJsb2NrXCIpO1xuICAgIGxldCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImpvYlRpdGxlXCIpO1xuICAgIHBsYWNlSG9sZGVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgIGxldCBjdXJzb3JFZmZlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjdXJzb3JFZmZlY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjdXJzb3JcIik7XG4gICAgY3Vyc29yRWZmZWN0LmlubmVySFRNTCA9IFwiJmxvd2JhcjtcIjtcbiAgICBwbGFjZUhvbGRlci5hcHBlbmRDaGlsZChjdXJzb3JFZmZlY3QpO1xuICAgIGxldCBydW5UeXBlV3JpdGVyID0gdHJ1ZTtcbiAgICBsZXQgdGV4dFBvc2l0aW9uID0gMDtcbiAgICBsZXQgam9iVGl0bGVUZXh0ID0gXCJTb2Z0d2FyZSBEZXZlbG9wZXJcIjtcbiAgICBsZXQgc2V0VHlwZVNwZWVkID0gMTY1OyAvKiBTRVQgVEhFIFNQRUVEIE9GIFRIRSBURVhUIEFQUEVBUklORyovXG4gICAgZnVuY3Rpb24gdHlwZVdyaXRlcigpIHtcbiAgICAgIGlmIChydW5UeXBlV3JpdGVyID09PSB0cnVlKSB7XG4gICAgICAgIGlmICh0ZXh0UG9zaXRpb24gPCBqb2JUaXRsZVRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgbGV0IHRlbXBIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpvYlRpdGxlXCIpO1xuICAgICAgICAgIHRlbXBIb2xkZXIuaW5uZXJIVE1MICs9IGpvYlRpdGxlVGV4dC5jaGFyQXQodGV4dFBvc2l0aW9uKTtcbiAgICAgICAgICB0ZXh0UG9zaXRpb24rKztcbiAgICAgICAgICBzZXRUaW1lb3V0KHR5cGVXcml0ZXIsIHNldFR5cGVTcGVlZCk7IC8qIFNFVFMgVEhFIERFTEFZIFRPIFJVTiBUSEUgRlVOQ1RJT04gKi9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBydW5UeXBlV3JpdGVyID0gZmFsc2U7XG4gICAgICAgICAgY3Vyc29yRWZmZWN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgUFJJTlRJTkZPLm9wdGlvbnNCdXR0b24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0eXBlV3JpdGVyKCk7XG4gIH0sXG4gIG9wdGlvbnNCdXR0b24oKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0cyBtb3JlIGluZm8gYnV0dG9uXG4gICAgbGV0IHBsYWNlSG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lQmxvY2tcIik7XG4gICAgbGV0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW5NZW51T3B0aW9uc1wiKTtcbiAgICBpZiAoZGVsZXRlQnV0dG9ucy5sZW5ndGggPT09IDApIHsgICAgICAgICAgICAgICAvL2NoZWNrcyB0byBzZWUgaWYgbW9yZSBpbmZvIGJ1dHRvbiBpcyB0aGUgb25seSBidXR0b25cbiAgICAgIGxldCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5NZW51T3B0aW9ucyBmYWRlSW5cIik7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbkluZm9cIik7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTW9yZSBJbmZvXCIpO1xuICAgICAgcGxhY2VIb2xkZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5JbmZvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBQUklOVElORk8ubW9yZUluZm8pO1xuICAgIH0gZWxzZSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3JlbW92ZXMgYWxsIGJ1dHRvbnMgYW5kIHJlc3VtZSBhbmNob3IgZnJvbSBET01cbiAgICAgIGxldCByZXN1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlJlc3VtZVwiKTtcbiAgICAgIHJlc3VtZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJlc3VtZSk7XG4gICAgICBkZWxldGVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbi5pZCAhPT0gXCJtYWluSW5mb1wiKSB7XG4gICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImZhZGVPdXRcIik7ICAvL3JlbW92ZXMgZmFkZU91dCBhbmltYXRpb24gZnJvbSBtYWluSW5mbyBidXR0b25cbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5JbmZvXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBQUklOVElORk8uZmFkZU91dCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluSW5mb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgUFJJTlRJTkZPLm1vcmVJbmZvKTtcbiAgICB9XG4gIH0sXG4gIGZhZGVPdXQoKSB7ICAgICAgICAgLy9mYWRlcyBvdXQgYWxsIGJ1dHRvbnMgYW5kIGFuY2hvciBleGNlcHQgbW9yZSBpbmZvXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluSW5mb1wiKS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk1vcmUgSW5mb1wiKTtcbiAgICBsZXQgcmVzdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJSZXN1bWVcIik7XG4gICAgcmVzdW1lLmNsYXNzTGlzdC5yZXBsYWNlKFwiZmFkZUluXCIsIFwiZmFkZU91dFwiKTtcbiAgICBsZXQgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbk1lbnVPcHRpb25zXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgaWYgKGJ1dHRvbi5pZCAhPT0gXCJtYWluSW5mb1wiKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVwbGFjZShcImZhZGVJblwiLCBcImZhZGVPdXRcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2V0VGltZW91dChQUklOVElORk8ub3B0aW9uc0J1dHRvbiwgNzAwKTsgLy9zZXRzIHBhdXNlIHRvIGFsbG93IGZhZGVPdXQgYW5pbWF0aW9uIHRvIGZpbmlzaFxuICB9LFxuICBtb3JlSW5mbygpIHsgICAgICAvL2NyZWF0ZXMgbGluayBidXR0b25zIGFuZCBhbmNob3JcbiAgICBsZXQgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVCbG9ja1wiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5JbmZvXCIpLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSGlkZSBNZW51XCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkluZm9cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFBSSU5USU5GTy5tb3JlSW5mbyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluSW5mb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgUFJJTlRJTkZPLmZhZGVPdXQpO1xuICAgIGluZm9DYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgaWYgKGNhdGVnb3J5LmlkICE9PSBcIlJlc3VtZVwiKSB7XG4gICAgICAgIGxldCBpbmZvQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGluZm9DYXRlZ29yeS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICBpbmZvQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwiaWRcIiwgY2F0ZWdvcnkuaWQpO1xuICAgICAgICBpbmZvQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluTWVudU9wdGlvbnMgZmFkZUluXCIpO1xuICAgICAgICBpbmZvQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgY2F0ZWdvcnkubmFtZSk7XG4gICAgICAgIHBsYWNlSG9sZGVyLmFwcGVuZENoaWxkKGluZm9DYXRlZ29yeSk7XG4gICAgICB9IGVsc2UgaWYgKGNhdGVnb3J5LmlkID09PSBcIlJlc3VtZVwiKSB7XG4gICAgICAgIGxldCBpbmZvQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgaW5mb0NhdGVnb3J5LnNldEF0dHJpYnV0ZShcImlkXCIsIGNhdGVnb3J5LmlkKTtcbiAgICAgICAgaW5mb0NhdGVnb3J5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZmFkZUluXCIpO1xuICAgICAgICBpbmZvQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBjYXRlZ29yeS5sb2NhdGlvbik7XG4gICAgICAgIGluZm9DYXRlZ29yeS5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJibGFua1wiKTtcbiAgICAgICAgaW5mb0NhdGVnb3J5LmlubmVySFRNTCA9IFwiVmlldyBSZXN1bWVcIjtcbiAgICAgICAgcGxhY2VIb2xkZXIuYXBwZW5kQ2hpbGQoaW5mb0NhdGVnb3J5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpbmZvQ2F0ZWdvcmllcy5mb3JFYWNoKGJ1dHRvbiA9PiB7ICAvL2FkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIGJ1dHRvbnNcbiAgICAgIHN3aXRjaCAoYnV0dG9uLmlkKSB7XG4gICAgICAgIGNhc2UgXCJQb3J0Zm9saW9cIjpcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlBvcnRmb2xpb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgUE9SVEZPTElPLnByaW50SXRlbXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiV2Vic2l0ZXNcIjpcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIldlYnNpdGVzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBBTEVSVC5tZXNzYWdlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkJpb1wiOlxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQmlvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBBTEVSVC5tZXNzYWdlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQUklOVElORk87Il19
