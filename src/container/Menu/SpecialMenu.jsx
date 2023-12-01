import { useState } from "react";
import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";
import {
  FaUtensils,
  FaUtensils as FaUtensilsOutline,
  FaHamburger,
  FaHamburger as FaHamburgerOutline,
  FaIceCream,
  FaIceCream as FaIceCreamOutline,
  FaWineBottle,
  FaWineBottle as FaWineBottleOutline,
  FaBeer,
  FaBeer as FaBeerOutline,
} from "react-icons/fa";

const SpecialMenu = () => {
  const [currentState, setCurrentState] = useState("dishes");

  const handleStateChange = (newState) => {
    setCurrentState(newState);

    const menuElement = document.getElementById("menu");
    const topPosition = menuElement ? menuElement.offsetTop : 0;

    // Scroll to the top of the main div
    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  };

  const Appetizers = () => (
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
        <img src={images.entrees} loading="lazy" alt="entrees__img" />
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
  );

  const WrapsBurgersFriesSalads = () => (
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
        <img src={images.burger} loading="lazy" alt="burger__img" />
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
  );

  const DessertsSoftDrinks = () => (
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
        <img src={images.chocolat} loading="lazy" alt="burger__img" />
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
  );

  const RedAndWhiteWine = () => (
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
        <img src={images.wine} loading="lazy" alt="burger__img" />
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
  );

  const VangoCocktailsAndBeers = () => (
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
        <img src={images.alcohol} loading="lazy" alt="burger__img" />
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
  );

  // Render content based on the current state
  const renderContent = () => {
    switch (currentState) {
      case "dishes":
        return <Appetizers />;
      case "burgerFriesWraps":
        return <WrapsBurgersFriesSalads />;
      case "DessertsSoftDrinks":
        return <DessertsSoftDrinks />;
      case "redAndWhiteWine":
        return <RedAndWhiteWine />;
      case "Alcohol":
        return <VangoCocktailsAndBeers />;
      default:
        return <Appetizers />;
    }
  };

  // Icon components for each state
  const stateIcons = {
    dishes: currentState === "dishes" ? <FaUtensils size={15} /> : <FaUtensilsOutline size={15} />,
    burgerFriesWraps: currentState === "burgerFriesWraps" ? <FaHamburger size={15} /> : <FaHamburgerOutline size={15} />,
    DessertsSoftDrinks: currentState === "Desserts/SoftDrinks" ? <FaIceCream size={15} /> : <FaIceCreamOutline size={15} />,
    redAndWhiteWine: currentState === "redAndWhiteWine" ? <FaWineBottle size={15} /> : <FaWineBottleOutline size={15} />,
    Alcohol: currentState === "Alcohol" ? <FaBeer size={15} /> : <FaBeerOutline size={15} />,
  };

  return (
    <div className="app__specialMenu flex__center section__padding sticky-container" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

      <div style={{ marginTop: 15 }} className="sticky-box app__specialMenu-title">
        {Object.keys(stateIcons).map((state) => (
          <button type="button" className="custom__button" key={state} onClick={() => handleStateChange(state)}>
            {stateIcons[state]}
            &nbsp;
            {state.charAt(0).toUpperCase() + state.slice(1)}
          </button>
        ))}
      </div>
      {renderContent()}
    </div>
  );
};

export default SpecialMenu;
