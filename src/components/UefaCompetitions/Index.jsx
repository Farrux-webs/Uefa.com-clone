import React from "react";
import "./style.scss";

function Index() {
  return (
    <>
      <div className="competitionsMenu">
        <div className="container">
            <ul className="menu">
                <li className="menu_item"><a href="#" className="menu_link">UEFA Champions League</a></li>
                <li className="menu_item"><a href="#" className="menu_link">UEFA Europe League</a></li>
                <li className="menu_item"><a href="#" className="menu_link">UEFA Europe Conference League</a></li>
                <li className="menu_item"><a href="#" className="menu_link">UEFA Women's Champions League</a></li>
                <li className="menu_item"><a href="#" className="menu_link">UEFA Youth League</a></li>
                <li className="menu_item"><a href="#" className="menu_link">Nation Associations</a></li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Index;
