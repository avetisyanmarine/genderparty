import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";

const SecondPagePart = styled.div`
  /* display: flex;
justify-content: center;
align-items: center;
flex-direction: column; */
  div {
    text-align: center;
  }
  a {
    display: block;
  }
  svg {
    margin: 45px auto 45px auto;
  }
`;
const SecondPagePartContext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 40px 20px 90px 20px;
  background-color: #fff;
  border-radius: 180px;
  img {
    object-fit: cover;
  }
  svg {
    cursor: pointer;
    margin: 20px 0;
  }
  h3 {
    line-height: 70px;
  }
  @keyframes moveUpDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  .countdown {
    border-right: 1px solid black;
    line-height: normal;
    h2 {
      font-size: 36px;
    }
    p {
      font-size: 20px;
    }
  }
`;

const GridDiv = styled(Flexible)`
  div {
    flex-direction: column;
    text-align: center;
    padding: 0 18px 16px 18px;
    font-weight: 500;

    p {
      font-weight: 500;
      font-size: 22px;
      line-height: 12px;
    }
  }
`;

const CirclesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 40px 0;
`;

const Circle = styled.div`
  width: 47px;
  height: 47px;
  border-radius: 50%;
`;
export {
  SecondPagePart,
  SecondPagePartContext,
  GridDiv,
  Circle,
  CirclesContainer,
};
