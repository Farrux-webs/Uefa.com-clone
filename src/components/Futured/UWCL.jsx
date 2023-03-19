import React from "react";
import "./style.scss";

function Amount() {
  return (
    <>
      <div className="partWrapper">
        <h2 className="fantasy-heading">
          <img
            src="https://img.uefa.com/imgml/uefacom/elements/logos/competitions/black/28.svg"
            alt="UCL"
            width="20"
            height="20"
          />
          UEFA Women's Champions League
        </h2>
        <div className="grid-container">
          <div className="grid-item">
            <img
              src="https://editorial.uefa.com/resources/027e-17479d529e3c-6dc69abfcfc9-1000/format/wide1/uwcl_bracket.jpeg?imwidth=988"
              alt="Mbappe"
            />
            <h3 className="grid-item-heading">Plot the road to the final</h3>
            <p className="grid-tem-desc">
              Guess the winner of each tie from the quarter-finals to the final
              and you could win great prize
            </p>
            <p className="ChempType">UWCL</p>
          </div>
          <div className="grid-item">
            <img
              src="https://editorial.uefa.com/resources/027e-175bc364b1a9-c59b67809f40-1000/format/wide1/branded_frame_01_duplicated_duplicated_-_twitter.png?imwidth=490"
              alt="Mbappe"
            />
            <h3 className="grid-item-heading">Quarter-final lowdown</h3>
            <p className="ChempType">UWCL</p>
          </div>
          <div className="grid-item">
            <img
              src="https://editorial.uefa.com/resources/027c-16e1962907e0-df22ef944d33-1000/format/wide1/lyon.png?imwidth=556"
              alt="Mbappe"
            />
            <h3 className="grid-item-heading">
              Meet the quarter-finalists Meet the quarter-finalists Inside
            </h3>
            <p className="ChempType">UWCL</p>
          </div>
        </div>
        <button className="UClbtn">UEFA Women's Champions League</button>
      </div>
    </>
  );
}

export default Amount;
