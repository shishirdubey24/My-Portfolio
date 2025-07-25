import NavBar from "./NavBar";

const Header = () => {
  return (
    <header 
      className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-600"
      style={{ backgroundColor: 'rgba(24, 31, 40, 0.9)' }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
            Shishir
            <span className="text-gray-300">.Dev</span>
          </h1>
        </div>

        {/* Navigation */}
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
