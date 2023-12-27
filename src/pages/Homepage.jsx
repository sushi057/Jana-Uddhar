import Hero from "../components/Hero";
import SchoolAbout from "../components/SchoolAbout";
import Activities from "../components/Activities";

function Homepage() {
  return (
    <div>
      <Hero />
      <SchoolAbout />
      <hr className="h-2 mx-32 mt-8 bg-secondary-600 rounded-md" />
      <Activities />
    </div>
  );
}

export default Homepage;
