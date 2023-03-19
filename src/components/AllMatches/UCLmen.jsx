import React from 'react'
import "./style.scss"
import {NavLink, Link } from "react-router-dom"

function MatchFutsal() {
  return (
    <>
      <div className="AllMatches">
        <div className="matchesContainer">
          <div className="MatchUclMenCard MatchCard">
            <div className="cardTop">
              <img
                src="https://img.uefa.com/imgml/uefacom/elements/logos/competitions/color/full/1.svg"
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
                    Chelsea
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/50x50/52914.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                  </p>
                  <strong className="Matchscore">23:00</strong>
                  <p className="Nation">
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/52758.png"
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
                <span className="group">1st leg: 2-0</span>
                <div className="MatchMain">
                  <p className="Nation">
                    Benfica
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/50147.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                  </p>
                  <strong className="Matchscore">23:00</strong>
                  <pc className="Nation">
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/50043.png"
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