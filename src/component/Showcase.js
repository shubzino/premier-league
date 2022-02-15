import React from 'react';
import { Button } from '@material-ui/core';
import './css/showcase.css';
function ShowCase() {
  return (
    <div className="showcase">
      <div className="container">
        <div className="banner">
          <img src="https://resources.premierleague.com/photos/2022/02/11/b131e212-5275-4ed4-8a9a-937a746d6cd3/ronaldo.png?width=930&amp;height=620" alt="Cristiano Ronaldo, Man Utd" />
        </div>
        <h1>Premier League</h1>
        <p>"Manchester United is delighted to confirm that the club has reached agreement with Juventus for the transfer of Cristiano Ronaldo, subject to agreement of personal terms, visa and medical," a United statement read. "Everyone at the club looks forward to welcoming Cristiano back to Manchester."</p>
        
        
      </div>
    </div>
  );
}

export default ShowCase;
