import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home/home";
import Sobre from "./pages/sobre/sobre";
import Portfolio from "./pages/Portfolio/portfolio";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Sobre />
      <Portfolio />
    </div>
  );
}

export default App;
