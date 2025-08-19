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
    <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center gap-7 mt-12 px-4 py-15">
      <h1 className="text-5xl font-bold text-[#111010]">
        {componentInfo.title}
      </h1>
      <hr className="w-36 h-1.5 bg-[#C4C4C4] border-none" />
      <p className="text-center text-[#616161] text-xl max-w-4xl px-6">
        {componentInfo.description}
      </p>

      <div className="w-full h-auto flex justify-center items-center gap-12">
        <div className="w-auto h-auto flex justify-center items-center gap-12">
          {productInfo.item[0] && (
            <div className="w-[575px] h-[618px] relative">
              <img
                src={productInfo.item[0].img}
                alt={productInfo.item[0].img}
              />
              <div className="w-[535px] h-[114px] absolute bottom-1 left-1/2 translate-x-[-50%] translate-y-1/5 bg-[#111010] gap-2.5 flex flex-col items-center justify-center border-4 border-white border-b-0">
                <h1 className="text-2xl text-white font-bold tracking-wider">
                  {productInfo.item[0].title}
                </h1>
                <p className="text-base text-[#b4b4b4] tracking-wide">
                  {productInfo.item[0].bio}
                </p>
              </div>
            </div>
          )}
          {productInfo.item[1] && (
            <div className="w-[339px] h-[618px] relative">
              <img
                src={productInfo.item[1].img}
                alt={productInfo.item[1].img}
              />
              <div className="w-[299px] h-[114px] absolute bottom-1 left-1/2 translate-x-[-50%] translate-y-1/5 bg-[#111010] gap-2.5 flex flex-col items-center justify-center border-4 border-white border-b-0">
                <h1 className="text-2xl text-white font-bold tracking-wider">
                  {productInfo.item[1].title}
                </h1>
                <p className="text-base text-[#b4b4b4] tracking-wide">
                  {productInfo.item[1].bio}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="w-auto h-auto flex flex-col justify-center items-center gap-12">
          {productInfo.item[2] && (
            <div className="w-[454px] h-[274px] relative">
              <img
                src={productInfo.item[2].img}
                alt={productInfo.item[2].img}
              />
              <div className="w-[415px] h-[114px] absolute bottom-1 left-1/2 translate-x-[-50%] translate-y-1/5 bg-[#111010] gap-2.5 flex flex-col items-center justify-center border-4 border-white border-b-0 text-center">
                <h1 className="text-2xl text-white font-bold tracking-wider">
                  {productInfo.item[2].title}
                </h1>
                <p className="text-base text-[#b4b4b4] tracking-wide">
                  {productInfo.item[2].bio}
                </p>
              </div>
            </div>
          )}
          {productInfo.item[3] && (
            <div className="w-[454px] h-[274px] relative">
              <img
                src={productInfo.item[3].img}
                alt={productInfo.item[3].img}
              />
              <div className="w-[415px] h-[114px] absolute bottom-1 left-1/2 translate-x-[-50%] translate-y-1/5 bg-[#111010] gap-2.5 flex flex-col items-center justify-center border-4 border-white border-b-0 text-center">
                <h1 className="text-2xl text-white font-bold tracking-wider">
                  {productInfo.item[3].title}
                </h1>
                <p className="text-base text-[#b4b4b4] tracking-wide">
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
