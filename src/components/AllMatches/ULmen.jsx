import React from 'react'
import "./style.scss"
import {NavLink, Link } from "react-router-dom"

function MatchFutsal() {
  return (
    <>
      <div className="AllMatches">
        <div className="matchesContainer">
          <div className="UlmenCard MatchCard">
            <div className="cardTop">
              <img
                src="https://img.uefa.com/imgml/uefacom/elements/logos/competitions/color/full/14.svg"
                alt="Fifa Logo"
                width="130"
                height="130"
              />
              <p className="matchDate">Mar 9, 2023 - Round of 16</p>
            </div>
            <div className="cardMid">
              <div className="Match">
                <div className="MatchMain">
                  <p className="Nation">
                    Roma
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/50137.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                  </p>
                  <strong className="Matchscore">20:45</strong>
                  <p className="Nation">
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/50123.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    Real <br />
                    Coceidat
                  </p>
                </div>
                <a href="#" className="see-more">
                  see more
                </a>
              </div>
              <div className="Match">
                <div className="MatchMain">
                  <p className="Nation">
                    Sporting
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/50149.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                  </p>
                  <strong className="Matchscore">20:45</strong>
                  <pc className="Nation">
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/52280.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    Arsenal
                  </pc>
                </div>
                <a href="#" className="see-more">
                  see more
                </a>
              </div>
              <div className="Match">
                <div className="MatchMain">
                  <p className="Nation">
                    Leverkusen
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/50109.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                  </p>
                  <strong className="Matchscore">20:45</strong>
                  <p className="Nation">
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/52298.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    Ferencváros
                  </p>
                </div>
                <a href="#" className="see-more">
                  see more
                </a>
              </div>
              <div className="Match">
                <div className="MatchMain">
                  <p className="Nation">
                    Union <br /> Berlin
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/77977.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                  </p>
                  <strong className="Matchscore">20:45</strong>
                  <pc className="Nation">
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/64125.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    Union <br /> SG
                  </pc>
                </div>
                <a href="#" className="see-more">
                  see more
                </a>
              </div>
              <div className="Match">
                <div className="MatchMain">
                  <p className="Nation">
                    Shakhtar <br /> Donetsk
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/52707.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                  </p>
                  <strong className="Matchscore">23:00</strong>
                  <p className="Nation">
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/52749.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    Feyenoord
                  </p>
                </div>
                <a href="#" className="see-more">
                  see more
                </a>
              </div>
              <div className="Match">
                <div className="MatchMain">
                  <p className="Nation">
                    Man <br /> UTD
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/50x50/52682.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                  </p>
                  <strong className="Matchscore">23:00</strong>
                  <pc className="Nation">
                    <img
                      src="	https://img.uefa.com/imgml/TP/teams/logos/36x36/52265.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    Betis
                  </pc>
                </div>
                <a href="#" className="see-more">
                  see more
                </a>
              </div>
              <div className="Match">
                <div className="MatchMain">
                  <p className="Nation">
                    Juventus
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/50x50/50139.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                  </p>
                  <strong className="Matchscore">23:00</strong>
                  <p className="Nation">
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/59880.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    Freiburg
                  </p>
                </div>
                <a href="#" className="see-more">
                  see more
                </a>
              </div>
              <div className="Match">
                <div className="MatchMain">
                  <p className="Nation">
                    Sevilla
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/36x36/52714.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                  </p>
                  <strong className="Matchscore">19:00</strong>
                  <pc className="Nation">
                    <img
                      src="https://img.uefa.com/imgml/TP/teams/logos/64x64/52692.png"
                      alt=""
                      width="32"
                      height="32"
                    />
                    Fenerbahçe
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