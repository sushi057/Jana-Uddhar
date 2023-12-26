import jana_uddhar_logo from "../assets/images/jana_uddhar_main.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between w-full px-32 text-text-50">
      <div className="flex flex-row items-center w-1/2">
        <img
          src={jana_uddhar_logo}
          className="border-solid rounded-full max-h-14"
        />
        <div className="flex flex-col pb-2 ml-4 leading-3">
          <p className="text-xl font-bold uppercase">Jana Uddhar</p>
          <p className="font-semibold">Budhanilkantha</p>
        </div>
      </div>
      <div className="flex flex-row gap-8 text-lg font-bold">
        <Link
          to="/"
          className="px-4 py-3 rounded-md hover:bg-secondary-500 hover:text-text-900 transition-colors duration-2 00"
        >
          Homepage
        </Link>
        <Link
          to="/gallery"
          className="px-4 py-3  rounded-md hover:bg-secondary-500 hover:text-text-900 transition-colors duration-2 00"
        >
          Gallery
        </Link>
        <Link
          to="/about"
          className="px-4 py-3  rounded-md hover:bg-secondary-500 hover:text-text-900 transition-colors duration-2 00"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="px-4 py-3  rounded-md hover:bg-secondary-500 hover:text-text-900 transition-colors duration-2 00"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
