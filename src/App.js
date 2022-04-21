import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./Components/HomePage/HomePage";

import "./App.css";

const App = () => (
  <BrowserRouter>


      <Routes>
        <Route path="/" element={<HomePage />} />

      </Routes>
  </BrowserRouter>
);


export default App;
