// Importing dependencies
import { useState, useEffect } from "react";
import Button from "../04-Button/Button";

// Importing images
import ProductImg1 from "../../assets/images/products-img-1.png";
import ProductImg2 from "../../assets/images/products-img-2.png";
import ProductImg3 from "../../assets/images/products-img-3.png";
import ProductImg4 from "../../assets/images/products-img-4.png";
import ProductImg5 from "../../assets/images/products-img-5.png";
import ProductImg6 from "../../assets/images/products-img-6.png";
import ProductImg7 from "../../assets/images/products-img-7.png";
import ProductImg8 from "../../assets/images/products-img-8.png";

interface Data {
  title: string;
  bio: string;
  products: {
    id: number;
    name: string;
    oldPrice: number;
    newPrice: number;
  }[];
}

const Products = () => {
  const [data, setData] = useState<Data | null>(null);

  const Images: { [keys: number]: string } = {
    1: ProductImg1,
    2: ProductImg2,
    3: ProductImg3,
    4: ProductImg4,
    5: ProductImg5,
    6: ProductImg6,
    7: ProductImg7,
    8: ProductImg8,
  };

  const fetchingData = async () => {
    try {
      const resp = await fetch("/data/products.json");
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
    <div className="w-full flex flex-col justify-center items-center gap-7 px-4 py-8">
      <h1 className="text-5xl font-bold text-[#111010]">
        {data && data.title}
      </h1>
      <hr className="w-36 h-1.5 bg-[#C4C4C4] border-none" />
      <p className="text-center text-[#616161] text-xl max-w-4xl px-6">
        {data && data.bio}
      </p>
      <div className="w-full h-auto flex justify-center items-center">
        <ul className="grid grid-cols-4 gap-7.5">
          {data &&
            data.products.map((product) => (
              <li
                key={product.id}
                className="w-[300px] h-auto bg-white flex flex-col justify-center items-center hover:scale-105 shadow-xl hover:shadow-2xl transition-all"
              >
                <img
                  src={Images[product.id]}
                  alt={`Image ${product.id}`}
                  className="w-full h-[300px] mb-11.5"
                />
                <h2 className="text-[#111010] text-[26px] font-semibold mb-4.5">
                  {product.name}
                </h2>
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="text-[#cacaca] text-xs line-through">
                    {product.oldPrice} USD
                  </span>
                  <span className="text-[#111010] opacity-50 font-semibold text-[18px]">
                    {product.newPrice} USD
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <Button innerText="More Products" bg="#111010" color="#ffffff" />
    </div>
  );
};

export default Products;
