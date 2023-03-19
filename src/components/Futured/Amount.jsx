import React from 'react'
import "./style.scss"

function Amount() {
  return (
    <>
      <div className="partWrapper">
        <div className="grid-container">
          <div className="grid-item">
            <img
              src="https://editorial.uefa.com/resources/027f-1774ac15d25c-3d34926661db-1000/format/wide1/fbl-fra-ligue1-psg-nantes.jpeg?imwidth=988"
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
              src="https://editorial.uefa.com/resources/027f-176f82889e16-e86abd48dcd7-1000/format/wide1/real_sociedad_v_villarreal_cf_-_laliga_santander.jpeg?imwidth=490"
              alt="Mbappe"
            />
            <h3 className="grid-item-heading">
              Wonderkids: Real Sociedad's Cho
            </h3>
            <p className="ChempType">UEL</p>
          </div>
          <div className="grid-item">
            <img
              src="https://editorial.uefa.com/resources/027e-174da19d9655-8d2011e4cc3b-1000/format/wide1/fc_barcelona_v_olympique_lyon_-_uefa_women_s_champions_league_final_2021_22.jpeg?imwidth=490"
              alt="Mbappe"
            />
            <h3 className="grid-item-heading">Final tickets now on sale</h3>
            <p className="ChempType">UWCL</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Amount