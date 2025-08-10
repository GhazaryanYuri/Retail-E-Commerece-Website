// Importing dependecies
import { useEffect, useState } from "react";

interface NavbarLinks {
  text: string;
  url: string;
}

const Navbar = () => {
  const [navbarLinks, setNavbarLinks] = useState<NavbarLinks[]>([]);

  async function fetchingNavbarData() {
    try {
      const resp = await fetch("/data/navbar.json");
      const data = await resp.json();

      if (Array.isArray(data)) {
        setNavbarLinks(data);
      } else console.log("Navbar data format invalid");
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    fetchingNavbarData();
  }, []);

  return (
    <div>
      <input type="search" placeholder="Search product..." />

      <ul>
        {navbarLinks &&
          navbarLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Navbar;
