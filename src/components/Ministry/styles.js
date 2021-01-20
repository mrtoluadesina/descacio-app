import Styled from "styled-components";

export const Card = Styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    margin: 10px 0;
    border-bottom: 0.5px solid #000000;
`;

export const Heading = Styled.h2`
    font-size: 30px;
    font-family: "Lora", serif;
    color: #186838;
    margin: 10px 0;
`;

export const Info = Styled.div`
    display: flex;
    flex-direction: column;

    .row {
        display: flex;
        padding: 10px 0;

        .icon {
            width: 15px;
            margin-right: 25px;
        }

        .text {
            flex: 0 0 70%;
        }

        a {
            color: #3B75C8;
        }
    }
`;

export const Minister = Styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`;

export const Name = Styled.h3`
    font-size: 18px;
`;

export const Origin = Styled.p`
    font-size: 15px;
`;

export const ShowHide = Styled.p`
    display: flex;
    cursor: pointer;
    font-style: italic;
`;
