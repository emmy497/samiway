import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Services />

      <Footer />
    </main>
  );
}

export default App;
