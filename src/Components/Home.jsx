import { Link } from "react-router-dom";
import homebg from "./../assets/home.jpg";
import Offer from "./Offer";
import Projects from "./Projects";
import Services from "./Services";
import Welcomebar from "./Welcomebar";
import { HashLink } from "react-router-hash-link";
const Home = () => {

  return (
    <div >
    <Welcomebar/>
      <div
        className="relative bg-cover bg-center h-screen text-white"
        style={{ backgroundImage: `url(${homebg})` }}
      >
        <div className="absolute  rounded-sm bg-black/50"></div>

        <div className="relative z-10 flex flex-col justify-center items-center w-11/12 mx-auto text-center h-full md:w-3/4">
          <h3 className="text-5xl md:text-4xl font-extrabold leading-15 shadow-2xl ">
            GREEN LIVING{" "}
            <span className="inline-flex overflow-hidden">
              {"STARTS HERE".split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-letter"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </h3>

          <p id="services" className="md:w-1/2 text-lg font-semibold">
            “We design and build sustainable landscapes that bring nature closer
            to your everyday life.”
          </p>
        </div>
      </div>
      <HashLink smooth to="/#home"><button className="fixed bottom-2 right-2 bg-green-500 text-2xl p-3 rounded-4xl z-10 cursor-pointer"><i className="fa-solid fa-arrow-up"></i></button></HashLink>
      <Services/>
      <Offer />
      <Projects />
    </div>
  );
};

export default Home;
