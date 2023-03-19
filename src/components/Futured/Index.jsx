import React from 'react'
import "./style.scss"
import Amount from "./Amount"
import Fantasy from "./Fantasy"
import UL from "./UL"
import UefaConLeg from "./ConferenceLeg"
import UYL from "./UYL"
import UWCL from "./UWCL"

function Index() {
  return (
    <>
      <main>
        <div className="mainWrapper">
          <div className="container">
            <div className="fullwrapper">
              <h2 className="mainHeading">Featured</h2>
              <Amount />
              <Fantasy />
              <UL/>
              <UefaConLeg/>
              <UYL/>
              <UWCL/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Index