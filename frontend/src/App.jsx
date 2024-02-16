import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";

import headphone from "./assets/hero/headphone.png";
import Products from "./components/Products/Products";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem inpsum dolor situ amet cosdekgle asdoelgd slero asda rgheo",
  bgColor: "#f42c37"
};

function App() {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white duration-200 transition-all
      overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
    </div>
  )
}

export default App
