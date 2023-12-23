import Hero from "./Hero";
import Announcements from "./Announcements";
import About from "./About";
import Activities from "./Activities";

function Homepage() {
  return (
    <div>
      <Hero />
      <About />
      <div className="flex flex-row justify-between px-32">
        <Announcements />
        <Activities />
      </div>
    </div>
  );
}

export default Homepage;
