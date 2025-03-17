import { Link } from "react-scroll";
const NavBar = () => {
  const links = ["Home", "About", "Skill", "Project",  "Education","Certifications"];

  return (
    <div className="flex space-x-6">
      {links.map((item) => (
        <Link
          key={item}
          to={item.toLowerCase()} // Matches section id
          smooth={true} // Enables smooth scrolling
          duration={500} // Duration of scrolling animation
          className="font-bold text-sky-400 hover:text-sky-600 transition-colors duration-300 relative group cursor-pointer"
        >
          {item}
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
