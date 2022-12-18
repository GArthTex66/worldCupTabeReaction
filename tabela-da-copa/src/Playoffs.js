import React from "react";
import Tabela from "./Select"
import './styles.css'

export default function Oitavas() {
  return(
    <section id="bracket">
    <div className="container">
    <div className="split split-one">  
      <div className="round round-two">
        <div className="round-details">OITAVAS<br/><span className="date">March 18</span></div>     
        <ul className="matchup">
          <li className="team team-top"><Tabela/><span className="score">{/*<input type="number"/>*/}</span></li>
          <li className="team team-bottom"><Tabela/><span className="score">{/*<input type="number"/>*/}</span></li>
        </ul> 
        <ul className="matchup">
          <li className="team team-top"><Tabela/><span className="score">{/*<input type="number"/>*/}</span></li>
          <li className="team team-bottom"><Tabela/><span className="score">{/*<input type="number"/>*/}</span></li>
        </ul> 
        <ul className="matchup">
          <li className="team team-top"><Tabela/><span className="score">{/*<input type="number"/>*/}</span></li>
          <li className="team team-bottom"><Tabela/><span className="score">{/*<input type="number"/>*/}</span></li>
        </ul>
        <ul className="matchup">
          <li className="team team-top"><Tabela/><span className="score">{/*<input type="number"/>*/}</span></li>
          <li className="team team-bottom"><Tabela/><span className="score">{/*<input type="number"/>*/}</span></li>
        </ul>                   
      </div>
      
      <div className="round round-three">
        <div className="round-details">QUARTAS<br/><span className="date">March 22</span></div>     
        <ul className="matchup">
          <li className="team team-top"><Tabela/><span className="score">{/*<input type="number"/>*/}</span></li>
          <li className="team team-bottom"><Tabela/><span className="score">{/*<input type="number"/>*/}</span></li>
        </ul> 
        <ul className="matchup">
          <li className="team team-top"><Tabela/><span className="score">{/*<input type="number"/>*/}</span></li>
          <li className="team team-bottom"><Tabela/><span className="score">{/*<input type="number"/>*/}</span></li>
        </ul>                   
      </div>    
    </div> 
  
  <div className="champion">
      <div className="semis-l">
        <div className="round-details">SEMIFINAIS<br/><span className="date">March 26-28</span></div>   
        <ul className ="matchup championship">
          <li className="team team-top"><Tabela/><span className="vote-count">1</span></li>
          <li className="team team-bottom"><Tabela/><span className="vote-count">1</span></li>
        </ul>
      </div>
      <div className="final">
        <i className="fa fa-trophy"></i>
        <div className="round-details">FINAL<br/><span className="date">March 30 - Apr. 1</span></div>    
        <ul className ="matchup championship">
          <li className="team team-top"><Tabela/><span className="vote-count">1</span></li>
          <li className="team team-bottom"><Tabela/><span className="vote-count">1</span></li>
        </ul>
      </div>
      <div className="semis-r">   
        <div className="round-details">SEMIFINAIS<br/><span className="date">March 26-28</span></div>   
        <ul className ="matchup championship">
          <li className="team team-top"><Tabela/><span className="vote-count">1</span></li>
          <li className="team team-bottom"><Tabela/><span className="vote-count">1</span></li>
        </ul>
      </div>  
    </div>
  
  
    <div className="split split-two">
  
  
      <div className="round round-three">
        <div className="round-details">QUARTAS<br/><span className="date">March 22</span></div>           
        <ul className="matchup">
          <li className="team team-top"><Tabela/><span className="score">1</span></li>
          <li className="team team-bottom"><Tabela/><span className="score">1</span></li>
        </ul> 
        <ul className="matchup">
          <li className="team team-top"><Tabela/><span className="score">1</span></li>
          <li className="team team-bottom"><Tabela/><span className="score">1</span></li>
        </ul>                   
      </div> 
  
      <div className="round round-two">
        <div className="round-details">OITAVAS<br/><span className="date">March 18</span></div>           
        <ul className="matchup">
          <li className="team team-top"><Tabela/><span className="score">1</span></li>
          <li className="team team-bottom"><Tabela/><span className="score">1</span></li>
        </ul> 
        <ul className="matchup">
          <li className="team team-top"><Tabela/><span className="score">1</span></li>
          <li className="team team-bottom"><Tabela/><span className="score">1</span></li>
        </ul> 
        <ul className="matchup">
          <li className="team team-top"><Tabela/><span className="score">1</span></li>
          <li className="team team-bottom"><Tabela/><span className="score">1</span></li>
        </ul>
        <ul className="matchup">
          <li className="team team-top"><Tabela/><span className="score">1</span></li>
          <li className="team team-bottom"><Tabela/><span className="score">1</span></li>
        </ul>                   
      </div>  
    </div>
    </div>
    </section>
  )
}