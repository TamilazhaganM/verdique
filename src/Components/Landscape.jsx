import { useEffect } from "react";

import landscape from "../assets/landscapeai.png";
import landscape1 from "../assets/landscape1.jpg";

import l1 from "../assets/landscape/l1.jpeg";
import l2 from "../assets/landscape/l2.jpeg";
import l3 from "../assets/landscape/l3.jpeg";
import l4 from "../assets/landscape/l4.jpeg";
import l5 from "../assets/landscape/l5.jpeg";
import l6 from "../assets/landscape/l6.jpeg";

const Landscape = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const process = [
    {
      no: "01",
      title: "Site Assessment",
      desc: "We inspect the land, soil conditions and surrounding environment before beginning.",
    },
    {
      no: "02",
      title: "Planning & Design",
      desc: "Custom landscape layouts are created according to your vision and space.",
    },
    {
      no: "03",
      title: "Budget & Approval",
      desc: "Transparent pricing and project timelines are finalized before execution.",
    },
    {
      no: "04",
      title: "Site Preparation",
      desc: "Cleaning, leveling and preparing the area for construction and planting.",
    },
    {
      no: "05",
      title: "Installation",
      desc: "Plants, paving, lighting and landscape elements are installed professionally.",
    },
    {
      no: "06",
      title: "Final Care",
      desc: "Final inspection and maintenance guidance ensure long-lasting beauty.",
    },
  ];

  const gallery = [l1, l2, l3, l4, l5, l6];

  return (
    <section className="bg-[#FAFAF8]">

      {/* Hero */}

      <div className="relative h-[500px]">

        <img
          src={landscape1}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0D1F0F]/60"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

          <p className="uppercase tracking-[5px] text-[#7EC845] font-semibold">
            Our Process
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4">
            Landscaping Process
          </h1>

          <p className="max-w-2xl text-gray-200 mt-6 leading-8">
            We combine thoughtful planning, skilled craftsmanship and sustainable
            practices to transform outdoor spaces into timeless landscapes.
          </p>

        </div>

      </div>

      {/* Process */}

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[4px] text-[#7EC845] font-semibold">
              Step by Step
            </p>

            <h2 className="text-4xl font-bold text-[#0D1F0F] mt-4 mb-10">
              Our Working Process
            </h2>

            <div className="space-y-6">

              {process.map((item) => (

                <div
                  key={item.no}
                  className="flex gap-5 bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
                >

                  <div className="min-w-[65px] h-[65px] rounded-full bg-[#7EC845] flex items-center justify-center">

                    <span className="font-bold text-[#0D1F0F]">
                      {item.no}
                    </span>

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-[#0D1F0F]">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-2 leading-7">
                      {item.desc}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Right */}

          <div>

            <img
              src={landscape}
              alt=""
              className="rounded-[32px] shadow-2xl"
            />

          </div>

        </div>

      </div>

      {/* Gallery */}

      <div className="max-w-7xl mx-auto px-6 pb-24">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#7EC845] font-semibold">
            Gallery
          </p>

          <h2 className="text-4xl font-bold text-[#0D1F0F] mt-4">
            Completed Landscapes
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {gallery.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg group"
            >

              <img
                src={image}
                alt=""
                className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Landscape;