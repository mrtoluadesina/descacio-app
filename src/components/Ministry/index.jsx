import { useState } from "react";

import {
  Card,
  Heading,
  Info,
  Minister,
  Name,
  Origin,
  ShowHide,
} from "./styles";

const Ministry = ({ data }) => {
  const [showInfo, setShowInfo] = useState(false);

  const showHideFn = (e) => {
    setShowInfo(!showInfo);
  };

  return (
    <Card>
      <Heading>{data.name || "Ministry of Justice"}</Heading>
      <Minister>
        <Name>Abubakar Malami</Name>
        <Origin>KEBBI STATE</Origin>
      </Minister>
      {showInfo && (
        <Info className="info">
          <div className="row">
            <div className="icon">
              <img src="assets/icons/location.png" alt="location" />
            </div>
            <p className="text">
              Federal Ministry of Justice, Federal Secretariat Towers (5th &
              10th floors), Shehu Shagari Way, Central Abuja Federal Capital
              Territory, Nigeria
            </p>
          </div>
          <div className="row">
            <div className="icon">
              <img src="assets/icons/website.png" alt="website" />
            </div>
            <a className="text" href="/">
              www.justice.gov.ng
            </a>
          </div>
        </Info>
      )}
      <ShowHide onClick={showHideFn}>
        {showInfo ? "Less" : "More"} Info
      </ShowHide>
    </Card>
  );
};

export default Ministry;
