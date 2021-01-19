import Header from "../components/Header";
import Footer from "../components/Footer";

import {} from "./styles";

export default (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
