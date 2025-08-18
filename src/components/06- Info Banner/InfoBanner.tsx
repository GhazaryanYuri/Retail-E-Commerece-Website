// importing dependecies
import Button from "../04-Button/Button";

interface InfoBanner {
  img: string;
  title: string;
  bio: string;
  reversed?: boolean;
}

// InfoBanner component
const InfoBanner = ({ img, title, bio, reversed }: InfoBanner) => {
  return (
    <div className="w-full h-auto relative flex justify-center items-center">
      <img src={img} alt={img} className="w-3/4 h-[526px]" />
      <div
        className="w-[708px] h-[402px] bg-[#f7f7f7] absolute top-1/6 -translate-x-1/3 flex flex-col justify-evenly items-start pl-6 pr-8"
        style={{
          left: reversed ? "62%" : "20%",
        }}
      >
        <h1 className="font-bold text-[#111010] text-5xl">{title}</h1>
        <p className="text-[#616161]">{bio}</p>
        <Button innerText="Learn More" bg="#111010" color="white" />
      </div>
    </div>
  );
};

export default InfoBanner;
