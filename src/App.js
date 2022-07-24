import React, { useState, useEffect } from "react";
import Home from "./components/Home";
// import Contact from "./components/Contact"
import Blogs from "./components/Blogs/Blogs";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import moonI from "./components/Images//night.png";
import sunI from "./components/Images/light.png";
import ContactMe from "./components/ContactMe";
import "./App.css";
// import Blogs from "./components/Blogs";
function App() {
  const [mode, setmode] = useState("light");
  const [modeIcon, setmodeIcon] = useState(moonI);

  useEffect(() => {
    window.addEventListener("load", function () {
      document.getElementById("loading").style.display = "none";
    });
  }, []);

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
      setmodeIcon(sunI);
    } else {
      setmode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      setmodeIcon(moonI);
    }
  };

  return (
    <>
      <div id="loading"></div>
      <Navbar modeIcon={modeIcon} toggleMode={toggleMode} mode={mode} />
      {/* <Home mode = {mode}/> */}
      <Routes basename = "/HamzaCodes">
        <Route exact path="/" element={<Home mode={mode} />} />
        <Route exact path="/projects" element={<Projects />} />

        <Route exact path="/blogs" element={<Blogs mode={mode} />} />
        <Route exact path="/contact" element={<ContactMe mode={mode} />} />
      </Routes>
    </>
  );
}

export default App;
