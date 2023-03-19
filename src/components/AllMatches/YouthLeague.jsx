import React from 'react'
import "./style.scss"
import {NavLink, Link } from "react-router-dom"

function MatchFutsal() {
  return (
    <>
      <div className="AllMatches">
        <div className="matchesContainer">
          <div className="MatchCard ConferenceLeague">
            <div className="cardTop">
              <img
                src="https://img.uefa.com/imgml/uefacom/elements/logos/competitions/color/full/2008.svg"
                alt="Fifa Logo"
                width="130"
                height="130"
              />
              <p className="matchDate">Mar 7, 2023 - Elite round</p>
            </div>
            <div className="cardMid">
              <div className="Match">
                <div className="MatchMain">
                  <p className="Nation">
                    Milan
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/2605542.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                  </p>
                  <strong className="Matchscore">18:00</strong>
                  <p className="Nation">
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/2605449.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    Atletico
                  </p>
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