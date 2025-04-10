import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import "./App.css"
import Footer from "./components/Footer/Footer"



function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Home/>
      <About/>
      <Services/>
      <Footer/>
    </main>

    
  );
}

export default App;
