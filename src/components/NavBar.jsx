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
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="text-brand-primary"
            className="font-medium text-slate-400 hover:text-brand-primary transition-colors duration-300 relative group cursor-pointer py-2 text-sm uppercase tracking-wider"
          >
            {item.name}
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-slate-300 hover:text-brand-primary transition-colors"
      >
        {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 backdrop-blur-xl border-b border-brand-border shadow-xl md:hidden bg-brand-dark/95">
          <nav className="flex flex-col py-4">
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-brand-primary border-l-2 border-brand-primary bg-brand-primary/5"
                onClick={() => setIsOpen(false)}
                className="font-medium text-slate-300 hover:text-brand-primary hover:bg-brand-surface transition-all duration-300 cursor-pointer px-6 py-4 border-l-2 border-transparent"
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
