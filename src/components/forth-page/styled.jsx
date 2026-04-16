import styled from "styled-components";

const ForthPagePart = styled.div`
  margin-top: 10px;
  text-align: center;
  .white-block {
    padding: 40px 20px 10px 20px;
    img {
      margin: 20px 0;
    }
    h2 {
      font-size: 48px;
    }
    h1 {
      font-size: 64px;
      margin: -10px;
    }
  }
  .line {
    width: 1px;
    margin: 15px auto;
  }
  .h5h {
    font-size: 26px;
  }
`;
const ForthPagePartContext = styled.div``;
const ForthPagePartContextLast = styled.div`
  text-align: center;
  margin-bottom: 50px;
  h2 {
    margin-top: -25px;
  }
  img {
    display: block;
    /* margin: 50px auto; */
  }
`;

export { ForthPagePart, ForthPagePartContext, ForthPagePartContextLast };
