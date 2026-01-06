import { useEffect } from 'react'
import agri from '../src/assets/agri.jpg'
import a6 from '../src/assets/agriculture/a6.jpg'
import a1 from '../src/assets/agriculture/a1.jpg'
import a2 from '../src/assets/agriculture/a2.jpeg'
import a3 from '../src/assets/agriculture/a3.jpg'
import a4 from '../src/assets/agriculture/a4.jpg'
import a5 from '../src/assets/agriculture/a5.jpg'


const Agriculture = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [{image:a6},{image:a1},{image:a2},{image:a3},{image:a4},{image:a5}];
  return (
    <div>
    <div className='flex flex-col items-stretch ' id='Landscape'>
        <div>
         <img className='w-full h-[500px] object-cover object-center' src={agri} alt=""/>
        </div>
        <h1 className='text-3xl text-center font-bold my-8 font-poppins'>Agriculture-Service</h1>
        <div className="flex flex-col justify-center items-start mx-auto bg-inherit  p-5 h-fit w-fit">
        <div className='flex flex-col my-4'>
          <h2 className='text-xl font-semibold text-start  font-poppins'><i  className=" text-white fa-solid fa-check bg-green-700 h-fit rounded-sm mr-4    "></i>Soil Preparation</h2>
          <p className='ml-12'>Preparing fertile soil for healthy crop growth.</p>
        </div>
           <div className='flex flex-col my-4'>
         
          <h2 className='text-xl font-semibold text-start font-poppins'><i  className=" text-white fa-solid fa-check bg-green-700 h-fit rounded-sm mr-4    "></i> Crop Sowing</h2>
          <p className='ml-12'>Planting crops at the right time and method.</p>
        </div>
           <div className='flex flex-col my-4'>
          <h2 className='text-xl font-semibold text-start  font-poppins'><i  className=" text-white fa-solid fa-check bg-green-700 h-fit rounded-sm mr-4    "></i>Irrigation</h2>
          <p className='ml-12'>Providing efficient and timely water supply.</p>
        </div>
           <div className='flex flex-col my-4
           '>
          <h2 className='text-xl font-semibold text-start  font-poppins'><i  className=" text-white fa-solid fa-check bg-green-700 h-fit rounded-sm mr-4    "></i>Fertilization</h2>
          <p className='ml-12'>Supplying nutrients for better yield.</p>
        </div>
           <div className='flex flex-col my-4'>
          <h2 className='text-xl font-semibold text-start  font-poppins'><i  className=" text-white fa-solid fa-check bg-green-700 h-fit rounded-sm mr-4    "></i>Pest Control</h2>
          <p className='ml-12'>Protecting crops from pests and diseases.</p>
        </div>
           <div className='flex flex-col my-4'>
          <h2 className='text-xl font-semibold text-start  font-poppins'><i  className="text-white fa-solid fa-check bg-green-700 h-fit rounded-sm mr-4    "></i>Harvesting</h2>
          <p className='ml-12'>Collecting crops at the right maturity stage.</p>
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

export default Agriculture