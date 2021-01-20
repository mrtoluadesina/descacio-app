import { useState } from "react";
import Layout from "../../Layout";
import { useAppContext } from "../../store/DataContext";

const Admin = () => {
  const [loading, setLoading] = useState(false);
  const [numberOfMinistries, setNumberOfMinistries] = useState(0);
  const appContext = useAppContext();
  const handleChange = (e) => {
    setLoading(true);
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      setNumberOfMinistries(JSON.parse(e.target.result).ministries.length);
      localStorage.setItem("ministries", e.target.result);
      appContext.updateMinistries(e.target.result.ministries);
    };
    setLoading(false);
  };
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1>Upload Data file</h1>

          <input type="file" onChange={handleChange} />
          <br />
          {loading
            ? "Loading ... "
            : numberOfMinistries + " Ministries uploaded"}
        </div>
      </section>
    </Layout>
  );
};

export default Admin;
