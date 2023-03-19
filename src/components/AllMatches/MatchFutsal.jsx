import React from 'react'
import "./style.scss"
import {NavLink, Link } from "react-router-dom"

function FutsalFixture() {
  return (
    <>
      <div className="AllMatches">
        <div className="matchesContainer">
          <div className="MatchFutsalCard MatchCard">
            <div className="cardTop">
              <img
                src="https://img.uefa.com/imgml/uefacom/elements/logos/competitions/color/full/38.svg"
                alt="Fifa Logo"
                width="130"
                height="130"
              />
              <p className="matchDate">Mar 4, 2023 - Main Round</p>
            </div>
            <div className="cardMid">
              <div className="Match">
                <span className="group">Group 2</span>
                <div className="MatchMain">
                  <p className="Nation">
                    Austria
                    <img
                      src="https://img.uefa.com/imgml/flags/64x64/AUT.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                  </p>
                  <strong className="Matchscore">1-6</strong>
                  <p className="Nation">
                    <img
                      src="https://img.uefa.com/imgml/flags/64x64/BEL.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    Belgium
                  </p>
                </div>
                <a href="#" className="see-more">
                  see more
                </a>
              </div>
              <div className="Match">
                <span className="group">Group 4</span>
                <div className="MatchMain">
                  <p className="Nation">
                    Belarus
                    <img
                      src="https://img.uefa.com/imgml/flags/64x64/BLR.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                  </p>
                  <strong className="Matchscore">2-2</strong>
                  <pc className="Nation">
                    <img
                      src="https://img.uefa.com/imgml/flags/36x36/LTU.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    Belgium
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

export default FutsalFixture;