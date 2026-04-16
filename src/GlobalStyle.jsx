import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --dark-color: #0E1111;
    --black: #0E1111;
  }
  body {
    font-family: 'armFont';
    letter-spacing: 1px;
    background: #FAF2E5;
    color: var(--black);
    scroll-behavior: smooth;
  }
  @font-face {
    font-family: 'englishFont';
    src: url("/font/family-home.woff2");
    font-display: swap;
  }
  @font-face {
    font-family: 'armFont';
    src: url("/font/armFont.ttf");
    font-display: swap;
  }
  h4 {
    font-size: 36px;
    font-weight: 100;
  }
  h1 {
    font-size: 80px;
    margin-top: 25px;
    /* text-shadow: 1px 6px 5px rgba(0,0,0,0.5);    */
  }
  h2 {
    font-size: 40px;
  }
`;
const Container = styled.div`
  max-width: 390px;
  margin: 0 auto;
  padding: 16px;
`;
const Flexible = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { GlobalStyle, Container, Flexible };
