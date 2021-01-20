import { FooterArea } from "./styles";

const Footer = (props) => {
  return (
    <FooterArea>
      <div className="container">
        <div className="info space-between">
          <div className="logo">
            <img src="assets/images/logo.png" alt="logo" />
          </div>
          <p className="about">
            info.gov.ng is the Official Guide to Government Ministries in
            Nigeria
          </p>
        </div>
        <div className="socials space-between">
          <a href="/" target="_blank">
            Instagram
          </a>
          <a href="/" target="_blank">
            LinkedIn
          </a>
          <a href="/" target="_blank">
            Facebook
          </a>
        </div>
      </div>
    </FooterArea>
  );
};

export default Footer;
