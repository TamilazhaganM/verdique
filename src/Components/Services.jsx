import parkIcon from "../assets/park.png";
import AgriIcon from "../assets/tractor.png";
import MaintainIcon from "../assets/maintenance.png";
import welcome1 from "../assets/welcome1.png";

const Services = () => {
  const icons = [
    { icon: parkIcon, name: "LandScape" },
    { icon: AgriIcon, name: "Agricultural Services" },
    { icon: MaintainIcon, name: " Garden Maintenance" },
  ];
  return (
    <div className="md:relative bottom-30">
     <div className="md:relative bottom-30 flex flex-col md:flex-row  items-center justify-center gap-1">
      {icons.map((icon,index) => (
        <div key={index} className=" w-11/12 md:w-1/4  my-5 ">
          <div className="flex flex-col justify-center items-center rounded-xl h-40 bg-green-600">
            <img className="w-16 h-16" src={icon.icon} alt="" />
            <p >{icon.name}</p>
          </div>
        </div>
       
      ))}
       </div>
      <div className="flex flex-col md:flex-row justify-center items-start mx-4">
      <div className="md:3/4">
        <img className="h-[350px]" src={welcome1} alt=""/>
      </div>
        <div className="md:w-3/4">
          <h1 className="text-2xl font-bold md:text-5xl ">Welcome to Verdique</h1>
          <div className="w-24 h-1  bg-green-500 mt-2"></div>

          <h3 className="font-semibold text-lg">
            The Most Reliable & Professional Company for Gardening & Lawncare
            Service
          </h3>
          <h4 className="text-gray-500  tracking-wide text-base ">
            Verdique is a landscape-focused company dedicated to creating green,
            functional, and visually appealing outdoor spaces. We believe that a
            well-designed landscape is not just about beauty it’s about balance,
            sustainability, and long-term value.
          </h4>
          <br></br>
          <h4 className="text-gray-500 text-base   tracking-wide ">
            With a strong eye for detail and a practical approach, Verdique
            delivers landscape solutions that enhance both residential and
            commercial environments. From concept to execution, every project is
            handled with care, quality materials, and thoughtful planning.
          </h4>
        </div>
      </div>

      <div className="text-center md:w-5/12 w-10/12 mx-auto my-10 bg-white rounded-xl">
        <h1 className=" text-3xl font-bold p-8 md:text-4xl md:font-bold">
          Connect With Verdique
        </h1>
        <div className="flex flex-col m-5">
          <input
            className="border-2 w-11/12 p-2 mx-auto mb-5 bg-forms border-gray-300 tracking-wide outline-none"
            type="text"
            placeholder="Name"
          />
          <input
            className="border-2 w-11/12 p-2 mx-auto my-5 bg-forms border-gray-300 tracking-wide outline-none"
            type="email"
            placeholder="Email"
          />
          <input
            className="border-2 w-11/12 p-2 mx-auto my-5 bg-forms border-gray-300 tracking-wide outline-none"
            type="tel"
            placeholder="Phone"
          />
          <textarea
            className="border-2 w-11/12 p-2 mx-auto my-5 bg-forms border-gray-300 tracking-wide outline-none"
            name=""
            id=""
            placeholder="Message"
          ></textarea>
          <button className="group relative flex items-center justify-center bg-green-700 mx-auto text-white w-fit px-6 py-3 rounded-full transition-all duration-300 hover:bg-green-600 overflow-hidden">
            <i className="fa-solid fa-arrow-right absolute left-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"></i>
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              Submit
            </span>
          </button>
        </div>
      </div>
      <div className="h-60 bg-green-700 text-white flex flex-col justify-center items-center ">
      <h4 className="text-3xl p-5 font-semibold">Need a Gardener For your Home ? Please Call:1234567890</h4>
      <button className="bg-white font-semibold text-black p-4 rounded-full cursor-pointer ">CONTACT US</button>
      </div>
    </div>
  );
};

export default Services;
