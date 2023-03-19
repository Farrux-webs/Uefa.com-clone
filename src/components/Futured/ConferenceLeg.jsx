import React from 'react'
import "./style.scss"

function Amount() {
  return (
    <>
      <div className="partWrapper">
        <h2 className="fantasy-heading">
          <img
            src="https://img.uefa.com/imgml/uefacom/elements/logos/competitions/black/2019.svg"
            alt="UCL"
            width="20"
            height="20"
          />
          UEFA Europa Conference League
        </h2>
        <div className="grid-container">
          <div className="grid-item">
            <img
              src="https://editorial.uefa.com/resources/027e-1769b7e4db03-61ed4dc4f8ce-1000/format/wide1/uecl_-_matchweek_preview_01_-_twitter.jpeg?imwidth=988"
              alt="Mbappe"
            />
            <h3 className="grid-item-heading">What to look out for: Last 16</h3>
            <p className="grid-tem-desc">
              Keep track of the contenders' form as the knockout stage unfolds.
            </p>
            <p className="ChempType">UECL</p>
          </div>
          <div className="grid-item">
            <img
              src="https://editorial.uefa.com/resources/027f-17749e9231f0-7f849c5b5ab4-1000/format/wide1/acf_fiorentina_v_ac_milan_-_serie_a.jpeg?imwidth=490"
              alt="Mbappe"
            />
            <h3 className="grid-item-heading">Conference League form guide</h3>
            <p className="ChempType">UECL</p>
          </div>
          <div className="grid-item">
            <img
              src="https://editorial.uefa.com/resources/027f-176dc23ad901-c16ab8540837-1000/format/wide1/west_ham_united_v_silkeborg_if_group_b_-_uefa_europa_conference_league.jpeg?imwidth=490"
              alt="Mbappe"
            />
            <h3 className="grid-item-heading">
              Round of 16 first legs: preview
            </h3>
            <p className="ChempType">UECL</p>
          </div>
        </div>
        <button className="UClbtn">UEFA Europa Conference League</button>
      </div>
    </>
  );
}

export default Amount