import React from 'react'
import "./style.scss"

function Amount() {
  return (
    <>
      <div className="partWrapper">
        <h2 className="fantasy-heading">
          <img
            src="https://img.uefa.com/imgml/uefacom/elements/logos/competitions/black/2008.svg"
            alt="UCL"
            width="20"
            height="20"
          />
          UEFA Youth League
        </h2>
        <div className="grid-container">
          <div className="grid-item">
            <img
              src="https://editorial.uefa.com/resources/027f-176eacfd973b-a15d3bf7d68d-1000/format/wide1/highlights.jpeg?imwidth=988"
              alt="Mbappe"
            />
            <h3 className="grid-item-heading">What to look out for: Last 16</h3>
            <p className="grid-tem-desc">
              Keep track of the contenders' form as the knockout stage unfolds.
            </p>
            <p className="ChempType">UYL</p>
          </div>
          <div className="grid-item">
            <img
              src="https://editorial.uefa.com/resources/027f-176f98a1ed01-0d5d936fc5c5-1000/format/wide1/ac_milan_v_ruh_lviv_round_of_16_-_uefa_youth_league.jpeg?imwidth=490"
              alt="Mbappe"
            />
            <h3 className="grid-item-heading">Conference League form guide</h3>
            <p className="ChempType">UYL</p>
          </div>
          <div className="grid-item">
            <img
              src="https://editorial.uefa.com/resources/027e-176c215d3614-28060c8411f2-1000/format/wide1/20221130_zeepreventorium-42.jpeg?imwidth=490"
              alt="Mbappe"
            />
            <h3 className="grid-item-heading">
              Round of 16 first legs: preview
            </h3>
            <p className="ChempType">INSIDE UEFA</p>
          </div>
        </div>
        <button className="UClbtn">UEFA Youth League</button>
      </div>
    </>
  );
}

export default Amount