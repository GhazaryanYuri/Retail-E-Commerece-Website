// Importing dependecies
import Banner from "../../components/03-Banner/Banner";
import ProductOverview from "../../components/05-ProductOverview/ProductOverview";
import InfoBanner from "../../components/06- Info Banner/InfoBanner";
import SolutionDesigns from "../../components/07-Solution Designs/SolutionDesigns";
import Projects from "../../components/08-Projects/Projects";
import Products from "../../components/09-Products/Products";

// Importing images
import BathromTilesBg from "../../assets/images/bathroom-tiles-bg.png";
import MarbleBg from "../../assets/images/marble-bg.png";
import OutdoorFlooringBg from "../../assets/images/outdoor-flooring-bg.png";
import KitchenInteriorBg from "../../assets/images/kitchen-interior-bg.png";
import InfoBannerBg1 from "../../assets/images/info-banner-bg-1.png";
import InfoBannerBg2 from "../../assets/images/info-banner-bg-2.png";

// Home page
const Home = () => {
  return (
    <div className="w-full h-auto mt-8.25 mb-8.25 flex flex-col justify-center items-center">
      <Banner />
      <ProductOverview
        componentInfo={{
          title: "Products",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro non adipisci accusantium facilis, quidem excepturi quam beatae, tempora, quod pariatur ex amet.",
        }}
        productInfo={{
          item: [
            {
              img: BathromTilesBg,
              title: "Bathroom Tiles",
              bio: "Ante mus blandit sapien sociosqu per consequat ad.",
              id: 0,
            },
            {
              img: MarbleBg,
              title: "Marble",
              bio: "Ante mus blandit sapien sociosqu",
              id: 1,
            },
            {
              img: OutdoorFlooringBg,
              title: "Outdoor Flooring",
              bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, fuga.",
              id: 2,
            },
            {
              img: KitchenInteriorBg,
              title: "Kitchen Interior",
              bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, fuga.",
              id: 3,
            },
          ],
        }}
      />
      <InfoBanner
        img={InfoBannerBg1}
        title="Vision"
        bio="Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo."
      />
      <SolutionDesigns />
      <Projects />
      <Products />
      <InfoBanner
        img={InfoBannerBg2}
        title="Our Showrooms"
        bio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        reversed={true}
      />
    </div>
  );
};

export default Home;
