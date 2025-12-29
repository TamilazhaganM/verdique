

const Home = () => {
  return (
    <div>
        <div className=" relative bg-[url('/src/Assets/home.jpg')] bg-cover bg-center h-screen text-white">
        <div className="absolute inset-2 rounded-sm  bg-black/50"></div>
        <div className=' relative z-10 flex flex-col justify-center items-center w-11/12 mx-auto text-center h-full md:w-3/4 '>
         <h3 className='text-3xl md:text-4xl font-extrabold decoration-amber-950 decoration-double leading-10 '>GREEN LIVING STARTS HERE</h3>
         <p className='md:w-1/2 text-sm  font-semibold'>“We design and build sustainable landscapes that bring nature closer to your everyday life.”</p>
        </div>
       
        </div>
    </div>
  )
}

export default Home