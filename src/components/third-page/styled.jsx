import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";

const ThirdPagePart = styled.div`
    h2 {
        width: fit-content;
        margin: auto;
    }
`
const ThirdPagePartContext = styled.div`
    overflow: hidden;
   
`
const PhotoDiv = styled.div`
margin-top: 80px;
`

const ThirdPagePartCalendar = styled(Flexible)`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    font-family: armFont;
    div {
        display: flex;
        text-align: center;
        font-weight: 500;
        line-height: 35px;
        justify-content: end;
        font-size: 32px;
        flex: 1 0 calc(100% / 7 - 8px);
    }
   .special {
    position: relative;
        &::after {
            content: "";
            width: 45px;
            height: 40px;
            z-index: -1;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-30%, -38%);
            background-image: url('/Heart.webp');
            background-size: cover;
        }
    }

`

export { ThirdPagePart, PhotoDiv, ThirdPagePartContext, ThirdPagePartCalendar }