import { useEffect, useRef } from "react";
import { useAppContext } from "../../store/DataContext";
import Input from "../Input";
import { HeaderArea } from "./styles";

const Header = () => {
  const appContext = useAppContext();
  const searchFieldRef = useRef(null);

  const handleChange = (e) => {
    let search = e.target.value;
    appContext.updateQuery(search);
    const pattern = new RegExp(search, "i");

    let filteredItem = appContext.ministries.filter((ministry) =>
      pattern.test(ministry.name)
    );

    appContext.updateResults(filteredItem);
  };

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");

    if (mq.matches) {
      searchFieldRef.current.style.display = "none";
    }
  }, []);

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
        <Input ref={searchFieldRef} handleChange={handleChange} />
      </div>
    </HeaderArea>
  );
};

export default Header;
