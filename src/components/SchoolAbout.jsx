import { Link } from "react-router-dom";
import about_school from "../assets/images/gallery/gallery_24.jpg";

function SchoolAbout() {
  return (
    <div>
      <div className=" px-32 pt-24 pb-16 flex flex-col gap-8">
        <h1 className="font-bold text-5xl text-secondary-600 ">
          About Jana Uddhar
        </h1>
        <div className="flex flex-row gap-6 justify-between text-lg max-h-96 font-semibold">
          <p className="w-1/2">
            ana Uddhar Secondary School, situated in Chunnikhel, Chapali on the
            outskirts of the Kathmandu valley, is a remarkable public school
            managed by CSN. Originally established in 2015 with just over 100
            students and a less-than-favorable reputation, the school has
            undergone a remarkable transformation under the leadership of
            Trishna Kandel and Richa Shahi, who serve as School Leaders. Today,
            Jana Uddhar Secondary School boasts a student population exceeding
            350, earning it recognition as the best public school in the
            municipality in 2019.
            <br />
            <br />
            Our aim is not just to improve a few schools, but to transform the
            public education sector in Nepal, by proving that public schools can
            be successful with the right support. We are outraged by the chronic
            failure of public education in Nepal, and are driven by a simple
            motto: We put students first.
          </p>
          <img
            src={about_school}
            className="border-8 border-secondary-500 rounded-md max-h-96"
          />
        </div>
        <Link
          to="/about"
          type="button"
          className="px-4 py-3 mt-6 w-fit text-xl font-bold bg-secondary-500 hover:drop-shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-md"
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default SchoolAbout;
