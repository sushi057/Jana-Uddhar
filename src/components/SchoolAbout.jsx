import { Link } from "react-router-dom";
import about_school from "../assets/images/gallery/gallery_4.jpg";

function SchoolAbout() {
  return (
    <div>
      <div className=" px-32 pt-24 pb-16">
        <h1 className="font-bold text-5xl mb-12 text-secondary-600">
          About Jana Uddhar
        </h1>
        <div className="flex flex-row justify-between text-lg ">
          <p className="w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt
            quaerat unde, facilis dignissimos commodi numquam cumque,
            voluptatibus consequatur sit suscipit quas doloribus fuga magnam ad
            iste repellendus? Nisi, perferendis.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero blanditiis culpa, nesciunt
            dicta, atque incidunt quae nemo?Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Tenetur natus incidunt tempora
            corporis unde eaque
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            consequuntur neque voluptas commodi nobis nostrum sint esse quos
            incidunt consequuntur neque voluptas commodi nobis nostrum sint esse
            quos incidunt fugit voluptatum. Ad ex quo ipsum architecto
            cupiditate temporibus vel adipisicing elit. Libero blanditiis culpa,
            nesciunt dicta, atque incidunt quae nemo?Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Tenetur natus incidunt tempora
            corporis unde eaque ipsa! Esse alias facilis iste excepturi nostrum
            ratione quidem...
          </p>
          <img
            src={about_school}
            className="border-8 border-secondary-500 rounded-md"
          />
        </div>
        <Link
          to="/about"
          type="button"
          className="px-4 py-3 mt-6 text-xl font-bold bg-secondary-500 hover:drop-shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-md"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default SchoolAbout;