import React from "react";
import { Button, Row, Col, ListGroup, Container, Card } from "react-bootstrap";
import AbtImg from "../images/Lilly1920-new.png";
import WebImg from "../images/about-img.png";
import Imgabout4 from "../images/img_4.png";
import Imgabout44 from "../images/img_3.png";
import Imgabout45 from "../images/img_5.png";
import Img22 from "../images/imgage.png";
import Img33 from "../images/image331.png";
import Nav from "./common/nav";
const Landing = () => {
  return (
    <>
      <div className="landing-bg-gradiant">
        <div className="web-image">
          <Nav />
          <p className="pt-5 web-text">
            "Някога, за да ръководиш са били необходими мускули, но сега това означава да разбираш хората."
          </p>
        </div>
        <Container>
          <div className="lormipsum-text">
            <h3 className="text-center pt-5 pb-4 ">ЗА МЕН</h3>
            <p>
            След завършването на двете си бакалавърски степени започнах изучаването и на НЛП (Невро Лингвистично Програмиране). Докато се сертифицирах като НЛП експерт, Хюман Дизайн специализацията ми също не оставаше на по-заден план. Това което виждате пред вас сега е проект чакал своята реализация повече от година. Много съм горда, че всичко това вече е факт и мога да го споделя с вас.
            </p>
            <p>
              {" "}
              Хюман Дизайн е моя голяма страст. Запознах се с тази необятна материя в разгара на лятото през 2017 година. Една моя много близка приятелка ми представи тази система като закачка в наш разговор, за да ми покаже как си взаимодействаме с моя партньор. Това беше напълно достатъчно, за да се зароди много голям интерес в мен да търся и научавам повече. Не след дълго намерих и подходящия за мен курс, записах се и така започна моят път към изучаването.
            </p>
            <p>
            Тъй като съм индивидуалист по природа това да стигам сама до източника е много важно. Обичам книгите и това да мога сама да прочета и докосна смисъла зад всяка една дума. Това е и причината да продължа като самоук изследовател. Да намеря учител, който да може да задържи вниманието ми със смислено съдържание е много трудно, не само, защото съм типичен манифестиращ генератор, но и защото за мен е важно с много кратка формула човек да може да достигне до сърцевината ми и да предаде посланието си. Поради това книгите за мен са най-добрият приятел.
            </p>
            <p>
            Следящият ми най-добър приятел е практиката. Пречупването на знанието през призмата на ежедневието ми дава напълно реални примери, затова как едно нещо от хартия се прилага на практика. През целият ми период на изследване това, което истински затвърждава наученото в мен е наблюдението. Всеки ден виждам реални примери, затова как Хюман дизайн работи. Истинска магия е да виждам как моят живот и този на хората около мен се управлява от една сякаш магична механика. Също така колкото по-наясно съм с тази механика, толкова по-лесно ми е да се движа през живота с лекота и без съпротивление.
            </p>
          </div>
          <div className="spacer20"></div>
          <div className="web__img ">
            <Row>
              <Col className="d-flex justify-content-center">
                <img src={WebImg} />
              </Col>
            </Row>
            <div className="lormipsum-text pt-5">
              <p>
              Точно това искам да предам и на всички вас, мили приятели - лекота, с която да живеете напълно автентични и без съпротивление. Мисията, с която започвам това свое дело е да успея да събудя във вас дълбоко забравената ви мъдрост и осъзнатост. Вие носите цялото знание, което ви е необходимо, за да вземате решения, да разрешавате конфликти, да влизате във взаимоотношения, да работите, да се развивате, да сте успешни, удовлетворени и спокойни във всичко и с всички. На всеки от вас се случва да бъде объркан, да преминава през трудности или просто да е в търсене на повече яснота и разбиране. Точно поради тази причина, необятният свят около Вас винаги ще Ви предлага безкраен низ от възможности, които да са подходящи за Вас. Ако сега сте срещнали Хюман дизайн това е показателно, че точно тази система крие отговорите за вас. Дори и само от любопитство, отново ще намерите онова, което дори сами не знаете, че вие е нужно. Ще останете изненадани как дори и в случайността има безкрайно много закономерност заложена от самите Вас дни, години, дори много животи преди да се срещнете с дадените събития.</p>

              <p>Една моя лична история през призмата на Хюман Дизайн може да прочетете <a href="https://www.facebook.com/human2design/photos/a.2166750266706942/2976995099015784/?type=3&theater" target="_blank">тук</a>
              </p>
                        <div className="spacer20"></div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Landing;
