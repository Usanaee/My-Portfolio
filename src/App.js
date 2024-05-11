import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Fotter from "./components/Fotter/Fotter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Work />
      <Contact />
      <Fotter />
    </div>
  );
}

export default App;
