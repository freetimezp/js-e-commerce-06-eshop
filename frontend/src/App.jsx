import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";

import headphone from "./assets/hero/headphone.png";
import smartwatch2 from "./assets/category/smartwatch2.png";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";

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

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Lorem inpsum dolor situ amet cosdekgle asdoelgd slero asda rgheo",
  bgColor: "#2dcc6f"
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
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
    </div>
  )
}

export default App;
