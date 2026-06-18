import logo from "../assets/Verdique logo.jpg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="bg-[#0D1F0F] text-[#FAFAF8] mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Footer */}

        <div className="grid lg:grid-cols-3 gap-16">

          {/* Company */}

          <div>

            <div className="flex items-center gap-4">

              <img
                src={logo}
                alt="Verdique Logo"
                className="w-16 h-16 rounded-full border-2 border-[#7EC845]"
              />

              <div>

                <h2 className="text-3xl font-bold">
                  Verdique
                </h2>

                <p className="text-[#7EC845] uppercase tracking-widest text-xs">
                  Your Dream Garden Begins Here
                </p>

              </div>

            </div>

            <p className="mt-8 text-gray-300 leading-8">
              Creating beautiful, sustainable landscapes that inspire
              peaceful living and connect people with nature.
            </p>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#4A7C59] hover:bg-[#7EC845] flex items-center justify-center transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#4A7C59] hover:bg-[#7EC845] flex items-center justify-center transition"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#4A7C59] hover:bg-[#7EC845] flex items-center justify-center transition"
              >
                <i className="fab fa-whatsapp"></i>
              </a>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold mb-8">
              Contact Us
            </h3>

            <div className="space-y-8">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-full bg-[#7EC845] text-[#0D1F0F] flex items-center justify-center">

                  <i className="fa-solid fa-phone"></i>

                </div>

                <div>

                  <h4 className="font-semibold">
                    Tamilazhagan M
                  </h4>

                  <p className="text-gray-300">
                    +91 96555 228239
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-full bg-[#7EC845] text-[#0D1F0F] flex items-center justify-center">

                  <i className="fa-solid fa-phone"></i>

                </div>

                <div>

                  <h4 className="font-semibold">
                    Venkatesh P
                  </h4>

                  <p className="text-gray-300">
                    +91 86829 43056
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-full bg-[#7EC845] text-[#0D1F0F] flex items-center justify-center">

                  <i className="fa-solid fa-location-dot"></i>

                </div>

                <div>

                  <h4 className="font-semibold">
                    Office
                  </h4>

                  <p className="text-gray-300">
                    Manapakkam,Chennai, Tamil Nadu, India
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Map */}

          <div>

            <h3 className="text-2xl font-bold mb-8">
              Find Us
            </h3>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3887.3405639948896!2d80.17249521553835!3d13.01397138129284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1767594083725!5m2!1sen!2sin"
              className="w-full h-72 rounded-3xl border-4 border-[#4A7C59]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-[#4A7C59] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-sm">
            © {year} Verdique. All Rights Reserved.
          </p>

          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Designed & Developed by
            <span className="text-[#7EC845] font-semibold">
              {" "}Tamilazhagan M
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;