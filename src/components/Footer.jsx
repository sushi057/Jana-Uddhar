import jana_uddhar_logo from "../assets/images/jana_uddhar_main.jpg";
import facebook_icon from "../assets/icons/facebook-icon.svg";
import whatsapp_icon from "../assets/icons/whatsapp-icon.svg";

function Footer() {
  return (
    <div className="bg-yellow-600 flex flex-col px-32 pt-16 text-lg text-white">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <img src={jana_uddhar_logo} className="max-h-32 rounded-md mb-2" />
          <div>
            <p className="text-xl font-bold mb-1">
              Shree Jana Uddhar Secondary School
            </p>
            <p className="font-semibold">
              Gamcha
              <br />
              Budhanilkantha
              <br />
              Kathmandu, Nepal
            </p>
          </div>
        </div>
        <div>
          <p className="font-bold text-xl mb-4">Links</p>
          <div className="flex flex-col font-semibold gap-2">
            <a href="/">About us</a>
            <a href="/">Gallery</a>
            <a href="/">Contact</a>{" "}
            <a href="/"> Under Collaborative School Network</a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-bold text-xl mb-4">Contact</p>
            <p className="font-semibold">091-524664</p>
            <p className="font-semibold">091-527252</p>
          </div>
          <div>
            <p className="font-bold text-xl mb-2">Email</p>
            <p className="font-semibold">janauddhar@gmail.com</p>
          </div>
          <div className="flex flex-row items-center gap-6">
            <img src={facebook_icon} className="invert h-9" />
            <img src={whatsapp_icon} className="invert h-10" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-14 mb-4 font-semibold">
        <p>
          &#169; 2024, Shree Jana Uddhar Secondary School All rights reserved.
        </p>
        <p>Made by sushi</p>
      </div>
    </div>
  );
}

export default Footer;
