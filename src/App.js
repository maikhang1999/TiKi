import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider";
import HomeDeal from "./components/HomeDeal";
import Wipgets from "./components/Wipgets";
import Banner from "./components/Banner";
import CategoryProducts from "./components/CategoryProducts/CategoryProducts";
import SearchProduct from "./components/SearchProduct/index";
import Products from "./components/Products/index";
export default function App() {
  return (
    <div className="App" style={{ backgroundColor: "#efefef" }}>
      <Navbar />
      <Slider />
      <HomeDeal />
      <Wipgets />
      <Banner />
      <CategoryProducts />
      <SearchProduct />
      <Products />
    </div>
  );
}
