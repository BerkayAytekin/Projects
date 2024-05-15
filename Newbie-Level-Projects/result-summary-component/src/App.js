import "./App.css";
import style from "./style.module.css";
import data from "./results-summary-component-main/data.json";
import reactionIcon from "./results-summary-component-main/assets/images/icon-reaction.svg";
import memoryIcon from "./results-summary-component-main/assets/images/icon-memory.svg";
import verbalIcon from "./results-summary-component-main/assets/images/icon-verbal.svg";
import visualIcon from "./results-summary-component-main/assets/images/icon-visual.svg";
const icons = [reactionIcon, memoryIcon, verbalIcon, visualIcon];

function App() {
  return (
    <div className={style.general_template}>
      <div className={style.content_template}>
        <div className={style.result_template}>
          <p className={style.result_header}>Your Result</p>
          <div className={style.circle_template}>
            <p className={style.result_point}>76</p>
            <p className={style.result_top_point}>of 100</p>
          </div>
          <p className={style.result_title}>Great</p>
          <p className={style.result_description}>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className={style.summary_template}>
          <p className={style.summary_header}>Summary</p>
          <div className={style.summary_table}>
            {data.map((item, index) => (
              <div
                key={index}
                className={style[`table_item_${index}`]}
                id={style.deneme}
              >
                <img src={icons[index]} alt="icon"></img>
                <p>{item.category}</p>
                <p className={style.score_point}>
                  {item.score}
                  <span> / 100</span>{" "}
                </p>
              </div>
            ))}
          </div>
          <button className={style.button_template}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
