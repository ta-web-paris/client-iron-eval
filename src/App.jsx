import { Routes, Route } from "react-router-dom";
// pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ListCats from "./components/pages/ListCats";
import DetailsCat from "./components/pages/DetailsCat";

import HeaderMain from "./components/layout/HeaderMain";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <HeaderMain />
      <main className="content-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/list/cats" element={<ListCats />} />
          <Route path="/details/random-cat" element={<DetailsCat />} />
        </Routes>
      </main>
      <footer className="footer-main">&copy; ironhack-2022+</footer>
    </div>
  );
}

export default App;
