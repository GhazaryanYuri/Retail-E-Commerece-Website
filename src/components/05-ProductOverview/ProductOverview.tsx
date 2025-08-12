interface ComponentInfo {
  title: string;
  description: string;
}

interface ProductOverviewProps {
  item: {
    img: string;
    title: string;
    bio: string;
    id: number;
  }[];
}

interface Props {
  componentInfo: ComponentInfo;
  productInfo: ProductOverviewProps;
}

const ProductOverview = ({ componentInfo, productInfo }: Props) => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center gap-7 mt-12 px-4">
      <h1 className="text-5xl font-bold text-[#111010]">
        {componentInfo.title}
      </h1>
      <hr className="w-36 h-1.5 bg-[#C4C4C4] border-none" />
      <p className="text-center text-[#616161] text-xl max-w-4xl px-6">
        {componentInfo.description}
      </p>

      <div className="grid grid-cols-6 gap-4 w-full max-h-[568px]">
        {/* Left big image */}
        {productInfo.item[0] && (
          <div className="col-span-2 relative group">
            <img
              src={productInfo.item[0].img}
              alt={productInfo.item[0].title}
              className="w-full h-full object-cover rounded"
            />
            <div className="w-[90%] border-2 border-white border-b-0 absolute bottom-[-3%] left-[50%] translate-x-[-50%] bg-[#111010] text-center">
              <h3 className="font-bold text-2xl text-white">
                {productInfo.item[0].title}
              </h3>
              <p className="text-base text-[#b4b4b4]">
                {productInfo.item[0].bio}
              </p>
            </div>
          </div>
        )}

        {/* Middle tall image */}
        {productInfo.item[1] && (
          <div className="col-span-2 relative group">
            <img
              src={productInfo.item[1].img}
              alt={productInfo.item[1].title}
              className="w-full h-full object-cover rounded"
            />
            <div className="w-[90%] border-2 border-white border-b-0 absolute bottom-[-3%] left-[50%] translate-x-[-50%] bg-[#111010] text-center">
              <h3 className="font-bold text-white text-2xl">
                {productInfo.item[1].title}
              </h3>
              <p className="text-base text-[#b4b4b4]">
                {productInfo.item[1].bio}
              </p>
            </div>
          </div>
        )}

        {/* Right side stacked images */}
        <div className="col-span-2 flex flex-col gap-4">
          {productInfo.item[2] && (
            <div className="relative group flex-1">
              <img
                src={productInfo.item[2].img}
                alt={productInfo.item[2].title}
                className="w-full h-full object-cover rounded"
              />
              <div className="w-[90%] border-2 border-white border-b-0 absolute bottom-[-3%] left-[50%] translate-x-[-50%] bg-[#111010] text-center">
                <h3 className="font-bold text-2xl text-white">
                  {productInfo.item[2].title}
                </h3>
                <p className="text-base text-[#b4b4b4]">
                  {productInfo.item[2].bio}
                </p>
              </div>
            </div>
          )}
          {productInfo.item[3] && (
            <div className="relative group flex-1">
              <img
                src={productInfo.item[3].img}
                alt={productInfo.item[3].title}
                className="w-full h-full object-cover rounded"
              />
              <div className="w-[90%] border-2 border-white border-b-0 absolute bottom-[-3%] left-[50%] translate-x-[-50%] bg-[#111010] text-center">
                <h3 className="font-bold text-2xl text-white">
                  {productInfo.item[3].title}
                </h3>
                <p className="text-base text-[#b4b4b4]">
                  {productInfo.item[3].bio}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
