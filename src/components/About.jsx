import about_school from "../assets/images/about_school.jpg";

function About() {
  return (
    <div className=" px-32 py-16 text-lg">
      <h1 className="font-bold text-4xl mb-6">About Jana Uddhar</h1>
      <div className="flex flex-row gap-12">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt
            quaerat unde, facilis dignissimos commodi numquam cumque,
            voluptatibus consequatur sit suscipit quas doloribus fuga magnam ad
            iste repellendus? Nisi, perferendis.Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Libero blanditiis culpa, nesciunt
            dicta, atque incidunt quae debitis hic autem, facere velit ducimus
            ipsa quas minima quam alias qui odit nemo?Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Tenetur natus incidunt tempora
            corporis unde eaque
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            consequuntur neque voluptas commodi nobis nostrum sint esse quos
            incidunt fugit voluptatum. Ad ex quo ipsum architecto cupiditate
            temporibus vel ipsa! Esse alias facilis iste excepturi nostrum
            ratione quidem...
          </p>
        </div>
        <img
          src={about_school}
          className="border-8 border-yellow-500 rounded-md h-96"
        />
      </div>
      <button
        type="button"
        className="px-3 py-2 mt-6 text-xl font-bold bg-yellow-400 rounded-md hover:bg-yellow-600 "
      >
        Read More
      </button>
    </div>
  );
}

export default About;
