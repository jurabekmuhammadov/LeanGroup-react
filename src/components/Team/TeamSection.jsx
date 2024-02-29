import { Component } from "react";
import Card from "./Card";

import team1 from "../../assets/images/team-1.png";
import team2 from "../../assets/images/team-2.png";
import team3 from "../../assets/images/team-3.png";
import team4 from "../../assets/images/team-4.png";
import team5 from "../../assets/images/team-5.png";

import "./team.scss";
export class Team extends Component {
  render() {
    const members = [
      {
        id: "1",
        avatar: { src: team1 },
        name: "Войнич Дарья",
        position: "Заместитель директора по продажам",
        number: "+375 (17) 270-53-77 (317)",
        email: "v.darya@leangroup.by",
      },
      {
        id: "2",
        avatar: { src: team2 },
        name: "Мисько Екатерина",
        position: "Начальник отдела сопровождения",
        number: "+375 (17) 270-53-77 (115)",
        email: "k.melnichenko@leangroup.by",
      },
      {
        id: "3",
        avatar: { src: team3 },
        name: "Дмитроченко Дмитрий",
        position: "Начальник отдела допечатной подготовки",
        number: "+375 (17) 270-53-77 (333)",
        email: "dmitrochenko@leangroup.by",
      },
      {
        id: "4",
        avatar: { src: team4 },
        name: "Антух Евгений",
        position: "Начальник отдела снабжения",
        number: "+375 (17) 270-53-77 (148)",
        email: "j.antuh@leangroup.by",
      },
      {
        id: "5",
        avatar: { src: team5 },
        name: "Мисник Елена",
        position: "Специалист по работе с клиентами",
        number: "+375 (17) 270-53-77 (322)",
        email: "e.misnik@leangroup.by",
      },
    ];
    return (
      <section id="team">
        <div className={`team__container container`}>
          <h1>
            Наша <span>команда</span>
          </h1>
          <div className="team__cards">
            {members.map((card) => (
              <Card
                key={card.id}
                avatar={card.avatar.src}
                name={card.name}
                position={card.position}
                number={card.number}
                email={card.email}
              />
            ))}
          </div>
          <a className="team_btn" href="najottalim.uz">
            Наша команда
          </a>
        </div>
      </section>
    );
  }
}

export default Team;
