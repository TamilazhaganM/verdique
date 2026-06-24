
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import parkIcon from "../assets/park.png";
import AgriIcon from "../assets/tractor.png";
import MaintainIcon from "../assets/maintenance.png";
import welcome1 from "../assets/welcome1.png";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Contact from "./Contact";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const icons = [
    {
      icon: parkIcon,
      name: "Landscape Design",
      path: "/landscape",
    },
    {
      icon: MaintainIcon,
      name: "Garden Maintenance",
      path: "/garden-maintenance",
    },
    {
      icon: AgriIcon,
      name: "Agricultural Services",
      path: "/agricultural-services",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#FAFAF8] py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#7EC845] font-semibold">
            Our Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1F0F] mt-4">
            Creating Beautiful Green Spaces
          </h2>

          <div className="w-24 h-1 bg-[#7EC845] mx-auto mt-6 rounded-full"></div>

        </div>

        {/* Service Cards */}

        <div className="grid md:grid-cols-3 gap-8 mb-24">

          {icons.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="bg-[#F5F2EC] rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500 group text-center">

                <div className="w-24 h-24 rounded-full bg-[#7EC845]/20 flex justify-center items-center mx-auto mb-6 group-hover:bg-[#7EC845] transition">

                  <img
                    src={item.icon}
                    className="w-12 h-12"
                    alt=""
                  />

                </div>

                <h3 className="text-2xl font-bold text-[#0D1F0F]">
                  {item.name}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  Sustainable outdoor solutions crafted with
                  creativity, precision, and long-term value.
                </p>

              </div>
            </Link>
          ))}
        </div>

        {/* About Section */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div data-aos="fade-right">

            <img
              src={welcome1}
              alt=""
              className="rounded-3xl shadow-2xl"
            />

          </div>

          <div data-aos="fade-left">

            <p className="uppercase tracking-[5px] text-[#7EC845] font-semibold">
              About Verdique
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1F0F] mt-4 leading-tight">
              Where Nature Meets Design
            </h2>

            <div className="w-24 h-1 bg-[#7EC845] rounded-full mt-6"></div>

            <p className="mt-8 text-gray-600 leading-8 text-lg">

              Verdique is dedicated to designing landscapes that
              combine beauty, sustainability and functionality.
              Every project is thoughtfully planned to create outdoor
              environments that inspire and endure.

            </p>

            <p className="mt-6 text-gray-600 leading-8 text-lg">

              Whether residential gardens, commercial landscapes,
              rooftop gardens or agricultural developments, our
              experienced team delivers solutions that blend
              craftsmanship with eco-friendly practices.

            </p>

            <HashLink
              smooth
              to="/#contact"
              className="inline-flex mt-10 bg-[#7EC845] text-[#0D1F0F] px-8 py-4 rounded-full font-semibold hover:bg-[#92D95A] transition"
            >
              Get Free Consultation
            </HashLink>

          </div>

        </div>

      </div>

      

      {/* CTA */}

      <section className="mt-20 bg-[#0D1F0F] py-20">

        <div className="max-w-6xl mx-auto text-center px-6">

          <h2 id="contact" className="text-4xl md:text-5xl font-bold text-[#F5F2EC]">
            Let's Build Your Dream Garden
          </h2>

          <p className="text-[#F5F2EC]/70 mt-6 text-lg max-w-2xl mx-auto">

            From landscape design to maintenance,
            Verdique transforms outdoor spaces into
            beautiful and sustainable environments.

          </p>

          {/* <HashLink
            smooth
            to="/#contact"
            className="inline-flex mt-10 bg-[#7EC845] text-[#0D1F0F] px-10 py-4 rounded-full font-bold hover:bg-[#92D95A] transition"
          >
            Contact Us
          </HashLink> */}

        </div>
        <Contact />

      </section>

    </section>
  );
};

export default Services;
