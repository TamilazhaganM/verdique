import homebg from "./../assets/home.jpg";
const Home = () => {
  return (
    <div>
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

          <p className="md:w-1/2 text-lg font-semibold">
            “We design and build sustainable landscapes that bring nature closer
            to your everyday life.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
