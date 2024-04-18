import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/footer-pattern.jpg";

import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "ข้อมูลเพิ่มเติม",
    link: "/",
  },
  {
    title: "ที่ตั้งสาขา",
    link: "/",
  },
  {
    title: "ร่วมงานกับเรา",
    link: "/",
  },
  {
    title: "ข่าวสาร",
    link: "/",
  },
];

const FooterLinks2 = [
  {
    title: "คำถามที่พบบ่อย",
    link: "/",
  },
  {
    title: "การคืนสินค้า",
    link: "/",
  },
  {
    title: "นโยบายความเป็นส่วนตัว",
    link: "/",
  },
  {
    title: "การเข้าใช้บริการเว็บไซต์",
    link: "/",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white mt-20">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Company Logo */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              <a href="/">Online Shop</a>
            </h1>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  เกี่ยวกับเรา
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  ช่วยเหลือ
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks2.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="text-3xl" />
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTiktok className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>กรุงเทพ, ประเทศไทย</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>081-2345678</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
