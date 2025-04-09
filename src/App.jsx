import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import "./App.css"
import Footer from "./components/Footer/Footer"



function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Home/>
      <About/>
      <Services/>
      <Footer/>
    </div>

    
  );
}

export default App;
