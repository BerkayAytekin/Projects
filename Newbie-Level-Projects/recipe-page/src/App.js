import "./App.css";
import style from "./style.module.css";
import omletteImage from "./recipe-page-assets/assets/images/image-omelette.jpeg";

function App() {
  return (
    <div className={style.general_template}>
      <div className={style.page_template}>
        <div className={style.content_templaate}>
          <div className={style.image_template}>
            <img
              src={omletteImage}
              alt="omlette image"
              className={style.image_template}
            ></img>
          </div>
          <div className={style.header_template}>
            <h1 className={style.praf}>Simple Omelette Recipe</h1>
            <p className={style.praf_description}>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
          <div className={style.preparation_template}>
            <h2 className={style.preparation_header}>Preparation time</h2>
            <ul>
              <li>
                <b>Total</b>: Approximately 10 minutes
              </li>
              <li>
                <b>Preparation</b>: 5 minutes
              </li>
              <li>
                <b>Cooking</b>: 5 minutes
              </li>
            </ul>
          </div>
          <div className={style.ingredients_template}>
            <h2>Ingredients</h2>
            <ul>
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs{" "}
              </li>
            </ul>
          </div>
          <hr className={style.divider}></hr>
          <div className={style.instuctions_template}>
            <h2>Instructions</h2>
            <ol>
              <li>
                <b>Beat the eggs</b>: In a bowl, beat the eggs with a pinch of
                salt and pepper until they are well mixed. You can add a
                tablespoon of water or milk for a fluffier texture.
              </li>
              <li>
                <b>Heat the pan</b>: Place a non-stick frying pan over medium
                heat and add butter or oil.
              </li>
              <li>
                <b>Cook the omelette</b>: Once the butter is melted and
                bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </li>
              <li>
                <b>Add fillings (optional)</b>: When the eggs begin to set at
                the edges but are still slightly runny in the middle, sprinkle
                your chosen fillings over one half of the omelette.
              </li>
              <li>
                <b>Fold and serve</b>: As the omelette continues to cook,
                carefully lift one edge and fold it over the fillings. Let it
                cook for another minute, then slide it onto a plate.
              </li>
              <li>
                <b>Enjoy</b>: Serve hot, with additional salt and pepper if
                needed.{" "}
              </li>
            </ol>
          </div>
          <hr className={style.divider}></hr>
          <div className={style.nutrition_template}>
            <h2>Nutrition</h2>
            <p>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table>
              <tbody>
                <tr>
                  <td className={style.table_header}>Calories</td>
                  <td className={style.table_value}>277kcal</td>
                </tr>
                <hr className={style.divider}></hr>
                <tr>
                  <td className={style.table_header}>Carbs</td>
                  <td className={style.table_value}>0g</td>
                </tr>
                <hr className={style.divider}></hr>
                <tr>
                  <td className={style.table_header}>Protein</td>
                  <td className={style.table_value}>20g</td>
                </tr>
                <hr className={style.divider}></hr>
                <tr>
                  <td className={style.table_header}>Fat</td>
                  <td className={style.table_value}>22g</td>
                </tr>
                <hr className={style.divider}></hr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
