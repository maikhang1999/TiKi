import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider";
import HomeDeal from "./components/HomeDeal";
import Wipgets from "./components/Wipgets";
import Banner from "./components/Banner";
import CategoryProducts from "./components/CategoryProducts/CategoryProducts";
import SearchProduct from "./components/SearchProduct/index";
import Products from "./components/Products/index";
import FooterTop from './components/Footer/FooterTop';
import ProductDetail from './components/ProductDetail/ProductDetail';
import React from "react";
export default function App() {
  return (
    
        <div className="App" style={{ backgroundColor: "#efefef" }}>
          <Router>
           <Navbar />
            <Switch>
              <Route exact path='/' 
              render={
                ()=>(
                  <React.Fragment>
                   
                    <Slider />
                    <HomeDeal />
                    <Wipgets />
                    <Banner />
                    <CategoryProducts />
                    <SearchProduct />
                    <Products />
                   
                  </React.Fragment>
                )
              }

              />
              <Route  path="/detail/:id" render={()=>(<ProductDetail/>)}/>
            </Switch>
            <FooterTop/>
          </Router>
        </div>
   
  );
}
