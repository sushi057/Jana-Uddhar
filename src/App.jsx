import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Homepage from "./pages/Homepage";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  const [navbar, setNavbar] = useState(false);

  //check whether user in homepage
  const location = useLocation();
  let isHomePage = true;

  if (location.pathname !== "/") isHomePage = false;

  //Navbar scroll animation
  const changeNavbarBackground = () => {
    if (window.scrollY >= 56) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBackground);

  return (
    <div className="static bg-background-100 text-text-900">
      <div
        className={
          navbar || !isHomePage
            ? "fixed z-50 inset-x-0 py-3 bg-primary-800 transition-colors duration-300"
            : "fixed z-50 inset-x-0 py-3"
        }
      >
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
