import "./App.css";
import { ButtonTheme } from "./components/theme-button";
import { ButtonLanguage } from "./components/langue-button";
import { withNamespaces } from "react-i18next";

function App({ t }) {
  const changePage = (url) => {
    window.location.href = url;
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ButtonTheme />
          <ButtonLanguage />
        </div>
        <div>
          <button
            onClick={() => changePage("/oksana")}
            style={{ marginBottom: "20px" }}
          >
            { t('ok-about-me') }
          </button>
          <button
            onClick={() => changePage("/background")}
            style={{ marginBottom: "20px" }}
          >
            { t('ok-background') }
          </button>
          <button
            onClick={() => changePage("/projects")}
            style={{ marginBottom: "20px" }}
          >
            { t('ok-my-projects') }
          </button>
        </div>
      </header>
    </div>
  );
}

export default withNamespaces() (App);
