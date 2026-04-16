import styled from "styled-components";

const FirstPagePart = styled.div`
  position: relative;
  width: 100vw;
  height: 100dvh;
  transition: 0.5s;
  overflow: hidden;
  > img {
    height: 100%;
    object-fit: contain;
  }
`;
const FirstPagePartContext = styled.div`
  margin-top: 30vh;
  margin-right: 5vw;
  font-family: englishFont;
  line-height: 85px;
  .uniqueDiv {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 1;
    top: 63%;
    left: 50%;
    transform: translate(-50%, -50%);
    .bigNumber {
      right: 15px;
      top: 37px;
      font-size: 340px;
      color: #7f4e15;
      opacity: 0.25;
    }
    h1 {
      font-size: 102px;
      margin: 0;
    }
    h2 {
      font-size: 100px;
    }
  }
`;

export { FirstPagePart, FirstPagePartContext };
