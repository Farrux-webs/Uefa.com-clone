import React from 'react'
import Header from "./components/header/Header"
import Competitions from "./components/UefaCompetitions"
import AsideLeft from "./components/AllMatches/Index"
import Main from "./components/Futured/Index"
import AsideRight from "./components/ClubRankings/Index"
function App() {

  return (
    <div className="App">
      <Header />
      <Competitions />
      <AsideLeft />
      <Main/>
      <AsideRight />
    </div>
  );
}

export default App
