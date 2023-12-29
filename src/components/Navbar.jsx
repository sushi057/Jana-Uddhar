import jana_uddhar_logo from "../assets/images/main/jana_uddhar_main.jpg";
import buger_menu from "../assets/icons/burger-menu.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between w-full px-8 text-text-50 ">
      <div className="flex flex-row items-center w-1/2 ">
        <img
          src={jana_uddhar_logo}
          className="border-solid rounded-full h-12"
        />
        <div className="lg:flex lg:flex-col pb-2 ml-4 leading-3 hidden">
          <p className="text-xl font-bold uppercase">Jana Uddhar</p>
          <p className="font-semibold">Budhanilkantha</p>
        </div>
      </div>
      <img src={buger_menu} className="h-8 invert lg:hidden" />
      <div className="hidden lg:flex lg:flex-row gap-8 text-lg font-bold">
        <Link
          to="/"
          className="px-4 py-3 rounded-md hover:bg-secondary-500 hover:text-text-900 transition-colors duration-300"
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          Homepage
        </Link>
        <Link
          to="/gallery"
          className="px-4 py-3  rounded-md hover:bg-secondary-500 hover:text-text-900 transition-colors duration-300"
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          Gallery
        </Link>
        <Link
          to="/about"
          className="px-4 py-3  rounded-md hover:bg-secondary-500 hover:text-text-900 transition-colors duration-300"
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="px-4 py-3  rounded-md hover:bg-secondary-500 hover:text-text-900 transition-colors duration-300"
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
