import LandingPage from "./components/LandingPage.js";
import "./App.css";
import "./style/main.css";
import "nes.css/css/nes.min.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact.js";
import Impressum from "./components/Impressum.js";
import Layout from "./components/Layout.js";
import NotFound from "./components/NotFound.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
