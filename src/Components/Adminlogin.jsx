import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/Verdique logo.jpg";

const Adminlogin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    const API_URL = import.meta.env.API_URL || "http://localhost:5000";
    e.preventDefault();

    try {
      const res = await axios.post(`${API_URL}/admin/login`, {
        username,
        password,
      });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        navigate("/admin/dashboard");
      } else {
        alert("Invalid Username or Password");
      }
    } catch (err) {
      alert("Invalid Credentials");
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-[420px]">

        <div className="text-center mb-8">
          <div className="text-6xl text-[#4A7C59] mb-4">
            
            <img  className="w-18 h-18 mx-auto rounded-full object-cover border-2 border-[#7EC845]" src={logo} alt="Admin Icon" />
          </div>

          <h1 className="text-3xl font-bold text-[#0D1F0F]">
            Admin Login
          </h1>

          <p className="text-gray-500 mt-2">
            Login to Verdique Dashboard
          </p>
        </div>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Admin Username"
            className="w-full p-4 mb-5 border rounded-xl outline-none focus:border-[#7EC845]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password Field */}
          <div className="relative mb-6">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-4 pr-12 border rounded-xl outline-none focus:border-[#7EC845]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#4A7C59]"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#4A7C59] hover:bg-[#0D1F0F] text-white py-4 rounded-xl transition"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
};

export default Adminlogin;