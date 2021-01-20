import Header from "../components/Header";
import Footer from "../components/Footer";

import { Def, Main, Wrapper } from "./styles";

const Layout = (props) => {
  return (
    <Wrapper>
      <Def>
        <Header />
        <Main className="content">{props.children}</Main>
      </Def>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
