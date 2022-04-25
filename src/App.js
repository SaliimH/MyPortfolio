import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import PortFolio from "./Components/PortFolio/PortFolio";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Portfolio" element={<PortFolio />} />
    </Routes>
  </BrowserRouter>
);

export default App;
