import { Routes, Route } from "react-router-dom";
// pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import List from "./components/pages/List";
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
          <Route path="/list" element={<List />} />
        </Routes>
      </main>
      <footer className="footer-main">&copy; ironhack-2022+</footer>
    </div>
  );
}

export default App;
