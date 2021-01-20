import Styled from "styled-components";

export const HeaderArea = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .logo {
        display: flex;
        width: 76px;
        height: 76px;
    }

    .search {
        display: flex;
        width: 30px;
        cursor: pointer;
    }
`;
