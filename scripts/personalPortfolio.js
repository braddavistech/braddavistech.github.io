const portfolioItems = [
  {
    name: "Group Guru",
    text: "Group Guru is an app created to allow for better communication among family members. Whether it is a family recipe, scheduling holiday events, or keeping up with family member addresses, Group Guru puts the information in the hands of its’ users. Group Guru utilizes Google Firestore Database and Firebase Database, as well as Google Firebase Storage for user image uploads. This application tracks real-time presence on both the mobile and desktop site. All calendar events are stored in UTC time and converted to local time for each user. Locations are acquired through coordinate-based system and are shown on a map using Google Maps and Google Geocode.  Users are given the ability to edit the information and data that they create, allowing all information to be current for users.",
    github: "https://github.com/braddavistech/GroupGuruPublicCode",
    vid: ["groupguru"],
    languages: ["Node", "JavaScript", "jQuery", "React", "Moment", "LoDash", "FirebaseDatabase", "FirebaseStorage", "FirestoreDatabase", "Rebase", "Geocode", "GoogleMaps", "ReactBigCalendar", "HTML", "CSS", "ESLint", "Github", "Lucid Charts", "ReactConfirmAlert", "Babel", "Timezone", "Git", "Slack", "VS"],
    img: []
  },
  {
    name: "Mission Control",
    text: "This was a project that I created with a group of 3 other students at Nashville Software School. It allows users to log in or create new user and queries the database to check for current user matches. I am particularly proud of the logic behind user validation during login, user creation, and profile editing. I also created an epic ReadMe file on Github, which was my fist exposure to markdown language.",
    github: "https://github.com/braddavistech/Mission_Control",
    languages: ["Node", "JavaScript", "jQuery", "Moment", "Restful", "NSS", "HTML", "CSS", "ESLint", "Github", "Browserify", "Lucid Charts", "Babel", "Git", "Grunt", "Slack", "VS"],
    img: ["../images/missionControl1.png", "../images/missionControl2.png"],
    vid: []
  },
  {
    name: "Daily Journal",
    text: "This was a project that I created at Nashville Software School. It allows the user to input journal entries and select an instructor, a mood, and tag names. It saves the entries through an API Post call and then uses Fetch to grab all entries and render to the page. It also allows the user to sort their entries through the moods input.",
    github: "https://github.com/braddavistech/NSS_Daily_Journal",
    languages: ["JavaScript", "jQuery", "HTML", "CSS", "Github", "Browserify", "Git", "Grunt", "Node", "Slack", "VS"],
    img: ["../images/dj1.jpg", "../images/dj2.jpg"],
    vid: []
  },
  {
    name: "Welcome to Nashville",
    text: "This was a project that my team created at Nashville Software School. It allows the user to search for restaurants, Ticketmaster events, Metro-Nashville parks, and Eventbrite events. This application uses continuous API calls to the different databases to get up-to-date information. It also has the ability to save your created itineraries and display past itineraries through a local json file.",
    github: "https://github.com/braddavistech/Welcome_To_Nashville",
    languages: ["JavaScript", "HTML", "CSS", "Github", "Browserify", "Git", "Grunt", "Node", "Slack", "VS"],
    img: ["../images/nashville1.jpg", "../images/nashville2.jpg"],
    vid: []
  },
  {
    name: "Lift Calculator",
    text: "This was a project that was my first experience with JavaScript. It allows a user to input data related to an aircraft's flight properties and atmospheric conditions to return the amount of lift that this aircraft would have. This application is a single-file application with stylings and script inside of the HTML.",
    github: "https://github.com/braddavistech/AerodynamicsAndLiftCalculator",
    languages: ["JavaScript", "HTML", "CSS", "Github", "Atom"],
    img: ["../images/liftCalc.jpg"],
    vid: []
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