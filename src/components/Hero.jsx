import school_landing from "../assets/images/school_landing.jpg";

function Hero() {
  return (
    <div className="h-max relative border-b-8 rounded-b-[10%] overflow-hidden">
      <img src={school_landing} className="h-3/4 w-full brightness-50" />
      <div className="absolute bottom-1/4 inset-x-0">
        <div className="text-text-50 flex flex-col items-center justify-center h-full text-center">
          <h2 className="font-bold text-7xl mb-6">
            Welcome to <br /> Jana Uddhar Secondary School
          </h2>
          <p className=" text-3xl  w-2/3">
            Dedicated and virtuous in pursuing accomplishments, possessing
            environmental and global awareness rooted in national culture.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
