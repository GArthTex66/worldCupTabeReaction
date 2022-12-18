import React from "react";
import './styles.css'

export default function Banner() {
  return(
    <header className="hero">
      <div className="hero-wrap">
       <p className="intro" id="intro">CATAR</p>
       <h1 id="headline">COPA DO MUNDO</h1>
       <p className="year"><i className="fa fa-star"></i> 2022 <i className="fa fa-star"></i></p>
       <p>FIFA</p>
     </div>
    </header>
  )
}