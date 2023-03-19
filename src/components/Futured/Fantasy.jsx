import React from 'react'
import "./style.scss"

function Amount() {
  return (
    <>
      <div className="partWrapper">
        <h2 className="fantasy-heading">
          <img
            src="https://img.uefa.com/imgml/uefacom/elements/logos/competitions/black/1.svg"
            alt="UCL"
            width="20"
            height="20"
          />
          UEFA Champions League
        </h2>
        <div className="grid-container">
          <div className="grid-item">
            <img
              src="https://editorial.uefa.com/resources/027e-176057009ab6-11b3834dc653-1000/format/wide1/16x9_ucl_ff_r16_splash_clean_2.jpeg?imwidth=988"
              alt="Mbappe"
            />
            <h3 className="grid-item-heading">Champions League form guide</h3>
            <p className="grid-tem-desc">
              Keep track of the contenders' form as the knockout stage unfolds.
            </p>
            <p className="ChempType">UCL</p>
          </div>
          <div className="grid-item">
            <img
              src="https://editorial.uefa.com/resources/027e-1769520f4593-587ad2e92aca-1000/format/wide1/ucl_-_matchweek_preview_03_-_twitter.jpeg?imwidth=490"
              alt="Mbappe"
            />
            <h3 className="grid-item-heading">
              Wonderkids: Real Sociedad's Cho
            </h3>
            <p className="ChempType">UEL</p>
          </div>
          <div className="grid-item">
            <img
              src="https://editorial.uefa.com/resources/027e-176b4a96b26e-6a73df8026c7-1000/format/wide1/liverpool_v_barcelona_-_uefa_champions_league_semi_final_second_leg.jpeg?imwidth=490"
              alt="Mbappe"
            />
            <h3 className="grid-item-heading">Final tickets now on sale</h3>
            <p className="ChempType">UWCL</p>
          </div>
        </div>
        <button className="UClbtn">UEFA Champions League</button>
      </div>
    </>
  );
}

export default Amount