import React from 'react'
import "./style.scss"

function Amount() {
  return (
    <>
      <div className="partWrapper">
        <h2 className="fantasy-heading">
          <img
            src="https://img.uefa.com/imgml/uefacom/elements/logos/competitions/black/14.svg"
            alt="UCL"
            width="20"
            height="20"
          />
          UEFA Europa League
        </h2>
        <div className="grid-container">
          <div className="grid-item">
            <img
              src="https://editorial.uefa.com/resources/027e-176a0b57d57f-4c54796dfab4-1000/format/wide1/uel_-_matchweek_preview_01_-_twitter.jpeg?imwidth=988"
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
              src="https://editorial.uefa.com/resources/027f-1774a1661f71-8bffb09e9b0f-1000/format/wide1/arsenal_fc_v_afc_bournemouth_-_premier_league.jpeg?imwidth=490"
              alt="Mbappe"
            />
            <h3 className="grid-item-heading">
              Wonderkids: Real Sociedad's Cho
            </h3>
            <p className="ChempType">UEL</p>
          </div>
          <div className="grid-item">
            <img
              src="https://editorial.uefa.com/resources/027f-176dad7f335f-6e5355b72bfa-1000/format/wide1/fbl-eur-c3-gilloise-berlin.jpeg?imwidth=490"
              alt="Mbappe"
            />
            <h3 className="grid-item-heading">Final tickets now on sale</h3>
            <p className="ChempType">UWCL</p>
          </div>
        </div>
        <button className="UClbtn">UEFA Europa League</button>
      </div>
    </>
  );
}

export default Amount