
const About = () => {
  return (
    <div id="home" className="relative ml-[30%] w-[60%] max-w-2xl  p-20 mt-40">


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
        {/* Contact Me Button */}
        <a
          href="mailto:your-email@example.com" 
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 12h-6l-3 9L9 3l-3 9H2" />
          </svg>
          Contact Me
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/your-github" // Replace with your GitHub link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-600 text-white font-semibold rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.61-3.36-1.34-3.36-1.34-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1.02.07 1.55 1.06 1.55 1.06.91 1.56 2.39 1.11 2.98.85.09-.66.36-1.11.65-1.37-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.61 9.61 0 0112 6.8c.85.004 1.7.115 2.5.34 1.9-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.41.1 2.67.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.37.32.7.95.7 1.91v2.83c0 .26.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"
            />
          </svg>
          GitHub
        </a>
      </div>
  </div>
  )
}

export default About
