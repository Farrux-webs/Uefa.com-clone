import React from 'react'
import "./style.scss"
import {NavLink, Link } from "react-router-dom"

function MatchFutsal() {
  return (
    <>
      <div className="AllMatches">
        <div className="matchesContainer">
          <div className="MatchCard MatchWomeUCLCard">
            <div className="cardTop">
              <img
                src="https://img.uefa.com/imgml/uefacom/elements/logos/competitions/color/full/101.svg"
                alt="Fifa Logo"
                width="130"
                height="130"
              />
              <p className="matchDate">Mar 6, 2023 - Round 2</p>
            </div>
            <div className="cardMid">
              <div className="Match">
                <span className="group">League B - Group B6</span>
                <div className="MatchMain">
                  <p className="Nation">
                    Ukraine
                    <img
                      src="https://img.uefa.com/imgml/flags/50x50/UKR.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                  </p>
                  <strong className="Matchscore">15:30</strong>
                  <p className="Nation">
                    <img
                      src="https://img.uefa.com/imgml/flags/50x50/LAT.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    Latvia
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