import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importing icons

const About = () => {
  return (
    <div
      id="home"
      className="relative mx-auto w-[90%] sm:w-[80%] md:w-[60%] max-w-2xl p-10 sm:p-16 md:p-20 mt-20 sm:mt-32"
    >
      {/* Image inside tilted box - positioned slightly lower */}
      <div className="absolute top-[-80px] sm:top-[-120px] left-1/2 -translate-x-1/2 w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gray-300 rounded-lg rotate-[-6deg] flex items-center justify-center shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 sm:w-16 sm:h-16 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 18l6-6-6-6M8 6L2 12l6 6" />
        </svg>
      </div>

      <h1 className="text-lg sm:text-xl font-bold text-gray-400 mb-2 text-center sm:text-left">
        Hello, I’m
      </h1>
      <h2 className="text-3xl sm:text-5xl font-bold text-black mt-1 animate-pop text-center sm:text-left">
        Shishir Dubey
      </h2>
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-500 mt-2 p-2 sm:p-3 text-center sm:text-left">
        Front-end Developer
      </h3>
      <p className="text-md sm:text-lg text-gray-700 mt-2 max-w-lg text-center sm:text-left mx-auto sm:mx-0">
        I build responsive, user-friendly web applications with modern technologies.  
        Passionate about creating clean, efficient code and seamless user experiences.
      </p>

      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4 sm:gap-6 mt-6">
        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/shishir-dubey-9484a9333"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-700 text-white font-semibold rounded-lg shadow-md transition-transform duration-300 hover:scale-105 w-[80%] sm:w-auto text-center justify-center"
        >
          <FaLinkedin className="text-xl" /> LinkedIn
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/shishirdubey24"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-600 text-white font-semibold rounded-lg shadow-md transition-transform duration-300 hover:scale-105 w-[80%] sm:w-auto text-center justify-center"
        >
          <FaGithub className="text-xl" /> GitHub
        </a>
      </div>
    </div>
  );
};

export default About;
