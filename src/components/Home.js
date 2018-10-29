import React from "react";


const Home = () => (


<div className="home">
  <h3 className="home-page-name">Kirsten Henton</h3>
  <div class="content">
    <div class="content__container">
      <p class="content__container__text">Travel Writer</p>
      <ul class="content__container__list">
        {/* <li class="content__container__list__item">writer</li>
        <li class="content__container__list__item">lover</li>
        <li class="content__container__list__item">journo</li>
        <li class="content__container__list__item">addict</li> */}
      </ul>
    </div>
  </div>
<br></br><br></br>
  <div class="plane-loader">
    <div class="cloud cloud1"></div>
    <div class="cloud cloud2"></div>
    <div class="cloud cloud2"></div>
    <div class="cloud cloud4"></div>
    <div class="plane"></div>
    <div class="steam steam1">

    <div class="c1"></div><div class="c2"></div><div class="c3"></div><div class="c4"></div><div class="c5"></div><div class="c6"></div><div class="c7"></div><div class="c8"></div><div class="c9"></div><div class="c10"></div>
    </div>

    <div class="steam steam2">
      <div class="c1"></div><div class="c2"></div><div class="c3"></div><div class="c4"></div><div class="c5"></div><div class="c6"></div><div class="c7"></div><div class="c8"></div><div class="c9"></div><div class="c10"></div>
    </div>

    <div class="steam steam3">
      <div class="c1"></div><div class="c2"></div><div class="c3"></div><div class="c4"></div><div class="c5"></div><div class="c6"></div><div class="c7"></div><div class="c8"></div><div class="c9"></div><div class="c10"></div>
    </div>

    <div class="steam steam4">
      <div class="c1"></div><div class="c2"></div><div class="c3"></div><div class="c4"></div><div class="c5"></div><div class="c6"></div><div class="c7"></div><div class="c8"></div><div class="c9"></div><div class="c10"></div>
    </div>
    <br></br><br></br><br></br>
  </div>

  {/* CONTACT ICONS */}
  <p className="contact-buttons">

    <a href="mailto:kirsten.henton@gmail.com?subject=Contact from your website">
      <img className="contact-icon" src="./images/007-gmail.png" alt="e-mail link" width="50" height="50"></img>
    </a>

    <a href="https://plus.google.com/+KirstenHenton" target="_blank">
      <img className="contact-icon" src="./images/003-google-plus.png" alt="face-time link" width="50" height="50"></img>
    </a>

    <a href="https://www.linkedin.com/in/kirstenhenton/" target="_blank">
      <img className="contact-icon" src="./images/002-linkedin.png" alt="linkedin link" width="50" height="50"></img>
    </a>

    <a href="https://www.twitter.com/kirstenjh" target="_blank">
      <img className="contact-icon" src="./images/001-twitter.png" alt="twitter link" width="50" height="50"></img>
    </a>

    <a href="https://www.instagram.com/kirstenjh">
      <img className="contact-icon" src="./images/004-instagram.png" alt="instagram link" width="50" height="50"></img>
    </a>

    <a href="skype:kirstenjh?call" target="_blank">
      <img className="contact-icon" src="./images/005-skype.png" alt="skype link" width="50" height="50"></img>
    </a>

  </p>

    <div className="phonenumber">
      <a href="tel:+447803160233"> 📞 +44 (0)7803 160233 </a>
    </div>

  </div>
  );


export default Home;
