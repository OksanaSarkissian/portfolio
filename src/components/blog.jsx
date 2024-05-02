import React, { useEffect, useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";

export function Blog(props) {
  const [blogData, setBlogData] = useState([]);
  let { state } = useLocation();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts?limit=10`)
      .then((response) => response.json())
      .then(
        (result) => {
          // console.log(result);
          setBlogData(result.posts);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((e) => {
        //gérer l'erreur
      });
  }, []);
  // console.log(state);
  return (
    <>
      <div className="d-flex flex-wrap my-5 flex-grow-1 justify-content-center w-100">
        <div className="rounded col-lg-8 col-md-8 sol-sm-8 pr-5">
          <Link className="App-link slideLeft" to={"post/add"}>
            <button>Add</button>
          </Link>
          {blogData &&
            blogData.map((blog, index) => {
              return (
                blog.id !== state?.idDeleted && (
                  <>
                    <Link className="App-link slideLeft" to={"post/" + blog.id}>
                      <div
                        className="App-link slideLeft bg-test card-bg rounded d-flex flex-column mb-5 p-3"
                        key={index}
                      >
                        <h1 className="fw-semibold">
                          {blog.id === state?.id && state.title
                            ? state.title
                            : blog.title}
                        </h1>
                        <p className="fw-normal">
                          {blog.id === state?.id && state.body
                            ? state.body
                            : blog.body}
                        </p>
                        <span className="align-self-end fw-lighter fst-italic">
                          tags:{" "}
                          {blog.tags.map((tag, index) => {
                            return (
                              <span className="fw-lighter" key={index}>
                                #{tag}{" "}
                              </span>
                            );
                          })}
                        </span>
                      </div>
                    </Link>
                  </>
                )
              );
            })}
        </div>
      </div>
    </>
  );
}
