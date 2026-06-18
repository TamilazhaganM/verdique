import OfferImage from "../assets/Offer.jpg";
import OfferImage1 from "../assets/Expertise.png";
import OfferImage2 from "../assets/bulb.png";
import OfferImage3 from "../assets/Quality.png";
import OfferImage4 from "../assets/Transaparent.png";

const features = [
  {
    icon: OfferImage1,
    title: "Expertise You Can Trust",
    text: "Years of landscape design experience delivering beautiful, sustainable outdoor environments.",
  },
  {
    icon: OfferImage2,
    title: "Tailored Solutions",
    text: "Every landscape is designed around your lifestyle, vision and available space.",
  },
  {
    icon: OfferImage3,
    title: "Quality & Sustainability",
    text: "Premium materials combined with eco-friendly practices create gardens that last.",
  },
  {
    icon: OfferImage4,
    title: "Transparent & Reliable",
    text: "Clear communication, honest pricing and timely project completion from start to finish.",
  },
];

const Offer = () => {
  return (
    <section
      id="offer"
      className="bg-[#FAFAF8] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div className="relative">

            <img
              src={OfferImage}
              alt="Landscape"
              className="rounded-[32px] shadow-2xl w-full object-cover h-[520px]"
            />

            {/* Floating Card */}

            <div className="absolute -bottom-8 -right-8 bg-[#0D1F0F] text-white p-8 rounded-3xl shadow-xl">

              <h2 className="text-4xl font-bold text-[#7EC845]">
                02+
              </h2>

              <p className="mt-2 text-gray-300">
                Years of Experience
              </p>

            </div>

          </div>

          {/* Content */}

          <div>

            <p className="uppercase tracking-[4px] text-[#7EC845] font-semibold">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1F0F] mt-5 leading-tight">
              Creating Beautiful
              <br />
              Green Spaces That Last
            </h2>

            <p className="text-gray-600 leading-8 mt-8 text-lg">
              We combine creativity, sustainability, and expert craftsmanship
              to design outdoor spaces that enhance everyday living. Every
              project is carefully planned to reflect your vision while
              maintaining harmony with nature.
            </p>

            <button className="mt-10 bg-[#7EC845] hover:bg-[#4A7C59] text-[#0D1F0F] hover:text-white px-8 py-4 rounded-full font-semibold transition duration-300">
              Learn More
            </button>

          </div>

        </div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-500 group"
            >

              <div className="w-20 h-20 rounded-full bg-[#F5F2EC] flex items-center justify-center mb-6 group-hover:bg-[#7EC845] transition">

                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10"
                />

              </div>

              <h3 className="text-2xl font-bold text-[#0D1F0F] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Offer;