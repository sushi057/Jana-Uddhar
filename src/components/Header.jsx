import facebook_icon from "../assets/icons/facebook-icon.svg";
import mail_icon from "../assets/icons/mail-icon.svg";
import whatsapp_icon from "../assets/icons/whatsapp-icon.svg";
import location_icon from "../assets/icons/location-icon.svg";

function Header() {
  return (
    <div className="flex flex-row justify-between items-center border-b-2 text-white bg-green-600 px-32 py-2 font-sans">
      <div className="flex flex-row">
        <div className="flex flex-row">
          <p className="font-semibold">Thursday,&nbsp;</p>
          <p>07 December 2023</p>
        </div>
        <div className="border-l-4 mx-2"></div>
        <div className="flex flex-row">
          <img src={location_icon} className="max-w-4 mx-1 invert" />
          <p>Gamcha, Budha-Nilkantha, Kathmandu, Nepal</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-6 invert">
        <a
          href="https://www.facebook.com/janauddharss/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook_icon} className="max-w-5 mr-2" />
        </a>
        <a>
          <img src={mail_icon} className="max-w-7 ml-1" />
        </a>
        <a>
          <img src={whatsapp_icon} className="max-w-11" />
        </a>
      </div>
    </div>
  );
}

export default Header;
