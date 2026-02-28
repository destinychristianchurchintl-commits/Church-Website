import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Welcome from "./Welcome";
import About from "./AboutUs";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
