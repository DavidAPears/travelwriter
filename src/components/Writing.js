import React from "react";
import $ from 'jquery';

// ANIMATION JQUERY FOR ABOUT PAGE (START)

  // animation() {
  //   function onScrollInit( items, trigger ) {
  //     items.each( function() {
  //       var osElement = $(this),
  //         osAnimationClass = osElement.attr('data-os-animation'),
  //         osAnimationDelay = osElement.attr('data-os-animation-delay');
  //         osElement.css({
  //           '-webkit-animation-delay':  osAnimationDelay,
  //           '-moz-animation-delay':     osAnimationDelay,
  //           'animation-delay':          osAnimationDelay
  //         });
  //
  //         var osTrigger = ( trigger ) ? trigger : osElement;
  //
  //         osTrigger.waypoint(function() {
  //           osElement.addClass('animated').toggleClass(osAnimationClass);
  //         },{
  //           triggerOnce: false,
  //             offset: '90%'
  //         });
  //       });
  //     }
  //       onScrollInit( $('.os-animation') );
  //       onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
  //     }

// ANIMATION JQUERY FOR ABOUT PAGE (END)


 const Writing = () => (

  // this.animation();

  <div className="writing">


    <section class="introsection">
      <div class="img3">
        <h3 className="title-heading">Travel</h3>
      </div>

      <div class="container">
      <h1>PUBLICATIONS & AFFILIATIONS</h1>
      <div class="publication-icons">
      <img src="./images/lplogo.png" alt="Lonely planet logo" height="15%" width="15%"></img>
      <br></br>
      <img src="./images/BGTW.jpeg" alt="British Guild Of Travel Writers logo" height="10%" width="10%"></img>
      <br></br>
      <img src="./images/wanderslust.png" alt="Wanderlust logo" height="10%" width="10%"></img>
      <br></br>
      <img src="./images/DKTravel.png" alt="D K Travel logo" height="10%" width="10%"></img>
      <br></br>
      <img src="./images/w2travel.png" alt="Weather2Travel logo" height="17%" width="17%"></img>
      <br></br>
      <img src="./images/CultureTrip.png" alt="Culture Trip logo" height="8%" width="8%"></img>
      <br></br>
      <img src="./images/bbclogo.png" alt="BBC logo" height="15%" width="15%"></img>
      <br></br>
      <img src="./images/rglogo.png" alt="Rough Guide logo" height="8%" width="8%"></img>
      </div>

        <div class="inner">
        <h1>EXAMPLE ARTICLES</h1>
          <p class="staggered-animation" data-os-animation="fadeInRight" data-os-animation-delay="0.5s">TITLE OR ARTICLE (name of publication) - brief synpsis here with link</p>

          <p class="staggered-animation" data-os-animation="fadeInRight" data-os-animation-delay="0.5s">TITLE OR ARTICLE (name of publication) - brief synpsis here with link</p>

          <p class="staggered-animation" data-os-animation="fadeInRight" data-os-animation-delay="0.5s">TITLE OR ARTICLE (name of publication) - brief synpsis here with link</p>
        </div>

      <div class="mod-inline os-animation" data-os-animation="fadeInRight" data-os-animation-delay="0s">
        <h3>Travel Tip 💡</h3>
        <p>Soemthing useful here</p>
        <p>interesting little travel tip, with a <a href="http://www.bigworldsmallpockets.com/sarong-travelling/">link</a></p>
      </div>

      <div class="inner">
        <p>Earum eligendi temporibus, pariatur iste necessitatibus ad, nemo neque quasi quia error, minima nam molestias eum! At assumenda iste autem ea aut hic blanditiis quo possimus! Exercitationem atque officia expedita at, ut illo, ad tenetur, totam eius corporis possimus voluptates ea molestias esse earum obcaecati provident itaque fugit in reiciendis?</p>
        <p class="mod-inset-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, reprehenderit.</p>
        <p>Ad aliquid quae voluptatibus, doloribus? Repudiandae quibusdam suscipit esse vero! Blanditiis, dignissimos expedita esse excepturi id quasi atque fuga reprehenderit nesciunt iusto officia culpa consectetur ipsum doloribus voluptatibus aliquam aut non minima, voluptas? Eligendi similique, voluptas qui aliquam non assumenda saepe unde! Fugiat ipsum aliquid perspiciatis perferendis, ex veritatis provident.</p>
        <p>Assumenda aut saepe dolorem architecto autem in cumque ratione inventore tenetur illum optio ullam doloribus odio, pariatur nemo commodi, sapiente suscipit, itaque ut! Doloribus, esse iure officiis magni ab, dolore perspiciatis quam illum suscipit voluptates veritatis inventore rerum molestiae pariatur ad, error iste. Voluptas in maxime velit ut voluptates facilis!</p>
      </div>
    </div>
  </section>

  <section>
    <div class="img4 os-animation" data-os-animation="fadeIn" data-os-animation-delay="0s">
      <h3 className="title-heading" >Writer</h3>
    </div>

    <div class="container">
      <div class="caption os-animation" data-os-animation="fadeInRight" data-os-animation-delay="0s">
      <h3>Travel Tip 💡</h3>
      <p>Soemthing useful here</p>
      <p>interesting little travel tip, with a <a href="http://www.bigworldsmallpockets.com/sarong-travelling/">link</a></p>
        </div>

    <div class="inner">
        <p  class="os-animation" data-os-animation="fadeInUp" data-os-animation-delay="0s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta saepe quas et quam, nemo eligendi hic perspiciatis ducimus quae inventore in expedita nobis odit possimus dignissimos deleniti cum quia voluptas! Non, laboriosam molestias optio cum asperiores dicta, doloremque ex! Consequuntur laboriosam nesciunt laudantium eaque repellendus sed placeat, rem labore eligendi.</p>

        <p  class="os-animation" data-os-animation="fadeInUp" data-os-animation-delay=".1s">Iusto in omnis inventore alias error eveniet deleniti assumenda officia expedita impedit, iste doloribus blanditiis? Enim ad esse aspernatur, repellat autem accusantium. Assumenda nam optio saepe esse culpa, ut ex doloribus quisquam perspiciatis laudantium voluptatibus incidunt placeat sequi deleniti distinctio dignissimos dolores nihil excepturi maxime, minima id tempora? Praesentium, similique.</p>

        <p  class="os-animation" data-os-animation="fadeInUp" data-os-animation-delay=".2s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero unde dolores quis ipsa, magni quas nam fuga similique labore accusantium mollitia quo accusamus atque. Totam officiis tenetur numquam magni, a alias voluptatibus delectus modi maiores ad, nulla dolor sunt atque, dicta inventore beatae quae iusto dolores laudantium consequatur maxime incidunt.</p>

        <p  class="os-animation" data-os-animation="fadeInUp" data-os-animation-delay=".3s">Optio fugiat dolor commodi ut tenetur cum, facilis labore, sint, quis unde cumque libero saepe. Sequi ut aliquam, itaque numquam sit ea animi quos cupiditate temporibus? Eius molestias eveniet pariatur laboriosam numquam, expedita laborum hic iure optio, enim sed tempore quas nemo possimus, aliquam sit quibusdam explicabo voluptate aspernatur reprehenderit.</p>
      </div>
    </div>
  </section>

  <section class="staggered-animation-container">
      <h1>ARTICLES</h1>
        <p class="staggered-animation" data-os-animation="fadeInRight" data-os-animation-delay="0.5s">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <p class="staggered-animation" data-os-animation="fadeInRight" data-os-animation-delay="0.8s">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <p class="staggered-animation" data-os-animation="fadeInRight" data-os-animation-delay="1.1s">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </section>




  </div>
);

export default Writing;
