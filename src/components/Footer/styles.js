import Styled from "styled-components";

export const FooterArea = Styled.div`
    display: flex;
    background-color: black;

    .container {
        flex-direction: column;

        .info {
            align-items: center;

            .logo {
                width: 61px;
            }

            .about {
                display: flex;
                flex: 0 0 72%;
                color: white;
                padding-bottom: 10px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            }
        }

        .socials {
            padding-top: 15px;
            a {
                color: white;
            }
        }
    }
`;
