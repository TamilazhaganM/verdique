import axios from 'axios'
import React, { useState } from 'react'

function Contact() {
     const [name,setName]= useState('')
      const [mail,setMail]= useState('')
      const [phone,setPhone]= useState('')
      const [message,setMessage]=useState('')
      const [user, setUsers] = useState([{name:"", mail:"", phone:"", message:""}])
    
     async function  handlesubmit(){
       const newUser = {name, mail, phone, message}
        setUsers((prev)=>[...prev,newUser])
       
        setName("")
        setMail("")
        setPhone("")
        setMessage("")

        try {
          const response = await axios.post("http://localhost:5000/client",newUser)
          console.log(response)
        } catch (error) {
          console.error(`Error Message: ${error}`)
        }
      }
      console.log(user)
      
  return (
    <div id='contact'>
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
            onChange={(e)=>setName(e.target.value)}
          />
          <input
            className="border-2 w-11/12 p-2 mx-auto my-5 bg-forms border-gray-300 tracking-wide outline-none"
            type="email"
            placeholder="Email"
            value={mail}
            onChange={(e)=>setMail(e.target.value)}
          />
          <input
            className="border-2 w-11/12 p-2 mx-auto my-5 bg-forms border-gray-300 tracking-wide outline-none"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
          <textarea
            className="border-2 w-11/12 p-2 mx-auto my-5 bg-forms border-gray-300 tracking-wide outline-none"
            name=""
            id=""
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            placeholder="Message"
          ></textarea>
          <button onClick={handlesubmit} className="group relative flex items-center justify-center bg-green-700 mx-auto text-white w-fit px-6 py-3 rounded-full transition-all duration-300 hover:bg-green-600 overflow-hidden">
            <i className="fa-solid fa-arrow-right absolute left-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"></i>
            <span  className="transition-transform duration-300 group-hover:translate-x-2">
              Submit
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact