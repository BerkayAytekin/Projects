import React from "react";
import "./threeComponentStyle.css";

function ThreeComponent() {
  return (
    <div className="container">
      <div className="sedans">
        <img src="icon-sedans.svg" alt="" />
        <h2>SEDANS</h2>
        <p>
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button>Learn More</button>
      </div>
      <div className="suvs">
        <img src="icon-suvs.svg" alt="" />
        <h2>SUVS</h2>
        <p>
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <button>Learn More</button>
      </div>
      <div className="luxury">
        <img src="icon-luxury.svg" alt="" />
        <h2>LUXURY</h2>
        <p>
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default ThreeComponent;
