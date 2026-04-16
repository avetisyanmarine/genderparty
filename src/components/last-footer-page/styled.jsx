import styled from "styled-components";

const LastFooterPagePart = styled.div`
    background: #fff;
    padding: 50px 20px; 
    border-top-left-radius: 100px;
    color: var(--dark-color);
`
const LastFooterPagePartContext = styled.div`
    font-size: 25px;
    > div {
        display: flex;
        align-items: center;
        gap: 20px;
        .unique {
            padding-left: 20px;
            padding-bottom: 20px;
        }
        > div {
            img {
                padding: 11px;
                border-right: 2px solid #0000;
                /* border-radius: 50px; */
            }
            div {
                display: block;
            }
        }
    }
    .paragraph {
        margin-top: 20px;
    }
     a {
        font-size: 22px;
        text-decoration: none;
        cursor: pointer;
        transition: 0.2s;
    }

    a:hover {
        text-decoration: underline;
        opacity: 0.8;
    }
`
export { LastFooterPagePart, LastFooterPagePartContext }