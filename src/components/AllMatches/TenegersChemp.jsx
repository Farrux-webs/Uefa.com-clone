import React from 'react'
import "./style.scss"
import {NavLink, Link } from "react-router-dom"

function MatchFutsal() {
  return (
    <>
      <div className="AllMatches">
        <div className="matchesContainer">
          <div className="TeenegersChempCard MatchCard">
            <div className="cardTop">
              <img
                src="https://img.uefa.com/imgml/uefacom/elements/logos/competitions/color/full/23.svg"
                alt="Fifa Logo"
                width="130"
                height="130"
              />
              <p className="matchDate">Mar 7, 2023 - Round of 16</p>
            </div>
            <div className="cardMid">
              <div className="Match">
                <span className="group">1st leg: 0-1</span>
                <div className="MatchMain">
                  <p className="Nation">
                    Italy
                    <img
                      src="https://img.uefa.com/imgml/flags/50x50/ITA.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                  </p>
                  <strong className="Matchscore">16:00</strong>
                  <p className="Nation">
                    <img
                      src="https://img.uefa.com/imgml/flags/36x36/IRL.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    Republic <br />
                    of Ireland
                  </p>
                </div>
                <a href="#" className="see-more">
                  see more
                </a>
              </div>
              <div className="Match">
                <span className="group">1st leg: 2-0</span>
                <div className="MatchMain">
                  <p className="Nation">
                    Cyprus
                    <img
                      src="https://img.uefa.com/imgml/flags/36x36/CYP.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                  </p>
                  <strong className="Matchscore">19:00</strong>
                  <pc className="Nation">
                    <img
                      src="https://img.uefa.com/imgml/flags/36x36/UKR.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    Brugge
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