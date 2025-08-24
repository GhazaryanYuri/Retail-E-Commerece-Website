// Importing dependecies
import { useState, useEffect } from "react";

// Importing icons
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Instagram from "../../assets/icons/instagram.svg";

interface Data {
  title: string;
  categories: {
    title: string;
    links: {
      name: string;
      url: string;
    }[];
  }[];
  contact: {
    title: string;
    streets: string[];
  };
}

// Footer Component
const Footer = () => {
  const [data, setData] = useState<Data | null>(null);

  const mediaLinks = [
    {
      icon: Facebook,
      url: "#",
    },
    {
      icon: Twitter,
      url: "#",
    },
    {
      icon: Instagram,
      url: "#",
    },
  ];

  const fetchingData = async () => {
    try {
      const resp = await fetch("/data/footer.json");
      const data: Data = await resp.json();

      setData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <footer className="w-full h-[304px] flex flex-col justify-center items-center bg-[#111010]">
      <div className="w-full h-auto flex justify-evenly items-center">
        <div className="w-auto min-h-[180px] flex flex-col justify-start items-start gap-12">
          <h1 className="text-[#f8f8f8] text-6xl font-bold">
            {data && data.title}
          </h1>
          <ul className="flex gap-3.75 justify-center items-center">
            {mediaLinks.map((item, index) => (
              <li key={index} className="hover:scale-145 transition-all">
                <a href={item.url}>
                  <img src={item.icon} alt={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        {data &&
          data.categories.map((item, index) => (
            <div
              key={index}
              className="w-auto h-[180px] flex flex-col justify-start items-start gap-5"
            >
              <h1 className="text-2xl text-white font-semibold">
                {item.title}
              </h1>
              <ul>
                {item.links.map((link, index) => (
                  <li key={index} className="hover:scale-90 transition-all">
                    <a
                      href={link.url}
                      className="text-[#a4a4a4] hover:opacity-60 transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        <div className="w-auto h-[180px] flex flex-col gap-5">
          <h1 className="text-2xl text-white font-semibold">
            {data && data.contact.title}
          </h1>
          <div>
            {data &&
              data.contact.streets.map((street, index) => (
                <p key={index} className="text-[#a4a4a4] cursor-default">
                  {street}
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center items-center">
        <p className="font-semibold text-[#a1a1a1] text-sm">
          Copyright &copy;{new Date().getFullYear()} | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
