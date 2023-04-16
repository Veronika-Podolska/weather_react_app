import "./App.css";

export default function App() {
  return (
    <div className="App">
      <form>
        <input type="search" placeholder="Enter the city" />
        <input type="sumbit" value="search" />
      </form>
      <div className="row">
        <div className="col">
          <h1>New York</h1>
          <h2> Tuesday 15:07</h2>
          <h3>Clear Sky</h3>
          <div>
            <span className="temperature-degree">27</span>{" "}
            <span className="celsius-link">°C</span>
            <img
              src="https://www.getillustrations.com/packs/zima-3d-illustrations-for-websites-and-apps/elements/_1x/weather%20_%20cloudy,%20partly,%20forecast,%20sunny,%20season,%20sun,%20day_md.png"
              alt="sun-icon"
            />
          </div>
        </div>
        <div className="col">
          <div className="row weather-info">
            <div className="col ">
              <ul>
                <li>Wind</li>
                <li>Sunset</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Percipitation</li>
                <li>Sunrise</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
