import React from "react";

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from "./container";
import Trial from "./Trial";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Trial />
    {/* <AboutUs /> */}
    {/* <Chef /> */}
    <Intro />
    <SpecialMenu />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
