import { Link } from "react-scroll";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "home" }, // About is part of home section
    { name: "Skill", to: "skill" },
    { name: "Project", to: "project" },
    { name: "Education", to: "education" },
    { name: "Certifications", to: "certifications" }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {links.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            smooth={false}
            duration={0}
            offset={-80}
            spy={true}
            activeClass="text-white"
            className="font-medium text-gray-100 hover:text-white transition-colors duration-300 relative group cursor-pointer py-2"
          >
            {item.name}
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-100 hover:text-white transition-colors"
      >
        {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 backdrop-blur-md border-t border-gray-600 shadow-lg md:hidden" style={{ backgroundColor: 'rgba(24, 31, 40, 0.95)' }}>
          <nav className="flex flex-col py-4">
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={false}
                duration={0}
                offset={-80}
                spy={true}
                activeClass="text-white border-l-2 border-white"
                onClick={() => setIsOpen(false)}
                className="font-medium text-gray-100 hover:text-white hover:border-l-2 hover:border-gray-400 transition-all duration-300 cursor-pointer px-6 py-3"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;
