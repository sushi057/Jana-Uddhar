import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [navbar, setNavbar] = useState(false);

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
    <div className="relative bg-background-100 text-text-900">
      <div
        className={
          navbar
            ? "fixed z-50 inset-x-0 py-3 bg-primary-800 transition-colors duration-300"
            : "fixed z-50 inset-x-0 py-2"
        }
      >
        <Navbar />
      </div>
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
