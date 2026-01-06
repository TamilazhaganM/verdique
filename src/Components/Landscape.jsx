import { useEffect } from 'react'
import landscape from '../assets/landscapeai.png'
import l1 from '../assets/landscape/l1.jpeg'
import l2 from '../assets/landscape/l2.jpeg'
import l3 from '../assets/landscape/l3.jpeg'
import l4 from '../assets/landscape/l4.jpeg'
import l5 from '../assets/landscape/l5.jpeg'
import l6 from '../assets/landscape/l6.jpeg'

const Landscape = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [{image:l1},{image:l2},{image:l3},{image:l4},{image:l5},{image:l6}];
  return (
    <div>
    <div className='flex flex-col items-stretch ' id='Landscape'>
        <div>
         <img className='w-full h-[500px] object-cover object-center' src={landscape} alt=""/>
        </div>
        <h1 className='text-3xl text-center font-bold my-8 font-poppins'>LandScapping Process</h1>
        <div className="flex flex-col justify-center items-start mx-auto bg-inherit  p-5 h-fit w-fit">
        <div className='flex flex-col my-4'>
          <h2 className='text-xl font-semibold text-start  font-poppins'><i  className=" text-white fa-solid fa-check bg-green-700 h-fit rounded-sm mr-4    "></i>Site Assessments</h2>
          <p className='ml-12'>We inspect the land, soil, and surroundings to understand the space.</p>
        </div>
           <div className='flex flex-col my-4'>
         
          <h2 className='text-xl font-semibold text-start font-poppins'><i  className=" text-white fa-solid fa-check bg-green-700 h-fit rounded-sm mr-4    "></i> Planning & Design</h2>
          <p className='ml-12'>A clear layout is created based on your needs and site conditions.</p>
        </div>
           <div className='flex flex-col my-4'>
          <h2 className='text-xl font-semibold text-start  font-poppins'><i  className=" text-white fa-solid fa-check bg-green-700 h-fit rounded-sm mr-4    "></i>Budget & Approval</h2>
          <p className='ml-12'>We finalize the cost and timeline before starting the work.</p>
        </div>
           <div className='flex flex-col my-4
           '>
          <h2 className='text-xl font-semibold text-start  font-poppins'><i  className=" text-white fa-solid fa-check bg-green-700 h-fit rounded-sm mr-4    "></i>Site Preparation</h2>
          <p className='ml-12'>The area is cleaned, leveled, and prepared for installation.</p>
        </div>
           <div className='flex flex-col my-4'>
          <h2 className='text-xl font-semibold text-start  font-poppins'><i  className=" text-white fa-solid fa-check bg-green-700 h-fit rounded-sm mr-4    "></i>Installation</h2>
          <p className='ml-12'>Hardscape structures and plants are installed with precision.</p>
        </div>
           <div className='flex flex-col my-4'>
          <h2 className='text-xl font-semibold text-start  font-poppins'><i  className="text-white fa-solid fa-check bg-green-700 h-fit rounded-sm mr-4    "></i>Final Touch & Care</h2>
          <p className='ml-12'>We finish, inspect, and guide you on proper maintenance.</p>
        </div>
        </div>
        
    </div>
     <div className='grid grid-cols-1  md:grid-cols-3 gap-6'>
    {images.map((image=>{
      return(
    
       <div className='h-[250px] w-full p-4 '>
      <img className='w-full h-full object-cover rounded-4xl' src={image.image} alt=""/>
    </div>
   
      )
    }))}
    </div>
   
    </div>
  )
}

export default Landscape