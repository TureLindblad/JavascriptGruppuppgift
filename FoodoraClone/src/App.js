import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <input
        className="search"
        type="search"
        placeholder="Sök något..."
      ></input>
      <button className="btn" type="button">
        Knapp
      </button>

      <button className="btn-arrow">
        <i class="arrow right"></i>
      </button>
      <button className="btn-arrow">
        <i class="arrow left"></i>
      </button>
      <button className="btn-arrow">
        <i class="arrow up"></i>
      </button>
      <button className="btn-arrow">
        <i class="arrow down"></i>
      </button>
    </div>
  );
}

export default App;
