import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import f4 from "../assets/f4.jpg";

const Projects = () => {
  const images = [
    { image: f1, text: "“Thoughtfully designed green spaces that bring comfort, calm, and natural beauty to everyday living.”", place: "Residence" },
    { image: f2, text: "“Premium landscape designs that enhance luxury, privacy, and outdoor living around your villa.”", place: "Villa" },
    { image: f3, text: "“Modern landscaping solutions that add freshness, balance, and harmony to urban apartment life.”", place: "Apartment" },
    { image: f4, text: "“Beautifully crafted landscapes that create a relaxing, immersive, and unforgettable resort experience.”", place: "Terrace Garden" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl text-center">
        Our Feature Projects
      </h1>

      <div className="flex flex-col md:w-2/4 md:flex-row gap-8 items-center my-10">
        {images.map((image, index) => (
          <div key={index} className="w-full md:w-1/2">
            
            {/* ✅ Image Wrapper */}
            <div className="group relative overflow-hidden">
              {/* Overlay */}
              <div
                className="absolute inset-0 w-2/3 h-full bg-green-500 
                           -translate-x-full opacity-0
                           transition-transform duration-500 ease-in-out
                           group-hover:translate-x-0 group-hover:opacity-100
                           pointer-events-none flex items-center justify-center text-white"
              >
               <p className="text-center">{image.text}</p> 
              </div>

              {/* Image */}
              <img
                className="w-full h-auto transform origin-left
                           transition-all duration-500 ease-in-out
                           group-hover:scale-90 group-hover:translate-x-[66.666%]"
                src={image.image}
                alt=""
              />
            </div>

            {/* ✅ Place text OUTSIDE overlay area */}
            <h2 className="text-xl font-bold text-center mt-3 bg-green-700">
              {image.place}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
