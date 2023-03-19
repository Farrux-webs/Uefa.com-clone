import React from 'react'
import "./style.scss"
import FutsalFixture from "./MatchFutsal";
import WomenUCL from "./WomensUCL"
import UCLmen from "./UCLmen"
import ConferenceLeague from "./ConferenceLeague"
import TeenegersChemp from "./TenegersChemp"
import Ulmen from "./ULmen"
import YouthLeague from "./YouthLeague"
import UCLWomen from "./UCLWomen"


function AsideLeft() {
  return (
      <aside className="aside">
        <div className="asideSticky">
        <div className="container">
          <h2 className="asideheading">All Matches</h2>
          <FutsalFixture />
          <WomenUCL />
          <UCLmen />
          <ConferenceLeague />
          <TeenegersChemp />
          <Ulmen />
          <YouthLeague />
          <UCLWomen />
        </div>
        </div>
      </aside>
  );
}

export default AsideLeft;