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
        <Name>{data.minister || "Unknown"}</Name>
        <Origin>{data.origin} STATE</Origin>
      </Minister>
      {showInfo && (
        <Info className="info">
          <div className="row">
            <div className="icon">
              <img src="assets/icons/location.png" alt="location" />
            </div>
            <p className="text">{data.address || "Unknown"}</p>
          </div>
          <div className="row">
            <div className="icon">
              <img src="assets/icons/website.png" alt="website" />
            </div>
            {data.website ? (
              <a
                className="text"
                href={data.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.website}
              </a>
            ) : null}
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
