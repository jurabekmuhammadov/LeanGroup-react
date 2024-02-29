import { Component } from "react";
import Slider from "react-slick";
import social from "../../assets/images/social.svg";

import "./hero.scss";
import "./hero-carousel.scss";

// eslint-disable-next-line react-refresh/only-export-components
function SampleNextArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      id="hero-next-arrow"
      style={{ ...style }}
      onClick={onClick}
    />
  );
}
// eslint-disable-next-line react-refresh/only-export-components
function SamplePrevArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      id="hero-prev-arrow"
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      fade: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            arrows: false,
          },
        },
      ],
    };
    return (
      <section id="Hero" className="Hero">
        <Slider {...settings}>
          <section id="hero1" className="hero">
            <div className="heroBlock">
              <div className={`hero__container container`}>
                <div className="content">
                  <h4>LEANGROUP - тубы и этикетки</h4>
                  <h1>Ламинатные тубы</h1>
                  <p>
                    Используются для производства зубных паст. Широко
                    применяются в сегменте косметики, пищевой индустрии,
                    парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
                  </p>
                  <button>Каталог</button>
                </div>
              </div>
              <div className="social">
                <img src={social} alt="social" />
              </div>
            </div>
          </section>
          <section id="hero2" className="hero">
            <div className="heroBlock">
              <div className={`hero__container container`}>
                <div className="content">
                  <h4>LEANGROUP - тубы и этикетки</h4>
                  <h1>Другая упаковка </h1>
                  <p>
                    Широко используется в сегменте косметики, пищевой
                    промышленности, парафармацевтики, бытовой химии и DIY
                    (Do-it-Yourself).
                  </p>
                  <button>Каталог</button>
                </div>
              </div>
              <div className="social">
                <img src={social} alt="social" />
              </div>
            </div>
          </section>
          <section id="hero3" className="hero">
            <div className="heroBlock">
              <div className={`hero__container container`}>
                <div className="content">
                  <h4>LEANGROUP - тубы и этикетки</h4>
                  <h1>Экструзионные тубы </h1>
                  <p>
                    Экструзионные тубы используются для упаковки и продвижения
                    более дорогих продуктов, в основном в косметической
                    промышленности.
                  </p>
                  <button>Каталог</button>
                </div>
              </div>
              <div className="social">
                <img src={social} alt="social" />
              </div>
            </div>
          </section>
        </Slider>
      </section>
    );
  }
}
