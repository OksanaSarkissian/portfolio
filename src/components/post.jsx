import React, { useEffect, useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link, useParams } from "react-router-dom";

export function Post() {
  const [postData, setpostData] = useState([]);
  const [commentData, setcommentData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then(
        (result) => {
          // console.log(result);
          setpostData(result);
          setTitle(result.title)
          setBody(result.body)
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((e) => {
        //gérer l'erreur
      });
    fetch(`https://dummyjson.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result);
          setcommentData(result.comments);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [id]);
  const deletePost = (idPost) => {
    fetch(`https://dummyjson.com/posts/${idPost}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result);
          setpostData(result.comments);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const startEditing = () => {
    setEditing(true);
    document.getElementById("startEditing").classList.add("d-none");
    document.getElementById("saveEdit").classList.remove("d-none");
  };
  const editPost = (idPost, post) => {
    fetch(`https://dummyjson.com/posts/${idPost}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: body,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };
  return (
    <div className="flex-grow-1 ">
      <div
        className="bg-test card-bg rounded d-flex flex-column m-5 p-3 justify-self-center"
        key={postData?.id}
      >
        {postData && (
          <>
            <h1 className="fw-semibold">
              {!editing && (
                <span className="w-100" id="toInput">
                  {postData?.title}
                </span>
              )}
              {editing && (
                <input
                  className="w-100"
                  id="toInput"
                  value={title}
                  onChange={(e) => setTitle(e.target.value) }
                ></input>
              )}
              <Link to={"../blog"} state={{ idDeleted: postData?.id }}>
                <FontAwesomeIcon
                  className="App-link-light"
                  icon="fa-solid fa-trash"
                  onClick={() => deletePost(postData?.id)}
                />
              </Link>
              <FontAwesomeIcon
                id="startEditing"
                className="App-link-light"
                icon="fa-solid fa-pen-to-square"
                onClick={() => startEditing()}
              />
              <Link
                className="d-none"
                id="saveEdit"
                to={"../blog"}
                state={{ id: postData?.id, title: title, body: body }}
              >
                <FontAwesomeIcon
                  className="App-link-light"
                  icon="fa-solid fa-check"
                  onClick={() => editPost(postData?.id)}
                />
              </Link>
            </h1>
            <span className="mb-5 fw-lighter fst-italic">
              {"tags: "}
              {postData?.tags?.map((tag, index) => {
                return (
                  <span className="fw-lighter" key={index}>
                    #{tag}{" "}
                  </span>
                );
              })}
            </span>
            {!editing && (<p className="fw-normal">{postData?.body}</p>)}
            {editing && (<textarea className="fw-normal w-100 h100" value={body} onChange={(e) => setBody(e.target.value) }></textarea>)}
          </>
        )}
      </div>
      {commentData &&
        commentData.map((comment, index) => {
          return (
            <>
              <div className="m-1 p-3" key={comment?.id}>
                <p className="fw-semibold justify-self-left">
                  {comment?.user.username} :
                </p>

                <p className="fw-normal">{comment?.body}</p>
                <hr />
              </div>
            </>
          );
        })}
    </div>
  );
}
