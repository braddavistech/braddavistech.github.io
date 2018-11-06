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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2JhY2tncm91bmRQaWMuanMiLCIuLi9zY3JpcHRzL2NvbnN0cnVjdGlvbi5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvbmF2QmFyLmpzIiwiLi4vc2NyaXB0cy9wZXJzb25hbFBvcnRmb2xpby5qcyIsIi4uL3NjcmlwdHMvcHJpbnRUb0RvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsTUFBTSxhQUFhLEdBQUc7QUFDcEIsRUFBQSxVQUFVLEdBQUk7QUFDWixRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUF0QjtBQUNBLElBQUEsZUFBZSxDQUFDLFlBQWhCLENBQTZCLEtBQTdCLEVBQW9DLHFDQUFwQztBQUNBLElBQUEsZUFBZSxDQUFDLFlBQWhCLENBQTZCLElBQTdCLEVBQW1DLGlCQUFuQztBQUNBLElBQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxXQUFkLENBQTBCLGVBQTFCO0FBQ0Q7O0FBTm1CLENBQXRCO0FBU0EsTUFBTSxDQUFDLE9BQVAsR0FBaUIsYUFBakI7Ozs7O0FDVEEsTUFBTSxLQUFLLEdBQUc7QUFDWixFQUFBLE9BQU8sR0FBSTtBQUNULElBQUEsS0FBSyxDQUFDLGtJQUFELENBQUw7QUFDRDs7QUFIVyxDQUFkO0FBTUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsS0FBakI7Ozs7O0FDTkEsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGlCQUFELENBQTdCOztBQUNBLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUNBLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUVBLGFBQWEsQ0FBQyxVQUFkO0FBQ0EsTUFBTSxDQUFDLE1BQVA7QUFDQSxTQUFTLENBQUMsU0FBVjtBQUNBLFNBQVMsQ0FBQyxRQUFWOzs7OztBQ1BBLE1BQU0s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cmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IEJBQ0tHUk9VTkRQSUMgPSB7XG4gIGRpc3BsYXlQaWMgKCkge1xuICAgIGxldCBiYWNrZ3JvdW5kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGJhY2tncm91bmRJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9pbWFnZXMvcHJvZmlsZVBpY0JsYWNrQmtncm5kLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kSW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJiYWNrZ3JvdW5kSW1hZ2VcIik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kSW1hZ2UpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJBQ0tHUk9VTkRQSUM7IiwiY29uc3QgQUxFUlQgPSB7XG4gIG1lc3NhZ2UgKCkge1xuICAgIGFsZXJ0KFwiVGhpcyBsaW5rIGlzIGN1cnJlbnRseSBiZWluZyByZWRlc2lnbmVkIGFuZCBzaG91bGQgYmUgcnVubmluZyBzaG9ydGx5LiBQbGVhc2UgY2hlY2sgb3V0IG15IGdpdGh1YiBwYWdlIGZvciBkZXZlbG9wbWVudCBleGFtcGxlcy5cIik7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQUxFUlQ7IiwiY29uc3QgQkFDS0dST1VORFBJQyA9IHJlcXVpcmUoXCIuL2JhY2tncm91bmRQaWNcIik7XG5jb25zdCBOQVZCQVIgPSByZXF1aXJlKFwiLi9uYXZCYXJcIik7XG5jb25zdCBQUklOVElORk8gPSByZXF1aXJlKFwiLi9wcmludFRvRG9tXCIpO1xuXG5CQUNLR1JPVU5EUElDLmRpc3BsYXlQaWMoKTtcbk5BVkJBUi5jcmVhdGUoKTtcblBSSU5USU5GTy5uYW1lQmxvY2soKTtcblBSSU5USU5GTy5qb2JUaXRsZSgpOyIsImNvbnN0IE5BVkJBUiA9IHtcbiAgY3JlYXRlICgpIHtcbiAgICBsZXQgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdkJhclwiKTtcbiAgICBwbGFjZUhvbGRlci5pbm5lckhUTUwgPSBgXG4gICAgPGEgaHJlZj1cIm1haWx0bzpicmFkQGJyYWRkYXZpc3RlY2guY29tXCIgY2xhc3M9XCJuYXZiYXJBXCI+PGltZyBzcmM9XCIuLi9pbWFnZXMvZW1haWwucG5nXCIgY2xhc3M9XCJuYXZCdXR0b25cIiBhbHQ9XCJFbWFpbCBCcmFkXCI+PC9hPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYnJhZGRhdmlzdGVjaC9cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cIm5hdmJhckFcIj48aW1nIHNyYz1cIi4uL2ltYWdlcy9saW5rZWRJbi5wbmdcIiBjbGFzcz1cIm5hdkJ1dHRvblwiIGFsdD1cIkxpa2VkSW5cIj48L2E+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9icmFkZGF2aXN0ZWNoXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJuYXZiYXJBXCI+PGltZyBzcmM9XCIuLi9pbWFnZXMvZ2l0aHViLnBuZ1wiIGNsYXNzPVwibmF2QnV0dG9uXCIgYWx0PVwiR2l0SHViXCI+PC9hPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vYnJhZC5kYXZpcy41NDM3OTIzNlwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwibmF2YmFyQVwiPjxpbWcgc3JjPVwiLi4vaW1hZ2VzL2ZhY2Vib29rLnBuZ1wiIGNsYXNzPVwibmF2QnV0dG9uXCIgYWx0PVwiRmFjZWJvb2tcIj48L2E+XG4gICAgYDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVZCQVI7IiwiY29uc3QgcG9ydGZvbGlvSXRlbXMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkRhaWx5IEpvdXJuYWxcIixcbiAgICB0ZXh0OiBcIlRoaXMgd2FzIGEgcHJvamVjdCB0aGF0IEkgY3JlYXRlZCBhdCBOYXNodmlsbGUgU29mdHdhcmUgU2Nob29sLiBJdCBhbGxvd3MgdGhlIHVzZXIgdG8gaW5wdXQgam91cm5hbCBlbnRyaWVzIGFuZCBzZWxlY3QgYW4gaW5zdHJ1Y3RvciwgYSBtb29kLCBhbmQgdGFnIG5hbWVzLiBJdCBzYXZlcyB0aGUgZW50cmllcyB0aHJvdWdoIGFuIEFQSSBQb3N0IGNhbGwgYW5kIHRoZW4gdXNlcyBGZXRjaCB0byBncmFiIGFsbCBlbnRyaWVzIGFuZCByZW5kZXIgdG8gdGhlIHBhZ2UuIEl0IGFsc28gYWxsb3dzIHRoZSB1c2VyIHRvIHNvcnQgdGhlaXIgZW50cmllcyB0aHJvdWdoIHRoZSBtb29kcyBpbnB1dC5cIixcbiAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2JyYWRkYXZpc3RlY2gvTlNTX0RhaWx5X0pvdXJuYWxcIixcbiAgICBsYW5ndWFnZXM6IFtcIkphdmFTY3JpcHRcIiwgXCJqUXVlcnlcIiwgXCJIVE1MXCIsIFwiQ1NTXCIsIFwiR2l0aHViXCIsIFwiQnJvd3NlcmlmeVwiLCBcIkdpdFwiLCBcIkdydW50XCIsIFwiTm9kZVwiLCBcIlNsYWNrXCIsIFwiVlNcIl0sXG4gICAgaW1nOiBbXCIuLi9pbWFnZXMvZGoxLmpwZ1wiLCBcIi4uL2ltYWdlcy9kajIuanBnXCJdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIldlbGNvbWUgdG8gTmFzaHZpbGxlXCIsXG4gICAgdGV4dDogXCJUaGlzIHdhcyBhIHByb2plY3QgdGhhdCBteSB0ZWFtIGNyZWF0ZWQgYXQgTmFzaHZpbGxlIFNvZnR3YXJlIFNjaG9vbC4gSXQgYWxsb3dzIHRoZSB1c2VyIHRvIHNlYXJjaCBmb3IgcmVzdGF1cmFudHMsIFRpY2tldG1hc3RlciBldmVudHMsIE1ldHJvLU5hc2h2aWxsZSBwYXJrcywgYW5kIEV2ZW50YnJpdGUgZXZlbnRzLiBUaGlzIGFwcGxpY2F0aW9uIHVzZXMgY29udGludW91cyBBUEkgY2FsbHMgdG8gdGhlIGRpZmZlcmVudCBkYXRhYmFzZXMgdG8gZ2V0IHVwLXRvLWRhdGUgaW5mb3JtYXRpb24uIEl0IGFsc28gaGFzIHRoZSBhYmlsaXR5IHRvIHNhdmUgeW91ciBjcmVhdGVkIGl0aW5lcmFyaWVzIGFuZCBkaXNwbGF5IHBhc3QgaXRpbmVyYXJpZXMgdGhyb3VnaCBhIGxvY2FsIGpzb24gZmlsZS5cIixcbiAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2JyYWRkYXZpc3RlY2gvV2VsY29tZV9Ub19OYXNodmlsbGVcIixcbiAgICBsYW5ndWFnZXM6IFtcIkphdmFTY3JpcHRcIiwgXCJIVE1MXCIsIFwiQ1NTXCIsIFwiR2l0aHViXCIsIFwiQnJvd3NlcmlmeVwiLCBcIkdpdFwiLCBcIkdydW50XCIsIFwiTm9kZVwiLCBcIlNsYWNrXCIsIFwiVlNcIl0sXG4gICAgaW1nOiBbXCIuLi9pbWFnZXMvbmFzaHZpbGxlMS5qcGdcIiwgXCIuLi9pbWFnZXMvbmFzaHZpbGxlMi5qcGdcIl1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGlmdCBDYWxjdWxhdG9yXCIsXG4gICAgdGV4dDogXCJUaGlzIHdhcyBhIHByb2plY3QgdGhhdCB3YXMgbXkgZmlyc3QgZXhwZXJpZW5jZSB3aXRoIEphdmFTY3JpcHQuIEl0IGFsbG93cyBhIHVzZXIgdG8gaW5wdXQgZGF0YSByZWxhdGVkIHRvIGFuIGFpcmNyYWZ0J3MgZmxpZ2h0IHByb3BlcnRpZXMgYW5kIGF0bW9zcGhlcmljIGNvbmRpdGlvbnMgdG8gcmV0dXJuIHRoZSBhbW91bnQgb2YgbGlmdCB0aGF0IHRoaXMgYWlyY3JhZnQgd291bGQgaGF2ZS4gVGhpcyBhcHBsaWNhdGlvbiBpcyBhIHNpbmdsZS1maWxlIGFwcGxpY2F0aW9uIHdpdGggc3R5bGluZ3MgYW5kIHNjcmlwdCBpbnNpZGUgb2YgdGhlIEhUTUwuXCIsXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9icmFkZGF2aXN0ZWNoL0Flcm9keW5hbWljc0FuZExpZnRDYWxjdWxhdG9yXCIsXG4gICAgbGFuZ3VhZ2VzOiBbXCJKYXZhU2NyaXB0XCIsIFwiSFRNTFwiLCBcIkNTU1wiLCBcIkdpdGh1YlwiLCBcIkF0b21cIl0sXG4gICAgaW1nOiBbXCIuLi9pbWFnZXMvbGlmdENhbGMuanBnXCJdXG4gIH1cbl07XG5cbmNvbnN0IFBPUlRGT0xJTyA9IHtcbiAgcHJpbnRJdGVtcygpIHtcbiAgICAkKFwiI25hbWVCbG9ja1wiKS5oaWRlKCk7XG4gICAgJChcIiNiYWNrZ3JvdW5kSW1hZ2VcIikuaGlkZSgpO1xuICAgIGxldCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGhvbWVMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3d3dy5icmFkZGF2aXN0ZWNoLmNvbVwiKTtcbiAgICBob21lTGluay5pbm5lckhUTUwgPSBcIjxpbWcgc3JjPVxcXCIuLi9pbWFnZXMvQkRUZWNoTG9nby5qcGdcXFwiIGlkPVxcXCJob21lSWNvblxcXCI+XCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZCYXJcIikuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuICAgIGxldCBwbGFjZUhvbGRlciA9IGRvY3VtZW50LmJvZHk7XG4gICAgcG9ydGZvbGlvSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGxldCBwb3J0Zm9saW9FbnRyeSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImluZGl2UG9ydFwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJwb3J0Zm9saW9UaXRsZVwiPiR7aXRlbS5uYW1lfTwvaDE+YDtcbiAgICAgIGl0ZW0uaW1nLmZvckVhY2gocGljID0+IHtcbiAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYFxuICAgICAgICA8aW1nIGNsYXNzPVwicG9ydGZvbGlvUGljXCIgc3JjPVwiJHtwaWN9XCI+YDtcbiAgICAgIH0pO1xuICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYFxuICAgICAgICA8cCBjbGFzcz1cIml0ZW1EZXNjcmlwdGlvblwiPiR7aXRlbS50ZXh0fTwvcD5cbiAgICAgICAgPGgzIGNsYXNzPVwibGFuZ3VhZ2VUaXRsZVwiPlRFQ0hOT0xPR0lFUzwvaDM+YDtcbiAgICAgIGl0ZW0ubGFuZ3VhZ2VzLmZvckVhY2gobGFuZ3VhZ2UgPT4ge1xuICAgICAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgICAgY2FzZSBcIkphdmFTY3JpcHRcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9qc2ltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQ1NTXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvY3NzM2ltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiR2l0aHViXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvZ2l0aHViaW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJHaXRcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9naXRpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkdydW50XCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvZ3J1bnRpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkhUTUxcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9odG1sNWltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwialF1ZXJ5XCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvalF1ZXJ5aW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJOb2RlXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvbm9kZWltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiUmVhY3RcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9yZWFjdGltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiU2xhY2tcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9zbGFja2ltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiVlNcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy92c2ltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQXRvbVwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2F0b21pbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkJyb3dzZXJpZnlcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9icm93c2VyaWZ5aW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8YSBocmVmPVwiJHtpdGVtLmdpdGh1Yn1cIiBjbGFzcz1cImdpdGh1YlwiIHRhcmdldD1cImJsYW5rXCI+U2VlIEdpdGh1YiBDb2RlPC9hPjwvZGl2PmA7XG4gICAgICBwbGFjZUhvbGRlci5pbm5lckhUTUwgKz0gcG9ydGZvbGlvRW50cnk7XG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUE9SVEZPTElPOyIsImNvbnN0IFBPUlRGT0xJTyA9IHJlcXVpcmUoXCIuL3BlcnNvbmFsUG9ydGZvbGlvXCIpO1xuY29uc3QgQUxFUlQgPSByZXF1aXJlKFwiLi9jb25zdHJ1Y3Rpb25cIik7XG5cbmNvbnN0IGluZm9DYXRlZ29yaWVzID0gW1xuICB7XG4gICAgbmFtZTogXCJQZXJzb25hbCBQb3J0Zm9saW9cIixcbiAgICBpZDogXCJQb3J0Zm9saW9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUHJvZmVzc2lvbmFsIFdlYnNpdGVzXCIsXG4gICAgaWQ6IFwiV2Vic2l0ZXNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUGVyc29uYWwgQmlvXCIsXG4gICAgaWQ6IFwiQmlvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJlc3VtZVwiLFxuICAgIGlkOiBcIlJlc3VtZVwiLFxuICAgIGxvY2F0aW9uOiBcIi4uL2ltYWdlcy9CcmFkIERhdmlzIDIwMTkucGRmXCJcbiAgfVxuXTtcblxuY29uc3QgUFJJTlRJTkZPID0ge1xuICBuYW1lQmxvY2soKSB7XG4gICAgJChcIiNuYW1lQmxvY2tcIikuaHRtbChcIjxwIGlkPVxcXCJuYW1lVGl0bGVcXFwiPkJyYWQgRGF2aXM8L3A+XCIpXG4gIH0sXG4gIGpvYlRpdGxlKCkge1xuICAgIGxldCBwbGFjZUhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZUJsb2NrXCIpO1xuICAgIGxldCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImpvYlRpdGxlXCIpO1xuICAgIHBsYWNlSG9sZGVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgIGxldCBjdXJzb3JFZmZlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjdXJzb3JFZmZlY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjdXJzb3JcIik7XG4gICAgY3Vyc29yRWZmZWN0LmlubmVySFRNTCA9IFwiJlVuZGVyQnJhY2tldDtcIjtcbiAgICBwbGFjZUhvbGRlci5hcHBlbmRDaGlsZChjdXJzb3JFZmZlY3QpO1xuICAgIGxldCBydW5UeXBlV3JpdGVyID0gdHJ1ZTtcbiAgICBsZXQgdGV4dFBvc2l0aW9uID0gMDtcbiAgICBsZXQgam9iVGl0bGVUZXh0ID0gXCJKdW5pb3IgV2ViIERldmVsb3BlclwiO1xuICAgIGxldCBzZXRUeXBlU3BlZWQgPSAxNjU7IC8qIFNFVCBUSEUgU1BFRUQgT0YgVEhFIFRFWFQgQVBQRUFSSU5HKi9cbiAgICBmdW5jdGlvbiB0eXBlV3JpdGVyKCkge1xuICAgICAgaWYgKHJ1blR5cGVXcml0ZXIgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKHRleHRQb3NpdGlvbiA8IGpvYlRpdGxlVGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICBsZXQgdGVtcEhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiam9iVGl0bGVcIik7XG4gICAgICAgICAgdGVtcEhvbGRlci5pbm5lckhUTUwgKz0gam9iVGl0bGVUZXh0LmNoYXJBdCh0ZXh0UG9zaXRpb24pO1xuICAgICAgICAgIHRleHRQb3NpdGlvbisrO1xuICAgICAgICAgIHNldFRpbWVvdXQodHlwZVdyaXRlciwgc2V0VHlwZVNwZWVkKTsgLyogU0VUUyBUSEUgREVMQVkgVE8gUlVOIFRIRSBGVU5DVElPTiAqL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJ1blR5cGVXcml0ZXIgPSBmYWxzZTtcbiAgICAgICAgICBjdXJzb3JFZmZlY3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICBQUklOVElORk8ub3B0aW9uc0J1dHRvbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHR5cGVXcml0ZXIoKTtcbiAgfSxcbiAgb3B0aW9uc0J1dHRvbigpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXRzIG1vcmUgaW5mbyBidXR0b25cbiAgICBsZXQgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVCbG9ja1wiKTtcbiAgICBsZXQgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbk1lbnVPcHRpb25zXCIpO1xuICAgIGlmIChkZWxldGVCdXR0b25zLmxlbmd0aCA9PT0gMCkgeyAgICAgICAgICAgICAgIC8vY2hlY2tzIHRvIHNlZSBpZiBtb3JlIGluZm8gYnV0dG9uIGlzIHRoZSBvbmx5IGJ1dHRvblxuICAgICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbk1lbnVPcHRpb25zIGZhZGVJblwiKTtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluSW5mb1wiKTtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJNb3JlIEluZm9cIik7XG4gICAgICBwbGFjZUhvbGRlci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkluZm9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFBSSU5USU5GTy5tb3JlSW5mbyk7XG4gICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcmVtb3ZlcyBhbGwgYnV0dG9ucyBhbmQgcmVzdW1lIGFuY2hvciBmcm9tIERPTVxuICAgICAgbGV0IHJlc3VtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUmVzdW1lXCIpO1xuICAgICAgcmVzdW1lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVzdW1lKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBpZiAoYnV0dG9uLmlkICE9PSBcIm1haW5JbmZvXCIpIHtcbiAgICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChidXR0b24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZU91dFwiKTsgIC8vcmVtb3ZlcyBmYWRlT3V0IGFuaW1hdGlvbiBmcm9tIG1haW5JbmZvIGJ1dHRvblxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkluZm9cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFBSSU5USU5GTy5mYWRlT3V0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5JbmZvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBQUklOVElORk8ubW9yZUluZm8pO1xuICAgIH1cbiAgfSxcbiAgZmFkZU91dCgpIHsgICAgICAgICAvL2ZhZGVzIG91dCBhbGwgYnV0dG9ucyBhbmQgYW5jaG9yIGV4Y2VwdCBtb3JlIGluZm9cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5JbmZvXCIpLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTW9yZSBJbmZvXCIpO1xuICAgIGxldCByZXN1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlJlc3VtZVwiKTtcbiAgICByZXN1bWUuY2xhc3NMaXN0LnJlcGxhY2UoXCJmYWRlSW5cIiwgXCJmYWRlT3V0XCIpO1xuICAgIGxldCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluTWVudU9wdGlvbnNcIik7XG4gICAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBpZiAoYnV0dG9uLmlkICE9PSBcIm1haW5JbmZvXCIpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZXBsYWNlKFwiZmFkZUluXCIsIFwiZmFkZU91dFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KFBSSU5USU5GTy5vcHRpb25zQnV0dG9uLCA3MDApOyAvL3NldHMgcGF1c2UgdG8gYWxsb3cgZmFkZU91dCBhbmltYXRpb24gdG8gZmluaXNoXG4gIH0sXG4gIG1vcmVJbmZvKCkgeyAgICAgIC8vY3JlYXRlcyBsaW5rIGJ1dHRvbnMgYW5kIGFuY2hvclxuICAgIGxldCBwbGFjZUhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZUJsb2NrXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkluZm9cIikuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJIaWRlIE1lbnVcIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluSW5mb1wiKS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgUFJJTlRJTkZPLm1vcmVJbmZvKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5JbmZvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBQUklOVElORk8uZmFkZU91dCk7XG4gICAgaW5mb0NhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICBpZiAoY2F0ZWdvcnkuaWQgIT09IFwiUmVzdW1lXCIpIHtcbiAgICAgICAgbGV0IGluZm9DYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5mb0NhdGVnb3J5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgICAgIGluZm9DYXRlZ29yeS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBjYXRlZ29yeS5pZCk7XG4gICAgICAgIGluZm9DYXRlZ29yeS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5NZW51T3B0aW9ucyBmYWRlSW5cIik7XG4gICAgICAgIGluZm9DYXRlZ29yeS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBjYXRlZ29yeS5uYW1lKTtcbiAgICAgICAgcGxhY2VIb2xkZXIuYXBwZW5kQ2hpbGQoaW5mb0NhdGVnb3J5KTtcbiAgICAgIH0gZWxzZSBpZiAoY2F0ZWdvcnkuaWQgPT09IFwiUmVzdW1lXCIpIHtcbiAgICAgICAgbGV0IGluZm9DYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBpbmZvQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwiaWRcIiwgY2F0ZWdvcnkuaWQpO1xuICAgICAgICBpbmZvQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmYWRlSW5cIik7XG4gICAgICAgIGluZm9DYXRlZ29yeS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGNhdGVnb3J5LmxvY2F0aW9uKTtcbiAgICAgICAgaW5mb0NhdGVnb3J5LnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcImJsYW5rXCIpO1xuICAgICAgICBpbmZvQ2F0ZWdvcnkuaW5uZXJIVE1MID0gXCJWaWV3IFJlc3VtZVwiO1xuICAgICAgICBwbGFjZUhvbGRlci5hcHBlbmRDaGlsZChpbmZvQ2F0ZWdvcnkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGluZm9DYXRlZ29yaWVzLmZvckVhY2goYnV0dG9uID0+IHsgIC8vYWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gYnV0dG9uc1xuICAgICAgc3dpdGNoIChidXR0b24uaWQpIHtcbiAgICAgICAgY2FzZSBcIlBvcnRmb2xpb1wiOlxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUG9ydGZvbGlvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBQT1JURk9MSU8ucHJpbnRJdGVtcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJXZWJzaXRlc1wiOlxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiV2Vic2l0ZXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEFMRVJULm1lc3NhZ2UpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQmlvXCI6XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJCaW9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEFMRVJULm1lc3NhZ2UpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBSSU5USU5GTzsiXX0=
