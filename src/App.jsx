import "./App.css";
import { withNamespaces } from "react-i18next";
import { Oksana } from "./components/oksana.jsx";
import { Background } from "./components/background.jsx";
import { Projects } from "./components/projects.jsx";
import { Header } from "./components/header.jsx";
import { Footer } from "./components/footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import i18n from "./i18n";
import React, { useEffect, useState } from "react";
import { Blog } from "./components/blog.jsx";
import { Post } from "./components/post.jsx";

function App() {
  const [langue, setLangue] = useState("fr");
  const changeLangue = () => {
    // console.log(langue);
    i18n.changeLanguage(langue);
    setLangue(langue === "fr" ? "en" : "fr");
  };
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100" >
        <Header changeLangue={changeLangue} />
        <Routes>
          <Route index element={<Oksana />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/blog/post/:id" element={<Post />} />
          <Route path="/background" element={<Background />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
);
}

export default withNamespaces() (App);
