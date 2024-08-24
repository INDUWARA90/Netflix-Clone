import React from "react";
import "./player.css";
import  backArrow from"../../../assets/back_arrow_icon.png";


function Player() {
  
  return (
    <>
      <div className="body-content">
        <img src={backArrow} alt="" />

        {/* <iframe width="300" height="300" src="https://www.youtube.com/embed/QADakQHS6gU?si=KETXzjNzqe7S00up"
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        >
        </iframe> */}

      </div>
      <div className="footer">
        <p>Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </>
  );
}

export default Player;
