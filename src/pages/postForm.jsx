import React, { useEffect, useState } from "react";
 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import i18n from "../hooks/i18n";

export function Postform() {
  const [postData, setpostData] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const addPost = async () => {
    await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: body,
        tags: tags,
        userId: 5,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setpostData(result);
        setValidated(true);
      });
  };
  useEffect(() => {
    if (validated)
      navigate(
        `../blog/post/${postData.id}`,
        {
          state: { id: postData?.id, title: title, body: body, tags: tags },
        },
        postData
      );
  });
  return (
    <div className="flex-grow-1 ">
      <div className="bg-test card-bg rounded d-flex flex-column m-5 p-3 justify-content-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-row w-50 justify-content-between m-2">
            <label>{i18n.t("ok-title")}</label>
            <input
              className="w-50"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="d-flex flex-row  w-50 justify-content-between m-2">
            <label>{i18n.t("ok-tag")}</label>
            <div className="d-flex justify-content-between w-50">
              <input className="flex-grow-1" id="tag"></input>
              <button
                onClick={(e) => {setTags([...tags, document.getElementById("tag").value]); document.getElementById("tag").value = ''}}
              >
                {i18n.t("ok-add")}
              </button>
            </div>
          </div>
          <div className="d-flex flex-row  w-25 align-self-end justify-content-between m-2">
            <span>{tags+" "}</span>
          </div>

          <div className="d-flex flex-row  w-50 justify-content-between m-2 ">
            <label>{i18n.t("ok-body")}</label>
            <textarea
              className="fw-normal w-50 h100"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
        </div>
        <FontAwesomeIcon
          className="App-link-light"
          icon="fa-solid fa-check"
          onClick={() => addPost()}
        />
      </div>
    </div>
  );
}
