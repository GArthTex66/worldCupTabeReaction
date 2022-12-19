import React from "react";
import Select from "./Select"
import logo from '../assets/logo.png'
import './styles.css'

export default function Playoffs() {
  return(
    <section id="bracket">
    <div className="container">
    <div className="split split-one">  
      <div className="round round-two">
        <div className="round-details">OITAVAS<br/><span className="date">3-6 DEZEMBRO</span></div>     
        <ul className="matchup">
          <li className="team team-top"><Select/><span className="score"></span></li>
          <li className="team team-bottom"><Select/><span className="score"></span></li>
        </ul> 
        <ul className="matchup">
          <li className="team team-top"><Select/><span className="score"></span></li>
          <li className="team team-bottom"><Select/><span className="score"></span></li>
        </ul> 
        <ul className="matchup">
          <li className="team team-top"><Select/><span className="score"></span></li>
          <li className="team team-bottom"><Select/><span className="score"></span></li>
        </ul>
        <ul className="matchup">
          <li className="team team-top"><Select/><span className="score"></span></li>
          <li className="team team-bottom"><Select/><span className="score"></span></li>
        </ul>                   
      </div>
      
      <div className="round round-three">
        <div className="round-details">QUARTAS<br/><span className="date">9-10 DEZEMBRO</span></div>     
        <ul className="matchup">
          <li className="team team-top"><Select/><span className="score"></span></li>
          <li className="team team-bottom"><Select/><span className="score"></span></li>
        </ul> 
        <ul className="matchup">
          <li className="team team-top"><Select/><span className="score"></span></li>
          <li className="team team-bottom"><Select/><span className="score"></span></li>
        </ul>                   
      </div>    
    </div> 
  
  <div className="champion">
      <div className="semis-l">
        <div className="round-details">SEMIFINAIS<br/><span className="date">13-14 DEZEMBRO</span></div>   
        <ul className ="matchup championship">
          <li className="team team-top"><Select/><span className="vote-count"></span></li>
          <li className="team team-bottom"><Select/><span className="vote-count"></span></li>
        </ul>
      </div>
      <div className="final">
        <img className="image-icon" src={logo} alt="logo"/>
        <div className="round-details">FINAL<br/><span className="date">18 DEZEMBRO</span></div>    
        <ul className ="matchup championship">
          <li className="team team-top"><Select/><span className="vote-count"></span></li>
          <li className="team team-bottom"><Select/><span className="vote-count"></span></li>
        </ul>
      </div>
      <div className="semis-r">   
        <div className="round-details">SEMIFINAIS<br/><span className="date">13-14 DEZEMBRO</span></div>   
        <ul className ="matchup championship">
          <li className="team team-top"><Select/><span className="vote-count"></span></li>
          <li className="team team-bottom"><Select/><span className="vote-count"></span></li>
        </ul>
      </div>  
    </div>
  
  
    <div className="split split-two">
  
  
      <div className="round round-three">
        <div className="round-details">QUARTAS<br/><span className="date">9-10 DEZEMBRO</span></div>           
        <ul className="matchup">
          <li className="team team-top"><Select/><span className="score"></span></li>
          <li className="team team-bottom"><Select/><span className="score"></span></li>
        </ul> 
        <ul className="matchup">
          <li className="team team-top"><Select/><span className="score"></span></li>
          <li className="team team-bottom"><Select/><span className="score"></span></li>
        </ul>                   
      </div> 
  
      <div className="round round-two">
        <div className="round-details">OITAVAS<br/><span className="date">3-6 DEZEMBRO</span></div>           
        <ul className="matchup">
          <li className="team team-top"><Select/><span className="score"></span></li>
          <li className="team team-bottom"><Select/><span className="score"></span></li>
        </ul> 
        <ul className="matchup">
          <li className="team team-top"><Select/><span className="score"></span></li>
          <li className="team team-bottom"><Select/><span className="score"></span></li>
        </ul> 
        <ul className="matchup">
          <li className="team team-top"><Select/><span className="score"></span></li>
          <li className="team team-bottom"><Select/><span className="score"></span></li>
        </ul>
        <ul className="matchup">
          <li className="team team-top"><Select/><span className="score"></span></li>
          <li className="team team-bottom"><Select/><span className="score"></span></li>
        </ul>                   
      </div>  
    </div>
    </div>
    </section>
  )
}