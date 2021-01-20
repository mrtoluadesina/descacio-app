import { HeaderArea } from "./styles";

const Header = () => {
  return (
    <HeaderArea>
      <div className="logo">
        <a href="/">
          <img src="assets/images/logo.png" alt="logo" />
        </a>
      </div>
      <div className="search">
        <a href="#search-section">
          <img src="assets/icons/search.svg" alt="search ministries" />
        </a>
      </div>
    </HeaderArea>
  );
};

export default Header;
