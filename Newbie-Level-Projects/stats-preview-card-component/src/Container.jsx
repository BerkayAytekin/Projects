import React from "react";
import "./container.css";

function Container() {
  return (
    <div className="content_template">
      <div className="left_side">
        <h1>
          Get <span>insights</span> that help your business grow.
        </h1>
        <p>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="stats">
          <h3>
            10k+<span>companies</span>
          </h3>

          <h3>
            314<span>templates</span>
          </h3>

          <h3>
            12m+<span>queries</span>
          </h3>
        </div>
      </div>
      <div className="right_side">
        <img src="./image-header-mobile.jpg" alt="" />
        <div className="photo_container"></div>
      </div>
    </div>
  );
}

export default Container;
