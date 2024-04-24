import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/header.jsx";
import { Footer } from "./components/footer.jsx";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Oksana } from "./components/oksana.jsx";
import { Background } from "./components/background.jsx";
import { Projects } from "./components/projects.jsx";
library.add(fas)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<App />} />
        <Route path="/oksana" element={ <Oksana />} />
        <Route path="/background" element={ <Background />} />
        <Route path="/projects" element={ <Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
