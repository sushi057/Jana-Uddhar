import school_logo from "../assets/icons/school-icon.svg";

function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between w-full px-32 text-slate-50">
      <div className="flex flex-row items-center w-1/2">
        <img
          src={school_logo}
          className="border-4 border-yellow-500 border-solid rounded-full max-h-14"
        />
        <div className="flex flex-col pb-2 ml-4 leading-3">
          <p className="text-xl font-bold uppercase">Jana Uddhar</p>
          <p>Budhanilkantha</p>
        </div>
      </div>
      <div className="flex flex-row gap-8 text-lg font-semibold">
        <a href="/" className="px-3 py-2 rounded-md hover:bg-yellow-600">
          Homepage
        </a>
        <a href="/" className="px-3 py-2 rounded-md hover:bg-yellow-600">
          News
        </a>
        <a href="/" className="px-3 py-2 rounded-md hover:bg-yellow-600">
          Gallery
        </a>
        <a href="/" className="px-3 py-2 rounded-md hover:bg-yellow-600">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
