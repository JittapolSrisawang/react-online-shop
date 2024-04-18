/* eslint-disable react/jsx-key */
import Img1 from "../../assets/Shirts/shirt1.jpg";
import Img2 from "../../assets/Shirts/shirt2.jpg";
import Img3 from "../../assets/Shirts/shirt3.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "เสื้อเชิ้ต ผู้หญิง",
    description: "เสื้อเชิ้ต แขนยาว สีเหลือง สำหรับผู้หญิง",
  },
  {
    id: 2,
    img: Img2,
    title: "เสื้อเชิ้ต ผู้ชาย",
    description: "เสื้อเชิ้ต แขนยาว สีแดง สำหรับผู้ชาย",
  },
  {
    id: 3,
    img: Img3,
    title: "เสื้อเชิ้ต เด็กผู้ชาย",
    description: "เสื้อเชิ้ต แขนสั้น สีฟ้า สำหรับเด็กผู้ชาย",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className="container" id="bestseller">
        {/* Header Section */}
        <div className="text-left mb-24">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            สินค้าขายดี
          </h1>
        </div>
        {/* Body Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white hover:bg-black/80 hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* Image Section   */}
              <div className="h-[50px] mt-8">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* Detial Section */}
              <div className="p-4 text-center">
                {/* Star Rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
                  เพิ่มลงรถเข็น
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TopProducts;
