// Importing dependecies
import { useState, useEffect } from "react";
import Button from "../04-Button/Button";

// Importing images
import ProjectBg1 from "../../assets/images/projects-bg-1.png";
import ProjectBg2 from "../../assets/images/projects-bg-2.png";
import ProjectBg3 from "../../assets/images/projects-bg-3.png";
import ProjectBg4 from "../../assets/images/projects-bg-4.png";

interface ProjectsData {
  title: string;
  bio: string;
  content: {
    id: number;
    title: string;
    info: string;
  }[];
}

const Projects = () => {
  const [data, setData] = useState<ProjectsData | null>(null);

  const images: { [keys: number]: string } = {
    1: ProjectBg1,
    2: ProjectBg2,
    3: ProjectBg3,
    4: ProjectBg4,
  };

  const fetchingData = async () => {
    try {
      const resp = await fetch("/data/projects.json");
      const data: ProjectsData = await resp.json();

      setData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-7 mt-12 px-4 py-15">
      <h1 className="text-5xl font-bold text-[#111010]">
        {data && data.title}
      </h1>
      <hr className="w-36 h-1.5 bg-[#C4C4C4] border-none" />
      <p className="text-center text-[#616161] text-xl max-w-4xl px-6">
        {data && data.bio}
      </p>
      <div className="w-full h-auto flex justify-center items-center">
        <ul className="w-auto h-auto flex justify-center items-center gap-8 text-center mb-12.5">
          {data &&
            data.content.map((item) => (
              <li
                key={item.id}
                className="hover:scale-105 transition-all cursor-pointer"
              >
                <img
                  src={images[item.id]}
                  alt={images[item.id]}
                  className="w-[300px] h-[300px] mb-8.5 rounded-xl"
                />
                <h3 className="text-[#111010] text-[26px] font-semibold mb-0.5">
                  {item.title}
                </h3>
                <p className="text-[#111010] text-base opacity-50 font-semibold mt-0.5">
                  {item.info}
                </p>
              </li>
            ))}
        </ul>
      </div>
      <Button innerText="View All" bg="#111010" color="#ffffff" />
    </div>
  );
};

export default Projects;
