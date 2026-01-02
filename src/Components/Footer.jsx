import React from 'react'
import logo from "./../assets/Verdique logo.jpg"

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <div className='relative top-20'>
        <div className='bg-black text-white'>
              <div className='flex justify-center p-5 items-center'>
      <img className='w-12 h-12 rounded-full p-2' src={logo} alt=""/>
      <div>
        <h2 className='font-extrabold text-lg font-edu'>Verdique</h2>
        <p className='text-[12px] text-gray-500'>YOUR DREAM GARDEN BEGINS HERE</p>
      </div>
    </div>
    <p className='p-5 text-xl text-center'>“Creating green spaces that reflect beauty, balance, and sustainable living.”</p>
    <div id='Contact' className='text-center flex justify-center gap-5'>
      <i className="fa-solid fa-phone my-auto text-2xl text-green-700"></i> 
      <div>
        <p>+91 96555228239</p>
      <p>Tamilazhagan M</p>
      </div>
      <i class="fa-solid fa-phone my-auto text-2xl text-green-700"></i>
      <div>
        <p>+91 8682943056</p> 
      <p>Venkatesh  P</p>
    </div>
      </div>
      
      
  <div className="my-8 border-t border-white/40">
        <p className="py-4  text-center text-sm">
          ©Copyright {year} Verdique. Designed and Developed by Tamilazhagan M
        </p>
      </div>        </div>
    </div>
  )
}

export default Footer