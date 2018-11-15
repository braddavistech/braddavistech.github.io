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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2JhY2tncm91bmRQaWMuanMiLCIuLi9zY3JpcHRzL2NvbnN0cnVjdGlvbi5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvbmF2QmFyLmpzIiwiLi4vc2NyaXB0cy9wZXJzb25hbFBvcnRmb2xpby5qcyIsIi4uL3NjcmlwdHMvcHJpbnRUb0RvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsTUFBTSxhQUFhLEdBQUc7QUFDcEIsRUFBQSxVQUFVLEdBQUk7QUFDWixRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUF0QjtBQUNBLElBQUEsZUFBZSxDQUFDLFlBQWhCLENBQTZCLEtBQTdCLEVBQW9DLHFDQUFwQztBQUNBLElBQUEsZUFBZSxDQUFDLFlBQWhCLENBQTZCLElBQTdCLEVBQW1DLGlCQUFuQztBQUNBLElBQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxXQUFkLENBQTBCLGVBQTFCO0FBQ0Q7O0FBTm1CLENBQXRCO0FBU0EsTUFBTSxDQUFDLE9BQVAsR0FBaUIsYUFBakI7Ozs7O0FDVEEsTUFBTSxLQUFLLEdBQUc7QUFDWixFQUFBLE9BQU8sR0FBSTtBQUNULElBQUEsS0FBSyxDQUFDLGtJQUFELENBQUw7QUFDRDs7QUFIVyxDQUFkO0FBTUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsS0FBakI7Ozs7O0FDTkEsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGlCQUFELENBQTdCOztBQUNBLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUNBLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUVBLGFBQWEsQ0FBQyxVQUFkO0FBQ0EsTUFBTSxDQUFDLE1BQVA7QUFDQSxTQUFTLENBQUMsU0FBVjtBQUNBLFNBQVMsQ0FBQyxRQUFWOzs7OztBQ1BBLE1BQU0s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RUFBekM7QUFDQSxRQUFBLFlBQVksQ0FBQyxZQUFiLENBQTBCLE9BQTFCLEVBQW1DLFFBQW5DO0FBQ0EsUUFBQSxZQUFZLENBQUMsWUFBYixDQUEwQixNQUExQixFQUFrQyxRQUFRLENBQUMsUUFBM0M7QUFDQSxRQUFBLFlBQVksQ0FBQyxZQUFiLENBQTBCLFFBQTFCLEVBQW9DLE9BQXBDO0FBQ0EsUUFBQSxZQUFZLENBQUMsU0FBYixHQUF5QixhQUF6QjtBQUNBLFFBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsWUFBeEI7QUFDRDtBQUNGLEtBakJEO0FBa0JBLElBQUEsY0FBYyxDQUFDLE9BQWYsQ0FBdUIsTUFBTSxJQUFJO0FBQUc7QUFDbEMsY0FBUSxNQUFNLENBQUMsRUFBZjtBQUNFLGFBQUssV0FBTDtBQUNFLFVBQUEsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUMsZ0JBQXJDLENBQXNELE9BQXRELEVBQStELFNBQVMsQ0FBQyxVQUF6RTtBQUNBOztBQUNGLGFBQUssVUFBTDtBQUNFLFVBQUEsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0MsZ0JBQXBDLENBQXFELE9BQXJELEVBQThELEtBQUssQ0FBQyxPQUFwRTtBQUNBOztBQUNGLGFBQUssS0FBTDtBQUNFLFVBQUEsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0IsZ0JBQS9CLENBQWdELE9BQWhELEVBQXlELEtBQUssQ0FBQyxPQUEvRDtBQUNBO0FBVEo7QUFXRCxLQVpEO0FBYUQ7O0FBMUdlLENBQWxCO0FBNkdBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgQkFDS0dST1VORFBJQyA9IHtcbiAgZGlzcGxheVBpYyAoKSB7XG4gICAgbGV0IGJhY2tncm91bmRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgYmFja2dyb3VuZEltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL2ltYWdlcy9wcm9maWxlUGljQmxhY2tCa2dybmQuanBnXCIpO1xuICAgIGJhY2tncm91bmRJbWFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJhY2tncm91bmRJbWFnZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhY2tncm91bmRJbWFnZSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQkFDS0dST1VORFBJQzsiLCJjb25zdCBBTEVSVCA9IHtcbiAgbWVzc2FnZSAoKSB7XG4gICAgYWxlcnQoXCJUaGlzIGxpbmsgaXMgY3VycmVudGx5IGJlaW5nIHJlZGVzaWduZWQgYW5kIHNob3VsZCBiZSBydW5uaW5nIHNob3J0bHkuIFBsZWFzZSBjaGVjayBvdXQgbXkgZ2l0aHViIHBhZ2UgZm9yIGRldmVsb3BtZW50IGV4YW1wbGVzLlwiKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBTEVSVDsiLCJjb25zdCBCQUNLR1JPVU5EUElDID0gcmVxdWlyZShcIi4vYmFja2dyb3VuZFBpY1wiKTtcbmNvbnN0IE5BVkJBUiA9IHJlcXVpcmUoXCIuL25hdkJhclwiKTtcbmNvbnN0IFBSSU5USU5GTyA9IHJlcXVpcmUoXCIuL3ByaW50VG9Eb21cIik7XG5cbkJBQ0tHUk9VTkRQSUMuZGlzcGxheVBpYygpO1xuTkFWQkFSLmNyZWF0ZSgpO1xuUFJJTlRJTkZPLm5hbWVCbG9jaygpO1xuUFJJTlRJTkZPLmpvYlRpdGxlKCk7IiwiY29uc3QgTkFWQkFSID0ge1xuICBjcmVhdGUgKCkge1xuICAgIGxldCBwbGFjZUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2QmFyXCIpO1xuICAgIHBsYWNlSG9sZGVyLmlubmVySFRNTCA9IGBcbiAgICA8YSBocmVmPVwibWFpbHRvOmJyYWRAYnJhZGRhdmlzdGVjaC5jb21cIiBjbGFzcz1cIm5hdmJhckFcIj48aW1nIHNyYz1cIi4uL2ltYWdlcy9lbWFpbC5wbmdcIiBjbGFzcz1cIm5hdkJ1dHRvblwiIGFsdD1cIkVtYWlsIEJyYWRcIj48L2E+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9icmFkZGF2aXN0ZWNoL1wiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwibmF2YmFyQVwiPjxpbWcgc3JjPVwiLi4vaW1hZ2VzL2xpbmtlZEluLnBuZ1wiIGNsYXNzPVwibmF2QnV0dG9uXCIgYWx0PVwiTGlrZWRJblwiPjwvYT5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2JyYWRkYXZpc3RlY2hcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cIm5hdmJhckFcIj48aW1nIHNyYz1cIi4uL2ltYWdlcy9naXRodWIucG5nXCIgY2xhc3M9XCJuYXZCdXR0b25cIiBhbHQ9XCJHaXRIdWJcIj48L2E+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9icmFkLmRhdmlzLjU0Mzc5MjM2XCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJuYXZiYXJBXCI+PGltZyBzcmM9XCIuLi9pbWFnZXMvZmFjZWJvb2sucG5nXCIgY2xhc3M9XCJuYXZCdXR0b25cIiBhbHQ9XCJGYWNlYm9va1wiPjwvYT5cbiAgICBgO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVkJBUjsiLCJjb25zdCBwb3J0Zm9saW9JdGVtcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiTWlzc2lvbiBDb250cm9sXCIsXG4gICAgdGV4dDogXCJUaGlzIHdhcyBhIHByb2plY3QgdGhhdCBJIGNyZWF0ZWQgd2l0aCBhIGdyb3VwIG9mIDMgb3RoZXIgc3R1ZGVudHMgYXQgTmFzaHZpbGxlIFNvZnR3YXJlIFNjaG9vbC4gSXQgYWxsb3dzIHVzZXJzIHRvIGxvZyBpbiBvciBjcmVhdGUgbmV3IHVzZXIgYW5kIHF1ZXJpZXMgdGhlIGRhdGFiYXNlIHRvIGNoZWNrIGZvciBjdXJyZW50IHVzZXIgbWF0Y2hlcy4gSSBhbSBwYXJ0aWN1bGFybHkgcHJvdWQgb2YgdGhlIGxvZ2ljIGJlaGluZCB1c2VyIHZhbGlkYXRpb24gZHVyaW5nIGxvZ2luLCB1c2VyIGNyZWF0aW9uLCBhbmQgcHJvZmlsZSBlZGl0aW5nLiBJIGFsc28gY3JlYXRlZCBhbiBlcGljIFJlYWRNZSBmaWxlIG9uIEdpdGh1Yiwgd2hpY2ggd2FzIG15IGZpc3QgZXhwb3N1cmUgdG8gbWFya2Rvd24gbGFuZ3VhZ2UuXCIsXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9icmFkZGF2aXN0ZWNoL01pc3Npb25fQ29udHJvbFwiLFxuICAgIGxhbmd1YWdlczogW1wiTm9kZVwiLCBcIkphdmFTY3JpcHRcIiwgXCJqUXVlcnlcIiwgXCJNb21lbnRcIiwgXCJSZXN0ZnVsXCIsIFwiTlNTXCIsIFwiSFRNTFwiLCBcIkNTU1wiLCBcIkVTTGludFwiLCBcIkdpdGh1YlwiLCBcIkJyb3dzZXJpZnlcIiwgXCJMdWNpZCBDaGFydHNcIiwgXCJCYWJlbFwiLCBcIkdpdFwiLCBcIkdydW50XCIsIFwiU2xhY2tcIiwgXCJWU1wiXSxcbiAgICBpbWc6IFtcIi4uL2ltYWdlcy9taXNzaW9uQ29udHJvbDEucG5nXCIsIFwiLi4vaW1hZ2VzL21pc3Npb25Db250cm9sMi5wbmdcIl1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRGFpbHkgSm91cm5hbFwiLFxuICAgIHRleHQ6IFwiVGhpcyB3YXMgYSBwcm9qZWN0IHRoYXQgSSBjcmVhdGVkIGF0IE5hc2h2aWxsZSBTb2Z0d2FyZSBTY2hvb2wuIEl0IGFsbG93cyB0aGUgdXNlciB0byBpbnB1dCBqb3VybmFsIGVudHJpZXMgYW5kIHNlbGVjdCBhbiBpbnN0cnVjdG9yLCBhIG1vb2QsIGFuZCB0YWcgbmFtZXMuIEl0IHNhdmVzIHRoZSBlbnRyaWVzIHRocm91Z2ggYW4gQVBJIFBvc3QgY2FsbCBhbmQgdGhlbiB1c2VzIEZldGNoIHRvIGdyYWIgYWxsIGVudHJpZXMgYW5kIHJlbmRlciB0byB0aGUgcGFnZS4gSXQgYWxzbyBhbGxvd3MgdGhlIHVzZXIgdG8gc29ydCB0aGVpciBlbnRyaWVzIHRocm91Z2ggdGhlIG1vb2RzIGlucHV0LlwiLFxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vYnJhZGRhdmlzdGVjaC9OU1NfRGFpbHlfSm91cm5hbFwiLFxuICAgIGxhbmd1YWdlczogW1wiSmF2YVNjcmlwdFwiLCBcImpRdWVyeVwiLCBcIkhUTUxcIiwgXCJDU1NcIiwgXCJHaXRodWJcIiwgXCJCcm93c2VyaWZ5XCIsIFwiR2l0XCIsIFwiR3J1bnRcIiwgXCJOb2RlXCIsIFwiU2xhY2tcIiwgXCJWU1wiXSxcbiAgICBpbWc6IFtcIi4uL2ltYWdlcy9kajEuanBnXCIsIFwiLi4vaW1hZ2VzL2RqMi5qcGdcIl1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiV2VsY29tZSB0byBOYXNodmlsbGVcIixcbiAgICB0ZXh0OiBcIlRoaXMgd2FzIGEgcHJvamVjdCB0aGF0IG15IHRlYW0gY3JlYXRlZCBhdCBOYXNodmlsbGUgU29mdHdhcmUgU2Nob29sLiBJdCBhbGxvd3MgdGhlIHVzZXIgdG8gc2VhcmNoIGZvciByZXN0YXVyYW50cywgVGlja2V0bWFzdGVyIGV2ZW50cywgTWV0cm8tTmFzaHZpbGxlIHBhcmtzLCBhbmQgRXZlbnRicml0ZSBldmVudHMuIFRoaXMgYXBwbGljYXRpb24gdXNlcyBjb250aW51b3VzIEFQSSBjYWxscyB0byB0aGUgZGlmZmVyZW50IGRhdGFiYXNlcyB0byBnZXQgdXAtdG8tZGF0ZSBpbmZvcm1hdGlvbi4gSXQgYWxzbyBoYXMgdGhlIGFiaWxpdHkgdG8gc2F2ZSB5b3VyIGNyZWF0ZWQgaXRpbmVyYXJpZXMgYW5kIGRpc3BsYXkgcGFzdCBpdGluZXJhcmllcyB0aHJvdWdoIGEgbG9jYWwganNvbiBmaWxlLlwiLFxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vYnJhZGRhdmlzdGVjaC9XZWxjb21lX1RvX05hc2h2aWxsZVwiLFxuICAgIGxhbmd1YWdlczogW1wiSmF2YVNjcmlwdFwiLCBcIkhUTUxcIiwgXCJDU1NcIiwgXCJHaXRodWJcIiwgXCJCcm93c2VyaWZ5XCIsIFwiR2l0XCIsIFwiR3J1bnRcIiwgXCJOb2RlXCIsIFwiU2xhY2tcIiwgXCJWU1wiXSxcbiAgICBpbWc6IFtcIi4uL2ltYWdlcy9uYXNodmlsbGUxLmpwZ1wiLCBcIi4uL2ltYWdlcy9uYXNodmlsbGUyLmpwZ1wiXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMaWZ0IENhbGN1bGF0b3JcIixcbiAgICB0ZXh0OiBcIlRoaXMgd2FzIGEgcHJvamVjdCB0aGF0IHdhcyBteSBmaXJzdCBleHBlcmllbmNlIHdpdGggSmF2YVNjcmlwdC4gSXQgYWxsb3dzIGEgdXNlciB0byBpbnB1dCBkYXRhIHJlbGF0ZWQgdG8gYW4gYWlyY3JhZnQncyBmbGlnaHQgcHJvcGVydGllcyBhbmQgYXRtb3NwaGVyaWMgY29uZGl0aW9ucyB0byByZXR1cm4gdGhlIGFtb3VudCBvZiBsaWZ0IHRoYXQgdGhpcyBhaXJjcmFmdCB3b3VsZCBoYXZlLiBUaGlzIGFwcGxpY2F0aW9uIGlzIGEgc2luZ2xlLWZpbGUgYXBwbGljYXRpb24gd2l0aCBzdHlsaW5ncyBhbmQgc2NyaXB0IGluc2lkZSBvZiB0aGUgSFRNTC5cIixcbiAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2JyYWRkYXZpc3RlY2gvQWVyb2R5bmFtaWNzQW5kTGlmdENhbGN1bGF0b3JcIixcbiAgICBsYW5ndWFnZXM6IFtcIkphdmFTY3JpcHRcIiwgXCJIVE1MXCIsIFwiQ1NTXCIsIFwiR2l0aHViXCIsIFwiQXRvbVwiXSxcbiAgICBpbWc6IFtcIi4uL2ltYWdlcy9saWZ0Q2FsYy5qcGdcIl1cbiAgfVxuXTtcblxuY29uc3QgUE9SVEZPTElPID0ge1xuICBwcmludEl0ZW1zKCkge1xuICAgICQoXCIjbmFtZUJsb2NrXCIpLmhpZGUoKTtcbiAgICAkKFwiI2JhY2tncm91bmRJbWFnZVwiKS5oaWRlKCk7XG4gICAgbGV0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgaG9tZUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vd3d3LmJyYWRkYXZpc3RlY2guY29tXCIpO1xuICAgIGhvbWVMaW5rLmlubmVySFRNTCA9IFwiPGltZyBzcmM9XFxcIi4uL2ltYWdlcy9CRFRlY2hMb2dvLmpwZ1xcXCIgaWQ9XFxcImhvbWVJY29uXFxcIj5cIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdkJhclwiKS5hcHBlbmRDaGlsZChob21lTGluayk7XG4gICAgbGV0IHBsYWNlSG9sZGVyID0gZG9jdW1lbnQuYm9keTtcbiAgICBwb3J0Zm9saW9JdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgbGV0IHBvcnRmb2xpb0VudHJ5ID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5kaXZQb3J0XCI+XG4gICAgICAgIDxoMSBjbGFzcz1cInBvcnRmb2xpb1RpdGxlXCI+JHtpdGVtLm5hbWV9PC9oMT5gO1xuICAgICAgaXRlbS5pbWcuZm9yRWFjaChwaWMgPT4ge1xuICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgXG4gICAgICAgIDxpbWcgY2xhc3M9XCJwb3J0Zm9saW9QaWNcIiBzcmM9XCIke3BpY31cIj5gO1xuICAgICAgfSk7XG4gICAgICBwb3J0Zm9saW9FbnRyeSArPSBgXG4gICAgICAgIDxwIGNsYXNzPVwiaXRlbURlc2NyaXB0aW9uXCI+JHtpdGVtLnRleHR9PC9wPlxuICAgICAgICA8aDMgY2xhc3M9XCJsYW5ndWFnZVRpdGxlXCI+VEVDSE5PTE9HSUVTPC9oMz5gO1xuICAgICAgaXRlbS5sYW5ndWFnZXMuZm9yRWFjaChsYW5ndWFnZSA9PiB7XG4gICAgICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgICAgICBjYXNlIFwiSmF2YVNjcmlwdFwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2pzaW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJCYWJlbFwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2JhYmVsanMucG5nXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJDU1NcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9jc3MzaW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJHaXRodWJcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9naXRodWJpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkdpdFwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2dpdGltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiTW9tZW50XCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvbW9tZW50anMuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJFU0xpbnRcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9lc2xpbnQucG5nXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJHcnVudFwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2dydW50aW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJIVE1MXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvaHRtbDVpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImpRdWVyeVwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2pRdWVyeWltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiTHVjaWQgQ2hhcnRzXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvbHVjaWRjaGFydC5wbmdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIk5vZGVcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9ub2RlaW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJOU1NcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9uc3Nqcy5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIlJlYWN0XCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvcmVhY3RpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIlJlc3RmdWxcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9SRVNUZmlsLUFQSS5wbmdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIlNsYWNrXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvc2xhY2tpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIlZTXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvdnNpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkF0b21cIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9hdG9taW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJCcm93c2VyaWZ5XCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvYnJvd3NlcmlmeWltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGEgaHJlZj1cIiR7aXRlbS5naXRodWJ9XCIgY2xhc3M9XCJnaXRodWJcIiB0YXJnZXQ9XCJibGFua1wiPlNlZSBHaXRodWIgQ29kZTwvYT48L2Rpdj5gO1xuICAgICAgcGxhY2VIb2xkZXIuaW5uZXJIVE1MICs9IHBvcnRmb2xpb0VudHJ5O1xuICAgIH0pO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBPUlRGT0xJTzsiLCJjb25zdCBQT1JURk9MSU8gPSByZXF1aXJlKFwiLi9wZXJzb25hbFBvcnRmb2xpb1wiKTtcbmNvbnN0IEFMRVJUID0gcmVxdWlyZShcIi4vY29uc3RydWN0aW9uXCIpO1xuXG5jb25zdCBpbmZvQ2F0ZWdvcmllcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiUGVyc29uYWwgUG9ydGZvbGlvXCIsXG4gICAgaWQ6IFwiUG9ydGZvbGlvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlByb2Zlc3Npb25hbCBXZWJzaXRlc1wiLFxuICAgIGlkOiBcIldlYnNpdGVzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlBlcnNvbmFsIEJpb1wiLFxuICAgIGlkOiBcIkJpb1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSZXN1bWVcIixcbiAgICBpZDogXCJSZXN1bWVcIixcbiAgICBsb2NhdGlvbjogXCIuLi9pbWFnZXMvQnJhZCBEYXZpcyAyMDE5LnBkZlwiXG4gIH1cbl07XG5cbmNvbnN0IFBSSU5USU5GTyA9IHtcbiAgbmFtZUJsb2NrKCkge1xuICAgICQoXCIjbmFtZUJsb2NrXCIpLmh0bWwoXCI8cCBpZD1cXFwibmFtZVRpdGxlXFxcIj5CcmFkIERhdmlzPC9wPlwiKVxuICB9LFxuICBqb2JUaXRsZSgpIHtcbiAgICBsZXQgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVCbG9ja1wiKTtcbiAgICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJqb2JUaXRsZVwiKTtcbiAgICBwbGFjZUhvbGRlci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICBsZXQgY3Vyc29yRWZmZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY3Vyc29yRWZmZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY3Vyc29yXCIpO1xuICAgIGN1cnNvckVmZmVjdC5pbm5lckhUTUwgPSBcIiZsb3diYXI7XCI7XG4gICAgcGxhY2VIb2xkZXIuYXBwZW5kQ2hpbGQoY3Vyc29yRWZmZWN0KTtcbiAgICBsZXQgcnVuVHlwZVdyaXRlciA9IHRydWU7XG4gICAgbGV0IHRleHRQb3NpdGlvbiA9IDA7XG4gICAgbGV0IGpvYlRpdGxlVGV4dCA9IFwiU29mdHdhcmUgRGV2ZWxvcGVyXCI7XG4gICAgbGV0IHNldFR5cGVTcGVlZCA9IDE2NTsgLyogU0VUIFRIRSBTUEVFRCBPRiBUSEUgVEVYVCBBUFBFQVJJTkcqL1xuICAgIGZ1bmN0aW9uIHR5cGVXcml0ZXIoKSB7XG4gICAgICBpZiAocnVuVHlwZVdyaXRlciA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAodGV4dFBvc2l0aW9uIDwgam9iVGl0bGVUZXh0Lmxlbmd0aCkge1xuICAgICAgICAgIGxldCB0ZW1wSG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqb2JUaXRsZVwiKTtcbiAgICAgICAgICB0ZW1wSG9sZGVyLmlubmVySFRNTCArPSBqb2JUaXRsZVRleHQuY2hhckF0KHRleHRQb3NpdGlvbik7XG4gICAgICAgICAgdGV4dFBvc2l0aW9uKys7XG4gICAgICAgICAgc2V0VGltZW91dCh0eXBlV3JpdGVyLCBzZXRUeXBlU3BlZWQpOyAvKiBTRVRTIFRIRSBERUxBWSBUTyBSVU4gVEhFIEZVTkNUSU9OICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcnVuVHlwZVdyaXRlciA9IGZhbHNlO1xuICAgICAgICAgIGN1cnNvckVmZmVjdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgIFBSSU5USU5GTy5vcHRpb25zQnV0dG9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdHlwZVdyaXRlcigpO1xuICB9LFxuICBvcHRpb25zQnV0dG9uKCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldHMgbW9yZSBpbmZvIGJ1dHRvblxuICAgIGxldCBwbGFjZUhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZUJsb2NrXCIpO1xuICAgIGxldCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluTWVudU9wdGlvbnNcIik7XG4gICAgaWYgKGRlbGV0ZUJ1dHRvbnMubGVuZ3RoID09PSAwKSB7ICAgICAgICAgICAgICAgLy9jaGVja3MgdG8gc2VlIGlmIG1vcmUgaW5mbyBidXR0b24gaXMgdGhlIG9ubHkgYnV0dG9uXG4gICAgICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluTWVudU9wdGlvbnMgZmFkZUluXCIpO1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5JbmZvXCIpO1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk1vcmUgSW5mb1wiKTtcbiAgICAgIHBsYWNlSG9sZGVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluSW5mb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgUFJJTlRJTkZPLm1vcmVJbmZvKTtcbiAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9yZW1vdmVzIGFsbCBidXR0b25zIGFuZCByZXN1bWUgYW5jaG9yIGZyb20gRE9NXG4gICAgICBsZXQgcmVzdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJSZXN1bWVcIik7XG4gICAgICByZXN1bWUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyZXN1bWUpO1xuICAgICAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGlmIChidXR0b24uaWQgIT09IFwibWFpbkluZm9cIikge1xuICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGJ1dHRvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlT3V0XCIpOyAgLy9yZW1vdmVzIGZhZGVPdXQgYW5pbWF0aW9uIGZyb20gbWFpbkluZm8gYnV0dG9uXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluSW5mb1wiKS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgUFJJTlRJTkZPLmZhZGVPdXQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkluZm9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFBSSU5USU5GTy5tb3JlSW5mbyk7XG4gICAgfVxuICB9LFxuICBmYWRlT3V0KCkgeyAgICAgICAgIC8vZmFkZXMgb3V0IGFsbCBidXR0b25zIGFuZCBhbmNob3IgZXhjZXB0IG1vcmUgaW5mb1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkluZm9cIikuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJNb3JlIEluZm9cIik7XG4gICAgbGV0IHJlc3VtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUmVzdW1lXCIpO1xuICAgIHJlc3VtZS5jbGFzc0xpc3QucmVwbGFjZShcImZhZGVJblwiLCBcImZhZGVPdXRcIik7XG4gICAgbGV0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW5NZW51T3B0aW9uc1wiKTtcbiAgICBkZWxldGVCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGlmIChidXR0b24uaWQgIT09IFwibWFpbkluZm9cIikge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlcGxhY2UoXCJmYWRlSW5cIiwgXCJmYWRlT3V0XCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoUFJJTlRJTkZPLm9wdGlvbnNCdXR0b24sIDcwMCk7IC8vc2V0cyBwYXVzZSB0byBhbGxvdyBmYWRlT3V0IGFuaW1hdGlvbiB0byBmaW5pc2hcbiAgfSxcbiAgbW9yZUluZm8oKSB7ICAgICAgLy9jcmVhdGVzIGxpbmsgYnV0dG9ucyBhbmQgYW5jaG9yXG4gICAgbGV0IHBsYWNlSG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lQmxvY2tcIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluSW5mb1wiKS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkhpZGUgTWVudVwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5JbmZvXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBQUklOVElORk8ubW9yZUluZm8pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkluZm9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFBSSU5USU5GTy5mYWRlT3V0KTtcbiAgICBpbmZvQ2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgIGlmIChjYXRlZ29yeS5pZCAhPT0gXCJSZXN1bWVcIikge1xuICAgICAgICBsZXQgaW5mb0NhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbmZvQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICAgICAgaW5mb0NhdGVnb3J5LnNldEF0dHJpYnV0ZShcImlkXCIsIGNhdGVnb3J5LmlkKTtcbiAgICAgICAgaW5mb0NhdGVnb3J5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbk1lbnVPcHRpb25zIGZhZGVJblwiKTtcbiAgICAgICAgaW5mb0NhdGVnb3J5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGNhdGVnb3J5Lm5hbWUpO1xuICAgICAgICBwbGFjZUhvbGRlci5hcHBlbmRDaGlsZChpbmZvQ2F0ZWdvcnkpO1xuICAgICAgfSBlbHNlIGlmIChjYXRlZ29yeS5pZCA9PT0gXCJSZXN1bWVcIikge1xuICAgICAgICBsZXQgaW5mb0NhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGluZm9DYXRlZ29yeS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBjYXRlZ29yeS5pZCk7XG4gICAgICAgIGluZm9DYXRlZ29yeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZhZGVJblwiKTtcbiAgICAgICAgaW5mb0NhdGVnb3J5LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgY2F0ZWdvcnkubG9jYXRpb24pO1xuICAgICAgICBpbmZvQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiYmxhbmtcIik7XG4gICAgICAgIGluZm9DYXRlZ29yeS5pbm5lckhUTUwgPSBcIlZpZXcgUmVzdW1lXCI7XG4gICAgICAgIHBsYWNlSG9sZGVyLmFwcGVuZENoaWxkKGluZm9DYXRlZ29yeSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaW5mb0NhdGVnb3JpZXMuZm9yRWFjaChidXR0b24gPT4geyAgLy9hZGRzIGV2ZW50IGxpc3RlbmVycyB0byBidXR0b25zXG4gICAgICBzd2l0Y2ggKGJ1dHRvbi5pZCkge1xuICAgICAgICBjYXNlIFwiUG9ydGZvbGlvXCI6XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQb3J0Zm9saW9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFBPUlRGT0xJTy5wcmludEl0ZW1zKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIldlYnNpdGVzXCI6XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJXZWJzaXRlc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgQUxFUlQubWVzc2FnZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJCaW9cIjpcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkJpb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgQUxFUlQubWVzc2FnZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUFJJTlRJTkZPOyJdfQ==
