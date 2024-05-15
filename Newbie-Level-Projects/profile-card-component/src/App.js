import "./App.css";
import ProfileCArdComponent from "./ProfileCArdComponent";

function App() {
  return (
    <div className="general_template">
      <ProfileCArdComponent></ProfileCArdComponent>
      <img className="top_circle" src="./bg-pattern-top.svg"></img>
      <img className="bottom_circle" src="./bg-pattern-bottom.svg"></img>
    </div>
  );
}

export default App;
