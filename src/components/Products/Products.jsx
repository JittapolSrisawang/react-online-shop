/* eslint-disable react/jsx-key */
import Img1 from "../../assets/Products/Product1.jpg";
import Img2 from "../../assets/Products/Product2.jpg";
import Img3 from "../../assets/Products/Product3.jpg";
import Img4 from "../../assets/Products/Product4.jpg";
import Img5 from "../../assets/Products/Product5.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Product Name 1",
    rating: 5.0,
    color: "Color 1",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Product Name 2",
    rating: 4.5,
    color: "Color 2",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Product Name 3",
    rating: 4.7,
    color: "Color 3",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Product Name 4",
    rating: 4.4,
    color: "Color 4",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Product Name 5",
    rating: 4.5,
    color: "Color 5",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for you</p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Best Selling</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo eius
            magnam recusandae
          </p>
        </div>
        {/* Body Saction */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
