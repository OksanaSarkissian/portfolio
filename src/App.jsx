import "./App.css";
import { withNamespaces } from "react-i18next";
import { Oksana } from "./pages/oksana.jsx";
import { Background } from "./pages/background.jsx";
import { Projects } from "./pages/projects.jsx";
import { Header } from "./components/layouts/header.jsx";
import { Footer } from "./components/layouts/footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import i18n from "./hooks/i18n.js";
import React, { useEffect, useState } from "react";
import { Blog } from "./pages/blog.jsx";
import { Post } from "./pages/post.jsx";
import { Postform } from "./pages/postForm.jsx";
import { LoginForm } from "./pages/loginForm.jsx";

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/blog/post/:id" element={<Post />} />
          <Route path="/blog/post/add" element={<Postform />} />
          <Route path="/background" element={<Background />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
);
}

export default withNamespaces() (App);
