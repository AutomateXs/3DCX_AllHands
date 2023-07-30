import React from "react";
import TeamCard from "./TeamCard";
import teamData from '../data/teamData'

const Team = () => {
  return (
    <div className="team-container">
      <div className="section-title-and-intro">
        <div className="section-title">
            <h3>Team</h3>
            <div className="title-underline"></div>
        </div>
        <p className="section-intro">
          We believe that technology should work in the background, allowing you
          to focus on the things that matter most.
        </p>
      </div>
      <div className="card-container">
        {
            teamData.map(card =>  <TeamCard key={card.trigram} info={card}/>)
        }
       
       
      </div>
    </div>
  );
};

export default Team;
