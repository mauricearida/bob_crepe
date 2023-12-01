import React, { useEffect } from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding sticky-container" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

      <div style={{ marginTop: 15 }} className="sticky-box app__specialMenu-title">
        <a type="button" className="custom__button">
          Appretizers/Entrees
        </a>

        <a type="button" className="custom__button">
          View More
        </a>
        <a type="button" className="custom__button">
          View More
        </a>
        <a type="button" className="custom__button">
          View More
        </a>
        <a type="button" className="custom__button">
          View More
        </a>
      </div>

      {/* Appretizers     Entrees */}

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">Appetizers</p>
          <div className="app__specialMenu_menu_items">
            {data.appetizers.map((appetizer, index) => (
              <MenuItem key={appetizer.title + index} title={appetizer.title} price={appetizer.price} tags={appetizer.tags} />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.entrees} alt="entrees__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">Entrees</p>
          <div className="app__specialMenu_menu_items">
            {data.entrees.map((entree, index) => (
              <MenuItem key={entree.title + index} title={entree.title} price={entree.price} tags={entree.tags} />
            ))}
          </div>
        </div>
      </div>

      {/* wrapsAndBurgersAndFries     salads */}

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">Wraps/Burgers/Fries</p>
          <div className="app__specialMenu_menu_items">
            {data.wrapsAndBurgersAndFries.map((appetizer, index) => (
              <MenuItem key={appetizer.title + index} title={appetizer.title} price={appetizer.price} tags={appetizer.tags} />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.burger} alt="burger__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">Salads</p>
          <div className="app__specialMenu_menu_items">
            {data.salads.map((entree, index) => (
              <MenuItem key={entree.title + index} title={entree.title} price={entree.price} tags={entree.tags} />
            ))}
          </div>
        </div>
      </div>

      {/* desserts     softBeverages */}
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">Desserts</p>
          <div className="app__specialMenu_menu_items">
            {data.desserts.map((appetizer, index) => (
              <MenuItem key={appetizer.title + index} title={appetizer.title} price={appetizer.price} tags={appetizer.tags} />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.chocolat} alt="burger__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">Soft Beverages</p>
          <div className="app__specialMenu_menu_items">
            {data.softBeverages.map((entree, index) => (
              <MenuItem key={entree.title + index} title={entree.title} price={entree.price} tags={entree.tags} />
            ))}
          </div>
        </div>
      </div>

      {/* red wine white wine */}
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">Red Wine</p>
          <div className="app__specialMenu_menu_items">
            {data.redWine.map((appetizer, index) => (
              <MenuItem key={appetizer.title + index} title={appetizer.title} price={appetizer.price} tags={appetizer.tags} />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.wine} alt="burger__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">White Wine</p>
          <div className="app__specialMenu_menu_items">
            {data.whiteWine.map((entree, index) => (
              <MenuItem key={entree.title + index} title={entree.title} price={entree.price} tags={entree.tags} />
            ))}
          </div>
        </div>
      </div>

      {/* vangoCocktails BeersIPAS */}
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">Bottle Service</p>
          <div className="app__specialMenu_menu_items">
            {data.bottleService.map((appetizer, index) => (
              <MenuItem key={appetizer.title + index} title={appetizer.title} price={appetizer.price} tags={appetizer.tags} />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.alcohol} alt="burger__img" />
        </div>

        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">Hookah And its Flavors</p>
          <div className="app__specialMenu_menu_items">
            {data.HookahAndFlavors.map((entree, index) => (
              <MenuItem key={entree.title + index} title={entree.title} price={entree.price} tags={entree.tags} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
