import React, { Component } from "react";
import $ from 'jquery';

class About extends Component {
  constructor(props) {
    super(props);
    };

// ANIMATION JQUERY FOR ABOUT PAGE (START)

  animation() {
    function onScrollInit( items, trigger ) {
      console.log("HELLO");
      items.each( function() {
        var osElement = $(this),
          osAnimationClass = osElement.attr('data-os-animation'),
          osAnimationDelay = osElement.attr('data-os-animation-delay');
          osElement.css({
            '-webkit-animation-delay':  osAnimationDelay,
            '-moz-animation-delay':     osAnimationDelay,
            'animation-delay':          osAnimationDelay
          });

          var osTrigger = ( trigger ) ? trigger : osElement;
          osTrigger.waypoint(function() {
            osElement.addClass('animated').toggleClass(osAnimationClass);
          },{
            triggerOnce: false,
              offset: '90%'
          });
        });
      }
        onScrollInit( $('.os-animation') );
        onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
      }

// ANIMATION JQUERY FOR ABOUT PAGE (END)



 render() {

  this.animation();

  return (

  <div className="about">

    <section class="introsection">
      <div class="img1">
        <h3 className="title-heading">Kirsten</h3>
      </div>

      <div class="container">

        <div class="inner">
          <p>ABOUT ME: consectetur adipisicing elit. Delectus harum ipsam excepturi, quisquam aperiam unde dolore, alias doloribus quibusdam consectetur fugit ullam modi corrupti quaerat, odit ipsum ab nostrum ratione voluptate quasi. Illum pariatur reiciendis eaque explicabo officiis nulla a fugit libero recusandae amet provident vitae alias veniam, nesciunt tempora!</p>
        </div>

      <div class="mod-inline os-animation" data-os-animation="fadeInRight" data-os-animation-delay="0s">
        <h3>Travel Tip 💡</h3>
          <p>Visit UNESCO Sites</p>
          <p>If you’re looking for the ultimate ‘Best Places to Visit in the World’ list, then, imho it’s easy to find.
          Check out the <a href="https://whc.unesco.org/en/list/">UNESCO World Heritage Sites</a>.
          Places only make it on this list if they have a particular cultural or natural significance that should be protected for the future or humankind. In other words, they’re a pretty big deal...</p>
      </div>

      <div class="inner">
        <p>BRIEF PROFESSIONAL BIO: pariatur iste necessitatibus ad, nemo neque quasi quia error, minima nam molestias eum! At assumenda iste autem ea aut hic blanditiis quo possimus! Exercitationem atque officia expedita at, ut illo, ad tenetur, totam eius corporis possimus voluptates ea molestias esse earum obcaecati provident itaque fugit in reiciendis?</p>

        {/* <p class="mod-inset-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, reprehenderit.</p> */}

        <p>BRIEF PROFESSIONAL BIO: (cont) Ad aliquid quae voluptatibus, doloribus? Repudiandae quibusdam suscipit esse vero! Blanditiis, dignissimos expedita esse excepturi id quasi atque fuga reprehenderit nesciunt iusto officia culpa consectetur ipsum doloribus voluptatibus aliquam aut non minima, voluptas? Eligendi similique, voluptas qui aliquam non assumenda saepe unde! Fugiat ipsum aliquid perspiciatis perferendis, ex veritatis provident.</p>
        <p>Autem in cumque ratione inventore tenetur illum optio ullam doloribus odio, pariatur nemo commodi, sapiente suscpit, itaque ut! Doloribus, esse iure officiis magni ab, dolore perspiciatis quam illum suscipit voluptates veritatis inventore rerum molestiae pariatur ad, error iste. Voluptas in maxime velit ut voluptates facilis!</p>
      </div>
    </div>
  </section>

  <section>
    <div class="img2 os-animation" data-os-animation="fadeIn" data-os-animation-delay="0s">
      <h1 className="title-heading">Henton</h1>
    </div>

    <div class="container">
      <div class="caption os-animation" data-os-animation="fadeInRight" data-os-animation-delay="0s">
        <h3>Travel Tip 💡</h3>
        <p>Pack a Sarong</p>
        <p>Sarongs can be used as a wrap when you are cold, a towel, a curtain, or a piece of clothing that can be worn dozens of <a href="http://www.bigworldsmallpockets.com/sarong-travelling/">different ways</a></p>
        </div>

    <div class="inner">
        <p  class="os-animation" data-os-animation="fadeInUp" data-os-animation-delay="0s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta saepe quas et quam, nemo eligendi hic perspiciatis ducimus quae inventore in expedita nobis odit possimus dignissimos deleniti cum quia voluptas! Non, laboriosam molestias optio cum asperiores dicta, doloremque ex! Consequuntur laboriosam nesciunt laudantium eaque repellendus sed placeat, rem labore eligendi.</p>

        <p  class="os-animation" data-os-animation="fadeInUp" data-os-animation-delay=".1s">Iusto in omnis inventore alias error eveniet deleniti assumenda officia expedita impedit, iste doloribus blanditiis? Enim ad esse aspernatur, repellat autem accusantium. Assumenda nam optio saepe esse culpa, ut ex doloribus quisquam perspiciatis laudantium voluptatibus incidunt placeat sequi deleniti distinctio dignissimos dolores nihil excepturi maxime, minima id tempora? Praesentium, similique.</p>

        <p  class="os-animation" data-os-animation="fadeInUp" data-os-animation-delay=".2s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero unde dolores quis ipsa, magni quas nam fuga similique labore accusantium mollitia quo accusamus atque. Totam officiis tenetur numquam magni, a alias voluptatibus delectus modi maiores ad, nulla dolor sunt atque, dicta inventore beatae quae iusto dolores laudantium consequatur maxime incidunt.</p>

        <p  class="os-animation" data-os-animation="fadeInUp" data-os-animation-delay=".3s">Optio fugiat dolor commodi ut tenetur cum, facilis labore, sint, quis unde cumque libero saepe. Sequi ut aliquam, itaque numquam sit ea animi quos cupiditate temporibus? Eius molestias eveniet pariatur laboriosam numquam, expedita laborum hic iure optio, enim sed tempore quas nemo possimus, aliquam sit quibusdam explicabo voluptate aspernatur reprehenderit.</p>
      </div>
    </div>
  </section>





  </div>
)}}

export default About;
