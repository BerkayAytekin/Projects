import "./App.css";
import photo from "./nft-preview-card-component-main/images/image-equilibrium.jpg";
import ethereum from "./nft-preview-card-component-main/images/icon-ethereum.svg";
import clock from "./nft-preview-card-component-main/images/icon-clock.svg";
import user from "./nft-preview-card-component-main/images/image-avatar.png";
import eye from "./nft-preview-card-component-main/images/icon-view.svg";
function App() {
  return (
    <div className="general_template">
      <div className="content_template">
        <div className="photo_template">
          <img className="ethereum_photo" src={photo}></img>
          <img className="eye_photo" src={eye}></img>
        </div>
        <div className="definition_template">
          <h1>Equilibrium #3429</h1>
          <p>Our Equilibrium collection promotes balance and calm.</p>
        </div>
        <div className="info_template">
          <div className="price_template">
            <img src={ethereum}></img>
            <p>0.041 ETH</p>
          </div>
          <div className="time_template">
            <img src={clock}></img>
            <p>3 days left</p>
          </div>
        </div>
        <hr></hr>
        <div className="user_template">
          <img src={user}></img>
          <p>
            Creation of <span>Jules Wyvern</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
