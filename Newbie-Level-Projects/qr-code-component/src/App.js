import "./App.css";
import style from "./style.module.css";
import photo from "./product-preview-card-component-main/images/image-product-desktop.jpg";
import icon from "./product-preview-card-component-main/images/icon-cart.svg";

function App() {
  return (
    <div className={style.general_template}>
      <div className={style.content_template}>
        <div className={style.photo_template}>
          <img src={photo}></img>
        </div>
        <div className={style.product_template}>
          <p className={style.product_header}>PERFUME</p>
          <p className={style.product_title}>Gabrielle Essence Eau De Parfum</p>
          <p className={style.product_description}>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className={style.price_template}>
            <p className={style.saled_price}>$149.99</p>
            <p className={style.real_price}>$169.99</p>
          </div>
          <button className={style.button_template}>
            <img src={icon}></img>
            <p>Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
