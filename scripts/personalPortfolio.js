const portfolioItems = [
  {
    name: "Daily Journal",
    text: "This was a project that I created at Nashville Software School. It allows the user to input journal entries and select an instructor, a mood, and tag names. It saves the entries through an API Post call and then uses Fetch to grab all entries and render to the page. It also allows the user to sort their entries through the moods input.",
    github: "https://github.com/braddavistech/NSS_Daily_Journal",
    languages: ["JavaScript", "jQuery", "HTML", "CSS", "Github", "Git", "Grunt", "Node", "Slack", "VS"],
    img: [
      {
        location: "../images/dj1.jpg"
      },
      {
        location: "../images/dj2.jpg"
      }
    ]
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
        <img class="portfolioPic" src="${pic.location}">`;
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
        }

      });
      portfolioEntry += `<a href="${item.github}" class="github" target="blank">See Github Code</a></div>`;
      placeHolder.innerHTML += portfolioEntry;
    });
  }
};

module.exports = PORTFOLIO;