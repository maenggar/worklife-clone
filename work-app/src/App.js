import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Product from "./pages/Product";
import News from "./pages/News";
import Career from "./pages/Career";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Product />
      <News />
      <Career />
      <Contact />
    </div>
  );
}

export default App;
