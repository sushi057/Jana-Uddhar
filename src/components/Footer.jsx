import jana_uddhar_logo from "../assets/images/jana_uddhar_main.jpg";
import facebook_icon from "../assets/icons/facebook-icon.svg";
import whatsapp_icon from "../assets/icons/whatsapp-icon.svg";

function Footer() {
  return (
    <div className="bg-background-800 flex flex-col px-32 pt-20 text-lg text-text-100 border-t-8 rounded-t-[10%]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <img src={jana_uddhar_logo} className="max-h-48 rounded-md mb-2" />
          <div>
            <p className="text-3xl font-bold mb-1">
              Shree Jana Uddhar Secondary School
            </p>
            <p className="font-semibold text-xl leading-9">
              Gamcha
              <br />
              Budhanilkantha
              <br />
              Kathmandu, Nepal
            </p>
          </div>
        </div>
        <div>
          <p className="font-bold text-3xl mb-4">Links</p>
          <div className="flex flex-col font-semibold gap-2">
            <a href="/" className="hover:underline underline-offset-4 text-xl">
              About us
            </a>
            <a href="/" className="hover:underline underline-offset-4 text-xl">
              Gallery
            </a>
            <a href="/" className="hover:underline underline-offset-4 text-xl">
              Contact
            </a>{" "}
            <a href="/" className="hover:underline underline-offset-4 text-xl">
              {" "}
              Under Collaborative School Network
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-bold text-3xl mb-4">Contact</p>
            <p className="font-semibold text-xl mt-3">091-524664</p>
            <p className="font-semibold text-xl mt-3">091-527252</p>
          </div>
          <div>
            <p className="font-bold text-3xl mb-2">Email</p>
            <p className="font-semibold text-xl">janauddhar@gmail.com</p>
          </div>
          <div className="flex flex-row items-center gap-6">
            <img src={facebook_icon} className="invert h-9" />
            <img src={whatsapp_icon} className="invert h-10" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-24 mb-8 text-xl font-semibold">
        <p>
          &#169; 2024, Shree Jana Uddhar Secondary School All rights reserved.
        </p>
        <p>Made by sushi</p>
      </div>
    </div>
  );
}

export default Footer;
