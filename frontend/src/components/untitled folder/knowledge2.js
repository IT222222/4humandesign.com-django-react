import React from "react";
import {
  Button,
  Row,
  Col,
  ListGroup,
  Container,
  Card,
  Form,
} from "react-bootstrap";
import Img221 from "../images/img_2.png";
import WebImg from "../images/about-img.png";
import Img4 from "../images/img_4.png";
import Img2 from "../images/img_2.png";
import Imgabout45 from "../images/img_5.png";
import Img22 from "../images/imgage.png";
import Img33 from "../images/image331.png";
import { Link } from 'react-router-dom';

const Landing2 = () => {
  return (
    <>
      <div className="landing-bg home-text">
        <div className="text-center">
          <h4 className="pt-4">Връзки и Лични отношения</h4>
        </div>
        <Container>
          <div className="d-flex justify-content-center">
            <div className="img__know">
              <img src={Img221} />
            </div>
          </div>
          <div className="lorem-para">
            <Card.Link className="pl-4">
              {" "}
              <i class="fa fa-user" aria-hidden="true"></i>Лили Маркова
            </Card.Link>
            <Card.Link className="pl-5">
              {" "}
              <i class="fa fa-clock-o" aria-hidden="true"></i>10.07.2020г.
            </Card.Link>
            <p className="pt-4 pb-0 pl-4 pr-4">
              Един от най-важните аспекти в живота ни е този, който отговаря за личните ни отношения и връзки. Ние влизаме в контакт с много хора в живота си и голяма част от тях оставят траен отпечатък в живота ни. Защо това е така? Връзката ни с всеки един човек е различна и като такава тя носи със себе си специфични характеристики. Тези качества на връзката определят местата, където ще се привличаме с партньора си както и тези, които ще ни разединяват. Често, там където има най-голямо привличане има и най-големи сблъсъци.
            </p>{" "}
            <p>
              Как да разберете какво би Ви донесло една връзка?
            </p>
            <p className="pt-0 pb-0 pl-4 pr-4">
              Местата, където остават недефинирани центрове във Вашата обща карта с партньора Ви са тези, които определят уроците Ви, но и причините за възможни конфликти. Допълващите Ви се портали както допринасят за голямо привличане така могат да доведат и до много непредвидени сблъсъци. Хармоничните Ви аспекти са благоприятни за едно добро приятелство и дружба. Може също да разберете и кои ще са местата на компромиси както и кой ще се налага да ги прави.
            </p>
          </div>
          <div className="text-center text-og">
            <p>
            Друга характеристика на личните отношения е и ролята, която всеки от Вас заема както в обществото, така и в дома. За всекиго е отреден много специфичен начин на взаимодействие и когато сте наясно с него, Вие ще можете да поддържате една много голяма лекота при свързването си с другия.
            </p>
          </div>
          <div className="lorem-para">
            {" "}
            <p className="pt-0 pb-0 pl-4 pr-4">
              Дали си подхождате с някого, Вие сами може да разберете с времето и натрупания опит. От друга страна, Хюман Дизайн Ви дава шанс да намерите най-правилният подход към всеки един човек в живота си и да смекчите съпротивлението до минимум. Когато познавате собствената си природа, Вие ще сте способни да дадете шанс и на другите да бъдат автентични и да живеят в хармония с Вас.
            </p>{" "}
            <p className="pt-0 pb-0 pl-4 pr-4">
              {" "}
              Каква е причината да не бъдете напълно автентични и да не използвате пълния си потенциал?
            </p>
            <p>
            Ние всички сме израснали в среда, в която сме наблюдавали конкретен тип отношения. Това искаме или не се е закодирало в нашето съзнание като правилен подход. В хюман дизайн това се нарича обуславяне. За да се отърсите от това свое обуславяне е необходимо първо да разберете себе си и после да започнете да следвате онези конкретни принципи, които важат точно за вас.
            </p>
            <p>
            Всички връзки в живота ни са кармични. Било то от предишни животи или дори от сегашна натрупана карма. Особено когато привличането е толкова силно, че може да бъде определено като фатално, става въпрос за много важни уроци, които е предначертано да научим.
            </p>
            <p>
            Изпълнена с любов и хармония или с много драма и болка, всяка една връзка Ви носи много ценна опитност, която душата Ви жадува. Бъдете отворени за уроците на съдбата и следвайте смело пътя на живота си!
            </p>
          </div>
        </Container>
        <div className="spacer20"></div>
      </div>
    </>
  );
};

export default Landing2;
