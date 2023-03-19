import React from "react";
import Data from "../../database/WomenLeagueRate.json"

function ClubCoeffitsent() {
  return (
    <div className="clubCoefficient">
      <h3 className="PartHeading">Women's association club coefficients</h3>
      <ul className="TeamList">
        {Data.map((e, i) => {
          return (
            <li className="Team" key={i}>
              <div className="TeamMain">
                <img src={e.club_img} width="24" height="24" alt="clubLogo" />
                <p>{e.team_name}</p>
              </div>
              <p className="teamScore">{e.team_score}</p>
            </li>
          );
        })}
      </ul>
      <button className="StandingsBtn">Full Standings</button>
    </div>
  );
}

export default ClubCoeffitsent;
