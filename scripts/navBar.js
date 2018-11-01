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