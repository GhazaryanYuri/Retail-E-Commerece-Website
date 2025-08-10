// Importing dependecies
import Navbar from "../02-Navber/Navbar";

// Header component
const Header = () => {
  return (
    <div className="w-full h-auto flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-center pt-6 text-[#333333]">
        Logo
      </h1>
      <Navbar />
    </div>
  );
};

export default Header;
