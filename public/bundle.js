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
  name: "Group Guru",
  text: "Group Guru is an app created to allow for better communication among family members. Whether it is a family recipe, scheduling holiday events, or keeping up with family member addresses, Group Guru puts the information in the hands of its’ users. Group Guru utilizes Google Firestore Database and Firebase Database, as well as Google Firebase Storage for user image uploads. This application tracks real-time presence on both the mobile and desktop site. All calendar events are stored in UTC time and converted to local time for each user. Locations are acquired through coordinate-based system and are shown on a map using Google Maps and Google Geocode.  Users are given the ability to edit the information and data that they create, allowing all information to be current for users.",
  github: "https://github.com/braddavistech/GroupGuruPublicCode",
  vid: ["groupguru"],
  languages: ["Node", "JavaScript", "jQuery", "React", "Moment", "LoDash", "FirebaseDatabase", "FirebaseStorage", "FirestoreDatabase", "Rebase", "Geocode", "GoogleMaps", "ReactBigCalendar", "HTML", "CSS", "ESLint", "Github", "Lucid Charts", "ReactConfirmAlert", "Babel", "Timezone", "Git", "Slack", "VS"],
  img: []
}, {
  name: "Mission Control",
  text: "This was a project that I created with a group of 3 other students at Nashville Software School. It allows users to log in or create new user and queries the database to check for current user matches. I am particularly proud of the logic behind user validation during login, user creation, and profile editing. I also created an epic ReadMe file on Github, which was my fist exposure to markdown language.",
  github: "https://github.com/braddavistech/Mission_Control",
  languages: ["Node", "JavaScript", "jQuery", "Moment", "Restful", "NSS", "HTML", "CSS", "ESLint", "Github", "Browserify", "Lucid Charts", "Babel", "Git", "Grunt", "Slack", "VS"],
  img: ["../images/missionControl1.png", "../images/missionControl2.png"],
  vid: []
}, {
  name: "Daily Journal",
  text: "This was a project that I created at Nashville Software School. It allows the user to input journal entries and select an instructor, a mood, and tag names. It saves the entries through an API Post call and then uses Fetch to grab all entries and render to the page. It also allows the user to sort their entries through the moods input.",
  github: "https://github.com/braddavistech/NSS_Daily_Journal",
  languages: ["JavaScript", "jQuery", "HTML", "CSS", "Github", "Browserify", "Git", "Grunt", "Node", "Slack", "VS"],
  img: ["../images/dj1.jpg", "../images/dj2.jpg"],
  vid: []
}, {
  name: "Welcome to Nashville",
  text: "This was a project that my team created at Nashville Software School. It allows the user to search for restaurants, Ticketmaster events, Metro-Nashville parks, and Eventbrite events. This application uses continuous API calls to the different databases to get up-to-date information. It also has the ability to save your created itineraries and display past itineraries through a local json file.",
  github: "https://github.com/braddavistech/Welcome_To_Nashville",
  languages: ["JavaScript", "HTML", "CSS", "Github", "Browserify", "Git", "Grunt", "Node", "Slack", "VS"],
  img: ["../images/nashville1.jpg", "../images/nashville2.jpg"],
  vid: []
}, {
  name: "Lift Calculator",
  text: "This was a project that was my first experience with JavaScript. It allows a user to input data related to an aircraft's flight properties and atmospheric conditions to return the amount of lift that this aircraft would have. This application is a single-file application with stylings and script inside of the HTML.",
  github: "https://github.com/braddavistech/AerodynamicsAndLiftCalculator",
  languages: ["JavaScript", "HTML", "CSS", "Github", "Atom"],
  img: ["../images/liftCalc.jpg"],
  vid: []
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

      if (item.img.length > 0) {
        item.img.forEach(pic => {
          portfolioEntry += `
          <img class="portfolioPic" src="${pic}">`;
        });
      }

      if (item.vid.length > 0) {
        item.vid.forEach(item => {
          portfolioEntry += `
          <div class="video-section">
            <video class="portfolioVideo" poster="#" autoplay loop muted>
              <source src="../videos/${item}.mp4" type="video/mp4" />
            </video>
          </div>`;
        });
      }

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

          case "React":
            portfolioEntry += `<img src="../images/react.png" class="languagePic" alt="${language}">`;
            break;

          case "ReactBigCalendar":
            portfolioEntry += `<img src="../images/reactbigcalendar.png" class="languagePic" alt="${language}">`;
            break;

          case "ReactConfirmAlert":
            portfolioEntry += `<img src="../images/reactconfirmalert.png" class="languagePic" alt="${language}">`;
            break;

          case "FirebaseDatabase":
            portfolioEntry += `<img src="../images/firebasedatabase.png" class="languagePic" alt="${language}">`;
            break;

          case "Geocode":
            portfolioEntry += `<img src="../images/geocode.png" class="languagePic" alt="${language}">`;
            break;

          case "GoogleMaps":
            portfolioEntry += `<img src="../images/googlemaps.png" class="languagePic" alt="${language}">`;
            break;

          case "FirebaseStorage":
            portfolioEntry += `<img src="../images/firebasestorage.png" class="languagePic" alt="${language}">`;
            break;

          case "FirestoreDatabase":
            portfolioEntry += `<img src="../images/firestoredatabase.png" class="languagePic" alt="${language}">`;
            break;

          case "LoDash":
            portfolioEntry += `<img src="../images/lodash.png" class="languagePic" alt="${language}">`;
            break;

          case "Rebase":
            portfolioEntry += `<img src="../images/rebase.png" class="languagePic" alt="${language}">`;
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

          case "Timezone":
            portfolioEntry += `<img src="../images/timezone.png" class="languagePic" alt="${language}">`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2JhY2tncm91bmRQaWMuanMiLCIuLi9zY3JpcHRzL2NvbnN0cnVjdGlvbi5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvbmF2QmFyLmpzIiwiLi4vc2NyaXB0cy9wZXJzb25hbFBvcnRmb2xpby5qcyIsIi4uL3NjcmlwdHMvcHJpbnRUb0RvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsTUFBTSxhQUFhLEdBQUc7QUFDcEIsRUFBQSxVQUFVLEdBQUk7QUFDWixRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUF0QjtBQUNBLElBQUEsZUFBZSxDQUFDLFlBQWhCLENBQTZCLEtBQTdCLEVBQW9DLHFDQUFwQztBQUNBLElBQUEsZUFBZSxDQUFDLFlBQWhCLENBQTZCLElBQTdCLEVBQW1DLGlCQUFuQztBQUNBLElBQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxXQUFkLENBQTBCLGVBQTFCO0FBQ0Q7O0FBTm1CLENBQXRCO0FBU0EsTUFBTSxDQUFDLE9BQVAsR0FBaUIsYUFBakI7Ozs7O0FDVEEsTUFBTSxLQUFLLEdBQUc7QUFDWixFQUFBLE9BQU8sR0FBSTtBQUNULElBQUEsS0FBSyxDQUFDLGtJQUFELENBQUw7QUFDRDs7QUFIVyxDQUFkO0FBTUEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsS0FBakI7Ozs7O0FDTkEsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGlCQUFELENBQTdCOztBQUNBLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFELENBQXRCOztBQUNBLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFELENBQXpCOztBQUVBLGFBQWEsQ0FBQyxVQUFkO0FBQ0EsTUFBTSxDQUFDLE1BQVA7QUFDQSxTQUFTLENBQUMsU0FBVjtBQUNBLFNBQVMsQ0FBQyxRQUFWOzs7OztBQ1BBLE1BQU0s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Q0FBQyxFQUFmO0FBQ0UsYUFBSyxXQUFMO0FBQ0UsVUFBQSxRQUFRLENBQUMsY0FBVCxDQUF3QixXQUF4QixFQUFxQyxnQkFBckMsQ0FBc0QsT0FBdEQsRUFBK0QsU0FBUyxDQUFDLFVBQXpFO0FBQ0E7O0FBQ0YsYUFBSyxVQUFMO0FBQ0UsVUFBQSxRQUFRLENBQUMsY0FBVCxDQUF3QixVQUF4QixFQUFvQyxnQkFBcEMsQ0FBcUQsT0FBckQsRUFBOEQsS0FBSyxDQUFDLE9BQXBFO0FBQ0E7O0FBQ0YsYUFBSyxLQUFMO0FBQ0UsVUFBQSxRQUFRLENBQUMsY0FBVCxDQUF3QixLQUF4QixFQUErQixnQkFBL0IsQ0FBZ0QsT0FBaEQsRUFBeUQsS0FBSyxDQUFDLE9BQS9EO0FBQ0E7QUFUSjtBQVdELEtBWkQ7QUFhRDs7QUE1R2UsQ0FBbEI7QUErR0EsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBCQUNLR1JPVU5EUElDID0ge1xuICBkaXNwbGF5UGljICgpIHtcbiAgICBsZXQgYmFja2dyb3VuZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBiYWNrZ3JvdW5kSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vaW1hZ2VzL3Byb2ZpbGVQaWNCbGFja0JrZ3JuZC5qcGdcIik7XG4gICAgYmFja2dyb3VuZEltYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYmFja2dyb3VuZEltYWdlXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZEltYWdlKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCQUNLR1JPVU5EUElDOyIsImNvbnN0IEFMRVJUID0ge1xuICBtZXNzYWdlICgpIHtcbiAgICBhbGVydChcIlRoaXMgbGluayBpcyBjdXJyZW50bHkgYmVpbmcgcmVkZXNpZ25lZCBhbmQgc2hvdWxkIGJlIHJ1bm5pbmcgc2hvcnRseS4gUGxlYXNlIGNoZWNrIG91dCBteSBnaXRodWIgcGFnZSBmb3IgZGV2ZWxvcG1lbnQgZXhhbXBsZXMuXCIpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFMRVJUOyIsImNvbnN0IEJBQ0tHUk9VTkRQSUMgPSByZXF1aXJlKFwiLi9iYWNrZ3JvdW5kUGljXCIpO1xuY29uc3QgTkFWQkFSID0gcmVxdWlyZShcIi4vbmF2QmFyXCIpO1xuY29uc3QgUFJJTlRJTkZPID0gcmVxdWlyZShcIi4vcHJpbnRUb0RvbVwiKTtcblxuQkFDS0dST1VORFBJQy5kaXNwbGF5UGljKCk7XG5OQVZCQVIuY3JlYXRlKCk7XG5QUklOVElORk8ubmFtZUJsb2NrKCk7XG5QUklOVElORk8uam9iVGl0bGUoKTsiLCJjb25zdCBOQVZCQVIgPSB7XG4gIGNyZWF0ZSAoKSB7XG4gICAgbGV0IHBsYWNlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZCYXJcIik7XG4gICAgcGxhY2VIb2xkZXIuaW5uZXJIVE1MID0gYFxuICAgIDxhIGhyZWY9XCJtYWlsdG86YnJhZEBicmFkZGF2aXN0ZWNoLmNvbVwiIGNsYXNzPVwibmF2YmFyQVwiPjxpbWcgc3JjPVwiLi4vaW1hZ2VzL2VtYWlsLnBuZ1wiIGNsYXNzPVwibmF2QnV0dG9uXCIgYWx0PVwiRW1haWwgQnJhZFwiPjwvYT5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2JyYWRkYXZpc3RlY2gvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJuYXZiYXJBXCI+PGltZyBzcmM9XCIuLi9pbWFnZXMvbGlua2VkSW4ucG5nXCIgY2xhc3M9XCJuYXZCdXR0b25cIiBhbHQ9XCJMaWtlZEluXCI+PC9hPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnJhZGRhdmlzdGVjaFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwibmF2YmFyQVwiPjxpbWcgc3JjPVwiLi4vaW1hZ2VzL2dpdGh1Yi5wbmdcIiBjbGFzcz1cIm5hdkJ1dHRvblwiIGFsdD1cIkdpdEh1YlwiPjwvYT5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2JyYWQuZGF2aXMuNTQzNzkyMzZcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cIm5hdmJhckFcIj48aW1nIHNyYz1cIi4uL2ltYWdlcy9mYWNlYm9vay5wbmdcIiBjbGFzcz1cIm5hdkJ1dHRvblwiIGFsdD1cIkZhY2Vib29rXCI+PC9hPlxuICAgIGA7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTkFWQkFSOyIsImNvbnN0IHBvcnRmb2xpb0l0ZW1zID0gW1xuICB7XG4gICAgbmFtZTogXCJHcm91cCBHdXJ1XCIsXG4gICAgdGV4dDogXCJHcm91cCBHdXJ1IGlzIGFuIGFwcCBjcmVhdGVkIHRvIGFsbG93IGZvciBiZXR0ZXIgY29tbXVuaWNhdGlvbiBhbW9uZyBmYW1pbHkgbWVtYmVycy4gV2hldGhlciBpdCBpcyBhIGZhbWlseSByZWNpcGUsIHNjaGVkdWxpbmcgaG9saWRheSBldmVudHMsIG9yIGtlZXBpbmcgdXAgd2l0aCBmYW1pbHkgbWVtYmVyIGFkZHJlc3NlcywgR3JvdXAgR3VydSBwdXRzIHRoZSBpbmZvcm1hdGlvbiBpbiB0aGUgaGFuZHMgb2YgaXRz4oCZIHVzZXJzLiBHcm91cCBHdXJ1IHV0aWxpemVzIEdvb2dsZSBGaXJlc3RvcmUgRGF0YWJhc2UgYW5kIEZpcmViYXNlIERhdGFiYXNlLCBhcyB3ZWxsIGFzIEdvb2dsZSBGaXJlYmFzZSBTdG9yYWdlIGZvciB1c2VyIGltYWdlIHVwbG9hZHMuIFRoaXMgYXBwbGljYXRpb24gdHJhY2tzIHJlYWwtdGltZSBwcmVzZW5jZSBvbiBib3RoIHRoZSBtb2JpbGUgYW5kIGRlc2t0b3Agc2l0ZS4gQWxsIGNhbGVuZGFyIGV2ZW50cyBhcmUgc3RvcmVkIGluIFVUQyB0aW1lIGFuZCBjb252ZXJ0ZWQgdG8gbG9jYWwgdGltZSBmb3IgZWFjaCB1c2VyLiBMb2NhdGlvbnMgYXJlIGFjcXVpcmVkIHRocm91Z2ggY29vcmRpbmF0ZS1iYXNlZCBzeXN0ZW0gYW5kIGFyZSBzaG93biBvbiBhIG1hcCB1c2luZyBHb29nbGUgTWFwcyBhbmQgR29vZ2xlIEdlb2NvZGUuICBVc2VycyBhcmUgZ2l2ZW4gdGhlIGFiaWxpdHkgdG8gZWRpdCB0aGUgaW5mb3JtYXRpb24gYW5kIGRhdGEgdGhhdCB0aGV5IGNyZWF0ZSwgYWxsb3dpbmcgYWxsIGluZm9ybWF0aW9uIHRvIGJlIGN1cnJlbnQgZm9yIHVzZXJzLlwiLFxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vYnJhZGRhdmlzdGVjaC9Hcm91cEd1cnVQdWJsaWNDb2RlXCIsXG4gICAgdmlkOiBbXCJncm91cGd1cnVcIl0sXG4gICAgbGFuZ3VhZ2VzOiBbXCJOb2RlXCIsIFwiSmF2YVNjcmlwdFwiLCBcImpRdWVyeVwiLCBcIlJlYWN0XCIsIFwiTW9tZW50XCIsIFwiTG9EYXNoXCIsIFwiRmlyZWJhc2VEYXRhYmFzZVwiLCBcIkZpcmViYXNlU3RvcmFnZVwiLCBcIkZpcmVzdG9yZURhdGFiYXNlXCIsIFwiUmViYXNlXCIsIFwiR2VvY29kZVwiLCBcIkdvb2dsZU1hcHNcIiwgXCJSZWFjdEJpZ0NhbGVuZGFyXCIsIFwiSFRNTFwiLCBcIkNTU1wiLCBcIkVTTGludFwiLCBcIkdpdGh1YlwiLCBcIkx1Y2lkIENoYXJ0c1wiLCBcIlJlYWN0Q29uZmlybUFsZXJ0XCIsIFwiQmFiZWxcIiwgXCJUaW1lem9uZVwiLCBcIkdpdFwiLCBcIlNsYWNrXCIsIFwiVlNcIl0sXG4gICAgaW1nOiBbXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNaXNzaW9uIENvbnRyb2xcIixcbiAgICB0ZXh0OiBcIlRoaXMgd2FzIGEgcHJvamVjdCB0aGF0IEkgY3JlYXRlZCB3aXRoIGEgZ3JvdXAgb2YgMyBvdGhlciBzdHVkZW50cyBhdCBOYXNodmlsbGUgU29mdHdhcmUgU2Nob29sLiBJdCBhbGxvd3MgdXNlcnMgdG8gbG9nIGluIG9yIGNyZWF0ZSBuZXcgdXNlciBhbmQgcXVlcmllcyB0aGUgZGF0YWJhc2UgdG8gY2hlY2sgZm9yIGN1cnJlbnQgdXNlciBtYXRjaGVzLiBJIGFtIHBhcnRpY3VsYXJseSBwcm91ZCBvZiB0aGUgbG9naWMgYmVoaW5kIHVzZXIgdmFsaWRhdGlvbiBkdXJpbmcgbG9naW4sIHVzZXIgY3JlYXRpb24sIGFuZCBwcm9maWxlIGVkaXRpbmcuIEkgYWxzbyBjcmVhdGVkIGFuIGVwaWMgUmVhZE1lIGZpbGUgb24gR2l0aHViLCB3aGljaCB3YXMgbXkgZmlzdCBleHBvc3VyZSB0byBtYXJrZG93biBsYW5ndWFnZS5cIixcbiAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2JyYWRkYXZpc3RlY2gvTWlzc2lvbl9Db250cm9sXCIsXG4gICAgbGFuZ3VhZ2VzOiBbXCJOb2RlXCIsIFwiSmF2YVNjcmlwdFwiLCBcImpRdWVyeVwiLCBcIk1vbWVudFwiLCBcIlJlc3RmdWxcIiwgXCJOU1NcIiwgXCJIVE1MXCIsIFwiQ1NTXCIsIFwiRVNMaW50XCIsIFwiR2l0aHViXCIsIFwiQnJvd3NlcmlmeVwiLCBcIkx1Y2lkIENoYXJ0c1wiLCBcIkJhYmVsXCIsIFwiR2l0XCIsIFwiR3J1bnRcIiwgXCJTbGFja1wiLCBcIlZTXCJdLFxuICAgIGltZzogW1wiLi4vaW1hZ2VzL21pc3Npb25Db250cm9sMS5wbmdcIiwgXCIuLi9pbWFnZXMvbWlzc2lvbkNvbnRyb2wyLnBuZ1wiXSxcbiAgICB2aWQ6IFtdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkRhaWx5IEpvdXJuYWxcIixcbiAgICB0ZXh0OiBcIlRoaXMgd2FzIGEgcHJvamVjdCB0aGF0IEkgY3JlYXRlZCBhdCBOYXNodmlsbGUgU29mdHdhcmUgU2Nob29sLiBJdCBhbGxvd3MgdGhlIHVzZXIgdG8gaW5wdXQgam91cm5hbCBlbnRyaWVzIGFuZCBzZWxlY3QgYW4gaW5zdHJ1Y3RvciwgYSBtb29kLCBhbmQgdGFnIG5hbWVzLiBJdCBzYXZlcyB0aGUgZW50cmllcyB0aHJvdWdoIGFuIEFQSSBQb3N0IGNhbGwgYW5kIHRoZW4gdXNlcyBGZXRjaCB0byBncmFiIGFsbCBlbnRyaWVzIGFuZCByZW5kZXIgdG8gdGhlIHBhZ2UuIEl0IGFsc28gYWxsb3dzIHRoZSB1c2VyIHRvIHNvcnQgdGhlaXIgZW50cmllcyB0aHJvdWdoIHRoZSBtb29kcyBpbnB1dC5cIixcbiAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2JyYWRkYXZpc3RlY2gvTlNTX0RhaWx5X0pvdXJuYWxcIixcbiAgICBsYW5ndWFnZXM6IFtcIkphdmFTY3JpcHRcIiwgXCJqUXVlcnlcIiwgXCJIVE1MXCIsIFwiQ1NTXCIsIFwiR2l0aHViXCIsIFwiQnJvd3NlcmlmeVwiLCBcIkdpdFwiLCBcIkdydW50XCIsIFwiTm9kZVwiLCBcIlNsYWNrXCIsIFwiVlNcIl0sXG4gICAgaW1nOiBbXCIuLi9pbWFnZXMvZGoxLmpwZ1wiLCBcIi4uL2ltYWdlcy9kajIuanBnXCJdLFxuICAgIHZpZDogW11cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiV2VsY29tZSB0byBOYXNodmlsbGVcIixcbiAgICB0ZXh0OiBcIlRoaXMgd2FzIGEgcHJvamVjdCB0aGF0IG15IHRlYW0gY3JlYXRlZCBhdCBOYXNodmlsbGUgU29mdHdhcmUgU2Nob29sLiBJdCBhbGxvd3MgdGhlIHVzZXIgdG8gc2VhcmNoIGZvciByZXN0YXVyYW50cywgVGlja2V0bWFzdGVyIGV2ZW50cywgTWV0cm8tTmFzaHZpbGxlIHBhcmtzLCBhbmQgRXZlbnRicml0ZSBldmVudHMuIFRoaXMgYXBwbGljYXRpb24gdXNlcyBjb250aW51b3VzIEFQSSBjYWxscyB0byB0aGUgZGlmZmVyZW50IGRhdGFiYXNlcyB0byBnZXQgdXAtdG8tZGF0ZSBpbmZvcm1hdGlvbi4gSXQgYWxzbyBoYXMgdGhlIGFiaWxpdHkgdG8gc2F2ZSB5b3VyIGNyZWF0ZWQgaXRpbmVyYXJpZXMgYW5kIGRpc3BsYXkgcGFzdCBpdGluZXJhcmllcyB0aHJvdWdoIGEgbG9jYWwganNvbiBmaWxlLlwiLFxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vYnJhZGRhdmlzdGVjaC9XZWxjb21lX1RvX05hc2h2aWxsZVwiLFxuICAgIGxhbmd1YWdlczogW1wiSmF2YVNjcmlwdFwiLCBcIkhUTUxcIiwgXCJDU1NcIiwgXCJHaXRodWJcIiwgXCJCcm93c2VyaWZ5XCIsIFwiR2l0XCIsIFwiR3J1bnRcIiwgXCJOb2RlXCIsIFwiU2xhY2tcIiwgXCJWU1wiXSxcbiAgICBpbWc6IFtcIi4uL2ltYWdlcy9uYXNodmlsbGUxLmpwZ1wiLCBcIi4uL2ltYWdlcy9uYXNodmlsbGUyLmpwZ1wiXSxcbiAgICB2aWQ6IFtdXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxpZnQgQ2FsY3VsYXRvclwiLFxuICAgIHRleHQ6IFwiVGhpcyB3YXMgYSBwcm9qZWN0IHRoYXQgd2FzIG15IGZpcnN0IGV4cGVyaWVuY2Ugd2l0aCBKYXZhU2NyaXB0LiBJdCBhbGxvd3MgYSB1c2VyIHRvIGlucHV0IGRhdGEgcmVsYXRlZCB0byBhbiBhaXJjcmFmdCdzIGZsaWdodCBwcm9wZXJ0aWVzIGFuZCBhdG1vc3BoZXJpYyBjb25kaXRpb25zIHRvIHJldHVybiB0aGUgYW1vdW50IG9mIGxpZnQgdGhhdCB0aGlzIGFpcmNyYWZ0IHdvdWxkIGhhdmUuIFRoaXMgYXBwbGljYXRpb24gaXMgYSBzaW5nbGUtZmlsZSBhcHBsaWNhdGlvbiB3aXRoIHN0eWxpbmdzIGFuZCBzY3JpcHQgaW5zaWRlIG9mIHRoZSBIVE1MLlwiLFxuICAgIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20vYnJhZGRhdmlzdGVjaC9BZXJvZHluYW1pY3NBbmRMaWZ0Q2FsY3VsYXRvclwiLFxuICAgIGxhbmd1YWdlczogW1wiSmF2YVNjcmlwdFwiLCBcIkhUTUxcIiwgXCJDU1NcIiwgXCJHaXRodWJcIiwgXCJBdG9tXCJdLFxuICAgIGltZzogW1wiLi4vaW1hZ2VzL2xpZnRDYWxjLmpwZ1wiXSxcbiAgICB2aWQ6IFtdXG4gIH1cbl07XG5cbmNvbnN0IFBPUlRGT0xJTyA9IHtcbiAgcHJpbnRJdGVtcygpIHtcbiAgICAkKFwiI25hbWVCbG9ja1wiKS5oaWRlKCk7XG4gICAgJChcIiNiYWNrZ3JvdW5kSW1hZ2VcIikuaGlkZSgpO1xuICAgIGxldCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGhvbWVMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3d3dy5icmFkZGF2aXN0ZWNoLmNvbVwiKTtcbiAgICBob21lTGluay5pbm5lckhUTUwgPSBcIjxpbWcgc3JjPVxcXCIuLi9pbWFnZXMvQkRUZWNoTG9nby5qcGdcXFwiIGlkPVxcXCJob21lSWNvblxcXCI+XCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZCYXJcIikuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuICAgIGxldCBwbGFjZUhvbGRlciA9IGRvY3VtZW50LmJvZHk7XG4gICAgcG9ydGZvbGlvSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGxldCBwb3J0Zm9saW9FbnRyeSA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImluZGl2UG9ydFwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJwb3J0Zm9saW9UaXRsZVwiPiR7aXRlbS5uYW1lfTwvaDE+YDtcbiAgICAgIGlmIChpdGVtLmltZy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGl0ZW0uaW1nLmZvckVhY2gocGljID0+IHtcbiAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgXG4gICAgICAgICAgPGltZyBjbGFzcz1cInBvcnRmb2xpb1BpY1wiIHNyYz1cIiR7cGljfVwiPmA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0udmlkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaXRlbS52aWQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDx2aWRlbyBjbGFzcz1cInBvcnRmb2xpb1ZpZGVvXCIgcG9zdGVyPVwiI1wiIGF1dG9wbGF5IGxvb3AgbXV0ZWQ+XG4gICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiLi4vdmlkZW9zLyR7aXRlbX0ubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYFxuICAgICAgICA8cCBjbGFzcz1cIml0ZW1EZXNjcmlwdGlvblwiPiR7aXRlbS50ZXh0fTwvcD5cbiAgICAgICAgPGgzIGNsYXNzPVwibGFuZ3VhZ2VUaXRsZVwiPlRFQ0hOT0xPR0lFUzwvaDM+YDtcbiAgICAgIGl0ZW0ubGFuZ3VhZ2VzLmZvckVhY2gobGFuZ3VhZ2UgPT4ge1xuICAgICAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgICAgY2FzZSBcIkphdmFTY3JpcHRcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9qc2ltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQmFiZWxcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9iYWJlbGpzLnBuZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQ1NTXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvY3NzM2ltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiR2l0aHViXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvZ2l0aHViaW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJHaXRcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9naXRpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIlJlYWN0XCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvcmVhY3QucG5nXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJSZWFjdEJpZ0NhbGVuZGFyXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvcmVhY3RiaWdjYWxlbmRhci5wbmdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIlJlYWN0Q29uZmlybUFsZXJ0XCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvcmVhY3Rjb25maXJtYWxlcnQucG5nXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJGaXJlYmFzZURhdGFiYXNlXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvZmlyZWJhc2VkYXRhYmFzZS5wbmdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkdlb2NvZGVcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9nZW9jb2RlLnBuZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiR29vZ2xlTWFwc1wiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2dvb2dsZW1hcHMucG5nXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJGaXJlYmFzZVN0b3JhZ2VcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9maXJlYmFzZXN0b3JhZ2UucG5nXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJGaXJlc3RvcmVEYXRhYmFzZVwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2ZpcmVzdG9yZWRhdGFiYXNlLnBuZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiTG9EYXNoXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvbG9kYXNoLnBuZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiUmViYXNlXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvcmViYXNlLnBuZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiTW9tZW50XCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvbW9tZW50anMuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJFU0xpbnRcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9lc2xpbnQucG5nXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJHcnVudFwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2dydW50aW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJIVE1MXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvaHRtbDVpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIlRpbWV6b25lXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvdGltZXpvbmUucG5nXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJqUXVlcnlcIjpcbiAgICAgICAgICAgIHBvcnRmb2xpb0VudHJ5ICs9IGA8aW1nIHNyYz1cIi4uL2ltYWdlcy9qUXVlcnlpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkx1Y2lkIENoYXJ0c1wiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2x1Y2lkY2hhcnQucG5nXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJOb2RlXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvbm9kZWltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiTlNTXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvbnNzanMuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJSZXN0ZnVsXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvUkVTVGZpbC1BUEkucG5nXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJTbGFja1wiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL3NsYWNraW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJWU1wiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL3ZzaW1hZ2UuanBnXCIgY2xhc3M9XCJsYW5ndWFnZVBpY1wiIGFsdD1cIiR7bGFuZ3VhZ2V9XCI+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJBdG9tXCI6XG4gICAgICAgICAgICBwb3J0Zm9saW9FbnRyeSArPSBgPGltZyBzcmM9XCIuLi9pbWFnZXMvYXRvbWltYWdlLmpwZ1wiIGNsYXNzPVwibGFuZ3VhZ2VQaWNcIiBhbHQ9XCIke2xhbmd1YWdlfVwiPmA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQnJvd3NlcmlmeVwiOlxuICAgICAgICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2Jyb3dzZXJpZnlpbWFnZS5qcGdcIiBjbGFzcz1cImxhbmd1YWdlUGljXCIgYWx0PVwiJHtsYW5ndWFnZX1cIj5gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcG9ydGZvbGlvRW50cnkgKz0gYDxhIGhyZWY9XCIke2l0ZW0uZ2l0aHVifVwiIGNsYXNzPVwiZ2l0aHViXCIgdGFyZ2V0PVwiYmxhbmtcIj5TZWUgR2l0aHViIENvZGU8L2E+PC9kaXY+YDtcbiAgICAgIHBsYWNlSG9sZGVyLmlubmVySFRNTCArPSBwb3J0Zm9saW9FbnRyeTtcbiAgICB9KTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQT1JURk9MSU87IiwiY29uc3QgUE9SVEZPTElPID0gcmVxdWlyZShcIi4vcGVyc29uYWxQb3J0Zm9saW9cIik7XG5jb25zdCBBTEVSVCA9IHJlcXVpcmUoXCIuL2NvbnN0cnVjdGlvblwiKTtcblxuY29uc3QgaW5mb0NhdGVnb3JpZXMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlBlcnNvbmFsIFBvcnRmb2xpb1wiLFxuICAgIGlkOiBcIlBvcnRmb2xpb1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQcm9mZXNzaW9uYWwgV2Vic2l0ZXNcIixcbiAgICBpZDogXCJXZWJzaXRlc1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQZXJzb25hbCBCaW9cIixcbiAgICBpZDogXCJCaW9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUmVzdW1lXCIsXG4gICAgaWQ6IFwiUmVzdW1lXCIsXG4gICAgbG9jYXRpb246IFwiLi4vaW1hZ2VzL0JyYWQgRGF2aXMgMjAxOS5wZGZcIlxuICB9XG5dO1xuXG5jb25zdCBQUklOVElORk8gPSB7XG4gIG5hbWVCbG9jaygpIHtcbiAgICAkKFwiI25hbWVCbG9ja1wiKS5odG1sKFwiPHAgaWQ9XFxcIm5hbWVUaXRsZVxcXCI+QnJhZCBEYXZpczwvcD5cIilcbiAgfSxcbiAgam9iVGl0bGUoKSB7XG4gICAgbGV0IHBsYWNlSG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lQmxvY2tcIik7XG4gICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiam9iVGl0bGVcIik7XG4gICAgcGxhY2VIb2xkZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gICAgbGV0IGN1cnNvckVmZmVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGN1cnNvckVmZmVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImN1cnNvclwiKTtcbiAgICBjdXJzb3JFZmZlY3QuaW5uZXJIVE1MID0gXCImbG93YmFyO1wiO1xuICAgIHBsYWNlSG9sZGVyLmFwcGVuZENoaWxkKGN1cnNvckVmZmVjdCk7XG4gICAgbGV0IHJ1blR5cGVXcml0ZXIgPSB0cnVlO1xuICAgIGxldCB0ZXh0UG9zaXRpb24gPSAwO1xuICAgIGxldCBqb2JUaXRsZVRleHQgPSBcIlNvZnR3YXJlIERldmVsb3BlclwiO1xuICAgIGxldCBzZXRUeXBlU3BlZWQgPSAxNjU7IC8qIFNFVCBUSEUgU1BFRUQgT0YgVEhFIFRFWFQgQVBQRUFSSU5HKi9cbiAgICBmdW5jdGlvbiB0eXBlV3JpdGVyKCkge1xuICAgICAgaWYgKHJ1blR5cGVXcml0ZXIgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKHRleHRQb3NpdGlvbiA8IGpvYlRpdGxlVGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICBsZXQgdGVtcEhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiam9iVGl0bGVcIik7XG4gICAgICAgICAgdGVtcEhvbGRlci5pbm5lckhUTUwgKz0gam9iVGl0bGVUZXh0LmNoYXJBdCh0ZXh0UG9zaXRpb24pO1xuICAgICAgICAgIHRleHRQb3NpdGlvbisrO1xuICAgICAgICAgIHNldFRpbWVvdXQodHlwZVdyaXRlciwgc2V0VHlwZVNwZWVkKTsgLyogU0VUUyBUSEUgREVMQVkgVE8gUlVOIFRIRSBGVU5DVElPTiAqL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJ1blR5cGVXcml0ZXIgPSBmYWxzZTtcbiAgICAgICAgICBjdXJzb3JFZmZlY3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICBQUklOVElORk8ub3B0aW9uc0J1dHRvbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHR5cGVXcml0ZXIoKTtcbiAgfSxcbiAgb3B0aW9uc0J1dHRvbigpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXRzIG1vcmUgaW5mbyBidXR0b25cbiAgICBsZXQgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVCbG9ja1wiKTtcbiAgICBsZXQgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbk1lbnVPcHRpb25zXCIpO1xuICAgIGlmIChkZWxldGVCdXR0b25zLmxlbmd0aCA9PT0gMCkgeyAgICAgICAgICAgICAgIC8vY2hlY2tzIHRvIHNlZSBpZiBtb3JlIGluZm8gYnV0dG9uIGlzIHRoZSBvbmx5IGJ1dHRvblxuICAgICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbk1lbnVPcHRpb25zIGZhZGVJblwiKTtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluSW5mb1wiKTtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJNb3JlIEluZm9cIik7XG4gICAgICBwbGFjZUhvbGRlci5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkluZm9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFBSSU5USU5GTy5tb3JlSW5mbyk7XG4gICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcmVtb3ZlcyBhbGwgYnV0dG9ucyBhbmQgcmVzdW1lIGFuY2hvciBmcm9tIERPTVxuICAgICAgbGV0IHJlc3VtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUmVzdW1lXCIpO1xuICAgICAgcmVzdW1lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVzdW1lKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBpZiAoYnV0dG9uLmlkID09PSBcIlJlc3VtZVwiKSB7XG4gICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfSBlbHNlIGlmIChidXR0b24uaWQgIT09IFwibWFpbkluZm9cIikge1xuICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGJ1dHRvbik7XG4gICAgICAgIH0gZWxzZSBpZiAoYnV0dG9uLmlkID09PSBcIm1haW5JbmZvXCIpIHtcbiAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImZhZGVPdXRcIik7ICAvL3JlbW92ZXMgZmFkZU91dCBhbmltYXRpb24gZnJvbSBtYWluSW5mbyBidXR0b25cbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5JbmZvXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBQUklOVElORk8uZmFkZU91dCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluSW5mb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgUFJJTlRJTkZPLm1vcmVJbmZvKTtcbiAgICB9XG4gIH0sXG4gIGZhZGVPdXQoKSB7ICAgICAgICAgLy9mYWRlcyBvdXQgYWxsIGJ1dHRvbnMgYW5kIGFuY2hvciBleGNlcHQgbW9yZSBpbmZvXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluSW5mb1wiKS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk1vcmUgSW5mb1wiKTtcbiAgICBsZXQgcmVzdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJSZXN1bWVcIik7XG4gICAgcmVzdW1lLmNsYXNzTGlzdC5yZXBsYWNlKFwiZmFkZUluXCIsIFwiZmFkZU91dFwiKTtcbiAgICBsZXQgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbk1lbnVPcHRpb25zXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgaWYgKGJ1dHRvbi5pZCAhPT0gXCJtYWluSW5mb1wiKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVwbGFjZShcImZhZGVJblwiLCBcImZhZGVPdXRcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2V0VGltZW91dChQUklOVElORk8ub3B0aW9uc0J1dHRvbiwgNzAwKTsgLy9zZXRzIHBhdXNlIHRvIGFsbG93IGZhZGVPdXQgYW5pbWF0aW9uIHRvIGZpbmlzaFxuICB9LFxuICBtb3JlSW5mbygpIHsgICAgICAvL2NyZWF0ZXMgbGluayBidXR0b25zIGFuZCBhbmNob3JcbiAgICBsZXQgcGxhY2VIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVCbG9ja1wiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5JbmZvXCIpLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSGlkZSBNZW51XCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkluZm9cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFBSSU5USU5GTy5tb3JlSW5mbyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluSW5mb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgUFJJTlRJTkZPLmZhZGVPdXQpO1xuICAgIGluZm9DYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgaWYgKGNhdGVnb3J5LmlkICE9PSBcIlJlc3VtZVwiKSB7XG4gICAgICAgIGxldCBpbmZvQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGluZm9DYXRlZ29yeS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICBpbmZvQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwiaWRcIiwgY2F0ZWdvcnkuaWQpO1xuICAgICAgICBpbmZvQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluTWVudU9wdGlvbnMgZmFkZUluXCIpO1xuICAgICAgICBpbmZvQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgY2F0ZWdvcnkubmFtZSk7XG4gICAgICAgIHBsYWNlSG9sZGVyLmFwcGVuZENoaWxkKGluZm9DYXRlZ29yeSk7XG4gICAgICB9IGVsc2UgaWYgKGNhdGVnb3J5LmlkID09PSBcIlJlc3VtZVwiKSB7XG4gICAgICAgIGxldCBpbmZvQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgaW5mb0NhdGVnb3J5LnNldEF0dHJpYnV0ZShcImlkXCIsIGNhdGVnb3J5LmlkKTtcbiAgICAgICAgaW5mb0NhdGVnb3J5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbk1lbnVPcHRpb25zIGZhZGVJblwiKTtcbiAgICAgICAgaW5mb0NhdGVnb3J5LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgY2F0ZWdvcnkubG9jYXRpb24pO1xuICAgICAgICBpbmZvQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiYmxhbmtcIik7XG4gICAgICAgIGluZm9DYXRlZ29yeS5pbm5lckhUTUwgPSBcIlZpZXcgUmVzdW1lXCI7XG4gICAgICAgIHBsYWNlSG9sZGVyLmFwcGVuZENoaWxkKGluZm9DYXRlZ29yeSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaW5mb0NhdGVnb3JpZXMuZm9yRWFjaChidXR0b24gPT4geyAgLy9hZGRzIGV2ZW50IGxpc3RlbmVycyB0byBidXR0b25zXG4gICAgICBzd2l0Y2ggKGJ1dHRvbi5pZCkge1xuICAgICAgICBjYXNlIFwiUG9ydGZvbGlvXCI6XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQb3J0Zm9saW9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFBPUlRGT0xJTy5wcmludEl0ZW1zKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIldlYnNpdGVzXCI6XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJXZWJzaXRlc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgQUxFUlQubWVzc2FnZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJCaW9cIjpcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkJpb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgQUxFUlQubWVzc2FnZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUFJJTlRJTkZPOyJdfQ==
