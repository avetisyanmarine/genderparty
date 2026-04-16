import { Container } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext } from "./styled";
import MainPhoto from "../../assets/image/mainPhoto.jpg";

export const FirstPage = () => {
  return (
    <FirstPagePart>
      <img src={MainPhoto} />
      <Container>
        <FirstPagePartContext>
          <div className="text-right uniqueDiv">
            <h1 className="text-[#8694C1] ">Boy</h1>
            <h2>or</h2>
            <h1 className="text-[#CE829A]">Girl</h1>
          </div>
        </FirstPagePartContext>
      </Container>
    </FirstPagePart>
  );
};
