import { Container } from "../../GlobalStyle";
import Restoran from "../../assets/image/restoran.jpg";
import ImageLast from "/site-images/imagelast.jpg";
import { ForthPagePart, ForthPagePartContextLast } from "./styled";
import Birthday from "../../assets/image/birthday.jpg";
import Loghavazan from "../../assets/image/loghavazan.webp";
import { i } from "framer-motion/client";
export const ForthPage = () => {
  return (
    <ForthPagePart className="relative overflow-hidden">
      <Container>
        <div className="bg-[#fff] rounded-[180px] white-block">
          <h3
            style={{ marginTop: "55px" }}
            data-aos="fade-in"
            className="text-[32px] text-[var(--dark-color)]"
          >
            Դվին Ռեստորանային Համալիրի Տարածք
          </h3>
          <h1 data-aos="fade-in">10:30</h1>
          <div className="line h-[40px] bg-[var(--black)]"></div>
          <img src={Restoran} alt="Restoran" className="rounded-[170px]" />
          <a
            href="https://maps.app.goo.gl/uktYYRFPNm7mL8o1A"
            className="text-[var(--dark-color)] text-[30px] underline"
          >
            Քարտեզ
          </a>
          <div className="line h-[40px] bg-[var(--black)]"></div>
          <h3
            style={{ marginTop: "20px" }}
            data-aos="fade-in"
            className="text-[32px] text-[var(--dark-color)]"
          >
            L'Etoile Area
          </h3>
          <img src={Loghavazan} alt="" className="rounded-[170px]" />
          <h1 data-aos="fade-in">12:00</h1>
          <div className="line h-[40px] bg-[var(--black)]"></div>

          <h5
            className="h5h"
            data-aos="fade-in"
            style={{ marginBottom: "50px" }}
          >
            Ուղևորվում ենք Աշտարակ՝ տաքացվող լողավազանի շուրջ խորոված և այլ
            համովություններ ճաշակելու։ <br />
            Դե ինչ ծնունդ՝ առանց երաժշտության և համեղ տորթի։
          </h5>
          <img src={Birthday} alt="" className="rounded-[170px]" />
        </div>
        <ForthPagePartContextLast>
          <h3
            data-aos="fade-in"
            className="text-[32px] text-[var(--dark-color)]"
            style={{ marginTop: "20px" }}
          >
            Խնդրում ենք ուրախացնել մեզ և հաստատել Ձեր մասնակցությունը ❤️
          </h3>
          <div>
            <img
              src={ImageLast}
              data-aos="fade-in"
              alt="Image2"
              className="rounded-[170px] bg-cover"
              style={{ margin: "40px 0" }}
            />
          </div>
          <h2>
            Սիրով՝ <br /> Վահե և Գայանե
          </h2>
        </ForthPagePartContextLast>
      </Container>
    </ForthPagePart>
  );
};
