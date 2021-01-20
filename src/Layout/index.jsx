import Header from "../components/Header";
import Footer from "../components/Footer";

import { Def, Main } from "./styles";

const Layout = (props) => {
  return (
    <Def>
      <Header />
      <Main className="content">
        {props.children}
      </Main>
      <Footer />
    </Def>
  );
};

export default Layout;
