import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" loading="lazy" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Dia's word" />
      <h1 className="headtext__cormorant">About Vango</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" loading="lazy" />
          <p className="p__opensans">Two years ago, Dia Sawan started toying with the notion of a club like no other he’d ever seen .</p>
        </div>
        <p className="p__opensans">
          The owner of Byblos, along Philadelphia’s formidable Rittenhouse Row, whose family formed a dynasty of the area’s best
          Mediterranean restaurants (Cedars, Fez) had already made his hookah lounge and restaurant a sensation before that trend commenced.
        </p>
        <p className="p__opensans">Why not try to strike lightening twice?!</p>
        <p className="p__opensans">
          That’s why two years later, there’s Vango Lounge & Sky Bar at 116 S. 18th Street - the boldest of Philadelphia’s restaurant
          lounges starring some of the best names in the food and DJ business.
        </p>
        <p className="p__opensans">
          If the address seems familiar to Sawan watchers, it should: his intimate Byblos is below Vango at the same address.
        </p>
        <p className="p__opensans">
          But from its massive oak doors and portal windows below to its dramatic roof deck view of the city above, no one will ever confuse
          the two. That’s just the start.
        </p>
        <p className="p__opensans">
          At somewhere around 8,000 square feet, Vango is as massive a space as it was an undertaking to get just the right custom made
          elements from around the world to fill the big rooms. “That’s why it took so long,” says Sawan. “Everything had to be unique. No.
          Everything is really and truly unique, personal even.” Perhaps that’s why Sawan decided to oversee the vision of Vango with help
          from several prominent designers. Along the walls of its second floor walkup, there’s over 200 carved out spaces into which is an
          illuminated vodka bottle. If that sounds strange, it’s meant to. Says Sawan: “We put up the bottles. The vodka companies gave us
          the product.” Smart!
        </p>
        <p className="p__opensans">
          Smarter still is the crinkle-crushed-velvet along Vango’s second-floor walls spectacularly speckled by a zillion inlaid lights.
          There’s Nina Hazouri’s plush custom-made and upholstered cushioned couches; set pieces tucked within private booths and below
          grand dramatic archways. “Everything is custom-made for Vango, says Sawan, pointing out even the littlest details - like the
          in-laid “wall vase” where over two hundred roses bloom nightly. “We have to water them from behind the wall,” he laughs.
        </p>
        <p className="p__opensans">
          Then there’s the chandelier - a sprightly sparkling one-of-a-kind fiber-optic chandelier designed and made in Germany and built in
          the U.K
        </p>
        <p className="p__opensans">
          “There’s not another one of these in the world,” says Sawan of the firework optics whose glow explodes beautifully from atop
          polished granite floors.
        </p>
        <p className="p__opensans">
          While all that happens on the second floor, Vango’s year-round roof deck third floor has an indoor patio and a lounge bar for the
          cozy fireplace romantics. And there’s a bold large flat deck with private rooms for chilling, king size beds for lounging, a wide
          dance floor for kicking up your heels and a sky to gaze upon.
        </p>
        <p className="p__opensans">
          The menu, from executive chef Michael Fee (of Nobu fame) adds the perfect foodie flourish to Vango’s princely proceedings. “It’s
          called Japanese Continental” says Sawan of Fee’s tantalizing treats. From appetizers as simply sumptuous as Beef Negimaki and
          Seared Bacon Scallop to fresh sushi and sashimi platters to large plates like Ishiyaki Eel with Seasoned Fish Egg to Kobe Beef
          Steak with Sallion to Briased Short Ribs with Wasabi Mashed Potatoes all appetites will be appeased. Washing them down with
          Vango’s specialty cocktails - variations on familiar themes like the Vango Bellimi and the Vangohattan - should help.
        </p>
        <p className="p__opensans">
          All this leaves is the dance floor and Vango’s nightly line up of the very best DJs that this town has to offer. From drinks to
          food to dance, Vango Lounge & Sky Bar is the only place you’ll need to be.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Dia Sawan</p>
        <p className="p__opensans">Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
