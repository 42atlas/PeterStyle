import LandingPage from "./components/LandingPage.js";

import "./App.css";

import "./style/main.css";
import "nes.css/css/nes.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
