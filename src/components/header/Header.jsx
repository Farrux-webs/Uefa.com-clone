import React, {useState, useEffect, useRef} from 'react'
import "./style.scss"
import hamNav from "../../assets/images/ham.png"
import Hamburger from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false); 
  const elNavbar = useRef(null)

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <a href="../../../index.html" className="LogoWr">
              <img
                src="https://img.uefa.com/imgml/uefacom/elements/main-nav/uefa-logo-black.svg?imwidth=36"
                alt="Logotip"
                className="Logo"
              />
            </a>
            <ul className="navbar__List">
              <li className="nav_Item">
                <a href="#" className="nav_Link">
                  Inside UEFA
                </a>
              </li>
              <li className="nav_Item">
                <a href="#" className="nav_Link">
                  UEFA.tv
                </a>
              </li>
              <li className="nav_Item">
                <a href="#" className="nav_Link">
                  Live Scores
                </a>
              </li>
              <li className="nav_Item">
                <a href="#" className="nav_Link">
                  Tickets and hospitality
                </a>
              </li>
              <li className="nav_Item">
                <a href="#" className="nav_Link">
                  Store
                </a>
              </li>
              <li className="nav_Item">
                <a href="#" className="nav_Link">
                  Login
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="pk-svg__icon pk-svg__icon--product"
                  part="svg"
                >
                  <path
                    fill="#3C3C3C"
                    fillRule="evenodd"
                    d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-4.091 5.768C17.758 15.814 15.062 14.5 12 14.5c-3.058 0-5.756 1.312-6.909 3.268a9 9 0 1113.818 0zM12 13a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </li>
              <li className="nav_Item">
                <a href="#" className="nav_Link">
                  All Sections
                </a>
              </li>
              <li className="nav_Item">
                <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  size={20}
                  onToggle={() => {
                    elNavbar.current.classList.toggle("navbar--active");
                  }}
                />
              </li>
            </ul>
          </nav>

          <img src={hamNav} className="HamNav" ref={elNavbar} />
        </div>
      </header>
    </>
  );
}

export default Header