import "./App.css";
import photo from "./order-summary-component-main/images/illustration-hero.svg";
import icon from "./order-summary-component-main/images/icon-music.svg";

function App() {
  return (
    <div className="general_template">
      <div className="content_template">
        <div className="photo_template">
          <img src={photo}></img>
        </div>
        <div className="definition_template">
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>
        <div className="information_template">
          <div className="icon_price">
            <img src={icon}></img>
            <div className="price_template">
              <h3>Annual Plan</h3>
              <p>$59.99/year</p>
            </div>
          </div>
          <p className="change">Change</p>
        </div>
        <div className="payment_template">
          <button className="accept_button">Proceed to Payment</button>
          <button className="cancel_button">Cancel Order</button>
        </div>
      </div>
    </div>
  );
}

export default App;
