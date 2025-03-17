import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importing icons

const About = () => {
  return (
    <div id="home" className="relative ml-[30%] w-[60%] max-w-2xl p-20 mt-40">
      {/* Image inside tilted box - positioned slightly lower */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-48 h-48 md:w-56 md:h-56 bg-gray-300 rounded-lg rotate-[-6deg] flex items-center justify-center shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-gray-600"
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

      <h1 className="text-xl font-bold text-gray-400 mb-2">Hello, I’m</h1>
      <h2 className="text-5xl font-bold text-black mt-1 animate-pop">
        Shishir Dubey
      </h2>
      <h3 className="text-2xl font-semibold text-gray-500 mt-2 p-3">
        Front-end Developer
      </h3>
      <p className="text-lg text-gray-700 mt-2 max-w-lg">
        I build responsive, user-friendly web applications with modern technologies.  
        Passionate about creating clean, efficient code and seamless user experiences.
      </p>

      {/* Buttons Container */}
      <div className="flex justify-center gap-6 mt-6 mr-46">
        {/* LinkedIn Button with Logo */}
        <a
          href="https://www.linkedin.com/in/shishir-dubey-9484a9333"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-700 text-white font-semibold rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        >
          <FaLinkedin className="text-xl" /> {/* LinkedIn Icon */}
          LinkedIn
        </a>

        {/* GitHub Button with Logo */}
        <a
          href="https://github.com/shishirdubey24"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-600 text-white font-semibold rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        >
          <FaGithub className="text-xl" /> {/* GitHub Icon */}
          GitHub
        </a>
      </div>
    </div>
  );
};

export default About;
