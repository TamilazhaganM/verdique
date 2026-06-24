import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landscape from "./Components/Landscape";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Garden from "./Components/Garden";
import Agriculture from "./Components/Agriculture";
import Admin from "./Components/Admin";
import Adminlogin from "./Components/Adminlogin";
import Layout from "./Components/Layout";
import ProtectedRoute from "./Components/ProtectedRouts";

function App() {
  return (
    <>
      <Router>

        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
        <Routes>
          <Route element={<Layout />}>
         
          <Route path="/" element={<Home />} />
          <Route path="/landscape" element={<Landscape />} />
          <Route path="/agricultural-services" element={<Agriculture />} />
          <Route path="/garden-maintenance" element={<Garden />} />
          </Route>
           <Route path="/admin" element={<Adminlogin />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
