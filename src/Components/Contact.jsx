import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

function Contact() {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");
  const [user, setUsers] = useState([
    { name: "", mail: "", phone: "", service: "", message: "" },
  ]);

async function handlesubmit() {
  const newUser = { name, mail, phone, service, message };

  try {
    const response = await axios.post(`${API_URL}/addclient`, newUser);

    toast.success("Details submitted successfully!");

    setUsers((prev) => [...prev, newUser]);

    setName("");
    setMail("");
    setPhone("");
    setService("");
    setMessage("");

    console.log(response.data);
  } catch (error) {
    toast.error("Failed to submit details.");
    console.error(error);
  }
}

  return (
    <div>
      <div className="text-center md:w-5/12 w-10/12 mx-auto my-10 p-2 bg-white rounded-xl">
        <h1 className=" text-3xl font-bold p-8 md:text-4xl md:font-bold">
          Connect With Verdique
        </h1>
        <div className="flex flex-col m-5">
          <input
            className="border-2 w-11/12 p-2 mx-auto mb-5 bg-forms border-gray-300 tracking-wide outline-none"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border-2 w-11/12 p-2 mx-auto my-5 bg-forms border-gray-300 tracking-wide outline-none"
            type="email"
            placeholder="Email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            className="border-2 w-11/12 p-2 mx-auto my-5 bg-forms border-gray-300 tracking-wide outline-none"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <select
            value={service} 
            onChange={(e) => setService(e.target.value)}
 className="border-2 w-11/12 p-2 mx-auto my-5 bg-forms border-gray-300 tracking-wide outline-none"
          >
            <option value="">Select a Service</option>
            <option value="Landscape Design">Landscape Design</option>
            <option value="Garden Maintenance">Garden Maintenance</option>
            <option value="Agricultural Services">Agricultural Services</option>
          </select>

          <textarea
            className="border-2 w-11/12 p-2 mx-auto my-5 bg-forms border-gray-300 tracking-wide outline-none"
            name=""
            id=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          ></textarea>
          <button
            onClick={handlesubmit}
            className="group relative flex items-center justify-center bg-green-700 mx-auto text-white w-fit px-6 py-3 rounded-full transition-all duration-300 hover:bg-green-600 overflow-hidden"
          >
            <i className="fa-solid fa-arrow-right absolute left-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"></i>
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              Submit
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
