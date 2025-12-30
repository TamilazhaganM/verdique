import OfferImage from "../assets/Offer.jpg";
import OfferImage1 from "../assets/Expertise.png";
import OfferImage2 from "../assets/bulb.png";
import OfferImage3 from "../assets/Quality.png";
import OfferImage4 from "../assets/Transaparent.png";

const Offer = () => {
  return ( 
    <div>
      <div className="md:flex">
        <div>
          <img className=" border rounded-full my-5" src={OfferImage} alt="People Choosing Us" />
        </div>
        <div className="flex flex-col mx-5">
          <h2 className="text-2xl font-semibold text-green-700 my-5">Why People Choose Us</h2>
          <h1 className="text-xl font-bold  w-2/3 my-5">The Best Lawn Moving & Gardening Service</h1>
          <p className="text-gray-600 text-lg">
            We provide a wide range of services for all types of lawns and
            gardens. We have a team of experienced professionals who are
            passionate about what they do. We use the latest equipment and
            techniques to ensure that your lawn and garden look their best.
          </p>
          
          </div>         
      </div>
      <div>
            <div className="max-w-8xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              <div className="flex flex-col items-center text-center p-6 md:p-2 bg-white rounded-xl shadow-lg">
                <img
                  src={OfferImage1}
                  alt="Expertise Icon"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-lg font-bold mb-2">
                  Expertise You Can Trust
                </h3>
                <p className="text-gray-600">
                  Our team brings years of experience in landscape design and
                  implementation, ensuring every project is executed flawlessly.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 md:p-2 bg-white rounded-xl shadow-lg">
                <img
                  src={OfferImage2}
                  alt="Tailored Solutions Icon"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-lg font-bold mb-2">Tailored Solutions</h3>
                <p className="text-gray-600">
                  We understand your vision and create customized green spaces
                  that fit your lifestyle, space, and budget.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 md:p-2 bg-white rounded-xl shadow-lg">
                <img
                  src={OfferImage3}
                  alt="Quality Icon"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-lg font-bold mb-2">
                  Quality & Sustainability
                </h3>
                <p className="text-gray-600">
                  We use high-quality materials and eco-friendly practices to
                  create landscapes that last and thrive naturally.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 md:p-2 bg-white rounded-xl shadow-lg">
                <img
                  src={OfferImage4}
                  alt="Reliable Icon"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-lg font-bold mb-2">
                  Transparent & Reliable
                </h3>
                <p className="text-gray-600">
                  From consultation to completion, we maintain clear
                  communication and timely delivery so you never have to worry.
                </p>
              </div>
            </div>
          
        </div>
    </div>
  );
};

export default Offer;
