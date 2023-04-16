import "./App.css";

export default function App() {
  return (
    <div className="App">
      <form>
        <input type="search" />
        <input type="sumbit" value="search" />
      </form>
      <div className="row">
        <div className="col">
          <h1>New York</h1>
          <h2> Tuesday 15:07</h2>
          <h3>Clear Sky</h3>
        </div>

        <div className="row">
          <div className="col">
            <span className="temperature-degree">27</span>{" "}
            <span className="celsius-link">°C</span>
            <img
              src="https://www.getillustrations.com/packs/zima-3d-illustrations-for-websites-and-apps/elements/_1x/weather%20_%20cloudy,%20partly,%20forecast,%20sunny,%20season,%20sun,%20day_md.png"
              alt="sun-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
