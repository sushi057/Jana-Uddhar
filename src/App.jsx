import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative">
      <div className="fixed z-50 inset-x-0">
        <Header />
        <Navbar />
      </div>
      <Homepage />
    </div>
  );
}

export default App;
