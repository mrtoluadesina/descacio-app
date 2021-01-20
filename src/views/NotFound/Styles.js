import Styled from "styled-components";

export const Wrapper = Styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100vh;
    h2 {
        position: absolute;
        background: #186838;
        color: #fff;
        padding: 10px 20px;
        font-size: 14px;
        a {
            color: #fff;
        }
    }
`;
