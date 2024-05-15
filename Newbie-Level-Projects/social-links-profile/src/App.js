import "./App.css";
import style from "./style.module.css";
import myPhoto from "./social-links-profile-main/assets/images/IMG_3460.jpg";

function App() {
  return (
    <div className={style.general_template}>
      <div className={style.content_template}>
        <div className={style.photo_template}>
          <img src={myPhoto}></img>
        </div>
        <div className={style.name_template}>
          <h2>Berkay Aytekin</h2>
        </div>
        <div className={style.address_template}>
          <h3>Ankara, Turkey</h3>
        </div>
        <div className={style.title_template}>
          <h3>"Front-end Developer"</h3>
        </div>
        <div className={style.link_template}>
          <a>
            <h3>berkayaytekin07@gmail.com</h3>
          </a>

          <a href="https://www.linkedin.com/in/berkayaytekin07" target="_blank">
            <h3>LinkedIn</h3>
          </a>

          <a href="https://github.com/BerkayAytekin" target="_blank">
            <h3>GitHub</h3>
          </a>

          <a>
            <h3>+90 (506) 830 53 35</h3>
          </a>

          <a
            href="https://github.com/BerkayAytekin/E-Commerce_NBA-Jersey"
            target="_blank"
          >
            <h3>E-Commerce Project</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
