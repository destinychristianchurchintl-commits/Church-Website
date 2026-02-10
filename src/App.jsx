import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Welcome from "./Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
