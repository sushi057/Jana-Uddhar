import jana_uddhar_logo from "../assets/images/jana_uddhar_main.jpg";

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
          <p>Budhanilkantha</p>
        </div>
      </div>
      <div className="flex flex-row gap-8 text-lg font-semibold">
        <a
          href="/"
          className="px-4 py-3 rounded-md hover:bg-accent-500 hover:text-text-900"
        >
          Homepage
        </a>
        <a
          href="/"
          className="px-4 py-3  rounded-md hover:bg-accent-500 hover:text-text-900"
        >
          Gallery
        </a>
        <a
          href="/"
          className="px-4 py-3  rounded-md hover:bg-accent-500 hover:text-text-900"
        >
          About
        </a>
        <a
          href="/"
          className="px-4 py-3  rounded-md hover:bg-accent-500 hover:text-text-900"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
