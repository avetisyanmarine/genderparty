import {
  GridDiv,
  SecondPagePart,
  SecondPagePartContext,
  Circle,
  CirclesContainer,
} from "./styled";
import { Container, Flexible } from "../../GlobalStyle";
import { useEffect, useState } from "react";
import { ThirdPage } from "../third-page";
import WhiteHeart from "../../assets/image/white-heart.png";
import image1 from "/site-images/image1.jpg";

export const SecondPage = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 60;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  const formatNumber = (num) => String(num).padStart(2, "0");
  const date = new Date(2026, 6, 1, 0, 0, 0);

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = date - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SecondPagePart className="relative">
      <Container>
        <a
          onClick={handleClick}
          className="animate-[moveUpDown_1s_ease-in-out_infinite]"
        >
          <svg
            width="49"
            height="31"
            viewBox="0 0 49 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.3118 1.38342C48.7273 3.05932 48.7273 5.7768 47.3118 7.4527L29.5775 28.428C26.7457 31.7772 22.1572 31.7758 19.3268 28.425L1.59932 7.43725C0.183689 5.76135 0.183689 3.04387 1.59932 1.36797C3.015 -0.308352 5.3102 -0.308352 6.72587 1.36797L21.8987 19.3312C23.3146 21.0071 25.6096 21.0071 27.0252 19.3312L42.1853 1.38342C43.6009 -0.292473 45.8962 -0.292473 47.3118 1.38342Z"
              fill="#000000"
            />
          </svg>
        </a>
        <SecondPagePartContext href="#about">
          <div id="about" className="text-center">
            <h3 className="text-[48px] font-[englishFont]" data-aos="zoom-in">
              01.05.2026
            </h3>
            <div className="text-center">
              <h2 style={{ marginTop: "30px", marginBottom: "15px" }} data-aos="zoom-in">
                Առիթին Մնաց
              </h2>
              <GridDiv data-aos="fade-in">
                <Flexible className="countdown">
                  <h2>{formatNumber(timeLeft.days)}</h2>
                  <p>Օր</p>
                </Flexible>
                <Flexible className="countdown">
                  <h2>{formatNumber(timeLeft.hours)}</h2>
                  <p>Ժամ</p>
                </Flexible>
                <Flexible className="countdown">
                  <h2>{formatNumber(timeLeft.minutes)}</h2>
                  <p>Րոպե</p>
                </Flexible>
                <Flexible className="uniqueBorder">
                  <h2>{formatNumber(timeLeft.seconds)}</h2>
                  <p>Վայրկյան</p>
                </Flexible>
              </GridDiv>
            </div>
          </div>
          <h2
            className="text-[40px] "
            style={{ marginTop: "30px" }}
            data-aos="zoom-in"
          >
            Սիրելի ընկերներ
          </h2>
          <h5 className="text-[24px] font-[500]" data-aos="zoom-in">
            Սիրով հրավիրում եմ ձեզ <br /> միասին կիսելու իմ ծննդյան
            ուրախությունը։ <br /> Ձեր ներկայությամբ օրը կլինի ավելի գեղեցիկ ու
            հիշարժան։
          </h5>
          <hr className="bg-[#7F4E15] w-1/3" />
          <h2 data-aos="zoom-in" style={{ marginTop: "30px" }}>
            Պահպանիր Օրը
          </h2>
          <ThirdPage />
        </SecondPagePartContext>
        <img
          src={WhiteHeart}
          className="w-[140px]"
          style={{ margin: "auto" }}
          alt="White Heart"
        />
        <h2
          style={{ fontSize: "50px" }}
          className="font-[englishFont]"
          data-aos="fade-in "
        >
          Dress Code
        </h2>
        <h3 className="text-[32px]" data-aos="fade-in">
          Եթե մտածում եք, որ փոքրիկը աղջիկ է , ապա անհրաժեշտ է լինել սպիտակ կամ մարմնագույն հագուստով, իսկ եթե մտածում եք , որ տղա է լինելու՝  կրել կապույտ հագուստ։
        </h3>
        <CirclesContainer>
          <Circle className="bg-[#FFFFFF]" />
          <Circle className="bg-[#375990]" />
          <Circle className="bg-[#E4CDA6]" />
        </CirclesContainer>
        <h2 data-aos="fade-in">Սիրով սպասում ենք</h2>
        <img
          style={{ margin: "40px 0" }}
          src={image1}
          alt=""
          className="rounded-[180px]"
          data-aos="fade-in"
        />
      </Container>
    </SecondPagePart>
  );
};
