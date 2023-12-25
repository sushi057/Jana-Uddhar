import Hero from "./Hero";
import About from "./About";
import Activities from "./Activities";

function Homepage() {
  return (
    <div>
      <Hero />
      <About />
      <hr className="h-2 mx-32 mt-8 bg-secondary-700 rounded-md" />
      <Activities />
    </div>
  );
}

export default Homepage;
