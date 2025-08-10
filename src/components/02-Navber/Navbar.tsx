// Importing dependecies
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Importing icons
import CartIcon from "../../assets/icons/cart.svg";
import HearthIcon from "../../assets/icons/hearth.svg";
import UserIcon from "../../assets/icons/user.svg";

interface NavbarLinks {
  text: string;
  url: string;
}

// Navbar component
const Navbar = () => {
  const [navbarLinks, setNavbarLinks] = useState<NavbarLinks[]>([]);
  const location = useLocation();

  const iconsArray = [
    { icon: CartIcon, url: "#" },
    { icon: HearthIcon, url: "#" },
    { icon: UserIcon, url: "#" },
  ];

  async function fetchingNavbarData() {
    try {
      const resp = await fetch("/data/navbar.json");
      const data = await resp.json();

      if (Array.isArray(data)) {
        setNavbarLinks(data);
      } else {
        console.log("Navbar data format invalid");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    fetchingNavbarData();
  }, []);

  useEffect(() => {
    localStorage.setItem("currentLocation", location.pathname);
  }, [location.pathname]);

  const currentPath =
    location.pathname && location.pathname !== "/"
      ? location.pathname
      : "/home";

  return (
    <div className="w-full h-auto flex justify-around items-center mt-8">
      <input
        type="search"
        placeholder="Search product..."
        className="border-2 p-1.5 text-base rounded-[6px] border-[#0A0A0A] focus:outline-none"
      />

      <ul className="flex gap-12.5">
        {navbarLinks &&
          navbarLinks.map((link, index) => {
            const isActive = currentPath === link.url;
            return (
              <li key={index}>
                <Link
                  to={link.url}
                  className={`cursor-pointer text-base font-bold transition-all hover:text-[#979797] ${
                    isActive ? "text-[#979797]" : "text-[#0A0A0A]"
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
      </ul>

      <ul className="flex gap-6">
        {iconsArray &&
          iconsArray.map((icon, index) => (
            <li key={index}>
              <a href={icon.url}>
                <img
                  src={icon.icon}
                  alt={icon.url}
                  className="hover:scale-125 transition-all"
                />
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Navbar;
