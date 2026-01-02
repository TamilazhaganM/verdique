import { useState, useEffect } from "react";
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import f4 from "../assets/f4.jpg";


const Projects = () => {
  const images = [
    { image: f1, text: "Thoughtfully designed green spaces.", place: "Residence" },
    { image: f2, text: "Premium landscape designs.", place: "Villa" },
    { image: f3, text: "Modern landscaping solutions.", place: "Apartment" },
    { image: f4, text: "Beautifully crafted landscapes.", place: "Terrace Garden" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // md breakpoint = 768px
    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl text-center">Our Feature Projects</h1>

      <div className="flex flex-col md:flex-row gap-8 my-10 w-full">
        {images.map((image, index) => (
          <div key={index} className="w-full md:w-1/2">
            <div
              className="relative overflow-hidden group cursor-pointer"
              onClick={() => isMobile && setActiveIndex(activeIndex === index ? null : index)}
            >
              {/* Overlay */}
              <div
  className={`
    absolute inset-0 
    w-2/3 md:w-2/3 h-full
    bg-green-500 text-white flex items-center justify-center 
    transition-all duration-500 ease-in-out
    ${isMobile && activeIndex === index ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
    md:group-hover:translate-x-0 md:group-hover:opacity-100
  `}
>
  <p className="text-center px-4 text-sm md:text-base">{image.text}</p>
</div>


              {/* Image */}
              <img
                className="w-full  transform origin-left transition-all duration-500 ease-in-out
                  group-hover:scale-90 group-hover:translate-x-[66.666%]"
                src={image.image}
                alt=""
              />
            </div>

            <h2 className="text-xl font-bold text-white text-center mt-3 bg-green-700">
              {image.place}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
