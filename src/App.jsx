import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import TopProducts from "./components/TopProducts/TopProducts";
import Footer from './components/Footer/Footer'
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  },[])

  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Footer />
    </div>
  );
};
export default App;
