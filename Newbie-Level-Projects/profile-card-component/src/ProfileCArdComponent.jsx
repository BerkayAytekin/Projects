import React from "react";
import "./profileCardComponent.css";

function ProfileCArdComponent() {
  return (
    <div className="container">
      <div className="top">
        <img className="pattern" src="./bg-pattern-card.svg" alt="" />
      </div>
      <img className="victor" src="./image-victor.jpg" alt="" />
      <div className="mid">
        <h3>
          Victor Crest <span>26</span>
        </h3>
        <p>London</p>
      </div>
      <hr />
      <div className="bottom">
        <p>
          80K<span>Followers</span>
        </p>
        <p>
          803K<span>Likes</span>
        </p>
        <p>
          1.4K<span>Photos</span>
        </p>
      </div>
    </div>
  );
}

export default ProfileCArdComponent;
