import React, { useState } from 'react'

const Navbar = () => {

const[show,setShow]=useState(false)
function handleshow(){
  setShow(!show)
}
  return (
    <div className='fixed top-0 left-0 right-0 z-50'>   
    <div className='flex justify-between items-center bg-white border-b-4 border-b-green-600'>
    <div className='flex'>
      <img className='w-12 h-12 rounded-full p-2' src="/src/assets/Verdique logo.jpg" alt=""/>
      <div>
        <h2 className='font-extrabold text-lg font-edu'>Verdique</h2>
        <p className='text-[12px] text-gray-500'>YOUR DREAM GARDEN BEGINS HERE</p>
      </div>
    </div>
      
      <div className='flex items-center gap-5 mr-2'>
        <i className="border-2 text-xl rounded-xl fa-solid fa-phone text-green-500"></i>
        <i className="border-2 text-xl rounded-xl  fa-regular fa-envelope text-green-500"></i>
        <i class="fa-solid fa-bars text-xl cursor-pointer" onClick={handleshow} style={{color:" #4e535a"}}></i>
      </div>
    </div>
 <div
  className={`
    absolute top-13 left-0 right-0
    bg-white shadow-2xl 
    transition-all duration-200 ease-in-out
    ${show
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 -translate-y-5 pointer-events-none'
    }
  `}
>
  <ul className='p-3'>
    <li className='my-3'>Home</li>
    <li className='my-3'>About</li>
    <li className='my-3'>Services</li>
    <li className='my-3'>Contact</li>
  </ul>
</div>

    
    </div>
  )
}

export default Navbar