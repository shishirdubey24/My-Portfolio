import NavBar from "./NavBar"

const Header = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4  text-white">
     
      <h1 className="text-sky-500 font-bold text-xl">Shishir.Dev</h1>

    
      <NavBar />
    </div>
  )
}

export default Header
