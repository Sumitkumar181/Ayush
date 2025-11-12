import NotiFication1 from '../HeroPage.jsx/NotiFication1'
import Navbar from "../HeroPage.jsx/Navbar";
import Search from "../HeroPage.jsx/Search";
import NavList from "../HeroPage.jsx/NavList";
import FeatureList from './FeatureList';
import FeatureProductCard from '../FeatureProductCard/FeatureProductCard';
import FeatureProductTab from '../FeatureProductCard/FeatureProductTab';
import BestSellerProduct from '../BestSellerCard/BestSellerProduct';
import PapularCompanies from '../BestSellerCard/PapularCompanies';
import Footer from "./Footer"


function Hero() {
    return (
      <>
        <NotiFication1 />
        <Navbar />
        <Search />
        <NavList />
        <FeatureList />
        <div className="mx-22 mt-7">
          <FeatureProductCard />
        </div>
        <div className="mx-22 mt-7">
          <FeatureProductTab />
        </div>
        <div className="mx-22 mt-7">
          <BestSellerProduct />
        </div>
        <div className="mx-22 mt-7">
          <PapularCompanies />
        </div>
        <div className="mx-22 mt-7">
          <Footer />
        </div>
      </>
    );
}

export default Hero;