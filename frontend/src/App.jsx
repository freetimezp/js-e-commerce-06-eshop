import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white duration-200 transition-all
      overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
    </div>
  )
}

export default App
