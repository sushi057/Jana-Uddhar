import school_logo from "../assets/icons/school-icon.svg";

function Navbar() {
  return (
    <div className="fixed mt-16 z-50 inset-x-0 w-full text-slate-50 flex flex-row justify-between items-center px-36">
      <div className="flex flex-row items-center w-1/2">
        <img
          src={school_logo}
          className="max-h-14 rounded-full border-solid border-4 border-yellow-500"
        />
        <div className="flex flex-col ml-4 leading-3">
          <p className="font-bold text-xl uppercase">Jana Uddhar</p>
          <p>Budhanilkantha</p>
        </div>
      </div>
      <div className="flex flex-row gap-8 font-semibold text-lg">
        <a href="/" className="hover:bg-slate-500 px-3 py-2 rounded-md">
          Homepage
        </a>
        <a href="/" className="hover:bg-slate-500 px-3 py-2 rounded-md">
          News
        </a>
        <a href="/" className="hover:bg-slate-500 px-3 py-2 rounded-md">
          Gallery
        </a>
        <a href="/" className="hover:bg-slate-500 px-3 py-2 rounded-md">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
