import { useEffect, useState } from "react";

import { MenuItem } from "../../components";
import Logo from "../../assets/crepe/crepe_logo.webp";

import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  const [currentState, setCurrentState] = useState("Crêpe");
  const [menuVisible, setMenuVisible] = useState(true);

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

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos && currentScrollPos > 2) {
        // Scrolling down and past 2 cm
        setMenuVisible(false);
      } else {
        // Scrolling up or not past 2 cm
        setMenuVisible(true);
      }

      prevScrollPos = currentScrollPos;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Crepes = () => (
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Crêpes</p>
        <div className="app__specialMenu_menu_items">
          {data.crepes.map((crepe, index) => (
            <MenuItem key={crepe.title + index} title={crepe.title} price={Number(crepe.price).toFixed(2)} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.creppfle} loading="lazy" alt="crepe__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Crêpffle Speciality</p>
        <div className="app__specialMenu_menu_items">
          {data.crepffle.map((entree, index) => (
            <MenuItem key={entree.title + index} title={entree.title} price={Number(entree.price).toFixed(2)} />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.crepe_red} loading="lazy" alt="Crêpffle__img" />
      </div>
    </div>
  );

  const SaltyAndWaffle = () => (
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Salty Crêpes</p>
        <div className="app__specialMenu_menu_items">
          {data.salty_crepes.map((salty, index) => (
            <MenuItem key={salty.title + index} title={salty.title} price={Number(salty.price).toFixed(2)} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.salty} loading="lazy" alt="salty__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Honkong Egg Waffle</p>
        <div className="app__specialMenu_menu_items">
          {data.honkong_egg_waffle.map((entree, index) => (
            <MenuItem key={entree.title + index} title={entree.title} price={Number(entree.price).toFixed(2)} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.Honkong} loading="lazy" alt="Honkong__img" />
      </div>
    </div>
  );

  const Sticks = () => (
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Pancake Sticks</p>
        <div className="app__specialMenu_menu_items">
          {data.pancake_stick.map((appetizer, index) => (
            <MenuItem key={appetizer.title + index} title={appetizer.title} price={Number(appetizer.price).toFixed(2)} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.Pancake_stick} loading="lazy" alt="burger__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Waffle Stick</p>
        <div className="app__specialMenu_menu_items">
          {data.waffle_stick.map((entree, index) => (
            <MenuItem key={entree.title + index} title={entree.title} price={Number(entree.price).toFixed(2)} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.Waffle_stick} loading="lazy" alt="burger__img" />
      </div>
    </div>
  );

  const SavioardiBiscuits = () => (
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Mini Pancakes</p>
        <div className="app__specialMenu_menu_items">
          {data.mini_pancake.map((appetizer, index) => (
            <MenuItem key={appetizer.title + index} title={appetizer.title} price={Number(appetizer.price).toFixed(2)} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.Mini_pancacke} loading="lazy" alt="mini_pancacke__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Savioardi Biscuits</p>
        <div className="app__specialMenu_menu_items">
          {data.Savioardi_Biscuits.map((entree, index) => (
            <MenuItem key={entree.title + index} title={entree.title} price={Number(entree.price).toFixed(2)} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.Sarvioardi} loading="lazy" alt="Sarvioardi__img" />
      </div>
    </div>
  );

  const Chimney = () => (
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Chimney Cakes</p>
        <div className="app__specialMenu_menu_items">
          {data.Chimney_cakes.map((appetizer, index) => (
            <MenuItem key={appetizer.title + index} title={appetizer.title} price={Number(appetizer?.price).toFixed(2)} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.Chimney_cakes} loading="lazy" alt="Chimney_cakes__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Chocolat Fountains</p>
        <div className="app__specialMenu_menu_items">
          {data.chocolat_fountain.map((entree, index) => (
            <MenuItem key={entree.title + index} title={entree.title} price={Number(entree.price).toFixed(2)} />
          ))}
        </div>
      </div>
    </div>
  );

  const HotChocolat = () => (
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Hot Chocolat</p>
        <div className="app__specialMenu_menu_items">
          {data.hot_chocolat.map((appetizer, index) => (
            <MenuItem key={appetizer.title + index} title={appetizer.title} price={Number(appetizer.price).toFixed(2)} />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.Hot_chocolat} loading="lazy" alt="hot_chocolat__img" />
      </div>
      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">S’mores</p>
        <div className="app__specialMenu_menu_items">
          {data.Smores.map((entree, index) => (
            <MenuItem key={entree.title + index} title={entree.title} price={Number(entree.price).toFixed(2)} />
          ))}
        </div>
      </div>
      {/* <div className="app__specialMenu-menu_img">
        <img src={images.Smores} loading="lazy" alt="Smores__img" />
      </div> */}
    </div>
  );

  const AddInOnAndSyrups = () => (
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Add In</p>
        <div className="app__specialMenu_menu_items">
          {data.add_ins.map((appetizer, index) => (
            <MenuItem key={appetizer.title + index} title={appetizer.title} price={Number(appetizer?.price).toFixed(2)} />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Add On</p>
        <div className="app__specialMenu_menu_items">
          {data.add_ons.map((appetizer, index) => (
            <MenuItem key={appetizer.title + index} title={appetizer.title} price={Number(appetizer?.price).toFixed(2)} />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Toppings Syrups</p>
        <div className="app__specialMenu_menu_items">
          {data.toppings_Syrup.map((appetizer, index) => (
            <MenuItem key={appetizer.title + index} title={appetizer.title} price={Number(appetizer?.price).toFixed(2)} />
          ))}
        </div>
      </div>
    </div>
  );

  // Render content based on the current state
  const renderContent = () => {
    switch (currentState) {
      case "Crêpe":
        return <Crepes />;
      case "Salty and Waffles":
        return <SaltyAndWaffle />;
      case "Sticks":
        return <Sticks />;
      case "Savioardi Biscuits":
        return <SavioardiBiscuits />;
      case "Chimney":
        return <Chimney />;
      case "Hot Chocolat":
        return <HotChocolat />;
      case "Additives And Syrups":
        return <AddInOnAndSyrups />;
      default:
        return <Crepes />;
    }
  };

  // Icon components for each state
  const stateIcons = {
    Crêpes: "Crêpes",
    "Salty and Waffles": "Salty and Waffles",
    "Savioardi Biscuits": "Savioardi Biscuits",
    Sticks: "Sticks",
    Chimney: "Chimney",
    "Hot Chocolat": "Hot Chocolat",
    "Additives And Syrups": "Additives And Syrups",
  };

  return (
    <div className="app__specialMenu flex__center section__padding sticky-container" id="menu">
      <div className="app__specialMenu-title">
        <img src={Logo} alt="logo" className="logo" />
        <h1 className="headtext__cormorant">The Sweets' New Era</h1>
      </div>
      <div style={{ marginTop: 15 }} className="sticky-box app__specialMenu-title">
        {Object.keys(stateIcons).map((state) => (
          <button type="button" className="custom__button" key={state} onClick={() => handleStateChange(state)}>
            {state.charAt(0).toUpperCase() + state.slice(1)}
          </button>
        ))}
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <p className="p__cormorant">Badak ektob shi hon ? aw bshil heda l sater ?</p>
      </div>

      {renderContent()}
    </div>
  );
};

export default SpecialMenu;
