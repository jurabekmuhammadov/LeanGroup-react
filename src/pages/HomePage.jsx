import { Component, Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero/HeroSection";
import AboutSection from "../components/About/AboutSection";
import CertificatesSection from "../components/Certificates/CertificatesSection";
import ProductsSection from "../components/Products/ProductsSection";
import TeamSection from "../components/Team/TeamSection";
import News from "../components/News/News";
import Footer from "../components/Footer/Footer";
import Backtop from "../components/Backtop/Backtop";
import { BackTop, Button } from "uiw";

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <HeroSection />
        <AboutSection />
        <CertificatesSection />
        <ProductsSection />
        <TeamSection />
        <News />
        <Footer />
        <BackTop fixed={true} step={100} clickable={false} speed={20}>
          {({ scrollToTop }) => (
            <Button onClick={() => scrollToTop()}>
              <Backtop />
            </Button>
          )}
        </BackTop>
      </Fragment>
    );
  }
}

export default HomePage;
