import { useState, useEffect } from "react";

import Layout from "../../Layout";
import { Section, Heading, SubHeading, H3 } from "./styles";

import Input from "../../components/Input";
import Ministry from "../../components/Ministry";

function Home() {
  const [loading, setLoading] = useState(false);
  const [ministries, setMinistries] = useState([]);
  const [filtered, setFiltered] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    try {
      let ministriesInfo = localStorage.getItem("ministries");
      let data = JSON.parse(ministriesInfo).ministries;
      console.log(data);
      setMinistries(data);
      setLoading(false);
    } catch (error) {
      setMinistries([]);
      setLoading(false);
    }
  }, []);

  const handleChange = (e) => {
    let search = e.target.value;
    setSearchQuery(search);
    const pattern = new RegExp(search, "i");
    let filteredItem = ministries.filter((ministry) =>
      pattern.test(ministry.name)
    );
    setFiltered(filteredItem);
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
          <Input handleChange={handleChange} />
        </div>
      </Section>
      <Section className="section">
        <div className="container">
          {loading
            ? "I am loading"
            : !searchQuery
            ? ministries.map((ministry, index) => (
                <Ministry key={index} data={ministry} />
              ))
            : filtered && filtered.length
            ? filtered.map((item, index) => (
                <Ministry key={index} data={item} />
              ))
            : ""}
        </div>
      </Section>
    </Layout>
  );
}

export default Home;
