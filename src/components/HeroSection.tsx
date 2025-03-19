import { FaLinkedin, FaGithub } from "react-icons/fa";

import Profile from "../assets/profile.jpeg";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}

      <header className="flex flex-col md:flex-row md:gap-12 items-center justify-center text-center p-10 container">
        <img
          src={Profile}
          alt="Profile"
          className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-56 lg:h-56 xl:w-80 xl:h-80 rounded-full border-4 object-cover  border-gray-500"
        />
        <div>
          <h1 className="text-4xl font-bold mt-4 text-gray-100">I'm Paresh Metaliya</h1>
          <p className="text-xl text-gray-400">MERN Stack Developer</p>
          <div className="flex justify-center gap-4 m-6">
            <a
              href="https://www.linkedin.com/in/PareshMetaliya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl text-blue-400 hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/PareshMetaliya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl text-gray-200 hover:scale-110 transition-transform" />
            </a>
          </div>
          <div>
            <button
              onClick={() => window.open("/portfolio/assets/PARESH.pdf","_blank")}
              className="text-blue-400 font-bold px-4 py-2 border-2 rounded-xl border-blue-400 w-36"
            >
              Get Resume
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeroSection;
