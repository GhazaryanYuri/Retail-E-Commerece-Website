// Importing dependecies
import HeaderBannerBg from "../../assets/images/header-banner-bg.png";
import Button from "../04-Button/Button";

// Banner component
const Banner = () => {
  return (
    <div className="w-full h-auto relative z-0">
      <img
        src={HeaderBannerBg}
        alt="Header Banner Bg"
        className="absolute top-0 left-0 w-full h-[526px]"
      />

      <div className="w-[726px] h-[402px] z-50 absolute bg-black/34 backdrop-blur-[4px] flex flex-col justify-around items-start px-4 left-[50%] top-16 rounded-md">
        <h1 className="text-5xl text-white font-bold">
          New Generation Ceramic Tile
        </h1>
        <p className="text-xl text-white">
          Penatibus sem vitae mollis luctus mi tellus, Maximus eu eleifend
          aptent dapibus metus maecenas consequat. Elementum interdum a semper.
          Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis
          sit aliquet at. Magna nam platea justo.
        </p>

        <Button innerText="Learn More" />
      </div>
    </div>
  );
};

export default Banner;
