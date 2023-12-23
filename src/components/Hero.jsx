import school_landing from "../assets/images/school_landing.jpg";

function Hero() {
  return (
    <div className="h-lvh relative">
      <div
        className="h-2/3 w-full bg-cover bg-no-repeat brightness-50"
        style={{ backgroundImage: `url(${school_landing})` }}
      ></div>
      <div className="absolute bottom-1/2 left-0 right-0">
        <div className="text-slate-50 flex flex-col items-center justify-center h-full text-center">
          <h2 className="font-bold text-5xl mb-6">
            Welcome to <br /> Jana Uddhar Higher Secondary School
          </h2>
          <p className=" text-xl  w-2/3">
            Dedicated and virtuous in pursuing accomplishments, possessing
            environmental and global awareness rooted in national culture.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
