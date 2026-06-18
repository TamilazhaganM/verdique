import { useEffect } from "react";

import agri from "../assets/agri.jpg";
import a6 from "../assets/agriculture/a6.jpg";
import a1 from "../assets/agriculture/a1.jpg";
import a2 from "../assets/agriculture/a2.jpeg";
import a3 from "../assets/agriculture/a3.jpg";
import a4 from "../assets/agriculture/a4.jpg";
import a5 from "../assets/agriculture/a5.jpg";

const Agriculture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      no: "01",
      title: "Soil Preparation",
      desc: "Preparing fertile soil to provide the ideal foundation for healthy crop growth.",
    },
    {
      no: "02",
      title: "Crop Sowing",
      desc: "Planting crops using the right methods and timing for maximum productivity.",
    },
    {
      no: "03",
      title: "Irrigation",
      desc: "Providing efficient and sustainable water management for optimal crop health.",
    },
    {
      no: "04",
      title: "Fertilization",
      desc: "Supplying essential nutrients to improve soil fertility and crop yields.",
    },
    {
      no: "05",
      title: "Pest Control",
      desc: "Protecting crops from pests and diseases using safe and effective solutions.",
    },
    {
      no: "06",
      title: "Harvesting",
      desc: "Collecting crops at peak maturity while preserving their quality and value.",
    },
  ];

  const gallery = [a6, a1, a2, a3, a4, a5];

  return (
    <section className="bg-[#FAFAF8]">

      {/* Hero */}

      <div className="relative h-[500px]">

        <img
          src={agri}
          alt="Agriculture"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0D1F0F]/60"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

          <p className="uppercase tracking-[5px] text-[#7EC845] font-semibold">
            Sustainable Farming
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4">
            Agriculture Services
          </h1>

          <p className="max-w-2xl mt-6 text-gray-200 leading-8">
            We provide reliable agricultural solutions that improve productivity,
            promote sustainability, and ensure healthy crop growth through
            modern farming practices.
          </p>

        </div>

      </div>

      {/* Services */}

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[4px] text-[#7EC845] font-semibold">
              Our Expertise
            </p>

            <h2 className="text-4xl font-bold text-[#0D1F0F] mt-4 mb-10">
              Professional Agricultural Solutions
            </h2>

            <div className="space-y-6">

              {services.map((service) => (

                <div
                  key={service.no}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300 flex gap-5"
                >

                  <div className="min-w-[65px] h-[65px] rounded-full bg-[#7EC845] flex items-center justify-center">

                    <span className="font-bold text-[#0D1F0F]">
                      {service.no}
                    </span>

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-[#0D1F0F]">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mt-2 leading-7">
                      {service.desc}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Right */}

          <div>

            <img
              src={agri}
              alt="Agriculture"
              className="rounded-[32px] shadow-2xl w-full"
            />

          </div>

        </div>

      </div>

      {/* Gallery */}

      <div className="max-w-7xl mx-auto px-6 pb-24">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#7EC845] font-semibold">
            Our Projects
          </p>

          <h2 className="text-4xl font-bold text-[#0D1F0F] mt-4">
            Agriculture Gallery
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-7">
            Take a look at our agricultural projects showcasing sustainable
            farming techniques, healthy crops, and professional field management.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {gallery.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg group"
            >

              <img
                src={image}
                alt={`Agriculture ${index + 1}`}
                className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Agriculture;