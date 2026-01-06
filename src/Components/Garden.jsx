import maintenance from '../assets/landscape1.jpg'
import m9 from '../assets/garden/m9.jpeg'
import m5 from '../assets/garden/m5.jpeg'
import m4 from '../assets/garden/m4.jpeg'
import m6 from '../assets/garden/m6.jpeg'
import m1 from '../assets/garden/m1.jpeg'
import m3 from '../assets/garden/m3.jpeg'
import { useEffect } from 'react'

const Garden = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const images = [{image:m9},{image:m5},{image:m4},{image:m6},{image:m1},{image:m3}];
  return (
    <div>
    <div className='flex flex-col items-stretch ' id='Landscape'>
        <div>
         <img className='w-full h-[500px] md:object-cover object-center' src={maintenance} alt=""/>
        </div>
        <h1 className='text-3xl text-center font-bold my-8 font-poppins'>Garden-Maintenance</h1>
        <div className="flex flex-col justify-center items-start mx-auto bg-inherit  p-5 h-fit w-fit">
        <div className='flex flex-col mb-4'>
          <h2 className='font-poppins text-xl font-semibold text-start'><i  className=" text-white fa-solid fa-check bg-green-700 h-fit rounded-sm mr-4    "></i>Regular watering</h2>
          <p className='ml-12'>Ensures plants stay healthy and grow evenly.</p>
        </div>
           <div className='flex flex-col my-4'>
         
          <h2 className='text-xl font-poppins font-semibold text-start'><i  className=" text-white fa-solid fa-check bg-green-700 h-fit rounded-sm mr-4    "></i> Lawn mowing</h2>
          <p className='ml-12'>Keeps the garden neat and promotes thick grass growth.</p>
        </div>
           <div className='flex flex-col my-4'>
          <h2 className='text-xl font-poppins font-semibold text-start'><i  className=" text-white fa-solid fa-check bg-green-700 h-fit rounded-sm mr-4    "></i>Pruning & Trimming</h2>
          <p className='ml-12'>Removes dead branches and shapes plants beautifully.</p>
        </div>
           <div className='flex flex-col my-4
           '>
          <h2 className='text-xl font-poppins font-semibold text-start'><i  className=" text-white fa-solid fa-check bg-green-700 h-fit rounded-sm mr-4    "></i>Weeds Control</h2>
          <p className='ml-12'>Prevents unwanted plants from harming your garden.</p>
        </div>
           <div className='flex flex-col my-4'>
          <h2 className='text-xl font-poppins font-semibold text-start'><i  className=" text-white fa-solid fa-check bg-green-700 h-fit rounded-sm mr-4    "></i>Soil Care</h2>
          <p className='ml-12'>Improves nutrients for stronger roots and plants.</p>
        </div>
           <div className='flex flex-col my-4'>
          <h2 className='text-xl font-poppins font-semibold text-start'><i  className="text-white fa-solid fa-check bg-green-700 h-fit rounded-sm mr-4    "></i>Seasonal Cleanup</h2>
          <p className='ml-12'>Keeps the garden fresh and ready all year round.</p>
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

export default Garden