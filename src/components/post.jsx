import React, { useEffect, useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useParams } from "react-router-dom";

export function Post() {
  const [postData, setpostData] = useState([]);
  const [commentData, setcommentData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then(
        (result) => {
          console.log(result);
          setpostData(result);
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
          console.log(result);
          setcommentData(result.comments);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [id]);
  return (
    <div className="flex-grow-1 ">
      <div
        className="bg-test card-bg rounded d-flex flex-column m-5 p-3 justify-self-center"
        key={postData?.id}
      >
        {postData && (
          <>
            <h1 className="fw-semibold">
              <FontAwesomeIcon
                className="App-link-light"
                icon="fa-solid fa-trash"
              />
              <FontAwesomeIcon
                className="App-link-light"
                icon="fa-solid fa-pen-to-square"
              />
              {postData?.title}
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
            <p className="fw-normal">{postData?.body}</p>
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
                <hr  />
              </div>
            </>
          );
        })}
    </div>
  );
}
