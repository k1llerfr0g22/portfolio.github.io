import React from "react";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Websites } from "./components/Websites";
import { CodingJourney } from "./components/CodingJourney"; 
import { Contact } from "./components/Contact";
import "./css/App.css"

function App() {
  return (
    <div className="App">
      <Navbar sticky="top" />
      <Intro />
      <Projects />
      <Websites />
      <CodingJourney />
      <Contact />

      {/* <p>This is the app</p> */}
      
    </div>
  );
}

export default App;
