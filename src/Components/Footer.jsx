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
    <div id='contact' className='text-center flex justify-center gap-5'>
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
      <div>
        <div className="flex flex-col justify-center p-5">
        <h1 className='text-center my-2 text-xl'>Google Map</h1>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3887.3405639948896!2d80.17249521553835!3d13.01397138129284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1767594083725!5m2!1sen!2sin" 
    width="350"
    height="350"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-lg md:w-full md:h-126 p-5"
  ></iframe>
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