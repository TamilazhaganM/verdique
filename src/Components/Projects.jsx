
import f1 from "../assets/f7.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import f4 from "../assets/f7.jpg";

const Projects = () => {
  const projects = [
    {
      image: f1,
      title: "Home Landscape",
      description: "Elegant outdoor living spaces designed for modern homes.",
    },
    {
      image: f2,
      title: "Luxury Villa",
      description: "Premium landscaping with lush gardens and natural beauty.",
    },
    {
      image: f3,
      title: "Apartment Greens",
      description: "Functional green spaces that improve everyday living.",
    },
    {
      image: f4,
      title: "Terrace Garden",
      description: "Transforming rooftops into peaceful green retreats.",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#FAFAF8] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#7EC845] font-semibold">
            Our Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1F0F] mt-4">
            Featured Projects
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 mt-6 leading-8">
            Every landscape is carefully designed to blend
            beauty, sustainability and functionality.
          </p>

          <div className="w-24 h-1 bg-[#7EC845] rounded-full mx-auto mt-6"></div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group overflow-hidden rounded-3xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500"
            >

              {/* Image */}

              <div className="relative overflow-hidden h-[420px]">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F0F]/90 via-[#0D1F0F]/20 to-transparent"></div>

                {/* Text */}

                <div className="absolute bottom-0 p-6">

                  <span className="inline-block bg-[#7EC845] text-[#0D1F0F] px-4 py-1 rounded-full text-xs font-bold uppercase mb-4">
                    Project
                  </span>

                  <h3 className="text-white text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-white/80 mt-3 leading-7 text-sm">
                    {project.description}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;

