import "./App.css";
import style from "./style.module.css";
import photo from "./blog-preview-card-main/assets/images/illustration-article.svg";
import authorPhoto from "./blog-preview-card-main/assets/images/image-avatar.webp";

function App() {
  return (
    <div className={style.general_template}>
      <div className={style.content_template}>
        <div className={style.image_content}>
          <img src={photo}></img>
        </div>
        <div className={style.information_template}>
          <p className={style.learning}>
            <b>Learning</b>
          </p>
          <p className={style.publish}>Published 21 Dec 2023</p>
          <p className={style.header}>HTML & CSS foundations</p>
          <p className={style.description}>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className={style.author_template}>
          <img src={authorPhoto}></img>
          <p>
            <b>Greg Hooper</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
