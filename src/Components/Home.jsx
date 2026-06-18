import homebg from "./../assets/home.jpg";
import Offer from "./Offer";
import Projects from "./Projects";
import Services from "./Services";
import Welcomebar from "./Welcomebar";
import { HashLink } from "react-router-hash-link";

const Home = () => {
return ( <div className="bg-[#FAFAF8]">

  <Welcomebar />

  {/* Hero Section */}
  <section
    className="relative h-120vh bg-cover bg-center overflow-hidden"
    style={{ backgroundImage: `url(${homebg})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0D1F0F]/95 via-[#0D1F0F]/70 to-[#0D1F0F]/20"></div>

    {/* Accent Bar */}
    <div className="absolute left-0 top-0 h-full w-1.5 bg-[#7EC845] animate-grow-bar z-10"></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col justify-center h-full w-11/12 md:w-3/4 mx-auto pl-6 md:pl-12">

      

      {/* Heading */}
      <h1 className="animate-fade-up-2 text-[#F5F2EC] text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6">
        Green Living
        <br />
        <span className="text-[#7EC845]">
          Starts Here.
        </span>
      </h1>

      {/* Description */}
      <p
        id="services"
        className="animate-fade-up-3 text-base md:text-lg text-[#F5F2EC]/80 max-w-xl leading-relaxed mb-8"
      >
        We design and build sustainable landscapes, vertical gardens,
        rooftop gardens, and eco-friendly outdoor spaces that bring
        nature closer to your everyday life.
      </p>

      {/* Buttons */}
      <div className="animate-fade-up-4 flex flex-wrap gap-4 mb-12">

        <HashLink
          smooth
          to="/#about"
          className="inline-flex items-center gap-2 bg-[#7EC845] text-[#0D1F0F] px-8 py-3 rounded-lg font-semibold uppercase tracking-wider shadow-lg hover:bg-[#95D95A] hover:-translate-y-1 transition-all duration-300"
        >
          Explore Services
          <i className="fa-solid fa-arrow-right text-xs"></i>
        </HashLink>

        <HashLink
          smooth
          to="/#projects"
          className="inline-flex items-center gap-2 border border-[#F5F2EC]/30 text-[#F5F2EC] px-8 py-3 rounded-lg font-medium uppercase tracking-wider hover:border-[#7EC845] hover:text-[#7EC845] transition-all duration-300"
        >
          View Projects
        </HashLink>

      </div>

      {/* Stats */}
      <div className="animate-fade-up-5 flex flex-wrap gap-8 md:gap-12 pt-6 border-t border-[#F5F2EC]/20 my-15">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#7EC845]">
            10+
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#F5F2EC]/60 mt-1">
            Projects
          </p>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#7EC845]">
            02+
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#F5F2EC]/60 mt-1">
            Years Experience
          </p>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#7EC845]">
            100%
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#F5F2EC]/60 mt-1">
            Eco Friendly
          </p>
        </div>

      </div>

    </div>
  </section>

  {/* CTA Section */}
  <section className="bg-[#0D1F0F] my-5 py-20 text-center px-6">
    <h2 className="text-[#F5F2EC] text-4xl md:text-5xl font-bold mb-6">
      Ready to Transform Your Space?
    </h2>

    <p className="text-[#F5F2EC]/70 max-w-2xl mx-auto text-lg mb-8">
      Let's create a sustainable and beautiful outdoor environment
      that enhances your lifestyle and connects you with nature.
    </p>

    <HashLink
      smooth
      to="/#footer"
      className="inline-flex items-center gap-2 bg-[#7EC845] text-[#0D1F0F] px-8 py-4 rounded-lg font-bold uppercase tracking-wider shadow-xl hover:bg-[#95D95A] hover:-translate-y-1 transition-all duration-300"
    >
      Get Free Consultation
      <i className="fa-solid fa-arrow-right"></i>
    </HashLink>
  </section>

  {/* Scroll To Top */}
  <HashLink
    smooth
    to="/#home"
    className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#7EC845] text-[#0D1F0F] flex items-center justify-center shadow-xl hover:bg-[#95D95A] hover:scale-110 transition-all duration-300 z-50"
  >
    <i className="fa-solid fa-arrow-up"></i>
  </HashLink>
  <Services />
  <Projects />
  <Offer />
</div>


);
};

export default Home;
