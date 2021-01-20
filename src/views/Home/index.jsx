import { useState, useEffect, useRef } from "react";

import Layout from "../../Layout";
import { Section, Heading, SubHeading, H3 } from "./styles";

import Input from "../../components/Input";
import Ministry from "../../components/Ministry";
import { useAppContext } from "../../store/DataContext";

function Home() {
  const appContext = useAppContext();
  const [loading, setLoading] = useState(false);
  const [ministries, setMinistries] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const searchFieldRef = useRef(null);

  useEffect(() => {
    //Control search field display on mobile
    const mq = window.matchMedia("(min-width: 768px)");

    if (mq.matches) {
      searchFieldRef.current.style.display = "none";
    }
    setLoading(true);
    try {
      let ministriesInfo = localStorage.getItem("ministries");
      let data = JSON.parse(ministriesInfo).ministries;

      setMinistries(data);
      appContext.updateMinistries(data);
      setLoading(false);
    } catch (error) {
      setMinistries([]);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log("changed");
  }, [appContext.ministries]);

  useEffect(() => {
    if (appContext.searchResults) {
      setSearchResults(appContext.searchResults);
    }
  }, [appContext.searchResults]);

  const handleChange = (e) => {
    let search = e.target.value;
    appContext.updateQuery(search);
    const pattern = new RegExp(search, "i");
    let filteredItem = ministries.filter((ministry) =>
      pattern.test(ministry.name)
    );
    appContext.updateResults(filteredItem);
  };

  return (
    <Layout>
      <Section className="section intro">
        <div className="container">
          <Heading>Welcome to the Federal Ministry of Information</Heading>
          <SubHeading>
            Find information about all the ministries in Nigeria
          </SubHeading>
        </div>
      </Section>
      <Section className="section" id="search-section">
        <div className="container">
          <H3>Ministries and Federal Parastatals</H3>
          <Input ref={searchFieldRef} handleChange={handleChange} />
        </div>
      </Section>
      <Section className="section">
        <div className="container">
          {loading
            ? "I am loading"
            : !appContext.searchQuery
            ? ministries.map((ministry, index) => (
                <Ministry key={index} data={ministry} />
              ))
            : searchResults && searchResults.length
            ? searchResults.map((item, index) => (
                <Ministry key={index} data={item} />
              ))
            : "No results found"}
        </div>
      </Section>
    </Layout>
  );
}

export default Home;
