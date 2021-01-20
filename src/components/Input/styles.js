import Styled from "styled-components";

export const InputBox = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    height: 50px;

    .icon {
        flex: 0 0 15%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 20px;
        }
    }

    input {
        flex: 0 0 80%;
        border: 0;
        box-shadow: 0;
        outline: 0;
    }
`;
