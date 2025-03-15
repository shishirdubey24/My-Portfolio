const NavBar = () => {
    const links = ["Home", "About", "Skill", "Project", "Contact", "Education"];
  
    return (
      <div className="flex space-x-6">
        {links.map((item) => (
          <a
            key={item}
            href="#"
            className="font-bold text-sky-400 hover:text-sky-600 transition-colors duration-300 relative group"
          >
            {item}
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        ))}
      </div>
    );
  };
  
  export default NavBar;
  