import NavBar from "./NavBar";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-xl border-b border-brand-border/60"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
    >
      <div className="w-full flex justify-between items-center px-8 md:px-16 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-white/10 group-hover:shadow-white/20 transition-all duration-300">
            S
          </div>
          <h1 className="text-xl font-bold text-slate-100 tracking-tight">
            Shishir
            <span className="text-brand-primary">.Dev</span>
          </h1>
        </div>

        {/* Navigation */}
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
