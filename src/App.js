import "./App.css";
import { ButtonTheme } from "./components/theme-button";
import { ButtonLanguage } from "./components/langue-button";

function App() {
  const changePage = (url) => {
    window.location.href = url;
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <ButtonTheme/>
        <ButtonLanguage/>
        </div>
        <div>
        <button onClick={() =>changePage("/oksana")} style={{ marginBottom: "20px" }}>
          About me
        </button>
        <button onClick={() =>changePage("/background")} style={{ marginBottom: "20px" }}>
          Background
        </button>
        <button onClick={() =>changePage("/projects")} style={{ marginBottom: "20px" }}>
          My projects
        </button>
        </div>
      </header>
    </div>
  );
}

export default App;
