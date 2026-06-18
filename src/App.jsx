import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landscape from "./Components/Landscape";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Garden from "./Components/Garden";
import Agriculture from "./Components/Agriculture";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landscape" element={<Landscape />} />
          <Route path="/agricultural-services" element={<Agriculture />} />
          <Route path="/garden-maintenance" element={<Garden />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
