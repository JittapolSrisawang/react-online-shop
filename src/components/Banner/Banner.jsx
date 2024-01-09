import BannerImg from "../../assets/Banners/woman2.jpg";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* Detail Section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Summer Sale upto 50% Off
            </h1>
            <p  data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              laborum modi, eius at debitis ducimus mollitia, quas libero, omnis
              eaque repudiandae. Ullam quam impedit non laudantium quis vitae
              deleniti deserunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
