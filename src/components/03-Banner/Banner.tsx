// Importing dependecies
import HeaderBannerBg from "../../assets/images/header-banner-bg.png";
import Button from "../04-Button/Button";

// Banner component
const Banner = () => {
  return (
    <div
      className="w-full h-[75vh] relative block bg-no-repeat bg-cover bg-left-top"
      style={{
        backgroundImage: `url(${HeaderBannerBg})`,
      }}
    >
      <div className="w-[580px] h-[302px] z-50 absolute bg-black/34 backdrop-blur-[4px] flex flex-col justify-around items-start px-4 left-[58%] top-24 rounded-md">
        <h1 className="text-4xl text-white font-bold">
          New Generation Ceramic Tile
        </h1>
        <p className="text-[18px] text-white">
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
