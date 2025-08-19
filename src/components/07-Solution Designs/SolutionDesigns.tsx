// Importing dependecies
import { useState, useEffect } from "react";
import Button from "../04-Button/Button";

// Importing images
import DesignImg1 from "../../assets/images/solution-designs-bg-1.png";
import DesignImg2 from "../../assets/images/solution-designs-bg-2.png";
import DesignImg3 from "../../assets/images/solution-designs-bg-3.png";
import DesignImg4 from "../../assets/images/solution-designs-bg-4.png";
import VideoPlayIcon from "../../assets/icons/video-play.svg";

interface Data {
  title: string;
  bio: string;
  content: {
    id: number;
    video: null | string;
  }[];
}

const SolutionDesigns = () => {
  const [data, setData] = useState<Data | null>(null);
  const [activeIndex, setActiveIndex] = useState(0); // 👈 default first item

  const images: { [key: number]: string } = {
    1: DesignImg1,
    2: DesignImg2,
    3: DesignImg3,
    4: DesignImg4,
  };

  const fetchingData = async () => {
    try {
      const resp = await fetch("/data/solution_designs.json");
      if (!resp.ok) throw new Error("Failed to fetch");
      const json: Data = await resp.json();
      setData(json);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <section className="w-full h-auto py-14 flex justify-around items-center">
      {/* Left Side */}
      <div className="w-[40%] flex flex-col justify-center items-start">
        <h1 className="text-5xl text-[#111010] font-bold">{data.title}</h1>
        <p className="text-xl text-[#616161] mt-[30px] mb-[50px]">{data.bio}</p>

        <div className="flex gap-4 mb-[40px]">
          {data.content
            .filter((_, index) => index !== activeIndex) // 👈 exclude active item
            .map((item) => (
              <img
                key={item.id}
                src={images[item.id]}
                alt={`content-${item.id}`}
                className="w-[257px] h-[325px] cursor-pointer hover:scale-105 transition-all"
                onClick={() => {
                  const realIndex = data.content.findIndex(
                    (c) => c.id === item.id
                  );
                  setActiveIndex(realIndex);
                }}
              />
            ))}
        </div>

        <Button innerText="Read More" bg="#111010" color="#ffffff" />
      </div>

      {/* Right Side - Active item */}
      <div className="w-auto relative">
        {data.content[activeIndex] && (
          <img
            src={images[data.content[activeIndex].id]}
            alt={String(data.content[activeIndex].id)}
            className=" w-[454px] h-[726px]"
          />
        )}

        <div className="w-[226px] h-[110px] bg-white flex justify-center items-center gap-5 absolute bottom-0 right-0 overflow-hidden">
          <button className="w-15 h-15 bg-[#111010] flex justify-center items-center rounded-full cursor-pointer hover:scale-90 transition-all">
            <img src={VideoPlayIcon} alt="Video Play Icon" />
          </button>
          <div className="flex flex-col gap-[6px]">
            <p className="text-[#898989] text-[18px]">Watch</p>
            <p className="text-[#111010] text-[18px]">Video-tour</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionDesigns;
