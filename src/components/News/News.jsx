import { Component } from "react";
import news1 from "../../assets/images/news-1.png";
import news2 from "../../assets/images/news-2.png";
import news3 from "../../assets/images/news-3.png";
import NewsCard from "./NewCard";
import "./news.scss";

export class News extends Component {
  render() {
    const newsCards = [
      {
        id: "1",
        img: { src: news1 },
        date: "28.01.2022",
        content: "ЛеанГрупп серебряный призер EcoVadis!",
      },
      {
        id: "2",
        img: { src: news2 },
        date: "16.07.2021",
        content: "ЛеанГрупп серебряный призер EcoVadis!",
      },
      {
        id: "3",
        img: { src: news3 },
        date: "11.02.2023",
        content: "ЛеанГрупп серебряный призер EcoVadis!",
      },
    ];
    return (
      <section id="news">
        <div className={`news__container container`}>
          <h1>Новости</h1>
          <div className="news__cards">
            {newsCards.map((card) => (
              <NewsCard
                key={card.id}
                img={card.img.src}
                date={card.date}
                content={card.content}
              />
            ))}
          </div>
          <a href="najottalim.uz" className="news__btn">
            Все новости
          </a>
        </div>
      </section>
    );
  }
}

export default News;
