import { FaCode, FaToolbox, FaDatabase } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";

const Skill = () => {
  // Updated Button Styling (More Visibility, Sky Blue on Hover)
  const buttonClass =
    "px-4 py-2 rounded-lg border-2 border-gray-500  font-semibold " +
    "transition duration-300 transform hover:scale-105 hover:bg-gray-600 hover:text-white " +
    "hover: shadow-md";

  return (
       
      
      <div id="project" className="font-medium p-6 mt-70"> 
      <h1 className="text-2xl font-bold text-center mb-6">My Skills</h1>
   
    <div id="skill" className=" mt-40   font-medium flex space-x-10 flex-wrap justify-center p-6 bg-gray-50 rounded-lg shadow-md">
      
      {/* Programming Languages */}
      <div className="p-4 rounded-lg shadow-md w-64">
        <h1 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <FaCode className="text-blue-500" /> Programming Languages
        </h1>
        <div className="grid grid-cols-2 gap-3">
          <button className={buttonClass}>C</button>
          <button className={buttonClass}>C++</button>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <button className={buttonClass}>Java</button>
          <button className={buttonClass}>JavaScript</button>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <button className={buttonClass}>HTML</button>
          <button className={buttonClass}>CSS</button>
        </div>
      </div>

      {/* Libraries & Frameworks */}
      <div className="p-4 rounded-lg shadow-md w-64">
        <h1 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <RiReactjsLine className="text-blue-500" /> Libraries & Frameworks
        </h1>
        <div className="grid grid-cols-2 gap-3">
          <button className={buttonClass}>Bootstrap</button>
          <button className={buttonClass}>Tailwind CSS</button>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <button className={buttonClass}>React</button>
          <button className={buttonClass}>Redux</button>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <button className={buttonClass}>Router</button>
        </div>
      </div>

      {/* Tools & Platforms */}
      <div className="p-4 rounded-lg shadow-md w-64">
        <h1 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <FaToolbox className="text-blue-500" /> Tools & Platforms
        </h1>
        <div className="grid grid-cols-2 gap-3">
          <button className={buttonClass}>Git</button>
          <button className={buttonClass}>GitHub</button>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <button className={buttonClass}>Appwrite</button>
          <button className={buttonClass}>Firebase</button>
        </div>
      </div>

      {/* Database */}
      <div className="p-4 rounded-lg shadow-md w-64">
        <h1 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <FaDatabase className="text-blue-500" /> Database
        </h1>
        <div className="grid grid-cols-2 gap-3">
          <button className={buttonClass}>MySQL</button>
          <button className={buttonClass}>MongoDB</button>
        </div>
      </div>

    </div>
  
   </div>
  );
};

export default Skill;
