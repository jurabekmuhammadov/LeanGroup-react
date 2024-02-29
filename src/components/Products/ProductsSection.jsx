import { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import tab1 from "../../assets/images/tab-1.png";
import tab2 from "../../assets/images/tab-2.png";
import tab3 from "../../assets/images/tab-3.png";
import tab4 from "../../assets/images/tab-4.png";
import tab5 from "../../assets/images/tab-5.png";
import name from "../../assets/images/info-form-name.svg";
import tel from "../../assets/images/info-form-tel.svg";

import "./products.scss";
import "./tabs.scss";

export class Products extends Component {
  render() {
    return (
      <section id="products">
        <div className="container">
          <div className="products__container">
            <h1>
              Наша <span>продукция</span>
            </h1>
            <div className="tab__container">
              <Tabs>
                <TabList>
                  <Tab>Ламинатные тубы</Tab>
                  <Tab>Экструзионные тубы</Tab>
                  <Tab>Другая упаковка</Tab>
                </TabList>
                <TabPanel>
                  <img src={tab1} alt="" />
                  <img src={tab2} alt="" />
                  <img src={tab3} alt="" />
                  <img src={tab4} alt="" />
                  <img src={tab5} alt="" />
                </TabPanel>
                <TabPanel>
                  <img src={tab5} alt="" />
                  <img src={tab2} alt="" />
                  <img src={tab1} alt="" />
                  <img src={tab3} alt="" />
                  <img src={tab4} alt="" />
                </TabPanel>
                <TabPanel>
                  <img src={tab3} alt="" />
                  <img src={tab5} alt="" />
                  <img src={tab2} alt="" />
                  <img src={tab4} alt="" />
                  <img src={tab1} alt="" />
                </TabPanel>
              </Tabs>
            </div>
            <a href="#catalog" className="btn">
              Перейти в каталог
            </a>
          </div>
          <div className="info__container">
            <div className="content">
              <h1>
                Получить подробную <span>информацию</span>
              </h1>
              <p>
                Просто заполните форму, наш менеджер свяжется с вами в ближайшее
                время
              </p>
              <form>
                <div className="name">
                  <label htmlFor="name">
                    <img src={name} alt="" />
                  </label>
                  <input
                    type="text"
                    required
                    id="name"
                    placeholder="Ваше имя"
                  />
                </div>
                <div className="tel">
                  <label htmlFor="tel">
                    <img src={tel} alt="" />
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="+375 (29) 0000000"
                    id="tel"
                  />
                </div>
                <textarea
                  name="comment"
                  id="comment"
                  cols="30"
                  rows="5"
                  placeholder="Комментарий"
                ></textarea>
                <button type="submit" className="form_btn">
                  Получить информацию
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
