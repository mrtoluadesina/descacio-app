import Styled from "styled-components";

export const Wrapper = Styled.div`
  background: url("/assets/images/Nigerian.png") no-repeat;
  background-position: 0 -250px;
  background-size: 100%;
  @media(max-width: 768px) {
      background-position: top;
      background-size: 160%;
  }
  @media (min-width: 769px) and (max-width: 900px) {
      background-position: top;
      background-size: 130%;
  }
  @media (min-width: 900px) and (max-width: 1400px) {
      background-position: 0 -200px;
      background-size: 100%;
  }
`;

export const Def = Styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        max-width: 1200px;
        width: 70%;
        margin: auto;
    }
`;

export const Main = Styled.main`
    min-height: 73.5vh;
`;
