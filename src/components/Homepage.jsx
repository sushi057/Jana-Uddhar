import Hero from "./Hero";
import About from "./About";
import Activities from "./Activities";

function Homepage() {
  return (
    <div>
      <Hero />
      <About />
      <hr className="h-1 mx-32 mt-8 bg-text-50 border-0 " />
      <Activities />
    </div>
  );
}

export default Homepage;
