import React, { useRef } from "react";
import "./style.scss";
import ClubCoef from "./ClubCoeffitsent";
import LeagueRate from "./LeagueRate";
import WomenCoef from "./ClubWomenCoeffitsent";
import WomenLeague from "./WomenLeagueRate";

function Index() {

  return (
    <aside className="asideRight" >
      <h2 className="PartHeading">UEFA club rankings</h2>
      <div className="asideMain">
        <ClubCoef />
        <LeagueRate />
        <WomenCoef />
        <WomenLeague />
        <p
          style={{
            fontSize: "14px",
            textAlign: "justify",
          }}
        >
          The UEFA club coefficient rankings are based on the results of all
          European clubs in UEFA club competition. The association club
          coefficient or country rankings take into account the results of all
          clubs from each association and are used to determine the number of
          entries an association is granted for forthcoming seasons.
        </p>
      </div>
      <h3
        style={{
          margin: "40px 0",
          fontWeight: "100",
          fontSize: "23px",
        }}
      >
        Media
      </h3>

      <div
        className="media"
        style={{
          padding: "40px 20px",
          backgroundColor: "#fff",
        }}
      >
        <a
          href="#"
          style={{
            textDecoration: "none",
            display: "block",
            marginBottom: "20px",
          }}
        >
          Media Releases
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            display: "block",
            marginBottom: "20px",
          }}
        >
          Latest News
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            display: "block",
            marginBottom: "20px",
          }}
        >
          Media accreditation
        </a>
        <a
          href="#"
          style={{
            textDecoration: "none",
            display: "block",
            marginBottom: "20px",
          }}
        >
          Information Kits
        </a>
      </div>
    </aside>
  );
}

export default Index;
