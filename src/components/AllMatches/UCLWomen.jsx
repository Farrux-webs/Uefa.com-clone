import React from 'react'
import "./style.scss"
import {NavLink, Link } from "react-router-dom"

function MatchFutsal() {
  return (
    <>
      <div className="AllMatches">
        <div className="matchesContainer">
          <div className="MatchUCLWomenCard MatchCard">
            <div className="cardTop">
              <img
                src="https://img.uefa.com/imgml/uefacom/elements/logos/competitions/color/full/28.svg"
                alt="Fifa Logo"
                width="130"
                height="130"
              />
              <p className="matchDate">Mar 21, 2023 - Quarter-finals</p>
            </div>
            <div className="cardMid">
              <div className="Match">
                <div className="MatchMain">
                  <p className="Nation">
                    Chelsea
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/2600661.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                  </p>
                  <strong className="Matchscore">20:45</strong>
                  <p className="Nation">
                    <img
                      src="	https://img.uefa.com/imgml/TP/teams/logos/36x36/81199.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    Dortmound
                  </p>
                </div>
                <a href="#" className="see-more">
                  see more
                </a>
              </div>
              <div className="Match">
                <div className="MatchMain">
                  <p className="Nation">
                    Roma
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/2610208.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                  </p>
                  <strong className="Matchscore">23:00</strong>
                  <pc className="Nation">
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/2601945.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    Barcelona
                  </pc>
                </div>
                <a href="#" className="see-more">
                  see more
                </a>
              </div>
            </div>
            <div className="cardBottom">
              <button className="All_Matchesbtn">All Matches</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MatchFutsal;