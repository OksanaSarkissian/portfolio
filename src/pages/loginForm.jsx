import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import i18n from "../hooks/i18n";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30, // optional, defaults to 60
        }),
      });

      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      const data = await response.json();
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("userId", data.id);

      navigate("/blog");
    } catch (error) {
      setError(i18n.t("ok-error-connection"));
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center flex-grow-1">
      <h1 className="mb-5"> {i18n.t("ok-login")}</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column align-items-center justify-content-center w-100">
          <div className="d-flex flex-colum justify-content-center m-3 w-50">
            <label className="flex-grow-1" htmlFor="username">
              {i18n.t("ok-username")}
            </label>
            <input
              className="mx-2 w-50"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="d-flex flex-colum justify-content-center m-3 w-50">
            <label className="flex-grow-1" htmlFor="password">
              {i18n.t("ok-password")}
            </label>
            <input
              className="mx-2 w-50"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-center w-50">
            <div className="flex-grow-1"></div>
            <button className="" type="submit">
              {i18n.t("ok-login")}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
