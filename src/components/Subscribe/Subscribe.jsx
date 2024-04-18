import Banner from "../../assets/Banner.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-gray-100 text-white mb-20"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            รับการแจ้งเตือนเมื่อมีสินค้าใหม่
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="ใส่อีเมลของคุณ"
            className="w-full p-3"
          />
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
