import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Repair from "./components/Repair";
import Brands from "./components/Brands";
import Banner from "./components/Banner";
import Reviews from "./components/Reviews";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Categories />
      <Repair />
      <Brands />
      <Banner />
      <Reviews />
      <Visit />
      <Footer />
    </div>
  );
}
