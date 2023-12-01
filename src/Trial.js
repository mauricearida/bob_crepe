import React, { useState } from "react";
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

const StateComponent = () => {
  const [currentState, setCurrentState] = useState("dishes");

  const handleStateChange = (newState) => {
    setCurrentState(newState);
  };

  // Render content based on the current state
  const renderContent = () => {
    switch (currentState) {
      case "dishes":
        return <p>Content for Dishes</p>;
      case "burgerAndFries":
        return <p>Content for Burger and Fries</p>;
      case "dessertsSoftBeverages":
        return <p>Content for Desserts and Soft Beverages</p>;
      case "redAndWhiteWine":
        return <p>Content for Red and White Wine</p>;
      case "alcoholCocktailsAndBeers":
        return <p>Content for Alcohol Cocktails and Beers</p>;
      default:
        return <p>Invalid state</p>;
    }
  };

  // Icon components for each state
  const stateIcons = {
    dishes: currentState === "dishes" ? <FaUtensils /> : <FaUtensilsOutline />,
    burgerAndFries: currentState === "burgerAndFries" ? <FaHamburger /> : <FaHamburgerOutline />,
    dessertsSoftBeverages: currentState === "dessertsSoftBeverages" ? <FaIceCream /> : <FaIceCreamOutline />,
    redAndWhiteWine: currentState === "redAndWhiteWine" ? <FaWineBottle /> : <FaWineBottleOutline />,
    alcoholCocktailsAndBeers: currentState === "alcoholCocktailsAndBeers" ? <FaBeer /> : <FaBeerOutline />,
  };

  return (
    <div>
      <h1>Current State: {currentState}</h1>
      {/* Render buttons for state changes with corresponding icons */}
      {Object.keys(stateIcons).map((state) => (
        <button key={state} onClick={() => handleStateChange(state)}>
          {stateIcons[state]}
          Set {state.charAt(0).toUpperCase() + state.slice(1)}
        </button>
      ))}

      {/* Render content based on the current state */}
      {renderContent()}
    </div>
  );
};

export default StateComponent;
