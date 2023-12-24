import Hero from "./Hero";
import About from "./About";
import Activities from "./Activities";
import admission_image from "../assets/images/admissions.jpg";

function Homepage() {
  return (
    <div>
      <Hero />
      <About />
      <div className="flex flex-row justify-between px-32">
        <Activities />
      </div>
    </div>
  );
}

export default Homepage;
