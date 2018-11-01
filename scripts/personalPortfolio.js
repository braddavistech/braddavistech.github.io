const portfolioItems = [
  {
    name: "Daily Journal",
    text: "This was a project that I created at Nashville Software School. I allows the user to input journal entries and select an instructor, a mood, and tag names. It saves the entries through an API Post call and then uses Fetch to grab all entries and render to the page. It also allows the user to sort their entries through the moods input.",
    github: "https://github.com/braddavistech/NSS_Daily_Journal",
    languages: [
      {
        name: "JavaScript"
      },
      {
        name: "jQuery"
      },
      {
        name: "HTML"
      },
      {
        name: "CSS"
      }
    ],
    img: [
      {
      location: "../images/dj1.jpg"
      },
      {
      location: "../images/dj2.jpg"
      }
    ]
  }
]

const PORTFOLIO = {
  printItems () {
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
        <h3 class="languageTitle">Languages Used</h3>`;
        item.languages.forEach(language => {
          portfolioEntry += `<p class="languages">${language.name}</p>`;
        });
      portfolioEntry += `<a href="${item.github}" class="github" target="blank">See Github Code</a></div>`;
    placeHolder.innerHTML += portfolioEntry;
    });
  }
};

module.exports = PORTFOLIO;